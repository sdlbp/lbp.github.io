import {EShaderType, GLAttribMap, GLUniformMap, Helper} from "../webgl/Helper";
import {mat4, vec3} from "./math/TSM";
import {MathHelper} from "./math/MathHelper";
import TypedArrayList from "./container/TypedArrayList";

// region 定时器 Timer
export type TimerCallback = (id: number, data: any) => void;
class Timer {
    id: number = -1;
    // 标记当前定时器是否有效
    enabled: boolean = false
    callback: TimerCallback
    callbackData: any = undefined
    countdown: number = 0
    timeout: number = 0
    onlyOnce: boolean = false
    constructor(callback: TimerCallback) {
        this.callback = callback
    }
}
// endregion


// region 事件系统
// 事件枚举 TODO 使用位移枚举
export enum EInputEventType {
    MOUSEEVENT,
    MOUSEDOWN,
    MOUSEUP,
    MOUSEMOVE,
    MOUSEDRAG,
    KEYBOARDEVENT,
    KEYUP,
    KEYDOWN,
    KEYPRESS
}

// 事件基类
export class CanvasInputEvent {
    altKey: boolean;
    ctrlKey: boolean
    shiftKey: boolean
    type: EInputEventType
    constructor(type: EInputEventType = EInputEventType.MOUSEEVENT, altKey: boolean = false, ctrlKey:boolean = false, shiftKey: boolean = false) {
        this.altKey = altKey;
        this.ctrlKey = ctrlKey
        this.shiftKey = shiftKey
        this.type = type
    }
}
type vec2 = {};
// canvas鼠标事件
export class CanvasMouseEvent extends CanvasInputEvent {
    // TODO 表示按下鼠标哪一个键，使用枚举
    button: number;
    canvasPosition: vec2;
    constructor(type: EInputEventType, canvasPos: vec2, button: number, altKey: boolean=false, ctrlKey: boolean=false,shiftKey: boolean = false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.canvasPosition = canvasPos;
        this.button = button
    }
}

// 键盘事件
export class CanvasKeyBoardEvent extends CanvasInputEvent {
    key: string
    keyCode: number
    repeat: boolean
    constructor(type: EInputEventType, key: string, keyCode: number, repeat: boolean, altKey: boolean=false, ctrlKey:boolean = false, shiftKey:boolean=false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.key= key
        this.keyCode = keyCode
        this.repeat = repeat
    }
}
// endregion


/**
 * 主要做三件事：更新、重绘、事件分拨
 */
export class Application implements EventListenerObject{
    // 定时器容器
    public timers: Timer[] = []
    // 定时器id生成
    private _timeId: number = -1;
    private _fps: number = 0;
    public isFlipYCoord: boolean = false
    public canvas: HTMLCanvasElement;
    public isSupportMouseMove: boolean;
    protected _isMouseDown: boolean;
    protected _isRightMouseDown: boolean = false;
    protected _start: boolean = false;
    protected _requestId: number = -1;
    protected _lastTime !: number;
    protected _startTime !: number;
    public frameCallback: ((app: Application) => void) | null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this._isMouseDown = false;
        this.isSupportMouseMove = false;
        this.frameCallback = null

        // canvas元素能够监听鼠标事件
        this.canvas.addEventListener( "mousedown", this, false );
        this.canvas.addEventListener( "mouseup", this, false );
        this.canvas.addEventListener( "mousemove", this, false );

        // 很重要一点，键盘事件不能在canvas中触发，但是能在全局的window对象中触发
        // 因此我们能在window对象中监听键盘事件
        window.addEventListener( "keydown", this, false );
        window.addEventListener( "keyup", this, false );
        window.addEventListener( "keypress", this, false );

        document.oncontextmenu = function () {
            return false
        };
    }

    removeTimer(id: number) : boolean {
        let found: boolean = false
        for (let i = 0; i < this.timers.length; i++) {
            if (this.timers[i].id === id) {
                let timer: Timer = this.timers[i]
                timer.enabled = false
                found = true
                break
            }
        }
        return found
    }

    addTimer(callback: TimerCallback, timeout: number = 1.0, onlyOnce: boolean = false, data: any = undefined): number {
        let timer: Timer
        let found: boolean = false
        for (let i = 0; i < this.timers.length; i++) {
            let timer: Timer = this.timers[i]
            if (timer.enabled === false) {
                timer.callback = callback
                timer.callbackData = data
                timer.timeout= timeout
                timer.countdown = timeout
                timer.enabled = true
                timer.onlyOnce = onlyOnce
                return timer.id
            }
        }

        // 不存在，就新创建一个Timer对象
        timer = new Timer( callback );
        timer.callbackData = data;
        timer.timeout = timeout;
        timer.countdown = timeout;
        timer.enabled = true;
        timer.id = ++this._timeId; // 由于初始化时id为-1,所以前++
        timer.onlyOnce = onlyOnce; //设置是否是一次回调还是重复回调
        // 添加到timers列表中去
        this.timers.push( timer );
        // 返回新添加的timer的id号
        return timer.id;
    }

    // _handleTimers私有方法被Application的update函数调用
    // update函数第二个参数是以秒表示的前后帧时间差
    // 正符合_handleTimers参数要求
    // 我们的计时器依赖于requestAnimationFrame回调
    // 如果当前Application没有调用start的话
    // 则计时器不会生效
    private _handleTimer (intervalSec: number): void {
        for (let i = 0; i < this.timers.length; i++) {
            let timer: Timer = this.timers[i];
            if (timer.enabled === false) continue;

            timer.countdown -= intervalSec

            if (timer.countdown < 0.0) {
                timer.callback(timer.id, timer.callbackData)
            }
            // 如果该计时器需要重复触发
            if ( timer.onlyOnce === false )
            {
                // 我们重新将countdown设置为timeout
                // 由此可见，timeout不会更改，它规定了触发的时间间隔
                // 每次更新的是countdown倒计时器
                timer.countdown = timer.timeout; //很精妙的一个技巧
            } else
            {  // 如果该计时器只需要触发一次，那么我们就删除掉该计时器
                this.removeTimer( timer.id );
            }
        }
    }

    start(): void {
        if (this._start === false) {
            this._start = true
            this._lastTime = -1;
            this._startTime = -1;
            this._requestId = requestAnimationFrame((msec: number):void => {
                this.step(msec)
            })
        }
    }

    isRunning(): boolean {
        return this._start
    }

    stop(): void {
        if (this._start) {
            cancelAnimationFrame(this._requestId)
            this._lastTime = -1;
            this._startTime = -1;
            this._start = false
        }
    }

    // 子类重写用于更新
    update (elapseMsec: number, intervalSec: number): void {}

    // 子类重写用于渲染
    render(): void {}

    // handleEvent是接口EventListenerObject定义的协议分发，必须要实现
    public handleEvent ( evt: Event ): void
    {
        switch ( evt.type )
        {
            case "mousedown":
                this._isMouseDown = true;
                this.onMouseDown( this._toCanvasMouseEvent( evt, EInputEventType.MOUSEDOWN ) );
                break;
            case "mouseup":
                this._isMouseDown = false;
                this.onMouseUp( this._toCanvasMouseEvent( evt, EInputEventType.MOUSEUP ) );
                break;
            case "mousemove":
                // 如果isSupportMouseMove为true，才会每次鼠标移动触发mouseMove事件
                if ( this.isSupportMouseMove )
                {
                    this.onMouseMove( this._toCanvasMouseEvent( evt, EInputEventType.MOUSEMOVE ) );
                }
                // 同时，如果当前鼠标任意一个键处于按下状态并拖动时，触发drag事件
                if ( this._isMouseDown )
                {
                    this.onMouseDrag( this._toCanvasMouseEvent( evt, EInputEventType.MOUSEDRAG ) );
                }
                break;
            case "keypress":
                this.onKeyPress( this._toCanvasKeyBoardEvent( evt, EInputEventType.KEYPRESS ) );
                break;
            case "keydown":
                this.onKeyDown( this._toCanvasKeyBoardEvent( evt, EInputEventType.KEYDOWN ) );
                break;
            case "keyup":
                this.onKeyUp( this._toCanvasKeyBoardEvent( evt, EInputEventType.KEYUP ) );
                break;
        }
    }

    protected onMouseDown ( evt: CanvasMouseEvent ): void
    {
        return;
    }

    protected onMouseUp ( evt: CanvasMouseEvent ): void
    {
        return;
    }

    protected onMouseMove ( evt: CanvasMouseEvent ): void
    {
        return;
    }

    protected onMouseDrag ( evt: CanvasMouseEvent ): void
    {
        return;
    }

    protected onKeyDown ( evt: CanvasKeyBoardEvent ): void
    {
        return;
    }

    protected onKeyUp ( evt: CanvasKeyBoardEvent ): void
    {
        return;
    }

    protected onKeyPress ( evt: CanvasKeyBoardEvent ): void
    {
        return;
    }

    protected getMouseCanvas() : HTMLCanvasElement {
        return this.canvas
    }

    protected step(timeStamp: number): void {
        if (this._startTime === -1) this._startTime = timeStamp
        if (this._lastTime === -1) this._lastTime = timeStamp
        // 计算当前时间点与第一次调用step的时间点差
        let elapsedMsec = timeStamp - this._startTime
    //    计算当前时间点和上一次时间点差（帧差）
        let intervalSec = timeStamp - this._lastTime
        if (intervalSec !== 0) {
            this._fps = 1000.0 / intervalSec
        }
        intervalSec /= 1000.0
        this._lastTime = timeStamp

        this._handleTimer(intervalSec)
        this.update(elapsedMsec, intervalSec)
        this.render()

    //  如果frameCallback回调函数不为null，回调
        if (this.frameCallback !== null) {
            this.frameCallback(this)
        }
    //    递归调用
        requestAnimationFrame((elapsedMsec: number):void => {
            this.step(elapsedMsec)
        })
    }

    // 转换为canvas上的坐标点
    protected viewportToCanvasCoordinate(evt: MouseEvent): vec2 {
        let rect: ClientRect = this.getMouseCanvas().getBoundingClientRect();
        if (evt.target) {
            let x: number = evt.clientX - rect.left
            let y: number = evt.clientY - rect.top
            if (this.isFlipYCoord) {
                y = this.getMouseCanvas().height - y
            }
            return {x, y}
        }
        throw new Error('evt.target null')
    }

    private _toCanvasMouseEvent(evt: Event, type: EInputEventType): CanvasMouseEvent {
        // 向下转型，将Event转换为MouseEvent TODO 为什么要做这个转换
        let event: MouseEvent = evt as MouseEvent;
        if ( type === EInputEventType.MOUSEDOWN && event.button === 2 )
        {
            this._isRightMouseDown = true;
        } else if ( type === EInputEventType.MOUSEUP && event.button === 2 )
        {
            this._isRightMouseDown = false;
        }

        let buttonNum: number = event.button;

        if ( this._isRightMouseDown && type === EInputEventType.MOUSEDRAG )
        {
            buttonNum = 2;
        }

        // 将客户区的鼠标pos变换到Canvas坐标系中表示
        let mousePosition: vec2 = this.viewportToCanvasCoordinate( event );
        // 将Event一些要用到的信息传递给CanvasMouseEvent并返回
        let canvasMouseEvent: CanvasMouseEvent = new CanvasMouseEvent( type, mousePosition, buttonNum, event.altKey, event.ctrlKey, event.shiftKey );
        return canvasMouseEvent;
    }

    // 将DOM Event对象信息转换为我们自己定义的Keyboard事件
    private _toCanvasKeyBoardEvent ( evt: Event, type: EInputEventType ): CanvasKeyBoardEvent
    {
        let event: KeyboardEvent = evt as KeyboardEvent;
        // 将Event一些要用到的信息传递给CanvasKeyBoardEvent并返回
        let canvasKeyboardEvent: CanvasKeyBoardEvent = new CanvasKeyBoardEvent( type, event.key, event.keyCode, event.repeat, event.altKey, event.ctrlKey, event.shiftKey );
        return canvasKeyboardEvent;
    }
}

export class WebGLApplication extends Application {
    // gl: WebGLRenderingContext
    protected canvas2D: HTMLCanvasElement | null = null;
    protected ctx2D: CanvasRenderingContext2D | null = null;
}

export class CameraApplication extends WebGLApplication {

}

export class BasicWebGLApplication extends Application {
    gl: WebGLRenderingContext
    // 着色器
    vsShader: WebGLShader
    fsShader: WebGLShader
    // 增加视矩阵和投影矩阵
    projectMatrix: mat4
    viewMatrix: mat4
    viewProjectMatrix: mat4


    colorShader_vs: string = `
        // 1、 attribute顶点属性声明
        attribute vec3 aPosition;  
        attribute vec4 aColor;
    
        // 2、 uniform变量声明
        uniform mat4 uMVPMatrix;

        // 3、 varying变量声明
        varying vec4 vColor;
    
        // 4、 顶点处理入口main函数
        void main(void){
            // 5、 gl_Position为Vertex Shader内置varying变量，varying变量会被传递到Fragment Shader中去
            gl_Position = uMVPMatrix * vec4(aPosition,1.0); // 6、 将坐标值从局部坐标系变换到裁剪坐标系
            vColor = aColor; // 7、 将颜色属性传递到Fragment Shader中去
        }
        `;

    colorShader_fs: string = `
        // 需要设置GL_ES精度    
        #ifdef GL_ES
            precision highp float;
        #endif
        
        varying  vec4 vColor;
        void main(void){
            gl_FragColor = vColor;
        }        
       `;

    program: WebGLProgram
    attribMap: GLAttribMap = {};
    uniformMap: GLUniformMap = {};

    verts: TypedArrayList<Float32Array>
    ivbo: WebGLBuffer

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        let contextAttribs: WebGLContextAttributes = {
        //  WebGL上下文渲染对象需要创建深度和模板缓冲区
            depth: true, // 深度缓冲区
            stencil: true, // 模板缓冲区
            alpha: true, // 颜色缓冲区
            premultipliedAlpha: true, // 不使用预乘alpha
            antialias: true, // 抗锯齿
            preserveDrawingBuffer: false
        }
        let ctx: WebGLRenderingContext | null = this.canvas.getContext('webgl', contextAttribs)
        if (ctx === null) {
            throw new Error('无法创建WebGLRenderingContext上下文')
        }
        this.gl = ctx

        // TODO 理解一下代码
        // 在构造函数中增加如下代码:
        // 构造投影矩阵
        this.projectMatrix = mat4.perspective( MathHelper.toRadian( 45 ), this.canvas.width / this.canvas.height, 0.1, 100 );
        // 构造视矩阵
        this.viewMatrix = mat4.lookAt( new vec3( [ 0, 0, 5 ] ), new vec3() );
        // 构造viewprojectMatrix
        this.viewProjectMatrix = mat4.product( this.projectMatrix, this.viewMatrix );


        // 设置窗口区域 TODO 理解一下两个区域含义
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height)
        // 设置裁剪区域
        this.gl.scissor(0, 0, this.canvas.width, this.canvas.height)
        // 需要开启裁剪测试
        this.gl.enable(this.gl.SCISSOR_TEST)

        console.log('--lbp 403', 'Application.ts', 'printStates', Helper.printStates(this.gl));
        console.log('--lbp 403', 'Application.ts', 'printWebGLInfo', Helper.printWebGLInfo(this.gl));

    //     编译vertex shader
        this.vsShader = Helper.createShader(this.gl, EShaderType.VS_SHADER)
        Helper.compileShader(this.gl, this.colorShader_vs, this.vsShader)
    //    编译fragment shader
        this.fsShader = Helper.createShader(this.gl, EShaderType.FS_SHADER)
        Helper.compileShader(this.gl, this.colorShader_fs, this.fsShader)

        // 着色器链接
        this.program = Helper.createProgram(this.gl)
        Helper.linkProgram(this.gl, this.program, this.vsShader, this.fsShader)

        this.verts = new TypedArrayList<Float32Array>(Float32Array, 6 *7)
        this.ivbo = Helper.createBuffer(this.gl)
    }

    printProgramActiveInfos(): void {
        Helper.getProgramActiveAttribs(this.gl, this.program, this.attribMap);
        console.log('--lbp 480', 'Application.ts', 'printProgramActiveInfos', 'attribmap', JSON.stringify(this.attribMap));

        Helper.getProgramActiveUniform(this.gl, this.program, this.uniformMap)
        console.log('--lbp 484', 'Application.ts', 'printProgramActiveInfos', 'uniform', JSON.stringify(this.uniformMap));
    }

    drawRectByInterleavedVBO () {
        this.printProgramActiveInfos()
        this.verts.clear()
        let data: number[] = [
            // 三角形0
            -0.5, -0.5, 0, 1, 0, 0, 1, // 左下  0
            0.5, -0.5, 0, 0, 1, 0, 1,  // 右下  1
            0.5, 0.5, 0, 0, 0, 1, 0,   // 右上  2
            // 三角形1
            0.5, 0.5, 0, 0, 0, 1, 0,   // 右上  2
            -0.5, 0.5, 0, 0, 1, 0, 1,  // 左上  4
            -0.5, -0.5, 0, 1, 0, 0, 1  // 左下  0
        ]
        this.verts.pushArray(data)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.ivbo)
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.verts.subArray(), this.gl.DYNAMIC_DRAW)
        this.gl.vertexAttribPointer(this.attribMap['aPosition'].location, 3, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7 , 0)
        this.gl.vertexAttribPointer(this.attribMap['aColor'].location, 4, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7 , 12)
        this.gl.enableVertexAttribArray(this.attribMap['aPosition'].location)
        this.gl.enableVertexAttribArray(this.attribMap['aColor'].location)
        // 绘制阶段
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.uniformMap['uMVPMatrix'].location, false, this.viewProjectMatrix.values);
        this.gl.drawArrays(this.gl.TRIANGLES, 0,6)
        this.gl.useProgram(null);
        this.gl.disableVertexAttribArray(this.attribMap['aPosition'].location)
        this.gl.disableVertexAttribArray(this.attribMap['aColor'].location);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null)
    }
}
