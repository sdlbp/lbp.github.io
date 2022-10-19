/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/Application.ts":
/*!***********************************!*\
  !*** ./src/common/Application.ts ***!
  \***********************************/
/*! exports provided: EInputEventType, CanvasInputEvent, CanvasMouseEvent, CanvasKeyBoardEvent, Application, WebGLApplication, CameraApplication, BasicWebGLApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EInputEventType", function() { return EInputEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasInputEvent", function() { return CanvasInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasMouseEvent", function() { return CanvasMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasKeyBoardEvent", function() { return CanvasKeyBoardEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLApplication", function() { return WebGLApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraApplication", function() { return CameraApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicWebGLApplication", function() { return BasicWebGLApplication; });
/* harmony import */ var _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Helper */ "./src/webgl/Helper.ts");
/* harmony import */ var _math_TSM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math/TSM */ "./src/common/math/TSM.ts");
/* harmony import */ var _math_MathHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/MathHelper */ "./src/common/math/MathHelper.ts");
/* harmony import */ var _container_TypedArrayList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/TypedArrayList */ "./src/common/container/TypedArrayList.ts");




class Timer {
    constructor(callback) {
        this.id = -1;
        // 标记当前定时器是否有效
        this.enabled = false;
        this.callbackData = undefined;
        this.countdown = 0;
        this.timeout = 0;
        this.onlyOnce = false;
        this.callback = callback;
    }
}
// endregion
// region 事件系统
// 事件枚举 TODO 使用位移枚举
var EInputEventType;
(function (EInputEventType) {
    EInputEventType[EInputEventType["MOUSEEVENT"] = 0] = "MOUSEEVENT";
    EInputEventType[EInputEventType["MOUSEDOWN"] = 1] = "MOUSEDOWN";
    EInputEventType[EInputEventType["MOUSEUP"] = 2] = "MOUSEUP";
    EInputEventType[EInputEventType["MOUSEMOVE"] = 3] = "MOUSEMOVE";
    EInputEventType[EInputEventType["MOUSEDRAG"] = 4] = "MOUSEDRAG";
    EInputEventType[EInputEventType["KEYBOARDEVENT"] = 5] = "KEYBOARDEVENT";
    EInputEventType[EInputEventType["KEYUP"] = 6] = "KEYUP";
    EInputEventType[EInputEventType["KEYDOWN"] = 7] = "KEYDOWN";
    EInputEventType[EInputEventType["KEYPRESS"] = 8] = "KEYPRESS";
})(EInputEventType || (EInputEventType = {}));
// 事件基类
class CanvasInputEvent {
    constructor(type = EInputEventType.MOUSEEVENT, altKey = false, ctrlKey = false, shiftKey = false) {
        this.altKey = altKey;
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.type = type;
    }
}
// canvas鼠标事件
class CanvasMouseEvent extends CanvasInputEvent {
    constructor(type, canvasPos, button, altKey = false, ctrlKey = false, shiftKey = false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.canvasPosition = canvasPos;
        this.button = button;
    }
}
// 键盘事件
class CanvasKeyBoardEvent extends CanvasInputEvent {
    constructor(type, key, keyCode, repeat, altKey = false, ctrlKey = false, shiftKey = false) {
        super(type, altKey, ctrlKey, shiftKey);
        this.key = key;
        this.keyCode = keyCode;
        this.repeat = repeat;
    }
}
// endregion
/**
 * 主要做三件事：更新、重绘、事件分拨
 */
class Application {
    constructor(canvas) {
        // 定时器容器
        this.timers = [];
        // 定时器id生成
        this._timeId = -1;
        this._fps = 0;
        this.isFlipYCoord = false;
        this._isRightMouseDown = false;
        this._start = false;
        this._requestId = -1;
        this.canvas = canvas;
        this._isMouseDown = false;
        this.isSupportMouseMove = false;
        this.frameCallback = null;
        // canvas元素能够监听鼠标事件
        this.canvas.addEventListener("mousedown", this, false);
        this.canvas.addEventListener("mouseup", this, false);
        this.canvas.addEventListener("mousemove", this, false);
        // 很重要一点，键盘事件不能在canvas中触发，但是能在全局的window对象中触发
        // 因此我们能在window对象中监听键盘事件
        window.addEventListener("keydown", this, false);
        window.addEventListener("keyup", this, false);
        window.addEventListener("keypress", this, false);
        document.oncontextmenu = function () {
            return false;
        };
    }
    removeTimer(id) {
        let found = false;
        for (let i = 0; i < this.timers.length; i++) {
            if (this.timers[i].id === id) {
                let timer = this.timers[i];
                timer.enabled = false;
                found = true;
                break;
            }
        }
        return found;
    }
    addTimer(callback, timeout = 1.0, onlyOnce = false, data = undefined) {
        let timer;
        let found = false;
        for (let i = 0; i < this.timers.length; i++) {
            let timer = this.timers[i];
            if (timer.enabled === false) {
                timer.callback = callback;
                timer.callbackData = data;
                timer.timeout = timeout;
                timer.countdown = timeout;
                timer.enabled = true;
                timer.onlyOnce = onlyOnce;
                return timer.id;
            }
        }
        // 不存在，就新创建一个Timer对象
        timer = new Timer(callback);
        timer.callbackData = data;
        timer.timeout = timeout;
        timer.countdown = timeout;
        timer.enabled = true;
        timer.id = ++this._timeId; // 由于初始化时id为-1,所以前++
        timer.onlyOnce = onlyOnce; //设置是否是一次回调还是重复回调
        // 添加到timers列表中去
        this.timers.push(timer);
        // 返回新添加的timer的id号
        return timer.id;
    }
    // _handleTimers私有方法被Application的update函数调用
    // update函数第二个参数是以秒表示的前后帧时间差
    // 正符合_handleTimers参数要求
    // 我们的计时器依赖于requestAnimationFrame回调
    // 如果当前Application没有调用start的话
    // 则计时器不会生效
    _handleTimer(intervalSec) {
        for (let i = 0; i < this.timers.length; i++) {
            let timer = this.timers[i];
            if (timer.enabled === false)
                continue;
            timer.countdown -= intervalSec;
            if (timer.countdown < 0.0) {
                timer.callback(timer.id, timer.callbackData);
            }
            // 如果该计时器需要重复触发
            if (timer.onlyOnce === false) {
                // 我们重新将countdown设置为timeout
                // 由此可见，timeout不会更改，它规定了触发的时间间隔
                // 每次更新的是countdown倒计时器
                timer.countdown = timer.timeout; //很精妙的一个技巧
            }
            else { // 如果该计时器只需要触发一次，那么我们就删除掉该计时器
                this.removeTimer(timer.id);
            }
        }
    }
    start() {
        if (this._start === false) {
            this._start = true;
            this._lastTime = -1;
            this._startTime = -1;
            this._requestId = requestAnimationFrame((msec) => {
                this.step(msec);
            });
        }
    }
    isRunning() {
        return this._start;
    }
    stop() {
        if (this._start) {
            cancelAnimationFrame(this._requestId);
            this._lastTime = -1;
            this._startTime = -1;
            this._start = false;
        }
    }
    // 子类重写用于更新
    update(elapseMsec, intervalSec) { }
    // 子类重写用于渲染
    render() { }
    // handleEvent是接口EventListenerObject定义的协议分发，必须要实现
    handleEvent(evt) {
        switch (evt.type) {
            case "mousedown":
                this._isMouseDown = true;
                this.onMouseDown(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEDOWN));
                break;
            case "mouseup":
                this._isMouseDown = false;
                this.onMouseUp(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEUP));
                break;
            case "mousemove":
                // 如果isSupportMouseMove为true，才会每次鼠标移动触发mouseMove事件
                if (this.isSupportMouseMove) {
                    this.onMouseMove(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEMOVE));
                }
                // 同时，如果当前鼠标任意一个键处于按下状态并拖动时，触发drag事件
                if (this._isMouseDown) {
                    this.onMouseDrag(this._toCanvasMouseEvent(evt, EInputEventType.MOUSEDRAG));
                }
                break;
            case "keypress":
                this.onKeyPress(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYPRESS));
                break;
            case "keydown":
                this.onKeyDown(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYDOWN));
                break;
            case "keyup":
                this.onKeyUp(this._toCanvasKeyBoardEvent(evt, EInputEventType.KEYUP));
                break;
        }
    }
    onMouseDown(evt) {
        return;
    }
    onMouseUp(evt) {
        return;
    }
    onMouseMove(evt) {
        return;
    }
    onMouseDrag(evt) {
        return;
    }
    onKeyDown(evt) {
        return;
    }
    onKeyUp(evt) {
        return;
    }
    onKeyPress(evt) {
        return;
    }
    getMouseCanvas() {
        return this.canvas;
    }
    step(timeStamp) {
        if (this._startTime === -1)
            this._startTime = timeStamp;
        if (this._lastTime === -1)
            this._lastTime = timeStamp;
        // 计算当前时间点与第一次调用step的时间点差
        let elapsedMsec = timeStamp - this._startTime;
        //    计算当前时间点和上一次时间点差（帧差）
        let intervalSec = timeStamp - this._lastTime;
        if (intervalSec !== 0) {
            this._fps = 1000.0 / intervalSec;
        }
        intervalSec /= 1000.0;
        this._lastTime = timeStamp;
        this._handleTimer(intervalSec);
        this.update(elapsedMsec, intervalSec);
        this.render();
        //  如果frameCallback回调函数不为null，回调
        if (this.frameCallback !== null) {
            this.frameCallback(this);
        }
        //    递归调用
        requestAnimationFrame((elapsedMsec) => {
            this.step(elapsedMsec);
        });
    }
    // 转换为canvas上的坐标点
    viewportToCanvasCoordinate(evt) {
        let rect = this.getMouseCanvas().getBoundingClientRect();
        if (evt.target) {
            let x = evt.clientX - rect.left;
            let y = evt.clientY - rect.top;
            if (this.isFlipYCoord) {
                y = this.getMouseCanvas().height - y;
            }
            return { x, y };
        }
        throw new Error('evt.target null');
    }
    _toCanvasMouseEvent(evt, type) {
        // 向下转型，将Event转换为MouseEvent TODO 为什么要做这个转换
        let event = evt;
        if (type === EInputEventType.MOUSEDOWN && event.button === 2) {
            this._isRightMouseDown = true;
        }
        else if (type === EInputEventType.MOUSEUP && event.button === 2) {
            this._isRightMouseDown = false;
        }
        let buttonNum = event.button;
        if (this._isRightMouseDown && type === EInputEventType.MOUSEDRAG) {
            buttonNum = 2;
        }
        // 将客户区的鼠标pos变换到Canvas坐标系中表示
        let mousePosition = this.viewportToCanvasCoordinate(event);
        // 将Event一些要用到的信息传递给CanvasMouseEvent并返回
        let canvasMouseEvent = new CanvasMouseEvent(type, mousePosition, buttonNum, event.altKey, event.ctrlKey, event.shiftKey);
        return canvasMouseEvent;
    }
    // 将DOM Event对象信息转换为我们自己定义的Keyboard事件
    _toCanvasKeyBoardEvent(evt, type) {
        let event = evt;
        // 将Event一些要用到的信息传递给CanvasKeyBoardEvent并返回
        let canvasKeyboardEvent = new CanvasKeyBoardEvent(type, event.key, event.keyCode, event.repeat, event.altKey, event.ctrlKey, event.shiftKey);
        return canvasKeyboardEvent;
    }
}
class WebGLApplication extends Application {
    constructor() {
        super(...arguments);
        // gl: WebGLRenderingContext
        this.canvas2D = null;
        this.ctx2D = null;
    }
}
class CameraApplication extends WebGLApplication {
}
class BasicWebGLApplication extends Application {
    constructor(canvas) {
        super(canvas);
        this.colorShader_vs = `
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
        this.colorShader_fs = `
        // 需要设置GL_ES精度    
        #ifdef GL_ES
            precision highp float;
        #endif
        
        varying  vec4 vColor;
        void main(void){
            gl_FragColor = vColor;
        }        
       `;
        this.attribMap = {};
        this.uniformMap = {};
        let contextAttribs = {
            //  WebGL上下文渲染对象需要创建深度和模板缓冲区
            depth: true,
            stencil: true,
            alpha: true,
            premultipliedAlpha: true,
            antialias: true,
            preserveDrawingBuffer: false
        };
        let ctx = this.canvas.getContext('webgl', contextAttribs);
        if (ctx === null) {
            throw new Error('无法创建WebGLRenderingContext上下文');
        }
        this.gl = ctx;
        // TODO 理解一下代码
        // 在构造函数中增加如下代码:
        // 构造投影矩阵
        this.projectMatrix = _math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].perspective(_math_MathHelper__WEBPACK_IMPORTED_MODULE_2__["MathHelper"].toRadian(45), this.canvas.width / this.canvas.height, 0.1, 100);
        // 构造视矩阵
        this.viewMatrix = _math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].lookAt(new _math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]([0, 0, 5]), new _math_TSM__WEBPACK_IMPORTED_MODULE_1__["vec3"]());
        // 构造viewprojectMatrix
        this.viewProjectMatrix = _math_TSM__WEBPACK_IMPORTED_MODULE_1__["mat4"].product(this.projectMatrix, this.viewMatrix);
        // 设置窗口区域 TODO 理解一下两个区域含义
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        // 设置裁剪区域
        this.gl.scissor(0, 0, this.canvas.width, this.canvas.height);
        // 需要开启裁剪测试
        this.gl.enable(this.gl.SCISSOR_TEST);
        console.log('--lbp 403', 'Application.ts', 'printStates', _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].printStates(this.gl));
        console.log('--lbp 403', 'Application.ts', 'printWebGLInfo', _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].printWebGLInfo(this.gl));
        //     编译vertex shader
        this.vsShader = _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].createShader(this.gl, _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["EShaderType"].VS_SHADER);
        _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].compileShader(this.gl, this.colorShader_vs, this.vsShader);
        //    编译fragment shader
        this.fsShader = _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].createShader(this.gl, _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["EShaderType"].FS_SHADER);
        _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].compileShader(this.gl, this.colorShader_fs, this.fsShader);
        // 着色器链接
        this.program = _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].createProgram(this.gl);
        _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].linkProgram(this.gl, this.program, this.vsShader, this.fsShader);
        this.verts = new _container_TypedArrayList__WEBPACK_IMPORTED_MODULE_3__["default"](Float32Array, 6 * 7);
        this.ivbo = _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].createBuffer(this.gl);
    }
    printProgramActiveInfos() {
        _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].getProgramActiveAttribs(this.gl, this.program, this.attribMap);
        console.log('--lbp 480', 'Application.ts', 'printProgramActiveInfos', 'attribmap', JSON.stringify(this.attribMap));
        _webgl_Helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].getProgramActiveUniform(this.gl, this.program, this.uniformMap);
        console.log('--lbp 484', 'Application.ts', 'printProgramActiveInfos', 'uniform', JSON.stringify(this.uniformMap));
    }
    drawRectByInterleavedVBO() {
        this.printProgramActiveInfos();
        this.verts.clear();
        let data = [
            // 三角形0
            -0.5, -0.5, 0, 1, 0, 0, 1,
            0.5, -0.5, 0, 0, 1, 0, 1,
            0.5, 0.5, 0, 0, 0, 1, 0,
            // 三角形1
            0.5, 0.5, 0, 0, 0, 1, 0,
            -0.5, 0.5, 0, 0, 1, 0, 1,
            -0.5, -0.5, 0, 1, 0, 0, 1 // 左下  0
        ];
        this.verts.pushArray(data);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.ivbo);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.verts.subArray(), this.gl.DYNAMIC_DRAW);
        this.gl.vertexAttribPointer(this.attribMap['aPosition'].location, 3, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7, 0);
        this.gl.vertexAttribPointer(this.attribMap['aColor'].location, 4, this.gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 7, 12);
        this.gl.enableVertexAttribArray(this.attribMap['aPosition'].location);
        this.gl.enableVertexAttribArray(this.attribMap['aColor'].location);
        // 绘制阶段
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.uniformMap['uMVPMatrix'].location, false, this.viewProjectMatrix.values);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        this.gl.useProgram(null);
        this.gl.disableVertexAttribArray(this.attribMap['aPosition'].location);
        this.gl.disableVertexAttribArray(this.attribMap['aColor'].location);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
}


/***/ }),

/***/ "./src/common/container/TypedArrayList.ts":
/*!************************************************!*\
  !*** ./src/common/container/TypedArrayList.ts ***!
  \************************************************/
/*! exports provided: TypedArrayList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedArrayList", function() { return TypedArrayList; });
/**
 * 类似于TypedArray，提供了动态扩容的能力
 */
class TypedArrayList {
    constructor(typeArrayConstructor, capacity = 8) {
        this.capacityChangeCallBack = null;
        this._typeArrayConstructor = typeArrayConstructor;
        this._capacity = capacity;
        if (this._capacity === 0) {
            this._capacity = 8;
        }
        this._length = 0;
        this._array = new this._typeArrayConstructor(this._capacity);
    }
    push(num) {
        if (this._length >= this._capacity) {
            console.log('TypedArrayList.ts', '18', 'push', new Date(), this._capacity, this._length);
            this._capacity += this._capacity;
            let oldArray = this._array;
            this._array = new this._typeArrayConstructor(this._capacity);
            this._array.set(oldArray);
            if (this.capacityChangeCallBack !== null) {
                this.capacityChangeCallBack(this);
            }
        }
        this._array[this._length++] = num;
        return this._length;
    }
    slice(start = 0, end = this._length) {
        return this._array.slice(start, end);
    }
    pushArray(nums) {
        for (let i = 0; i < nums.length; i++) {
            this.push(nums[i]);
        }
    }
    subArray(start = 0, end = this._length) {
        return this._array.subarray(start, end);
    }
    get length() {
        return this._length;
    }
    get capacity() {
        return this._capacity;
    }
    get typeArray() {
        return this._array;
    }
    clear() {
        // TODO 可能会访问到历史旧值
        this._length = 0;
    }
    // js没有操作符重载
    at(idx) {
        if (idx < 0 || idx >= this._length) {
            throw new RangeError('索引越界');
        }
        return this._array[idx];
    }
}
/* harmony default export */ __webpack_exports__["default"] = (TypedArrayList);


/***/ }),

/***/ "./src/common/math/MathHelper.ts":
/*!***************************************!*\
  !*** ./src/common/math/MathHelper.ts ***!
  \***************************************/
/*! exports provided: EAxisType, EPlaneLoc, MathHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAxisType", function() { return EAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPlaneLoc", function() { return EPlaneLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathHelper", function() { return MathHelper; });
/* harmony import */ var _TSM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TSM */ "./src/common/math/TSM.ts");

// import { GeometryData } from "../../lib/Primitives";
// import { GLMeshBuilder } from "../../webgl/WebGLMesh";
var EAxisType;
(function (EAxisType) {
    EAxisType[EAxisType["NONE"] = -1] = "NONE";
    EAxisType[EAxisType["XAXIS"] = 0] = "XAXIS";
    EAxisType[EAxisType["YAXIS"] = 1] = "YAXIS";
    EAxisType[EAxisType["ZAXIS"] = 2] = "ZAXIS";
})(EAxisType || (EAxisType = {}));
var EPlaneLoc;
(function (EPlaneLoc) {
    EPlaneLoc[EPlaneLoc["FRONT"] = 0] = "FRONT";
    EPlaneLoc[EPlaneLoc["BACK"] = 1] = "BACK";
    EPlaneLoc[EPlaneLoc["COPLANAR"] = 2] = "COPLANAR"; // 与平面共面
})(EPlaneLoc || (EPlaneLoc = {}));
class MathHelper {
    // 角度/弧度互转函数
    static toRadian(degree) {
        return degree * Math.PI / 180;
    }
    static toDegree(radian) {
        return radian / Math.PI * 180;
    }
    // 浮点数容差相等函数
    static numberEquals(left, right) {
        if (Math.abs(left - right) > _TSM__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
            return false;
        }
        return true;
    }
    static clamp(x, min, max) {
        return (x < min) ? min : (x > max) ? max : x;
    }
    // 判断一个整数是否是2的n次方(1,2,4,8,16,32,64,128,258,512,1024,2048,....)
    // 用于2的n次方纹理判断
    static isPowerOfTwo(value) {
        return ((value & (value - 1)) == 0);
    }
    static obj2GLViewportSpace(localPt, mvp, viewport, viewportPt) {
        let v = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]([localPt.x, localPt.y, localPt.z, 1.0]);
        mvp.multiplyVec4(v, v); // 将顶点从local坐标系变换到投影坐标系，或裁剪坐标系
        if (v.w === 0.0) // 如果变换后的w为0，则返回false
         {
            return false;
        }
        // 将裁剪坐标系的点的x / y / z分量除以w，得到normalized坐标值[ -1 , 1 ]之间
        v.x /= v.w;
        v.y /= v.w;
        v.z /= v.w;
        // [-1 , 1]标示的点变换到视口坐标系
        v.x = v.x * 0.5 + 0.5;
        v.y = v.y * 0.5 + 0.5;
        v.z = v.z * 0.5 + 0.5;
        // 视口坐标系再变换到屏幕坐标系
        viewportPt.x = v.x * viewport[2] + viewport[0];
        viewportPt.y = v.y * viewport[3] + viewport[1];
        viewportPt.z = v.z;
        return true;
    }
    // 计算三角形的法向量
    static computeNormal(a, b, c, result) {
        if (!result)
            result = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        let l0 = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        let l1 = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].difference(b, a, l0);
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].difference(c, a, l1);
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].cross(l0, l1, result);
        result.normalize();
        return result;
    }
    // 下面四个函数是平面相关函数
    //ax+by+cz-d=0
    static planeFromPoints(a, b, c, result = null) {
        if (!result)
            result = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]();
        let normal = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        this.computeNormal(a, b, c, normal);
        let d = -_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(normal, a);
        result.x = normal.x;
        result.y = normal.y;
        result.z = normal.z;
        result.w = d;
        return result;
    }
    static planeFromPointNormal(point, normal, result = null) {
        if (!result)
            result = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec4"]();
        result.x = normal.x;
        result.y = normal.y;
        result.z = normal.z;
        result.w = -_TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].dot(normal, point);
        return result;
    }
    static planeFromPolygon(polygon) {
        if (polygon.length < 3) {
            throw new Error("多变形的顶点数必须大于或等于3!!!");
        }
        return MathHelper.planeFromPoints(polygon[0], polygon[1], polygon[2]);
    }
    static planeDistanceFromPoint(plane, point) {
        return (point.x * plane.x + point.y * plane.y + point.z * plane.z + plane.w);
    }
    static planeTestPoint(plane, point) {
        let num = MathHelper.planeDistanceFromPoint(plane, point);
        if (num > _TSM__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
            return EPlaneLoc.FRONT;
        }
        else if (num < -_TSM__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
            return EPlaneLoc.BACK;
        }
        else {
            return EPlaneLoc.COPLANAR;
        }
    }
    static planeNormalize(plane) {
        let length, ilength;
        length = Math.sqrt(plane.x * plane.x + plane.y * plane.y + plane.z * plane.z);
        if (length === 0) {
            throw new Error("面积为0的平面!!!");
        }
        ilength = 1.0 / length;
        plane.x = plane.x * ilength;
        plane.y = plane.y * ilength;
        plane.z = plane.z * ilength;
        plane.w = plane.w * ilength;
        return length;
    }
    static boundBoxAddPoint(v, mins, maxs) {
        if (v.x < mins.x) {
            mins.x = v.x;
        }
        ;
        if (v.x > maxs.x) {
            maxs.x = v.x;
        }
        ;
        if (v.y < mins.y) {
            mins.y = v.y;
        }
        ;
        if (v.y > maxs.y) {
            maxs.y = v.y;
        }
        ;
        if (v.z < mins.z) {
            mins.z = v.z;
        }
        ;
        if (v.z > maxs.z) {
            maxs.z = v.z;
        }
        ;
    }
    static boundBoxClear(mins, maxs, value = Infinity) {
        mins.x = mins.y = mins.z = value; // 初始化时，让mins表示浮点数的最大范围
        maxs.x = maxs.y = maxs.z = -value; // 初始化是，让maxs表示浮点数的最小范围
    }
    // 获得AABB包围盒的中心点坐标
    static boundBoxGetCenter(mins, maxs, out = null) {
        if (out === null) {
            out = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]();
        }
        // (maxs + mins) * 0.5
        _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].sum(mins, maxs, out);
        out.scale(0.5);
        return out;
    }
    static boundBoxGet8Points(mins, maxs, pts8) {
        /*
        /3--------/7  |
        / |       /   |
        /  |      /   |
        1---------5   |
        |  /2- - -|- -6
        | /       |  /
        |/        | /
        0---------4/
        */
        let center = MathHelper.boundBoxGetCenter(mins, maxs); // 获取中心点
        let maxs2center = _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"].difference(center, maxs); // 获取最大点到中心点之间的距离向量
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y + maxs2center.y, center.z + maxs2center.z])); // 0
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y - maxs2center.y, center.z + maxs2center.z])); // 1
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y + maxs2center.y, center.z - maxs2center.z])); // 2
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x + maxs2center.x, center.y - maxs2center.y, center.z - maxs2center.z])); // 3
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y + maxs2center.y, center.z + maxs2center.z])); // 4
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y - maxs2center.y, center.z + maxs2center.z])); // 5
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y + maxs2center.y, center.z - maxs2center.z])); // 6
        pts8.push(new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"]([center.x - maxs2center.x, center.y - maxs2center.y, center.z - maxs2center.z])); // 7
    }
    static boundBoxTransform(mat, mins, maxs) {
        let pts = []; // 分配数组内存，类型为vec3
        MathHelper.boundBoxGet8Points(mins, maxs, pts); // 获得局部坐标系表示的AABB的8个顶点坐标
        let out = new _TSM__WEBPACK_IMPORTED_MODULE_0__["vec3"](); // 变换后的顶点
        // 遍历局部坐标系的8个AABB包围盒的顶点坐标
        for (let i = 0; i < pts.length; i++) {
            // 将局部坐标表示的顶点变换到mat坐标空间中去，变换后的结果放在out变量中
            mat.multiplyVec3(pts[i], out);
            // 重新构造新的，与世界坐标系轴对称的AABB包围盒
            this.boundBoxAddPoint(out, mins, maxs);
        }
    }
    static boundBoxContainsPoint(point, mins, maxs) {
        return (point.x >= mins.x && point.x <= maxs.x && point.y >= mins.y && point.y <= maxs.y && point.z >= mins.z && point.z <= maxs.z);
    }
    static boundBoxBoundBoxOverlap(min1, max1, min2, max2) {
        if (min1.x > max2.x)
            return false;
        if (max1.x < min2.x)
            return false;
        if (min1.y > max2.y)
            return false;
        if (max1.y < min2.y)
            return false;
        if (min1.z > max2.z)
            return false;
        if (max1.z < min2.z)
            return false;
        return true;
    }
    static convertVec3IDCoord2GLCoord(v, scale = 10.0) {
        let f = v.y; // opengl right = dooom3 x
        v.y = v.z; //opengl up = doom3 z
        v.z = -f; //opengl forward = doom3 -y
        if (!MathHelper.numberEquals(scale, 0) && !MathHelper.numberEquals(scale, 1.0)) {
            v.x /= scale;
            v.y /= scale;
            v.z /= scale;
        }
    }
    static convertVec2IDCoord2GLCoord(v) {
        v.y = 1.0 - v.y;
    }
    static matrixFrom(pos, q, dest = null) {
        if (dest === null) {
            dest = new _TSM__WEBPACK_IMPORTED_MODULE_0__["mat4"]();
        }
        q.toMat4(dest);
        dest.values[12] = pos.x;
        dest.values[13] = pos.y;
        dest.values[14] = pos.z;
        return dest;
    }
}


/***/ }),

/***/ "./src/common/math/TSM.ts":
/*!********************************!*\
  !*** ./src/common/math/TSM.ts ***!
  \********************************/
/*! exports provided: EPSILON, vec2, vec3, vec4, mat4, quat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return vec2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return vec3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return vec4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return mat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return quat; });
let EPSILON = 0.0001;
class vec2 {
    constructor(values = null) {
        this.values = new Float32Array(2);
        if (values) {
            this.x = values[0];
            this.y = values[1];
        }
        else {
            this.x = this.y = 0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec2();
        dest.x = this.x;
        dest.y = this.y;
        return dest;
    }
}
class vec3 {
    constructor(values = null) {
        this.values = new Float32Array(3);
        if (values !== null) {
            this.x = values[0];
            this.y = values[1];
            this.z = values[2];
        }
        else {
            this.x = this.y = this.z = 0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        return dest;
    }
    negate(dest = null) {
        if (!dest)
            dest = this;
        dest.x = -this.x;
        dest.y = -this.y;
        dest.z = -this.z;
        return dest;
    }
    equals(vector, threshold = EPSILON) {
        if (Math.abs(this.x - vector.x) > threshold)
            return false;
        if (Math.abs(this.y - vector.y) > threshold)
            return false;
        if (Math.abs(this.z - vector.z) > threshold)
            return false;
        return true;
    }
    get length() {
        return Math.sqrt(this.length2);
    }
    get length2() {
        let x = this.x, y = this.y, z = this.z;
        return (x * x + y * y + z * z);
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    scale(value, dest = null) {
        if (!dest) {
            dest = this;
        }
        else {
            this.copy(dest);
        }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    }
    normalize(dest = null) {
        if (!dest)
            dest = this;
        let length = this.length;
        if (length === 1) {
            return this;
        }
        if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            return dest;
        }
        length = 1.0 / length;
        dest.x *= length;
        dest.y *= length;
        dest.z *= length;
        return dest;
    }
    normalize2() {
        let length = this.length;
        let len = 1.0 / length;
        this.x *= len;
        this.y *= len;
        this.z *= len;
        return length;
    }
    static multiplyScalar(vector, value, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    }
    static cross(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        dest.x = y * z2 - z * y2;
        dest.y = z * x2 - x * z2;
        dest.z = x * y2 - y * x2;
        return dest;
    }
    static dot(vector, vector2) {
        let x = vector.x, y = vector.y, z = vector.z;
        let x2 = vector2.x, y2 = vector2.y, z2 = vector2.z;
        return (x * x2 + y * y2 + z * z2);
    }
    static sum(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = vector.x + vector2.x;
        dest.y = vector.y + vector2.y;
        dest.z = vector.z + vector2.z;
        return dest;
    }
    static difference(vector, vector2, dest = null) {
        if (!dest)
            dest = new vec3();
        dest.x = vector.x - vector2.x;
        dest.y = vector.y - vector2.y;
        dest.z = vector.z - vector2.z;
        return dest;
    }
}
vec3.up = new vec3([0, 1, 0]);
vec3.down = new vec3([0, -1, 0]);
vec3.right = new vec3([1, 0, 0]);
vec3.left = new vec3([-1, 0, 0]);
vec3.forward = new vec3([0, 0, 1]);
vec3.backward = new vec3([0, 0, -1]);
vec3.zero = new vec3([0, 0, 0]);
vec3.v0 = new vec3([0, 0, 0]);
vec3.v1 = new vec3([0, 0, 0]);
vec3.v2 = new vec3([0, 0, 0]);
class vec4 {
    constructor(values = null) {
        this.values = new Float32Array(4);
        if (values) {
            this.x = values[0];
            this.y = values[1];
            this.z = values[2];
            this.w = values[3];
        }
        else {
            this.x = this.y = this.z = this.w = 0.0;
        }
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    get w() {
        return this.values[3];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    set w(value) {
        this.values[3] = value;
    }
    get vec3() {
        return new vec3([this.x, this.y, this.z]);
    }
    get r() {
        return this.values[0];
    }
    get g() {
        return this.values[1];
    }
    get b() {
        return this.values[2];
    }
    get a() {
        return this.values[3];
    }
    set r(value) {
        this.values[0] = value;
    }
    set g(value) {
        this.values[1] = value;
    }
    set b(value) {
        this.values[2] = value;
    }
    set a(value) {
        this.values[3] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    }
    copy(dest = null) {
        if (!dest)
            dest = new vec4();
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        dest.w = this.w;
        return dest;
    }
    equals(vector, threshold = EPSILON) {
        if (Math.abs(this.x - vector.x) > threshold)
            return false;
        if (Math.abs(this.y - vector.y) > threshold)
            return false;
        if (Math.abs(this.z - vector.z) > threshold)
            return false;
        if (Math.abs(this.w - vector.w) > threshold)
            return false;
        return true;
    }
}
vec4.red = new vec4([1.0, 0.0, 0.0, 1.0]);
vec4.green = new vec4([0.0, 1.0, 0.0, 1.0]);
vec4.blue = new vec4([0.0, 0.0, 1.0, 1.0]);
vec4.black = new vec4([0, 0, 0, 0]);
vec4.v0 = new vec4();
vec4.v1 = new vec4();
vec4.v2 = new vec4();
class mat4 {
    constructor(values = null) {
        this.values = new Float32Array(16);
        if (values) {
            this.set(values);
        }
        else {
            this.setIdentity();
        }
    }
    set(values) {
        for (let i = 0; i < 16; i++) {
            this.values[i] = values[i];
        }
        return this;
    }
    at(index) {
        return this.values[index];
    }
    copy(dest = null) {
        if (!dest)
            dest = new mat4();
        for (let i = 0; i < 16; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    equals(matrix, threshold = EPSILON) {
        for (let i = 0; i < 16; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold)
                return false;
        }
        return true;
    }
    getRow(index, dest = null) {
        if (dest === null) {
            dest = new vec4();
        }
        dest.x = this.values[index * 4 + 0],
            dest.y = this.values[index * 4 + 1],
            dest.z = this.values[index * 4 + 2],
            dest.w = this.values[index * 4 + 3];
        return dest;
    }
    getColumn(index, dest = null) {
        if (dest === null) {
            dest = new vec4();
        }
        dest.x = this.values[index];
        dest.y = this.values[index + 4];
        dest.z = this.values[index + 8];
        dest.w = this.values[index + 12];
        return dest;
    }
    getPosition(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[12];
        dest.y = this.values[13];
        dest.z = this.values[14];
        return dest;
    }
    getXAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[0];
        dest.y = this.values[1];
        dest.z = this.values[2];
        return dest;
    }
    getYAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[4];
        dest.y = this.values[5];
        dest.z = this.values[6];
        return dest;
    }
    getZAxis(dest = null) {
        if (dest === null) {
            dest = new vec3();
        }
        dest.x = this.values[8];
        dest.y = this.values[9];
        dest.z = this.values[10];
        return dest;
    }
    getAxis(idx, dest = null) {
        if (idx === 0) {
            return this.getXAxis(dest);
        }
        else if (idx === 1) {
            return this.getYAxis(dest);
        }
        else {
            return this.getZAxis(dest);
        }
    }
    setIdentity() {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 0;
        this.values[5] = 1;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 1;
        this.values[11] = 0;
        this.values[12] = 0;
        this.values[13] = 0;
        this.values[14] = 0;
        this.values[15] = 1;
        return this;
    }
    transpose() {
        let temp01 = this.values[1], temp02 = this.values[2], temp03 = this.values[3], temp12 = this.values[6], temp13 = this.values[7], temp23 = this.values[11];
        this.values[1] = this.values[4];
        this.values[2] = this.values[8];
        this.values[3] = this.values[12];
        this.values[4] = temp01;
        this.values[6] = this.values[9];
        this.values[7] = this.values[13];
        this.values[8] = temp02;
        this.values[9] = temp12;
        this.values[11] = this.values[14];
        this.values[12] = temp03;
        this.values[13] = temp13;
        this.values[14] = temp23;
        return this;
    }
    determinant() {
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3], a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7], a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11], a30 = this.values[12], a31 = this.values[13], a32 = this.values[14], a33 = this.values[15];
        let det00 = a00 * a11 - a01 * a10, det01 = a00 * a12 - a02 * a10, det02 = a00 * a13 - a03 * a10, det03 = a01 * a12 - a02 * a11, det04 = a01 * a13 - a03 * a11, det05 = a02 * a13 - a03 * a12, det06 = a20 * a31 - a21 * a30, det07 = a20 * a32 - a22 * a30, det08 = a20 * a33 - a23 * a30, det09 = a21 * a32 - a22 * a31, det10 = a21 * a33 - a23 * a31, det11 = a22 * a33 - a23 * a32;
        return (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
    }
    inverse(out) {
        this.copy(out);
        let a00 = out.values[0], a01 = out.values[1], a02 = out.values[2], a03 = out.values[3], a10 = out.values[4], a11 = out.values[5], a12 = out.values[6], a13 = out.values[7], a20 = out.values[8], a21 = out.values[9], a22 = out.values[10], a23 = out.values[11], a30 = out.values[12], a31 = out.values[13], a32 = out.values[14], a33 = out.values[15];
        let det00 = a00 * a11 - a01 * a10, det01 = a00 * a12 - a02 * a10, det02 = a00 * a13 - a03 * a10, det03 = a01 * a12 - a02 * a11, det04 = a01 * a13 - a03 * a11, det05 = a02 * a13 - a03 * a12, det06 = a20 * a31 - a21 * a30, det07 = a20 * a32 - a22 * a30, det08 = a20 * a33 - a23 * a30, det09 = a21 * a32 - a22 * a31, det10 = a21 * a33 - a23 * a31, det11 = a22 * a33 - a23 * a32;
        let det = (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
        if (!det)
            return false;
        det = 1.0 / det;
        out.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;
        out.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;
        out.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;
        out.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;
        out.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;
        out.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;
        out.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;
        out.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;
        out.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;
        out.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;
        out.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;
        out.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;
        out.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;
        out.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;
        out.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;
        out.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;
        return true;
    }
    multiply(matrix) {
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3];
        let a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7];
        let a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        let a30 = this.values[12], a31 = this.values[13], a32 = this.values[14], a33 = this.values[15];
        let b0 = matrix.at(0), b1 = matrix.at(1), b2 = matrix.at(2), b3 = matrix.at(3);
        this.values[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(4);
        b1 = matrix.at(5);
        b2 = matrix.at(6);
        b3 = matrix.at(7);
        this.values[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(8);
        b1 = matrix.at(9);
        b2 = matrix.at(10);
        b3 = matrix.at(11);
        this.values[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(12);
        b1 = matrix.at(13);
        b2 = matrix.at(14);
        b3 = matrix.at(15);
        this.values[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return this;
    }
    multiplyVec3(vector, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12];
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13];
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14];
        return dest;
    }
    multiplyVec4(vector, dest = null) {
        if (!dest)
            dest = new vec4();
        let x = vector.x, y = vector.y, z = vector.z, w = vector.w;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;
        dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;
        return dest;
    }
    // 矩阵变换
    translate(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;
        this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;
        this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;
        this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;
        return this;
    }
    scale(vector) {
        let x = vector.x, y = vector.y, z = vector.z;
        this.values[0] *= x;
        this.values[1] *= x;
        this.values[2] *= x;
        this.values[3] *= x;
        this.values[4] *= y;
        this.values[5] *= y;
        this.values[6] *= y;
        this.values[7] *= y;
        this.values[8] *= z;
        this.values[9] *= z;
        this.values[10] *= z;
        this.values[11] *= z;
        return this;
    }
    rotate(angle, axis) {
        let x = axis.x, y = axis.y, z = axis.z;
        let length = Math.sqrt(x * x + y * y + z * z);
        if (!length)
            return null;
        if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
        }
        let s = Math.sin(angle);
        let c = Math.cos(angle);
        let t = 1.0 - c;
        let a00 = this.values[0], a01 = this.values[1], a02 = this.values[2], a03 = this.values[3], a10 = this.values[4], a11 = this.values[5], a12 = this.values[6], a13 = this.values[7], a20 = this.values[8], a21 = this.values[9], a22 = this.values[10], a23 = this.values[11];
        let b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
        this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;
        this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;
        this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;
        this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;
        this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;
        this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;
        this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;
        this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;
        this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;
        return this;
    }
    // 视矩阵和投影矩阵
    static frustum(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new mat4([
            (near * 2) / rl,
            0,
            0,
            0,
            0,
            (near * 2) / tb,
            0,
            0,
            (right + left) / rl,
            (top + bottom) / tb,
            -(far + near) / fn,
            -1,
            0,
            0,
            -(far * near * 2) / fn,
            0
        ]);
    }
    static perspective(fov, aspect, near, far) {
        let top = near * Math.tan(fov * 0.5), right = top * aspect;
        return mat4.frustum(-right, right, -top, top, near, far);
    }
    static orthographic(left, right, bottom, top, near, far) {
        let rl = (right - left), tb = (top - bottom), fn = (far - near);
        return new mat4([
            2 / rl,
            0,
            0,
            0,
            0,
            2 / tb,
            0,
            0,
            0,
            0,
            -2 / fn,
            0,
            -(left + right) / rl,
            -(top + bottom) / tb,
            -(far + near) / fn,
            1
        ]);
    }
    static lookAt(position, target, up = vec3.up) {
        if (position.equals(target)) {
            return this.identity;
        }
        let z = vec3.difference(position, target).normalize();
        let x = vec3.cross(up, z).normalize();
        let y = vec3.cross(z, x).normalize();
        return new mat4([
            x.x,
            y.x,
            z.x,
            0,
            x.y,
            y.y,
            z.y,
            0,
            x.z,
            y.z,
            z.z,
            0,
            -vec3.dot(x, position),
            -vec3.dot(y, position),
            -vec3.dot(z, position),
            1
        ]);
    }
    static product(m1, m2, result = null) {
        let a00 = m1.at(0), a01 = m1.at(1), a02 = m1.at(2), a03 = m1.at(3), a10 = m1.at(4), a11 = m1.at(5), a12 = m1.at(6), a13 = m1.at(7), a20 = m1.at(8), a21 = m1.at(9), a22 = m1.at(10), a23 = m1.at(11), a30 = m1.at(12), a31 = m1.at(13), a32 = m1.at(14), a33 = m1.at(15);
        let b00 = m2.at(0), b01 = m2.at(1), b02 = m2.at(2), b03 = m2.at(3), b10 = m2.at(4), b11 = m2.at(5), b12 = m2.at(6), b13 = m2.at(7), b20 = m2.at(8), b21 = m2.at(9), b22 = m2.at(10), b23 = m2.at(11), b30 = m2.at(12), b31 = m2.at(13), b32 = m2.at(14), b33 = m2.at(15);
        if (result) {
            result.set([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
            return result;
        }
        else {
            return new mat4([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
            ]);
        }
    }
}
mat4.identity = new mat4().setIdentity();
mat4.m0 = new mat4();
mat4.m1 = new mat4();
class quat {
    constructor() {
        this.values = new Float32Array(4);
        this.setIdentity();
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    get w() {
        return this.values[3];
    }
    set x(value) {
        this.values[0] = value;
    }
    set y(value) {
        this.values[1] = value;
    }
    set z(value) {
        this.values[2] = value;
    }
    set w(value) {
        this.values[3] = value;
    }
    at(index) {
        return this.values[index];
    }
    reset() {
        for (let i = 0; i < 4; i++) {
            this.values[i] = 0;
        }
    }
    copy(dest = null) {
        if (!dest)
            dest = new quat();
        for (let i = 0; i < 4; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    }
    roll() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.atan2(2.0 * (x * y + w * z), w * w + x * x - y * y - z * z);
    }
    pitch() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.atan2(2.0 * (y * z + w * x), w * w - x * x - y * y + z * z);
    }
    yaw() {
        return Math.asin(2.0 * (this.x * this.z - this.w * this.y));
    }
    equals(vector, threshold = EPSILON) {
        for (let i = 0; i < 4; i++) {
            if (Math.abs(this.values[i] - vector.at(i)) > threshold)
                return false;
        }
        return true;
    }
    setIdentity() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 1;
        return this;
    }
    calculateW() {
        let x = this.x, y = this.y, z = this.z;
        this.w = -(Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z)));
        return this;
    }
    static dot(q1, q2) {
        return q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
    }
    inverse() {
        let dot = quat.dot(this, this);
        if (!dot) {
            this.setIdentity();
            return this;
        }
        let invDot = dot ? 1.0 / dot : 0;
        this.x *= -invDot;
        this.y *= -invDot;
        this.z *= -invDot;
        this.w *= invDot;
        return this;
    }
    conjugate() {
        this.values[0] *= -1;
        this.values[1] *= -1;
        this.values[2] *= -1;
        return this;
    }
    length() {
        let x = this.x, y = this.y, z = this.z, w = this.w;
        return Math.sqrt(x * x + y * y + z * z + w * w);
    }
    normalize(dest = null) {
        if (!dest)
            dest = this;
        let x = this.x, y = this.y, z = this.z, w = this.w;
        let length = Math.sqrt(x * x + y * y + z * z + w * w);
        if (!length) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            dest.w = 0;
            return dest;
        }
        length = 1 / length;
        dest.x = x * length;
        dest.y = y * length;
        dest.z = z * length;
        dest.w = w * length;
        return dest;
    }
    add(other) {
        for (let i = 0; i < 4; i++) {
            this.values[i] += other.at(i);
        }
        return this;
    }
    // 这个是左到右结合 this.cross.other
    multiply(other) {
        let q1x = this.values[0], q1y = this.values[1], q1z = this.values[2], q1w = this.values[3];
        let q2x = other.x, q2y = other.y, q2z = other.z, q2w = other.w;
        this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        this.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        this.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return this;
    }
    multiplyVec3(vector, dest = null) {
        if (!dest)
            dest = new vec3();
        let x = vector.x, y = vector.y, z = vector.z;
        let qx = this.x, qy = this.y, qz = this.z, qw = this.w;
        //
        let ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
        dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return dest;
    }
    toMat4(dest = null) {
        if (!dest)
            dest = new mat4();
        let x = this.x, y = this.y, z = this.z, w = this.w, x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2;
        dest.set([
            1 - (yy + zz),
            xy + wz,
            xz - wy,
            0,
            (xy - wz),
            (1 - (xx + zz)),
            (yz + wx),
            0,
            xz + wy,
            yz - wx,
            1 - (xx + yy),
            0,
            0,
            0,
            0,
            1
        ]);
        return dest;
    }
    static sum(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        dest.x = q1.x + q2.x;
        dest.y = q1.y + q2.y;
        dest.z = q1.z + q2.z;
        dest.w = q1.w + q2.w;
        return dest;
    }
    static product(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        let q1x = q1.x, q1y = q1.y, q1z = q1.z, q1w = q1.w, q2x = q2.x, q2y = q2.y, q2z = q2.z, q2w = q2.w;
        dest.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        dest.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        dest.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        dest.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return dest;
    }
    static cross(q1, q2, dest = null) {
        if (!dest)
            dest = new quat();
        let q1x = q1.x, q1y = q1.y, q1z = q1.z, q1w = q1.w, q2x = q2.x, q2y = q2.y, q2z = q2.z, q2w = q2.w;
        dest.x = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
        dest.y = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        dest.z = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
        dest.w = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
        return dest;
    }
    static shortMix(q1, q2, time, dest = null) {
        if (!dest)
            dest = new quat();
        if (time <= 0.0) {
            q1.copy(q1);
            return dest;
        }
        else if (time >= 1.0) {
            q2.copy(dest);
            return dest;
        }
        let cos = quat.dot(q1, q2), q2a = q2.copy();
        if (cos < 0.0) {
            q2a.inverse();
            cos = -cos;
        }
        let k0, k1;
        if (cos > 0.9999) {
            k0 = 1 - time;
            k1 = 0 + time;
        }
        else {
            let sin = Math.sqrt(1 - cos * cos);
            let angle = Math.atan2(sin, cos);
            let oneOverSin = 1 / sin;
            k0 = Math.sin((1 - time) * angle) * oneOverSin;
            k1 = Math.sin((0 + time) * angle) * oneOverSin;
        }
        dest.x = k0 * q1.x + k1 * q2a.x;
        dest.y = k0 * q1.y + k1 * q2a.y;
        dest.z = k0 * q1.z + k1 * q2a.z;
        dest.w = k0 * q1.w + k1 * q2a.w;
        return dest;
    }
    static mix(q1, q2, time, dest = null) {
        if (!dest)
            dest = new quat();
        let cosHalfTheta = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        if (Math.abs(cosHalfTheta) >= 1.0) {
            q1.copy(dest);
            return dest;
        }
        let halfTheta = Math.acos(cosHalfTheta), sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
        if (Math.abs(sinHalfTheta) < 0.001) {
            dest.x = q1.x * 0.5 + q2.x * 0.5;
            dest.y = q1.y * 0.5 + q2.y * 0.5;
            dest.z = q1.z * 0.5 + q2.z * 0.5;
            dest.w = q1.w * 0.5 + q2.w * 0.5;
            return dest;
        }
        let ratioA = Math.sin((1 - time) * halfTheta) / sinHalfTheta, ratioB = Math.sin(time * halfTheta) / sinHalfTheta;
        dest.x = q1.x * ratioA + q2.x * ratioB;
        dest.y = q1.y * ratioA + q2.y * ratioB;
        dest.z = q1.z * ratioA + q2.z * ratioB;
        dest.w = q1.w * ratioA + q2.w * ratioB;
        return dest;
    }
    static fromAxis(axis, angle, dest = null) {
        if (!dest)
            dest = new quat();
        angle *= 0.5;
        let sin = Math.sin(angle);
        dest.x = axis.x * sin;
        dest.y = axis.y * sin;
        dest.z = axis.z * sin;
        dest.w = Math.cos(angle);
        return dest;
    }
}
quat.identity = new quat().setIdentity();
quat.q0 = new quat();
quat.q1 = new quat();
quat.q2 = new quat();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/Application */ "./src/common/Application.ts");

const canvas = document.getElementById('canvas');
canvas.width = 300;
canvas.height = 300;
const base = new _common_Application__WEBPACK_IMPORTED_MODULE_0__["BasicWebGLApplication"](canvas);
base.drawRectByInterleavedVBO();


/***/ }),

/***/ "./src/webgl/Helper.ts":
/*!*****************************!*\
  !*** ./src/webgl/Helper.ts ***!
  \*****************************/
/*! exports provided: EShaderType, EGLSLESDataType, GLUniformInfo, GLAttribInfo, Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShaderType", function() { return EShaderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGLSLESDataType", function() { return EGLSLESDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLUniformInfo", function() { return GLUniformInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLAttribInfo", function() { return GLAttribInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
// 枚举类
var EShaderType;
(function (EShaderType) {
    EShaderType[EShaderType["VS_SHADER"] = 0] = "VS_SHADER";
    EShaderType[EShaderType["FS_SHADER"] = 1] = "FS_SHADER";
})(EShaderType || (EShaderType = {}));
var EGLSLESDataType;
(function (EGLSLESDataType) {
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    EGLSLESDataType[EGLSLESDataType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    EGLSLESDataType[EGLSLESDataType["INT_VEC2"] = 35667] = "INT_VEC2";
    EGLSLESDataType[EGLSLESDataType["INT_VEC3"] = 35668] = "INT_VEC3";
    EGLSLESDataType[EGLSLESDataType["INT_VEC4"] = 35669] = "INT_VEC4";
    EGLSLESDataType[EGLSLESDataType["BOOL"] = 35670] = "BOOL";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    EGLSLESDataType[EGLSLESDataType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    EGLSLESDataType[EGLSLESDataType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    EGLSLESDataType[EGLSLESDataType["SAMPLER_2D"] = 35677] = "SAMPLER_2D";
    EGLSLESDataType[EGLSLESDataType["SAMPLER_CUBE"] = 35678] = "SAMPLER_CUBE";
    EGLSLESDataType[EGLSLESDataType["FLOAT"] = 5126] = "FLOAT";
    EGLSLESDataType[EGLSLESDataType["INT"] = 5124] = "INT";
})(EGLSLESDataType || (EGLSLESDataType = {}));
class GLUniformInfo {
    constructor(size, type, loc) {
        this.size = size;
        this.type = type;
        this.location = loc;
    }
}
class GLAttribInfo {
    constructor(size, type, loc) {
        this.size = size;
        this.type = type;
        this.location = loc;
    }
}
class Helper {
    /**
     * 获取webgl能力信息
     * @param gl
     */
    static printStates(gl) {
        // 所有的boolean状态变量，共9个
        console.log("1. isBlendEnable = " + gl.isEnabled(gl.BLEND)); // 一个像素的新旧颜色混合算法
        console.log("2. isCullFaceEnable = " + gl.isEnabled(gl.CULL_FACE));
        console.log("3. isDepthTestEnable = " + gl.isEnabled(gl.DEPTH_TEST));
        console.log("4. isDitherEnable = " + gl.isEnabled(gl.DITHER));
        console.log("5. isPolygonOffsetFillEnable = " + gl.isEnabled(gl.POLYGON_OFFSET_FILL));
        console.log("6. isSampleAlphtToCoverageEnable = " + gl.isEnabled(gl.SAMPLE_ALPHA_TO_COVERAGE));
        console.log("7. isSampleCoverageEnable = " + gl.isEnabled(gl.SAMPLE_COVERAGE));
        console.log("8. isScissorTestEnable = " + gl.isEnabled(gl.SCISSOR_TEST));
        console.log("9. isStencilTestEnable = " + gl.isEnabled(gl.STENCIL_TEST));
    }
    /**
     * 获取webgl信心
     * @param gl
     */
    static printWebGLInfo(gl) {
        console.log("renderer = " + gl.getParameter(gl.RENDERER));
        console.log("version = " + gl.getParameter(gl.VERSION));
        console.log("vendor = " + gl.getParameter(gl.VENDOR));
        console.log("glsl version = " + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    }
    /**
     * 创建着色器
     * @param gl
     * @param type
     */
    static createShader(gl, type) {
        let shader = null;
        if (type === EShaderType.VS_SHADER) {
            shader = gl.createShader(gl.VERTEX_SHADER);
        }
        else {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        }
        if (shader === null) {
            throw new Error('webglshader 创建失败');
        }
        return shader;
    }
    /**
     * 编译着色器
     * @param gl
     * @param code
     * @param shader
     */
    static compileShader(gl, code, shader) {
        // 载入shader源码
        gl.shaderSource(shader, code);
        gl.compileShader(shader);
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false) {
            // 弹出对话框，显示错误原因
            alert(gl.getShaderInfoLog(shader));
            // 删除shader，防止内存泄露
            gl.deleteShader(shader);
            return false;
        }
        return true;
    }
    /**
     * 创建glsl程序
     * @param gl
     */
    static createProgram(gl) {
        let program = gl.createProgram();
        if (program === null) {
            throw new Error('webgl program 创建失败');
        }
        return program;
    }
    /**
     * 链接glsl程序
     * @param gl
     * @param program
     * @param vsShader
     * @param fsShader
     * @param beforeProgramLink
     * @param afterProgramLink
     */
    static linkProgram(gl, // 渲染上下文对象
    program, // 链接器对象
    vsShader, // 要链接的顶点着色器
    fsShader, // 要链接的片段着色器
    beforeProgramLink = null, afterProgramLink = null) {
        // 1、使用attachShader方法将顶点和片段着色器与当前的连接器相关联
        gl.attachShader(program, vsShader);
        gl.attachShader(program, fsShader);
        // 2、在调用linkProgram方法之前，按需触发beforeProgramLink回调函数
        if (beforeProgramLink !== null) {
            beforeProgramLink(gl, program);
        }
        // 3、调用linkProgram进行链接操作
        gl.linkProgram(program);
        // 4、使用带gl.LINK_STATUS参数的getProgramParameter方法，进行链接状态检查
        if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
            // 4.1 如果链接出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert(gl.getProgramInfoLog(program));
            // 4.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader(vsShader);
            gl.deleteShader(fsShader);
            gl.deleteProgram(program);
            // 4.3 返回链接失败状态
            return false;
        }
        // 5、使用validateProgram进行链接验证
        gl.validateProgram(program);
        // 6、使用带gl.VALIDATE_STATUS参数的getProgramParameter方法，进行验证状态检查
        if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
            // 6.1 如果验证出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert(gl.getProgramInfoLog(program));
            // 6.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader(vsShader);
            gl.deleteShader(fsShader);
            gl.deleteProgram(program);
            // 6.3 返回链接失败状态
            return false;
        }
        // 7、全部正确，按需调用afterProgramLink回调函数
        if (afterProgramLink !== null) {
            afterProgramLink(gl, program);
        }
        // 8、返回链接正确表示
        return true;
    }
    static getProgramActiveAttribs(gl, program, out) {
        //    获取当前active状态的attribute和uniform数量，必须在link后获取
        let count = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        //很重要一点，所谓active是指uniform已经被使用的，否则不属于uniform,uniform在shader中必须是读取，不能赋值
        //很重要一点，attribute在shader中只能读取，不能赋值,如果没有被使用的话，也是不算入activeAttrib中去的
        for (let i = 0; i < count; i++) {
            let info = gl.getActiveAttrib(program, i);
            if (info) {
                out[info.name] = new GLAttribInfo(info.size, info.type, gl.getAttribLocation(program, info.name));
            }
        }
    }
    static getProgramActiveUniform(gl, program, out) {
        let count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < count; i++) {
            let info = gl.getActiveUniform(program, i);
            if (info) {
                let loc = gl.getUniformLocation(program, info.name);
                if (loc !== null) {
                    out[info.name] = new GLUniformInfo(info.size, info.type, loc);
                }
            }
        }
    }
    static createBuffer(gl) {
        let buffer = gl.createBuffer();
        if (buffer === null) {
            throw new Error("WebGLBuffer创建失败！");
        }
        return buffer;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9BcHBsaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnRhaW5lci9UeXBlZEFycmF5TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL21hdGgvTWF0aEhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL21hdGgvVFNNLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRTtBQUN6QztBQUNPO0FBQ1c7QUFJ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LENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQUEsQ0FBQztRQUNyQyxJQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRztZQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUFBLENBQUM7UUFFckMsSUFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUc7WUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFBQSxDQUFDO1FBQ3JDLElBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFHO1lBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQUEsQ0FBQztRQUVyQyxJQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRztZQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUFBLENBQUM7UUFDckMsSUFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUc7WUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFBQSxDQUFDO0lBQ3pDLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFHLElBQVUsRUFBRSxJQUFVLEVBQUUsUUFBZ0IsUUFBUTtRQUUxRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBRyx1QkFBdUI7UUFDM0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBRSx1QkFBdUI7SUFDL0QsQ0FBQztJQUVELGtCQUFrQjtJQUNYLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBRyxJQUFVLEVBQUUsSUFBVSxFQUFFLE1BQW1CLElBQUk7UUFFN0UsSUFBSyxHQUFHLEtBQUssSUFBSSxFQUNqQjtZQUNJLEdBQUcsR0FBRyxJQUFJLHlDQUFJLEVBQUUsQ0FBQztTQUNwQjtRQUNELHNCQUFzQjtRQUN0Qix5Q0FBSSxDQUFDLEdBQUcsQ0FBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLENBQUM7UUFDakIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFHLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBWTtRQUVuRTs7Ozs7Ozs7O1VBU0U7UUFDRixJQUFJLE1BQU0sR0FBUyxVQUFVLENBQUMsaUJBQWlCLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsUUFBUTtRQUN2RSxJQUFJLFdBQVcsR0FBUyx5Q0FBSSxDQUFDLFVBQVUsQ0FBRSxNQUFNLEVBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQyxtQkFBbUI7UUFFNUUsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLHlDQUFJLENBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLHlDQUFJLENBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFFaEgsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLHlDQUFJLENBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLHlDQUFJLENBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFFaEgsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLHlDQUFJLENBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLHlDQUFJLENBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFFaEgsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLHlDQUFJLENBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUUsQ0FBQyxDQUFFLElBQUk7UUFDaEgsSUFB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QUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUcsTUFBWSxFQUFFLE9BQWEsRUFBRSxPQUFvQixJQUFJO1FBRXJFLElBQUssQ0FBQyxJQUFJO1lBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUcsTUFBWSxFQUFFLE9BQWEsRUFBRSxPQUFvQixJQUFJO1FBRTVFLElBQUssQ0FBQyxJQUFJO1lBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7QUFFZSxPQUFFLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFDN0IsU0FBSSxHQUFHLElBQUksSUFBSSxDQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFDaEMsVUFBSyxHQUFHLElBQUksSUFBSSxDQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBQ2hDLFNBQUksR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBQ2hDLFlBQU8sR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUNsQyxhQUFRLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUVwQyxTQUFJLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFFeEMsT0FBRSxHQUFHLElBQUksSUFBSSxDQUFFLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0FBQzdCLE9BQUUsR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUUsQ0FBQztBQUM3QixPQUFFLEdBQUcsSUFBSSxJQUFJLENBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFHakMsTUFBTSxJQUFJO0lBeUZiLFlBQXFCLFNBQTBCLElBQUk7UUF2RjVDLFdBQU0sR0FBRyxJQUFJLFlBQVksQ0FBRSxDQUFDLENBQUUsQ0FBQztRQXlGbEMsSUFBSyxNQUFNLEVBQ1g7WUFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztTQUN4QjthQUNEO1lBQ0ksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBakdELElBQVcsQ0FBQztRQUVSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxDQUFDO1FBRVIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLENBQUM7UUFFUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQVcsQ0FBQztRQUVSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxDQUFDLENBQUcsS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBRVgsT0FBTyxJQUFJLElBQUksQ0FBRSxDQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBVyxDQUFDO1FBRVIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLENBQUM7UUFFUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQVcsQ0FBQztRQUVSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxDQUFDO1FBRVIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFXLENBQUMsQ0FBRyxLQUFhO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFnQk0sRUFBRSxDQUFHLEtBQWE7UUFFckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFFLEtBQUssQ0FBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxLQUFLO1FBRVIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0sSUFBSSxDQUFHLE9BQW9CLElBQUk7UUFFbEMsSUFBSyxDQUFDLElBQUk7WUFBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBRyxNQUFZLEVBQUUsU0FBUyxHQUFHLE9BQU87UUFFN0MsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBRSxHQUFHLFNBQVM7WUFDMUMsT0FBTyxLQUFLLENBQUM7UUFFakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7QUFFTSxRQUFHLEdBQVMsSUFBSSxJQUFJLENBQUUsQ0FBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBRSxDQUFDO0FBQy9DLFVBQUssR0FBUyxJQUFJLElBQUksQ0FBRSxDQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFFLENBQUM7QUFDakQsU0FBSSxHQUFTLElBQUksSUFBSSxDQUFFLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUUsQ0FBQztBQUNoRCxVQUFLLEdBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWpDLE9BQUUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3RCLE9BQUUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3RCLE9BQUUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRzFCLE1BQU0sSUFBSTtJQUliLFlBQXFCLFNBQTBCLElBQUk7UUFGNUMsV0FBTSxHQUFHLElBQUksWUFBWSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBSW5DLElBQUssTUFBTSxFQUNYO1lBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBRSxNQUFNLENBQUUsQ0FBQztTQUN0QjthQUVEO1lBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVNLEdBQUcsQ0FBRyxNQUFnQjtRQUV6QixLQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUM1QjtZQUNJLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO1NBQ2xDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLEVBQUUsQ0FBRyxLQUFhO1FBRXJCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBRSxLQUFLLENBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sSUFBSSxDQUFHLE9BQW9CLElBQUk7UUFFbEMsSUFBSyxDQUFDLElBQUk7WUFBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUUvQixLQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUM1QjtZQUNJLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxNQUFNLENBQUcsTUFBWSxFQUFFLFNBQVMsR0FBRyxPQUFPO1FBRTdDLEtBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQzVCO1lBQ0ksSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsQ0FBRSxHQUFHLFNBQVM7Z0JBQzFELE9BQU8sS0FBSyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBRyxLQUFhLEVBQUUsT0FBb0IsSUFBSTtRQUVuRCxJQUFLLElBQUksS0FBSyxJQUFJLEVBQ2xCO1lBQ0ksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUU7WUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFO1lBQ3JDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBRTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUU7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFNBQVMsQ0FBRyxLQUFhLEVBQUUsT0FBb0IsSUFBSTtRQUV0RCxJQUFLLElBQUksS0FBSyxJQUFJLEVBQ2xCO1lBQ0ksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEtBQUssR0FBRyxDQUFDLENBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsS0FBSyxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxLQUFLLEdBQUcsRUFBRSxDQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFdBQVcsQ0FBRyxPQUFvQixJQUFJO1FBRXpDLElBQUssSUFBSSxLQUFLLElBQUksRUFDbEI7WUFDSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxRQUFRLENBQUcsT0FBb0IsSUFBSTtRQUV0QyxJQUFLLElBQUksS0FBSyxJQUFJLEVBQ2xCO1lBQ0ksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sUUFBUSxDQUFHLE9BQW9CLElBQUk7UUFFdEMsSUFBSyxJQUFJLEtBQUssSUFBSSxFQUNsQjtZQUNJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFFBQVEsQ0FBRyxPQUFvQixJQUFJO1FBRXRDLElBQUssSUFBSSxLQUFLLElBQUksRUFDbEI7WUFDSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxPQUFPLENBQUcsR0FBVyxFQUFFLE9BQW9CLElBQUk7UUFFbEQsSUFBSyxHQUFHLEtBQUssQ0FBQyxFQUNkO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBRSxDQUFDO1NBQ2hDO2FBQU0sSUFBSyxHQUFHLEtBQUssQ0FBQyxFQUNyQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUUsQ0FBQztTQUNoQzthQUNEO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVNLFdBQVc7UUFFZCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sU0FBUztRQUVaLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQ3BELE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUNwRCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLE1BQU0sQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sV0FBVztRQUVkLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQzlGLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUM5RixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFDaEcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFdkcsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWxDLE9BQU8sQ0FBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBRSxDQUFDO0lBQzdHLENBQUM7SUFFTSxPQUFPLENBQUcsR0FBUztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQzFGLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUMxRixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFDNUYsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFbkcsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUM3QixLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWxDLElBQUksR0FBRyxHQUFHLENBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUUsQ0FBQztRQUU1RyxJQUFLLENBQUMsR0FBRztZQUNMLE9BQU8sS0FBSyxDQUFDO1FBRWpCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhCLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDcEUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUUsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUM7UUFFckUsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFFBQVEsQ0FBRyxNQUFZO1FBRTFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDbkcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUNuRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3JHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFdkcsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDbkIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQ25CLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUNuQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFN0QsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDcEIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBRTdELEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3BCLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3BCLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ3JCLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUU5RCxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFOUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFlBQVksQ0FBRyxNQUFZLEVBQUUsT0FBb0IsSUFBSTtRQUV4RCxJQUFLLENBQUMsSUFBSTtZQUFHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBQ2hHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQztRQUNoRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFakcsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFlBQVksQ0FBRyxNQUFZLEVBQUUsT0FBb0IsSUFBSTtRQUV4RCxJQUFLLENBQUMsSUFBSTtZQUFHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUVyRyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTztJQUNBLFNBQVMsQ0FBRyxNQUFZO1FBRTNCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLENBQUMsQ0FBQztRQUV6RixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sS0FBSyxDQUFHLE1BQVk7UUFFdkIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFDWixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFHLEtBQWEsRUFBRSxJQUFVO1FBRXJDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFZixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7UUFFaEQsSUFBSyxDQUFDLE1BQU07WUFDUixPQUFPLElBQUksQ0FBQztRQUVoQixJQUFLLE1BQU0sS0FBSyxDQUFDLEVBQ2pCO1lBQ0ksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDcEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNaLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDWixDQUFDLElBQUksTUFBTSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUM5RixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsRUFDOUYsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFckcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdB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R0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLEVBQUUsRUFBRSxDQUFDLENBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV2QyxPQUFPLElBQUksSUFBSSxDQUFFO1lBQ2IsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUM7WUFFRCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRSxRQUFRLENBQUU7WUFDeEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRSxRQUFRLENBQUU7WUFDeEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsRUFBRSxRQUFRLENBQUU7WUFDeEIsQ0FBQztTQUNKLENBQUUsQ0FBQztJQUNSLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFHLEVBQVEsRUFBRSxFQUFRLEVBQUUsU0FBc0IsSUFBSTtRQUVsRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUN0RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFDdEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQ3hFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRS9FLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFFLEVBQ3RFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBRSxFQUN0RSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLENBQUUsRUFDeEUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxDQUFFLENBQUM7UUFFL0UsSUFBSyxNQUFNLEVBQ1g7WUFDSSxNQUFNLENBQUMsR0FBRyxDQUFFO2dCQUNSLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUU3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFFN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBRTdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2FBQ2hELENBQUUsQ0FBQztZQUVKLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBRUQ7WUFDSSxPQUFPLElBQUksSUFBSSxDQUFFO2dCQUNiLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUU3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFFN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7Z0JBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO2dCQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztnQkFDN0MsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFH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LENBQUMsQ0FBQztRQUN4RSxLQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUMvQjtZQUNJLElBQUksSUFBSSxHQUEyQixFQUFFLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQ3JFLElBQUssSUFBSSxFQUNUO2dCQUNJLElBQUksR0FBRyxHQUFnQyxFQUFFLENBQUMsa0JBQWtCLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztnQkFDbkYsSUFBSyxHQUFHLEtBQUssSUFBSSxFQUNqQjtvQkFDSSxHQUFHLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLElBQUksYUFBYSxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUUsQ0FBQztpQkFDckU7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUcsRUFBeUI7UUFFM0MsSUFBSSxNQUFNLEdBQXVCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuRCxJQUFLLE1BQU0sS0FBSyxJQUFJLEVBQ3BCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7RVNoYWRlclR5cGUsIEdMQXR0cmliTWFwLCBHTFVuaWZvcm1NYXAsIEhlbHBlcn0gZnJvbSBcIi4uL3dlYmdsL0hlbHBlclwiO1xuaW1wb3J0IHttYXQ0LCB2ZWMzfSBmcm9tIFwiLi9tYXRoL1RTTVwiO1xuaW1wb3J0IHtNYXRoSGVscGVyfSBmcm9tIFwiLi9tYXRoL01hdGhIZWxwZXJcIjtcbmltcG9ydCBUeXBlZEFycmF5TGlzdCBmcm9tIFwiLi9jb250YWluZXIvVHlwZWRBcnJheUxpc3RcIjtcblxuLy8gcmVnaW9uIOWumuaXtuWZqCBUaW1lclxuZXhwb3J0IHR5cGUgVGltZXJDYWxsYmFjayA9IChpZDogbnVtYmVyLCBkYXRhOiBhbnkpID0+IHZvaWQ7XG5jbGFzcyBUaW1lciB7XG4gICAgaWQ6IG51bWJlciA9IC0xO1xuICAgIC8vIOagh+iusOW9k+WJjeWumuaXtuWZqOaYr+WQpuacieaViFxuICAgIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrXG4gICAgY2FsbGJhY2tEYXRhOiBhbnkgPSB1bmRlZmluZWRcbiAgICBjb3VudGRvd246IG51bWJlciA9IDBcbiAgICB0aW1lb3V0OiBudW1iZXIgPSAwXG4gICAgb25seU9uY2U6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiBUaW1lckNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIH1cbn1cbi8vIGVuZHJlZ2lvblxuXG5cbi8vIHJlZ2lvbiDkuovku7bns7vnu59cbi8vIOS6i+S7tuaemuS4viBUT0RPIOS9v+eUqOS9jeenu+aemuS4vlxuZXhwb3J0IGVudW0gRUlucHV0RXZlbnRUeXBlIHtcbiAgICBNT1VTRUVWRU5ULFxuICAgIE1PVVNFRE9XTixcbiAgICBNT1VTRVVQLFxuICAgIE1PVVNFTU9WRSxcbiAgICBNT1VTRURSQUcsXG4gICAgS0VZQk9BUkRFVkVOVCxcbiAgICBLRVlVUCxcbiAgICBLRVlET1dOLFxuICAgIEtFWVBSRVNTXG59XG5cbi8vIOS6i+S7tuWfuuexu1xuZXhwb3J0IGNsYXNzIENhbnZhc0lucHV0RXZlbnQge1xuICAgIGFsdEtleTogYm9vbGVhbjtcbiAgICBjdHJsS2V5OiBib29sZWFuXG4gICAgc2hpZnRLZXk6IGJvb2xlYW5cbiAgICB0eXBlOiBFSW5wdXRFdmVudFR5cGVcbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBFSW5wdXRFdmVudFR5cGUgPSBFSW5wdXRFdmVudFR5cGUuTU9VU0VFVkVOVCwgYWx0S2V5OiBib29sZWFuID0gZmFsc2UsIGN0cmxLZXk6Ym9vbGVhbiA9IGZhbHNlLCBzaGlmdEtleTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYWx0S2V5ID0gYWx0S2V5O1xuICAgICAgICB0aGlzLmN0cmxLZXkgPSBjdHJsS2V5XG4gICAgICAgIHRoaXMuc2hpZnRLZXkgPSBzaGlmdEtleVxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgfVxufVxudHlwZSB2ZWMyID0ge307XG4vLyBjYW52YXPpvKDmoIfkuovku7ZcbmV4cG9ydCBjbGFzcyBDYW52YXNNb3VzZUV2ZW50IGV4dGVuZHMgQ2FudmFzSW5wdXRFdmVudCB7XG4gICAgLy8gVE9ETyDooajnpLrmjInkuIvpvKDmoIflk6rkuIDkuKrplK7vvIzkvb/nlKjmnprkuL5cbiAgICBidXR0b246IG51bWJlcjtcbiAgICBjYW52YXNQb3NpdGlvbjogdmVjMjtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBFSW5wdXRFdmVudFR5cGUsIGNhbnZhc1BvczogdmVjMiwgYnV0dG9uOiBudW1iZXIsIGFsdEtleTogYm9vbGVhbj1mYWxzZSwgY3RybEtleTogYm9vbGVhbj1mYWxzZSxzaGlmdEtleTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIGFsdEtleSwgY3RybEtleSwgc2hpZnRLZXkpO1xuICAgICAgICB0aGlzLmNhbnZhc1Bvc2l0aW9uID0gY2FudmFzUG9zO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvblxuICAgIH1cbn1cblxuLy8g6ZSu55uY5LqL5Lu2XG5leHBvcnQgY2xhc3MgQ2FudmFzS2V5Qm9hcmRFdmVudCBleHRlbmRzIENhbnZhc0lucHV0RXZlbnQge1xuICAgIGtleTogc3RyaW5nXG4gICAga2V5Q29kZTogbnVtYmVyXG4gICAgcmVwZWF0OiBib29sZWFuXG4gICAgY29uc3RydWN0b3IodHlwZTogRUlucHV0RXZlbnRUeXBlLCBrZXk6IHN0cmluZywga2V5Q29kZTogbnVtYmVyLCByZXBlYXQ6IGJvb2xlYW4sIGFsdEtleTogYm9vbGVhbj1mYWxzZSwgY3RybEtleTpib29sZWFuID0gZmFsc2UsIHNoaWZ0S2V5OmJvb2xlYW49ZmFsc2UpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgYWx0S2V5LCBjdHJsS2V5LCBzaGlmdEtleSk7XG4gICAgICAgIHRoaXMua2V5PSBrZXlcbiAgICAgICAgdGhpcy5rZXlDb2RlID0ga2V5Q29kZVxuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdFxuICAgIH1cbn1cbi8vIGVuZHJlZ2lvblxuXG5cbi8qKlxuICog5Li76KaB5YGa5LiJ5Lu25LqL77ya5pu05paw44CB6YeN57uY44CB5LqL5Lu25YiG5ouoXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBpbXBsZW1lbnRzIEV2ZW50TGlzdGVuZXJPYmplY3R7XG4gICAgLy8g5a6a5pe25Zmo5a655ZmoXG4gICAgcHVibGljIHRpbWVyczogVGltZXJbXSA9IFtdXG4gICAgLy8g5a6a5pe25ZmoaWTnlJ/miJBcbiAgICBwcml2YXRlIF90aW1lSWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgX2ZwczogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgaXNGbGlwWUNvb3JkOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwdWJsaWMgaXNTdXBwb3J0TW91c2VNb3ZlOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBfaXNNb3VzZURvd246IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIF9pc1JpZ2h0TW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9zdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfcmVxdWVzdElkOiBudW1iZXIgPSAtMTtcbiAgICBwcm90ZWN0ZWQgX2xhc3RUaW1lICE6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3N0YXJ0VGltZSAhOiBudW1iZXI7XG4gICAgcHVibGljIGZyYW1lQ2FsbGJhY2s6ICgoYXBwOiBBcHBsaWNhdGlvbikgPT4gdm9pZCkgfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N1cHBvcnRNb3VzZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZUNhbGxiYWNrID0gbnVsbFxuXG4gICAgICAgIC8vIGNhbnZhc+WFg+e0oOiDveWkn+ebkeWQrOm8oOagh+S6i+S7tlxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCBcIm1vdXNldXBcIiwgdGhpcywgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZW1vdmVcIiwgdGhpcywgZmFsc2UgKTtcblxuICAgICAgICAvLyDlvojph43opoHkuIDngrnvvIzplK7nm5jkuovku7bkuI3og73lnKhjYW52YXPkuK3op6blj5HvvIzkvYbmmK/og73lnKjlhajlsYDnmoR3aW5kb3flr7nosaHkuK3op6blj5FcbiAgICAgICAgLy8g5Zug5q2k5oiR5Lus6IO95Zyod2luZG935a+56LGh5Lit55uR5ZCs6ZSu55uY5LqL5Lu2XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcywgZmFsc2UgKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5dXBcIiwgdGhpcywgZmFsc2UgKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwia2V5cHJlc3NcIiwgdGhpcywgZmFsc2UgKTtcblxuICAgICAgICBkb2N1bWVudC5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVtb3ZlVGltZXIoaWQ6IG51bWJlcikgOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGZvdW5kOiBib29sZWFuID0gZmFsc2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGxldCB0aW1lcjogVGltZXIgPSB0aGlzLnRpbWVyc1tpXVxuICAgICAgICAgICAgICAgIHRpbWVyLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kXG4gICAgfVxuXG4gICAgYWRkVGltZXIoY2FsbGJhY2s6IFRpbWVyQ2FsbGJhY2ssIHRpbWVvdXQ6IG51bWJlciA9IDEuMCwgb25seU9uY2U6IGJvb2xlYW4gPSBmYWxzZSwgZGF0YTogYW55ID0gdW5kZWZpbmVkKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHRpbWVyOiBUaW1lclxuICAgICAgICBsZXQgZm91bmQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGltZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGltZXI6IFRpbWVyID0gdGhpcy50aW1lcnNbaV1cbiAgICAgICAgICAgIGlmICh0aW1lci5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRpbWVyLmNhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB0aW1lci5jYWxsYmFja0RhdGEgPSBkYXRhXG4gICAgICAgICAgICAgICAgdGltZXIudGltZW91dD0gdGltZW91dFxuICAgICAgICAgICAgICAgIHRpbWVyLmNvdW50ZG93biA9IHRpbWVvdXRcbiAgICAgICAgICAgICAgICB0aW1lci5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRpbWVyLm9ubHlPbmNlID0gb25seU9uY2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZXIuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS4jeWtmOWcqO+8jOWwseaWsOWIm+W7uuS4gOS4qlRpbWVy5a+56LGhXG4gICAgICAgIHRpbWVyID0gbmV3IFRpbWVyKCBjYWxsYmFjayApO1xuICAgICAgICB0aW1lci5jYWxsYmFja0RhdGEgPSBkYXRhO1xuICAgICAgICB0aW1lci50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgdGltZXIuY291bnRkb3duID0gdGltZW91dDtcbiAgICAgICAgdGltZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRpbWVyLmlkID0gKyt0aGlzLl90aW1lSWQ7IC8vIOeUseS6juWIneWni+WMluaXtmlk5Li6LTEs5omA5Lul5YmNKytcbiAgICAgICAgdGltZXIub25seU9uY2UgPSBvbmx5T25jZTsgLy/orr7nva7mmK/lkKbmmK/kuIDmrKHlm57osIPov5jmmK/ph43lpI3lm57osINcbiAgICAgICAgLy8g5re75Yqg5YiwdGltZXJz5YiX6KGo5Lit5Y67XG4gICAgICAgIHRoaXMudGltZXJzLnB1c2goIHRpbWVyICk7XG4gICAgICAgIC8vIOi/lOWbnuaWsOa3u+WKoOeahHRpbWVy55qEaWTlj7dcbiAgICAgICAgcmV0dXJuIHRpbWVyLmlkO1xuICAgIH1cblxuICAgIC8vIF9oYW5kbGVUaW1lcnPnp4HmnInmlrnms5XooqtBcHBsaWNhdGlvbueahHVwZGF0ZeWHveaVsOiwg+eUqFxuICAgIC8vIHVwZGF0ZeWHveaVsOesrOS6jOS4quWPguaVsOaYr+S7peenkuihqOekuueahOWJjeWQjuW4p+aXtumXtOW3rlxuICAgIC8vIOato+espuWQiF9oYW5kbGVUaW1lcnPlj4LmlbDopoHmsYJcbiAgICAvLyDmiJHku6znmoTorqHml7blmajkvp3otZbkuo5yZXF1ZXN0QW5pbWF0aW9uRnJhbWXlm57osINcbiAgICAvLyDlpoLmnpzlvZPliY1BcHBsaWNhdGlvbuayoeacieiwg+eUqHN0YXJ055qE6K+dXG4gICAgLy8g5YiZ6K6h5pe25Zmo5LiN5Lya55Sf5pWIXG4gICAgcHJpdmF0ZSBfaGFuZGxlVGltZXIgKGludGVydmFsU2VjOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRpbWVyOiBUaW1lciA9IHRoaXMudGltZXJzW2ldO1xuICAgICAgICAgICAgaWYgKHRpbWVyLmVuYWJsZWQgPT09IGZhbHNlKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdGltZXIuY291bnRkb3duIC09IGludGVydmFsU2VjXG5cbiAgICAgICAgICAgIGlmICh0aW1lci5jb3VudGRvd24gPCAwLjApIHtcbiAgICAgICAgICAgICAgICB0aW1lci5jYWxsYmFjayh0aW1lci5pZCwgdGltZXIuY2FsbGJhY2tEYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aaC5p6c6K+l6K6h5pe25Zmo6ZyA6KaB6YeN5aSN6Kem5Y+RXG4gICAgICAgICAgICBpZiAoIHRpbWVyLm9ubHlPbmNlID09PSBmYWxzZSApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8g5oiR5Lus6YeN5paw5bCGY291bnRkb3du6K6+572u5Li6dGltZW91dFxuICAgICAgICAgICAgICAgIC8vIOeUseatpOWPr+inge+8jHRpbWVvdXTkuI3kvJrmm7TmlLnvvIzlroPop4Tlrprkuobop6blj5HnmoTml7bpl7Tpl7TpmpRcbiAgICAgICAgICAgICAgICAvLyDmr4/mrKHmm7TmlrDnmoTmmK9jb3VudGRvd27lgJLorqHml7blmahcbiAgICAgICAgICAgICAgICB0aW1lci5jb3VudGRvd24gPSB0aW1lci50aW1lb3V0OyAvL+W+iOeyvuWmmeeahOS4gOS4quaKgOW3p1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICB7ICAvLyDlpoLmnpzor6XorqHml7blmajlj6rpnIDopoHop6blj5HkuIDmrKHvvIzpgqPkuYjmiJHku6zlsLHliKDpmaTmjonor6XorqHml7blmahcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRpbWVyKCB0aW1lci5pZCApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5fbGFzdFRpbWUgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChtc2VjOiBudW1iZXIpOnZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlcChtc2VjKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzUnVubmluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0XG4gICAgfVxuXG4gICAgc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9yZXF1ZXN0SWQpXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGltZSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gLTE7XG4gICAgICAgICAgICB0aGlzLl9zdGFydCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlrZDnsbvph43lhpnnlKjkuo7mm7TmlrBcbiAgICB1cGRhdGUgKGVsYXBzZU1zZWM6IG51bWJlciwgaW50ZXJ2YWxTZWM6IG51bWJlcik6IHZvaWQge31cblxuICAgIC8vIOWtkOexu+mHjeWGmeeUqOS6jua4suafk1xuICAgIHJlbmRlcigpOiB2b2lkIHt9XG5cbiAgICAvLyBoYW5kbGVFdmVudOaYr+aOpeWPo0V2ZW50TGlzdGVuZXJPYmplY3TlrprkuYnnmoTljY/orq7liIblj5HvvIzlv4XpobvopoHlrp7njrBcbiAgICBwdWJsaWMgaGFuZGxlRXZlbnQgKCBldnQ6IEV2ZW50ICk6IHZvaWRcbiAgICB7XG4gICAgICAgIHN3aXRjaCAoIGV2dC50eXBlIClcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIm1vdXNlZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFRE9XTiApICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW91c2V1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vdXNlVXAoIHRoaXMuX3RvQ2FudmFzTW91c2VFdmVudCggZXZ0LCBFSW5wdXRFdmVudFR5cGUuTU9VU0VVUCApICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW91c2Vtb3ZlXCI6XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6caXNTdXBwb3J0TW91c2VNb3Zl5Li6dHJ1Ze+8jOaJjeS8muavj+asoem8oOagh+enu+WKqOinpuWPkW1vdXNlTW92ZeS6i+S7tlxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5pc1N1cHBvcnRNb3VzZU1vdmUgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSggdGhpcy5fdG9DYW52YXNNb3VzZUV2ZW50KCBldnQsIEVJbnB1dEV2ZW50VHlwZS5NT1VTRU1PVkUgKSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlkIzml7bvvIzlpoLmnpzlvZPliY3pvKDmoIfku7vmhI/kuIDkuKrplK7lpITkuo7mjInkuIvnirbmgIHlubbmi5bliqjml7bvvIzop6blj5FkcmFn5LqL5Lu2XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLl9pc01vdXNlRG93biApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW91c2VEcmFnKCB0aGlzLl90b0NhbnZhc01vdXNlRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLk1PVVNFRFJBRyApICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImtleXByZXNzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleVByZXNzKCB0aGlzLl90b0NhbnZhc0tleUJvYXJkRXZlbnQoIGV2dCwgRUlucHV0RXZlbnRUeXBlLktFWVBSRVNTICkgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd24oIHRoaXMuX3RvQ2FudmFzS2V5Qm9hcmRFdmVudCggZXZ0LCBFSW5wdXRFdmVudFR5cGUuS0VZRE9XTiApICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwia2V5dXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5VXAoIHRoaXMuX3RvQ2FudmFzS2V5Qm9hcmRFdmVudCggZXZ0LCBFSW5wdXRFdmVudFR5cGUuS0VZVVAgKSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTW91c2VEb3duICggZXZ0OiBDYW52YXNNb3VzZUV2ZW50ICk6IHZvaWRcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZVVwICggZXZ0OiBDYW52YXNNb3VzZUV2ZW50ICk6IHZvaWRcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU1vdmUgKCBldnQ6IENhbnZhc01vdXNlRXZlbnQgKTogdm9pZFxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vdXNlRHJhZyAoIGV2dDogQ2FudmFzTW91c2VFdmVudCApOiB2b2lkXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uS2V5RG93biAoIGV2dDogQ2FudmFzS2V5Qm9hcmRFdmVudCApOiB2b2lkXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uS2V5VXAgKCBldnQ6IENhbnZhc0tleUJvYXJkRXZlbnQgKTogdm9pZFxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleVByZXNzICggZXZ0OiBDYW52YXNLZXlCb2FyZEV2ZW50ICk6IHZvaWRcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW91c2VDYW52YXMoKSA6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0ZXAodGltZVN0YW1wOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0VGltZSA9PT0gLTEpIHRoaXMuX3N0YXJ0VGltZSA9IHRpbWVTdGFtcFxuICAgICAgICBpZiAodGhpcy5fbGFzdFRpbWUgPT09IC0xKSB0aGlzLl9sYXN0VGltZSA9IHRpbWVTdGFtcFxuICAgICAgICAvLyDorqHnrpflvZPliY3ml7bpl7TngrnkuI7nrKzkuIDmrKHosIPnlKhzdGVw55qE5pe26Ze054K55beuXG4gICAgICAgIGxldCBlbGFwc2VkTXNlYyA9IHRpbWVTdGFtcCAtIHRoaXMuX3N0YXJ0VGltZVxuICAgIC8vICAgIOiuoeeul+W9k+WJjeaXtumXtOeCueWSjOS4iuS4gOasoeaXtumXtOeCueW3ru+8iOW4p+W3ru+8iVxuICAgICAgICBsZXQgaW50ZXJ2YWxTZWMgPSB0aW1lU3RhbXAgLSB0aGlzLl9sYXN0VGltZVxuICAgICAgICBpZiAoaW50ZXJ2YWxTZWMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2ZwcyA9IDEwMDAuMCAvIGludGVydmFsU2VjXG4gICAgICAgIH1cbiAgICAgICAgaW50ZXJ2YWxTZWMgLz0gMTAwMC4wXG4gICAgICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZVN0YW1wXG5cbiAgICAgICAgdGhpcy5faGFuZGxlVGltZXIoaW50ZXJ2YWxTZWMpXG4gICAgICAgIHRoaXMudXBkYXRlKGVsYXBzZWRNc2VjLCBpbnRlcnZhbFNlYylcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuXG4gICAgLy8gIOWmguaenGZyYW1lQ2FsbGJhY2vlm57osIPlh73mlbDkuI3kuLpudWxs77yM5Zue6LCDXG4gICAgICAgIGlmICh0aGlzLmZyYW1lQ2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDYWxsYmFjayh0aGlzKVxuICAgICAgICB9XG4gICAgLy8gICAg6YCS5b2S6LCD55SoXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZWxhcHNlZE1zZWM6IG51bWJlcik6dm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAoZWxhcHNlZE1zZWMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8g6L2s5o2i5Li6Y2FudmFz5LiK55qE5Z2Q5qCH54K5XG4gICAgcHJvdGVjdGVkIHZpZXdwb3J0VG9DYW52YXNDb29yZGluYXRlKGV2dDogTW91c2VFdmVudCk6IHZlYzIge1xuICAgICAgICBsZXQgcmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZ2V0TW91c2VDYW52YXMoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGV2dC50YXJnZXQpIHtcbiAgICAgICAgICAgIGxldCB4OiBudW1iZXIgPSBldnQuY2xpZW50WCAtIHJlY3QubGVmdFxuICAgICAgICAgICAgbGV0IHk6IG51bWJlciA9IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmxpcFlDb29yZCkge1xuICAgICAgICAgICAgICAgIHkgPSB0aGlzLmdldE1vdXNlQ2FudmFzKCkuaGVpZ2h0IC0geVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHt4LCB5fVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXZ0LnRhcmdldCBudWxsJylcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b0NhbnZhc01vdXNlRXZlbnQoZXZ0OiBFdmVudCwgdHlwZTogRUlucHV0RXZlbnRUeXBlKTogQ2FudmFzTW91c2VFdmVudCB7XG4gICAgICAgIC8vIOWQkeS4i+i9rOWei++8jOWwhkV2ZW506L2s5o2i5Li6TW91c2VFdmVudCBUT0RPIOS4uuS7gOS5iOimgeWBmui/meS4qui9rOaNolxuICAgICAgICBsZXQgZXZlbnQ6IE1vdXNlRXZlbnQgPSBldnQgYXMgTW91c2VFdmVudDtcbiAgICAgICAgaWYgKCB0eXBlID09PSBFSW5wdXRFdmVudFR5cGUuTU9VU0VET1dOICYmIGV2ZW50LmJ1dHRvbiA9PT0gMiApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzUmlnaHRNb3VzZURvd24gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSBFSW5wdXRFdmVudFR5cGUuTU9VU0VVUCAmJiBldmVudC5idXR0b24gPT09IDIgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc1JpZ2h0TW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnV0dG9uTnVtOiBudW1iZXIgPSBldmVudC5idXR0b247XG5cbiAgICAgICAgaWYgKCB0aGlzLl9pc1JpZ2h0TW91c2VEb3duICYmIHR5cGUgPT09IEVJbnB1dEV2ZW50VHlwZS5NT1VTRURSQUcgKVxuICAgICAgICB7XG4gICAgICAgICAgICBidXR0b25OdW0gPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5bCG5a6i5oi35Yy655qE6byg5qCHcG9z5Y+Y5o2i5YiwQ2FudmFz5Z2Q5qCH57O75Lit6KGo56S6XG4gICAgICAgIGxldCBtb3VzZVBvc2l0aW9uOiB2ZWMyID0gdGhpcy52aWV3cG9ydFRvQ2FudmFzQ29vcmRpbmF0ZSggZXZlbnQgKTtcbiAgICAgICAgLy8g5bCGRXZlbnTkuIDkupvopoHnlKjliLDnmoTkv6Hmga/kvKDpgJLnu5lDYW52YXNNb3VzZUV2ZW505bm26L+U5ZueXG4gICAgICAgIGxldCBjYW52YXNNb3VzZUV2ZW50OiBDYW52YXNNb3VzZUV2ZW50ID0gbmV3IENhbnZhc01vdXNlRXZlbnQoIHR5cGUsIG1vdXNlUG9zaXRpb24sIGJ1dHRvbk51bSwgZXZlbnQuYWx0S2V5LCBldmVudC5jdHJsS2V5LCBldmVudC5zaGlmdEtleSApO1xuICAgICAgICByZXR1cm4gY2FudmFzTW91c2VFdmVudDtcbiAgICB9XG5cbiAgICAvLyDlsIZET00gRXZlbnTlr7nosaHkv6Hmga/ovazmjaLkuLrmiJHku6zoh6rlt7HlrprkuYnnmoRLZXlib2FyZOS6i+S7tlxuICAgIHByaXZhdGUgX3RvQ2FudmFzS2V5Qm9hcmRFdmVudCAoIGV2dDogRXZlbnQsIHR5cGU6IEVJbnB1dEV2ZW50VHlwZSApOiBDYW52YXNLZXlCb2FyZEV2ZW50XG4gICAge1xuICAgICAgICBsZXQgZXZlbnQ6IEtleWJvYXJkRXZlbnQgPSBldnQgYXMgS2V5Ym9hcmRFdmVudDtcbiAgICAgICAgLy8g5bCGRXZlbnTkuIDkupvopoHnlKjliLDnmoTkv6Hmga/kvKDpgJLnu5lDYW52YXNLZXlCb2FyZEV2ZW505bm26L+U5ZueXG4gICAgICAgIGxldCBjYW52YXNLZXlib2FyZEV2ZW50OiBDYW52YXNLZXlCb2FyZEV2ZW50ID0gbmV3IENhbnZhc0tleUJvYXJkRXZlbnQoIHR5cGUsIGV2ZW50LmtleSwgZXZlbnQua2V5Q29kZSwgZXZlbnQucmVwZWF0LCBldmVudC5hbHRLZXksIGV2ZW50LmN0cmxLZXksIGV2ZW50LnNoaWZ0S2V5ICk7XG4gICAgICAgIHJldHVybiBjYW52YXNLZXlib2FyZEV2ZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYkdMQXBwbGljYXRpb24gZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG4gICAgLy8gZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICAgIHByb3RlY3RlZCBjYW52YXMyRDogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgY3R4MkQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgQ2FtZXJhQXBwbGljYXRpb24gZXh0ZW5kcyBXZWJHTEFwcGxpY2F0aW9uIHtcblxufVxuXG5leHBvcnQgY2xhc3MgQmFzaWNXZWJHTEFwcGxpY2F0aW9uIGV4dGVuZHMgQXBwbGljYXRpb24ge1xuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAgICAvLyDnnYDoibLlmahcbiAgICB2c1NoYWRlcjogV2ViR0xTaGFkZXJcbiAgICBmc1NoYWRlcjogV2ViR0xTaGFkZXJcbiAgICAvLyDlop7liqDop4bnn6npmLXlkozmipXlvbHnn6npmLVcbiAgICBwcm9qZWN0TWF0cml4OiBtYXQ0XG4gICAgdmlld01hdHJpeDogbWF0NFxuICAgIHZpZXdQcm9qZWN0TWF0cml4OiBtYXQ0XG5cblxuICAgIGNvbG9yU2hhZGVyX3ZzOiBzdHJpbmcgPSBgXG4gICAgICAgIC8vIDHjgIEgYXR0cmlidXRl6aG254K55bGe5oCn5aOw5piOXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFQb3NpdGlvbjsgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhQ29sb3I7XG4gICAgXG4gICAgICAgIC8vIDLjgIEgdW5pZm9ybeWPmOmHj+WjsOaYjlxuICAgICAgICB1bmlmb3JtIG1hdDQgdU1WUE1hdHJpeDtcblxuICAgICAgICAvLyAz44CBIHZhcnlpbmflj5jph4/lo7DmmI5cbiAgICAgICAgdmFyeWluZyB2ZWM0IHZDb2xvcjtcbiAgICBcbiAgICAgICAgLy8gNOOAgSDpobbngrnlpITnkIblhaXlj6NtYWlu5Ye95pWwXG4gICAgICAgIHZvaWQgbWFpbih2b2lkKXtcbiAgICAgICAgICAgIC8vIDXjgIEgZ2xfUG9zaXRpb27kuLpWZXJ0ZXggU2hhZGVy5YaF572udmFyeWluZ+WPmOmHj++8jHZhcnlpbmflj5jph4/kvJrooqvkvKDpgJLliLBGcmFnbWVudCBTaGFkZXLkuK3ljrtcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdU1WUE1hdHJpeCAqIHZlYzQoYVBvc2l0aW9uLDEuMCk7IC8vIDbjgIEg5bCG5Z2Q5qCH5YC85LuO5bGA6YOo5Z2Q5qCH57O75Y+Y5o2i5Yiw6KOB5Ymq5Z2Q5qCH57O7XG4gICAgICAgICAgICB2Q29sb3IgPSBhQ29sb3I7IC8vIDfjgIEg5bCG6aKc6Imy5bGe5oCn5Lyg6YCS5YiwRnJhZ21lbnQgU2hhZGVy5Lit5Y67XG4gICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgIGNvbG9yU2hhZGVyX2ZzOiBzdHJpbmcgPSBgXG4gICAgICAgIC8vIOmcgOimgeiuvue9rkdMX0VT57K+5bqmICAgIFxuICAgICAgICAjaWZkZWYgR0xfRVNcbiAgICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiAgICAgICAgI2VuZGlmXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nICB2ZWM0IHZDb2xvcjtcbiAgICAgICAgdm9pZCBtYWluKHZvaWQpe1xuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdkNvbG9yO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICBgO1xuXG4gICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtXG4gICAgYXR0cmliTWFwOiBHTEF0dHJpYk1hcCA9IHt9O1xuICAgIHVuaWZvcm1NYXA6IEdMVW5pZm9ybU1hcCA9IHt9O1xuXG4gICAgdmVydHM6IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT5cbiAgICBpdmJvOiBXZWJHTEJ1ZmZlclxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICBzdXBlcihjYW52YXMpO1xuICAgICAgICBsZXQgY29udGV4dEF0dHJpYnM6IFdlYkdMQ29udGV4dEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIC8vICBXZWJHTOS4iuS4i+aWh+a4suafk+WvueixoemcgOimgeWIm+W7uua3seW6puWSjOaooeadv+e8k+WGsuWMulxuICAgICAgICAgICAgZGVwdGg6IHRydWUsIC8vIOa3seW6pue8k+WGsuWMulxuICAgICAgICAgICAgc3RlbmNpbDogdHJ1ZSwgLy8g5qih5p2/57yT5Yay5Yy6XG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSwgLy8g6aKc6Imy57yT5Yay5Yy6XG4gICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IHRydWUsIC8vIOS4jeS9v+eUqOmihOS5mGFscGhhXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsIC8vIOaKl+mUr+m9v1xuICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxldCBjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IG51bGwgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIGNvbnRleHRBdHRyaWJzKVxuICAgICAgICBpZiAoY3R4ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+aXoOazleWIm+W7uldlYkdMUmVuZGVyaW5nQ29udGV4dOS4iuS4i+aWhycpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbCA9IGN0eFxuXG4gICAgICAgIC8vIFRPRE8g55CG6Kej5LiA5LiL5Luj56CBXG4gICAgICAgIC8vIOWcqOaehOmAoOWHveaVsOS4reWinuWKoOWmguS4i+S7o+eggTpcbiAgICAgICAgLy8g5p6E6YCg5oqV5b2x55+p6Zi1XG4gICAgICAgIHRoaXMucHJvamVjdE1hdHJpeCA9IG1hdDQucGVyc3BlY3RpdmUoIE1hdGhIZWxwZXIudG9SYWRpYW4oIDQ1ICksIHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0LCAwLjEsIDEwMCApO1xuICAgICAgICAvLyDmnoTpgKDop4bnn6npmLVcbiAgICAgICAgdGhpcy52aWV3TWF0cml4ID0gbWF0NC5sb29rQXQoIG5ldyB2ZWMzKCBbIDAsIDAsIDUgXSApLCBuZXcgdmVjMygpICk7XG4gICAgICAgIC8vIOaehOmAoHZpZXdwcm9qZWN0TWF0cml4XG4gICAgICAgIHRoaXMudmlld1Byb2plY3RNYXRyaXggPSBtYXQ0LnByb2R1Y3QoIHRoaXMucHJvamVjdE1hdHJpeCwgdGhpcy52aWV3TWF0cml4ICk7XG5cblxuICAgICAgICAvLyDorr7nva7nqpflj6PljLrln58gVE9ETyDnkIbop6PkuIDkuIvkuKTkuKrljLrln5/lkKvkuYlcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuICAgICAgICAvLyDorr7nva7oo4HliarljLrln59cbiAgICAgICAgdGhpcy5nbC5zY2lzc29yKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG4gICAgICAgIC8vIOmcgOimgeW8gOWQr+ijgeWJqua1i+ivlVxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLlNDSVNTT1JfVEVTVClcblxuICAgICAgICBjb25zb2xlLmxvZygnLS1sYnAgNDAzJywgJ0FwcGxpY2F0aW9uLnRzJywgJ3ByaW50U3RhdGVzJywgSGVscGVyLnByaW50U3RhdGVzKHRoaXMuZ2wpKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tbGJwIDQwMycsICdBcHBsaWNhdGlvbi50cycsICdwcmludFdlYkdMSW5mbycsIEhlbHBlci5wcmludFdlYkdMSW5mbyh0aGlzLmdsKSk7XG5cbiAgICAvLyAgICAg57yW6K+RdmVydGV4IHNoYWRlclxuICAgICAgICB0aGlzLnZzU2hhZGVyID0gSGVscGVyLmNyZWF0ZVNoYWRlcih0aGlzLmdsLCBFU2hhZGVyVHlwZS5WU19TSEFERVIpXG4gICAgICAgIEhlbHBlci5jb21waWxlU2hhZGVyKHRoaXMuZ2wsIHRoaXMuY29sb3JTaGFkZXJfdnMsIHRoaXMudnNTaGFkZXIpXG4gICAgLy8gICAg57yW6K+RZnJhZ21lbnQgc2hhZGVyXG4gICAgICAgIHRoaXMuZnNTaGFkZXIgPSBIZWxwZXIuY3JlYXRlU2hhZGVyKHRoaXMuZ2wsIEVTaGFkZXJUeXBlLkZTX1NIQURFUilcbiAgICAgICAgSGVscGVyLmNvbXBpbGVTaGFkZXIodGhpcy5nbCwgdGhpcy5jb2xvclNoYWRlcl9mcywgdGhpcy5mc1NoYWRlcilcblxuICAgICAgICAvLyDnnYDoibLlmajpk77mjqVcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gSGVscGVyLmNyZWF0ZVByb2dyYW0odGhpcy5nbClcbiAgICAgICAgSGVscGVyLmxpbmtQcm9ncmFtKHRoaXMuZ2wsIHRoaXMucHJvZ3JhbSwgdGhpcy52c1NoYWRlciwgdGhpcy5mc1NoYWRlcilcblxuICAgICAgICB0aGlzLnZlcnRzID0gbmV3IFR5cGVkQXJyYXlMaXN0PEZsb2F0MzJBcnJheT4oRmxvYXQzMkFycmF5LCA2ICo3KVxuICAgICAgICB0aGlzLml2Ym8gPSBIZWxwZXIuY3JlYXRlQnVmZmVyKHRoaXMuZ2wpXG4gICAgfVxuXG4gICAgcHJpbnRQcm9ncmFtQWN0aXZlSW5mb3MoKTogdm9pZCB7XG4gICAgICAgIEhlbHBlci5nZXRQcm9ncmFtQWN0aXZlQXR0cmlicyh0aGlzLmdsLCB0aGlzLnByb2dyYW0sIHRoaXMuYXR0cmliTWFwKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tbGJwIDQ4MCcsICdBcHBsaWNhdGlvbi50cycsICdwcmludFByb2dyYW1BY3RpdmVJbmZvcycsICdhdHRyaWJtYXAnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmF0dHJpYk1hcCkpO1xuXG4gICAgICAgIEhlbHBlci5nZXRQcm9ncmFtQWN0aXZlVW5pZm9ybSh0aGlzLmdsLCB0aGlzLnByb2dyYW0sIHRoaXMudW5pZm9ybU1hcClcbiAgICAgICAgY29uc29sZS5sb2coJy0tbGJwIDQ4NCcsICdBcHBsaWNhdGlvbi50cycsICdwcmludFByb2dyYW1BY3RpdmVJbmZvcycsICd1bmlmb3JtJywgSlNPTi5zdHJpbmdpZnkodGhpcy51bmlmb3JtTWFwKSk7XG4gICAgfVxuXG4gICAgZHJhd1JlY3RCeUludGVybGVhdmVkVkJPICgpIHtcbiAgICAgICAgdGhpcy5wcmludFByb2dyYW1BY3RpdmVJbmZvcygpXG4gICAgICAgIHRoaXMudmVydHMuY2xlYXIoKVxuICAgICAgICBsZXQgZGF0YTogbnVtYmVyW10gPSBbXG4gICAgICAgICAgICAvLyDkuInop5LlvaIwXG4gICAgICAgICAgICAtMC41LCAtMC41LCAwLCAxLCAwLCAwLCAxLCAvLyDlt6bkuIsgIDBcbiAgICAgICAgICAgIDAuNSwgLTAuNSwgMCwgMCwgMSwgMCwgMSwgIC8vIOWPs+S4iyAgMVxuICAgICAgICAgICAgMC41LCAwLjUsIDAsIDAsIDAsIDEsIDAsICAgLy8g5Y+z5LiKICAyXG4gICAgICAgICAgICAvLyDkuInop5LlvaIxXG4gICAgICAgICAgICAwLjUsIDAuNSwgMCwgMCwgMCwgMSwgMCwgICAvLyDlj7PkuIogIDJcbiAgICAgICAgICAgIC0wLjUsIDAuNSwgMCwgMCwgMSwgMCwgMSwgIC8vIOW3puS4iiAgNFxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgMCwgMSwgMCwgMCwgMSAgLy8g5bem5LiLICAwXG4gICAgICAgIF1cbiAgICAgICAgdGhpcy52ZXJ0cy5wdXNoQXJyYXkoZGF0YSlcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLml2Ym8pXG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0cy5zdWJBcnJheSgpLCB0aGlzLmdsLkRZTkFNSUNfRFJBVylcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYXR0cmliTWFwWydhUG9zaXRpb24nXS5sb2NhdGlvbiwgMywgdGhpcy5nbC5GTE9BVCwgZmFsc2UsIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDcgLCAwKVxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hdHRyaWJNYXBbJ2FDb2xvciddLmxvY2F0aW9uLCA0LCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogNyAsIDEyKVxuICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmliTWFwWydhUG9zaXRpb24nXS5sb2NhdGlvbilcbiAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYk1hcFsnYUNvbG9yJ10ubG9jYXRpb24pXG4gICAgICAgIC8vIOe7mOWItumYtuautVxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHRoaXMudW5pZm9ybU1hcFsndU1WUE1hdHJpeCddLmxvY2F0aW9uLCBmYWxzZSwgdGhpcy52aWV3UHJvamVjdE1hdHJpeC52YWx1ZXMpO1xuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5UUklBTkdMRVMsIDAsNilcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKG51bGwpO1xuICAgICAgICB0aGlzLmdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYk1hcFsnYVBvc2l0aW9uJ10ubG9jYXRpb24pXG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmliTWFwWydhQ29sb3InXS5sb2NhdGlvbik7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgbnVsbClcbiAgICB9XG59XG4iLCIvKipcbiAqIOexu+S8vOS6jlR5cGVkQXJyYXnvvIzmj5DkvpvkuobliqjmgIHmianlrrnnmoTog73liptcbiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVkQXJyYXlMaXN0PFQgZXh0ZW5kcyBVaW50MTZBcnJheSB8IEZsb2F0MzJBcnJheSB8IFVpbnQ4QXJyYXk+IHtcbiAgICBwcml2YXRlIF9hcnJheTogVDtcbiAgICBwcml2YXRlIF90eXBlQXJyYXlDb25zdHJ1Y3RvcjogKCBuZXcgKGxlbmd0aDogbnVtYmVyKSA9PiBUKVxuICAgIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyXG4gICAgcHJpdmF0ZSBfY2FwYWNpdHk6IG51bWJlclxuICAgIHB1YmxpYyBjYXBhY2l0eUNoYW5nZUNhbGxCYWNrOiAoIChhcnJheUxpc3Q6IFR5cGVkQXJyYXlMaXN0PFQ+KSA9PiB2b2lkICkgfCBudWxsID0gbnVsbDtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IodHlwZUFycmF5Q29uc3RydWN0b3I6IG5ldyAoY2FwYWNpdHk6IG51bWJlcikgPT4gVCwgY2FwYWNpdHkgPSA4KSB7XG4gICAgICAgIHRoaXMuX3R5cGVBcnJheUNvbnN0cnVjdG9yID0gdHlwZUFycmF5Q29uc3RydWN0b3I7XG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgICAgIGlmICh0aGlzLl9jYXBhY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSA4XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5fYXJyYXkgPSBuZXcgdGhpcy5fdHlwZUFycmF5Q29uc3RydWN0b3IodGhpcy5fY2FwYWNpdHkpXG4gICAgfVxuXG4gICAgcHVibGljIHB1c2gobnVtOiBudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2xlbmd0aCA+PSB0aGlzLl9jYXBhY2l0eSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1R5cGVkQXJyYXlMaXN0LnRzJywgJzE4JywgJ3B1c2gnLCBuZXcgRGF0ZSgpLCB0aGlzLl9jYXBhY2l0eSwgdGhpcy5fbGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgKz0gdGhpcy5fY2FwYWNpdHk7XG4gICAgICAgICAgICBsZXQgb2xkQXJyYXkgPSB0aGlzLl9hcnJheTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IHRoaXMuX3R5cGVBcnJheUNvbnN0cnVjdG9yKHRoaXMuX2NhcGFjaXR5KVxuICAgICAgICAgICAgdGhpcy5fYXJyYXkuc2V0KG9sZEFycmF5KVxuICAgICAgICAgICAgaWYgKHRoaXMuY2FwYWNpdHlDaGFuZ2VDYWxsQmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FwYWNpdHlDaGFuZ2VDYWxsQmFjayh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FycmF5W3RoaXMuX2xlbmd0aCArK10gPSBudW07XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIHNsaWNlKHN0YXJ0OiBudW1iZXIgPSAwLCBlbmQ6IG51bWJlciA9IHRoaXMuX2xlbmd0aCkgOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LnNsaWNlKHN0YXJ0LCBlbmQpIGFzIFRcbiAgICB9XG5cbiAgICBwdXNoQXJyYXkobnVtczpudW1iZXJbXSk6dm9pZHtcbiAgICAgICAgZm9yKGxldCBpOm51bWJlcj0wOyBpIDwgbnVtcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHRoaXMucHVzaChudW1zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdWJBcnJheShzdGFydDogbnVtYmVyID0gMCwgZW5kOiBudW1iZXIgPSB0aGlzLl9sZW5ndGgpIDogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcnJheS5zdWJhcnJheShzdGFydCwgZW5kKSBhcyBUXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsZW5ndGggKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY2FwYWNpdHkoKSA6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdHlwZUFycmF5KCkgOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhciAoKSA6IHZvaWQge1xuICAgICAgICAvLyBUT0RPIOWPr+iDveS8muiuv+mXruWIsOWOhuWPsuaXp+WAvFxuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIC8vIGpz5rKh5pyJ5pON5L2c56ym6YeN6L29XG4gICAgcHVibGljIGF0IChpZHg6IG51bWJlcikgOm51bWJlciB7XG4gICAgICAgIGlmIChpZHggPCAwIHx8IGlkeCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCfntKLlvJXotornlYwnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hcnJheVtpZHhdXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBlZEFycmF5TGlzdDtcbiIsImltcG9ydCB7IEVQU0lMT04sIHZlYzIsIHZlYzMsIHZlYzQsIG1hdDQsIHF1YXQgfSBmcm9tIFwiLi9UU01cIjtcclxuLy8gaW1wb3J0IHsgR2VvbWV0cnlEYXRhIH0gZnJvbSBcIi4uLy4uL2xpYi9QcmltaXRpdmVzXCI7XHJcbi8vIGltcG9ydCB7IEdMTWVzaEJ1aWxkZXIgfSBmcm9tIFwiLi4vLi4vd2ViZ2wvV2ViR0xNZXNoXCI7XHJcblxyXG5leHBvcnQgZW51bSBFQXhpc1R5cGVcclxue1xyXG4gICAgTk9ORSA9IC0xLFxyXG4gICAgWEFYSVMsXHJcbiAgICBZQVhJUyxcclxuICAgIFpBWElTXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVQbGFuZUxvY1xyXG57XHJcbiAgICBGUk9OVCwgICAgICAgICAvLyDlnKjlubPpnaLnmoTmraPpnaJcclxuICAgIEJBQ0ssICAgICAgICAgIC8vIOWcqOW5s+mdoueahOiDjOmdolxyXG4gICAgQ09QTEFOQVIgICAgICAgLy8g5LiO5bmz6Z2i5YWx6Z2iXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRoSGVscGVyXHJcbntcclxuXHJcbiAgICAvLyDop5LluqYv5byn5bqm5LqS6L2s5Ye95pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIHRvUmFkaWFuICggZGVncmVlOiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0RlZ3JlZSAoIHJhZGlhbjogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiByYWRpYW4gLyBNYXRoLlBJICogMTgwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOa1rueCueaVsOWuueW3ruebuOetieWHveaVsFxyXG4gICAgcHVibGljIHN0YXRpYyBudW1iZXJFcXVhbHMgKCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIGxlZnQgLSByaWdodCApID4gRVBTSUxPTiApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXAgKCB4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCB4IDwgbWluICkgPyBtaW4gOiAoIHggPiBtYXggKSA/IG1heCA6IHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yik5pat5LiA5Liq5pW05pWw5piv5ZCm5pivMueahG7mrKHmlrkoMSwyLDQsOCwxNiwzMiw2NCwxMjgsMjU4LDUxMiwxMDI0LDIwNDgsLi4uLilcclxuICAgIC8vIOeUqOS6jjLnmoRu5qyh5pa557q555CG5Yik5patXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzUG93ZXJPZlR3byAoIHZhbHVlOiBudW1iZXIgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoICggdmFsdWUgJiAoIHZhbHVlIC0gMSApICkgPT0gMCApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqMkdMVmlld3BvcnRTcGFjZSAoIGxvY2FsUHQ6IHZlYzMsIG12cDogbWF0NCwgdmlld3BvcnQ6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIHZpZXdwb3J0UHQ6IHZlYzMgKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCB2OiB2ZWM0ID0gbmV3IHZlYzQoIFsgbG9jYWxQdC54LCBsb2NhbFB0LnksIGxvY2FsUHQueiwgMS4wIF0gKTtcclxuICAgICAgICBtdnAubXVsdGlwbHlWZWM0KCB2LCB2ICk7IC8vIOWwhumhtueCueS7jmxvY2Fs5Z2Q5qCH57O75Y+Y5o2i5Yiw5oqV5b2x5Z2Q5qCH57O777yM5oiW6KOB5Ymq5Z2Q5qCH57O7XHJcbiAgICAgICAgaWYgKCB2LncgPT09IDAuMCApIC8vIOWmguaenOWPmOaNouWQjueahHfkuLow77yM5YiZ6L+U5ZueZmFsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bCG6KOB5Ymq5Z2Q5qCH57O755qE54K555qEeCAvIHkgLyB65YiG6YeP6Zmk5Luld++8jOW+l+WIsG5vcm1hbGl6ZWTlnZDmoIflgLxbIC0xICwgMSBd5LmL6Ze0XHJcbiAgICAgICAgdi54IC89IHYudztcclxuICAgICAgICB2LnkgLz0gdi53O1xyXG4gICAgICAgIHYueiAvPSB2Lnc7XHJcbiAgICAgICAgLy8gWy0xICwgMV3moIfnpLrnmoTngrnlj5jmjaLliLDop4blj6PlnZDmoIfns7tcclxuICAgICAgICB2LnggPSB2LnggKiAwLjUgKyAwLjU7XHJcbiAgICAgICAgdi55ID0gdi55ICogMC41ICsgMC41O1xyXG4gICAgICAgIHYueiA9IHYueiAqIDAuNSArIDAuNTtcclxuICAgICAgICAvLyDop4blj6PlnZDmoIfns7vlho3lj5jmjaLliLDlsY/luZXlnZDmoIfns7tcclxuICAgICAgICB2aWV3cG9ydFB0LnggPSB2LnggKiB2aWV3cG9ydFsgMiBdICsgdmlld3BvcnRbIDAgXTtcclxuICAgICAgICB2aWV3cG9ydFB0LnkgPSB2LnkgKiB2aWV3cG9ydFsgMyBdICsgdmlld3BvcnRbIDEgXTtcclxuICAgICAgICB2aWV3cG9ydFB0LnogPSB2Lno7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6h566X5LiJ6KeS5b2i55qE5rOV5ZCR6YePXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOb3JtYWwgKCBhOiB2ZWMzLCBiOiB2ZWMzLCBjOiB2ZWMzLCByZXN1bHQ6IHZlYzMgfCBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFyZXN1bHQgKSByZXN1bHQgPSBuZXcgdmVjMygpO1xyXG4gICAgICAgIGxldCBsMDogdmVjMyA9IG5ldyB2ZWMzKCk7XHJcbiAgICAgICAgbGV0IGwxOiB2ZWMzID0gbmV3IHZlYzMoKTtcclxuICAgICAgICB2ZWMzLmRpZmZlcmVuY2UoIGIsIGEsIGwwICk7XHJcbiAgICAgICAgdmVjMy5kaWZmZXJlbmNlKCBjLCBhLCBsMSApO1xyXG4gICAgICAgIHZlYzMuY3Jvc3MoIGwwLCBsMSwgcmVzdWx0ICk7XHJcbiAgICAgICAgcmVzdWx0Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5LiL6Z2i5Zub5Liq5Ye95pWw5piv5bmz6Z2i55u45YWz5Ye95pWwXHJcbiAgICAvL2F4K2J5K2N6LWQ9MFxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZUZyb21Qb2ludHMgKCBhOiB2ZWMzLCBiOiB2ZWMzLCBjOiB2ZWMzLCByZXN1bHQ6IHZlYzQgfCBudWxsID0gbnVsbCApOiB2ZWM0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhcmVzdWx0ICkgcmVzdWx0ID0gbmV3IHZlYzQoKTtcclxuICAgICAgICBsZXQgbm9ybWFsOiB2ZWMzID0gbmV3IHZlYzMoKTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVOb3JtYWwoIGEsIGIsIGMsIG5vcm1hbCApO1xyXG4gICAgICAgIGxldCBkOiBudW1iZXIgPSAtdmVjMy5kb3QoIG5vcm1hbCwgYSApO1xyXG4gICAgICAgIHJlc3VsdC54ID0gbm9ybWFsLng7XHJcbiAgICAgICAgcmVzdWx0LnkgPSBub3JtYWwueTtcclxuICAgICAgICByZXN1bHQueiA9IG5vcm1hbC56O1xyXG4gICAgICAgIHJlc3VsdC53ID0gZDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxhbmVGcm9tUG9pbnROb3JtYWwgKCBwb2ludDogdmVjMywgbm9ybWFsOiB2ZWMzLCByZXN1bHQ6IHZlYzQgfCBudWxsID0gbnVsbCApOiB2ZWM0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhcmVzdWx0ICkgcmVzdWx0ID0gbmV3IHZlYzQoKTtcclxuICAgICAgICByZXN1bHQueCA9IG5vcm1hbC54O1xyXG4gICAgICAgIHJlc3VsdC55ID0gbm9ybWFsLnk7XHJcbiAgICAgICAgcmVzdWx0LnogPSBub3JtYWwuejtcclxuICAgICAgICByZXN1bHQudyA9IC12ZWMzLmRvdCggbm9ybWFsLCBwb2ludCApO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZUZyb21Qb2x5Z29uICggcG9seWdvbjogdmVjM1tdICk6IHZlYzRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHBvbHlnb24ubGVuZ3RoIDwgMyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwi5aSa5Y+Y5b2i55qE6aG254K55pWw5b+F6aG75aSn5LqO5oiW562J5LqOMyEhIVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5wbGFuZUZyb21Qb2ludHMoIHBvbHlnb25bIDAgXSwgcG9seWdvblsgMSBdLCBwb2x5Z29uWyAyIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYW5lRGlzdGFuY2VGcm9tUG9pbnQgKCBwbGFuZTogdmVjNCwgcG9pbnQ6IHZlYzMgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggcG9pbnQueCAqIHBsYW5lLnggKyBwb2ludC55ICogcGxhbmUueSArIHBvaW50LnogKiBwbGFuZS56ICsgcGxhbmUudyApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxhbmVUZXN0UG9pbnQgKCBwbGFuZTogdmVjNCwgcG9pbnQ6IHZlYzMgKTogRVBsYW5lTG9jXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG51bTogbnVtYmVyID0gTWF0aEhlbHBlci5wbGFuZURpc3RhbmNlRnJvbVBvaW50KCBwbGFuZSwgcG9pbnQgKTtcclxuICAgICAgICBpZiAoIG51bSA+IEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5GUk9OVDtcclxuICAgICAgICB9IGVsc2UgaWYgKCBudW0gPCAtIEVQU0lMT04gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5CQUNLO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVQbGFuZUxvYy5DT1BMQU5BUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGFuZU5vcm1hbGl6ZSAoIHBsYW5lOiB2ZWM0ICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBsZW5ndGg6IG51bWJlciwgaWxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoIHBsYW5lLnggKiBwbGFuZS54ICsgcGxhbmUueSAqIHBsYW5lLnkgKyBwbGFuZS56ICogcGxhbmUueiApO1xyXG5cclxuICAgICAgICBpZiAoIGxlbmd0aCA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwi6Z2i56ev5Li6MOeahOW5s+mdoiEhIVwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbGVuZ3RoID0gMS4wIC8gbGVuZ3RoO1xyXG4gICAgICAgIHBsYW5lLnggPSBwbGFuZS54ICogaWxlbmd0aDtcclxuICAgICAgICBwbGFuZS55ID0gcGxhbmUueSAqIGlsZW5ndGg7XHJcbiAgICAgICAgcGxhbmUueiA9IHBsYW5lLnogKiBpbGVuZ3RoO1xyXG4gICAgICAgIHBsYW5lLncgPSBwbGFuZS53ICogaWxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvdW5kQm94QWRkUG9pbnQgKCB2OiB2ZWMzLCBtaW5zOiB2ZWMzLCBtYXhzOiB2ZWMzICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIHYueCA8IG1pbnMueCApIHsgbWlucy54ID0gdi54IH07XHJcbiAgICAgICAgaWYgKCB2LnggPiBtYXhzLnggKSB7IG1heHMueCA9IHYueCB9O1xyXG5cclxuICAgICAgICBpZiAoIHYueSA8IG1pbnMueSApIHsgbWlucy55ID0gdi55IH07XHJcbiAgICAgICAgaWYgKCB2LnkgPiBtYXhzLnkgKSB7IG1heHMueSA9IHYueSB9O1xyXG5cclxuICAgICAgICBpZiAoIHYueiA8IG1pbnMueiApIHsgbWlucy56ID0gdi56IH07XHJcbiAgICAgICAgaWYgKCB2LnogPiBtYXhzLnogKSB7IG1heHMueiA9IHYueiB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYm91bmRCb3hDbGVhciAoIG1pbnM6IHZlYzMsIG1heHM6IHZlYzMsIHZhbHVlOiBudW1iZXIgPSBJbmZpbml0eSApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbWlucy54ID0gbWlucy55ID0gbWlucy56ID0gdmFsdWU7ICAgLy8g5Yid5aeL5YyW5pe277yM6K6pbWluc+ihqOekuua1rueCueaVsOeahOacgOWkp+iMg+WbtFxyXG4gICAgICAgIG1heHMueCA9IG1heHMueSA9IG1heHMueiA9IC12YWx1ZTsgIC8vIOWIneWni+WMluaYr++8jOiuqW1heHPooajnpLrmta7ngrnmlbDnmoTmnIDlsI/ojIPlm7RcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflvpdBQUJC5YyF5Zu055uS55qE5Lit5b+D54K55Z2Q5qCHXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvdW5kQm94R2V0Q2VudGVyICggbWluczogdmVjMywgbWF4czogdmVjMywgb3V0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggb3V0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG91dCA9IG5ldyB2ZWMzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIChtYXhzICsgbWlucykgKiAwLjVcclxuICAgICAgICB2ZWMzLnN1bSggbWlucywgbWF4cywgb3V0ICk7XHJcbiAgICAgICAgb3V0LnNjYWxlKCAwLjUgKTtcclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYm91bmRCb3hHZXQ4UG9pbnRzICggbWluczogdmVjMywgbWF4czogdmVjMywgcHRzODogdmVjM1tdICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIC8zLS0tLS0tLS0vNyAgfFxyXG4gICAgICAgIC8gfCAgICAgICAvICAgfFxyXG4gICAgICAgIC8gIHwgICAgICAvICAgfFxyXG4gICAgICAgIDEtLS0tLS0tLS01ICAgfFxyXG4gICAgICAgIHwgIC8yLSAtIC18LSAtNlxyXG4gICAgICAgIHwgLyAgICAgICB8ICAvXHJcbiAgICAgICAgfC8gICAgICAgIHwgL1xyXG4gICAgICAgIDAtLS0tLS0tLS00L1xyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IGNlbnRlcjogdmVjMyA9IE1hdGhIZWxwZXIuYm91bmRCb3hHZXRDZW50ZXIoIG1pbnMsIG1heHMgKTsgLy8g6I635Y+W5Lit5b+D54K5XHJcbiAgICAgICAgbGV0IG1heHMyY2VudGVyOiB2ZWMzID0gdmVjMy5kaWZmZXJlbmNlKCBjZW50ZXIsIG1heHMgKTsgLy8g6I635Y+W5pyA5aSn54K55Yiw5Lit5b+D54K55LmL6Ze055qE6Led56a75ZCR6YePXHJcblxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IHZlYzMoIFsgY2VudGVyLnggKyBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56ICsgbWF4czJjZW50ZXIueiBdICkgKTsgIC8vIDBcclxuICAgICAgICBwdHM4LnB1c2goIG5ldyB2ZWMzKCBbIGNlbnRlci54ICsgbWF4czJjZW50ZXIueCwgY2VudGVyLnkgLSBtYXhzMmNlbnRlci55LCBjZW50ZXIueiArIG1heHMyY2VudGVyLnogXSApICk7ICAvLyAxXHJcblxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IHZlYzMoIFsgY2VudGVyLnggKyBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56IC0gbWF4czJjZW50ZXIueiBdICkgKTsgIC8vIDJcclxuICAgICAgICBwdHM4LnB1c2goIG5ldyB2ZWMzKCBbIGNlbnRlci54ICsgbWF4czJjZW50ZXIueCwgY2VudGVyLnkgLSBtYXhzMmNlbnRlci55LCBjZW50ZXIueiAtIG1heHMyY2VudGVyLnogXSApICk7ICAvLyAzXHJcblxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IHZlYzMoIFsgY2VudGVyLnggLSBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56ICsgbWF4czJjZW50ZXIueiBdICkgKTsgIC8vIDRcclxuICAgICAgICBwdHM4LnB1c2goIG5ldyB2ZWMzKCBbIGNlbnRlci54IC0gbWF4czJjZW50ZXIueCwgY2VudGVyLnkgLSBtYXhzMmNlbnRlci55LCBjZW50ZXIueiArIG1heHMyY2VudGVyLnogXSApICk7ICAvLyA1XHJcblxyXG4gICAgICAgIHB0czgucHVzaCggbmV3IHZlYzMoIFsgY2VudGVyLnggLSBtYXhzMmNlbnRlci54LCBjZW50ZXIueSArIG1heHMyY2VudGVyLnksIGNlbnRlci56IC0gbWF4czJjZW50ZXIueiBdICkgKTsgIC8vIDZcclxuICAgICAgICBwdHM4LnB1c2goIG5ldyB2ZWMzKCBbIGNlbnRlci54IC0gbWF4czJjZW50ZXIueCwgY2VudGVyLnkgLSBtYXhzMmNlbnRlci55LCBjZW50ZXIueiAtIG1heHMyY2VudGVyLnogXSApICk7ICAvLyA3XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveFRyYW5zZm9ybSAoIG1hdDogbWF0NCwgbWluczogdmVjMywgbWF4czogdmVjMyApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHB0czp2ZWMzW10gPSBbXTsgLy8g5YiG6YWN5pWw57uE5YaF5a2Y77yM57G75Z6L5Li6dmVjM1xyXG4gICAgICAgIE1hdGhIZWxwZXIuYm91bmRCb3hHZXQ4UG9pbnRzKG1pbnMsbWF4cyxwdHMpOyAvLyDojrflvpflsYDpg6jlnZDmoIfns7vooajnpLrnmoRBQUJC55qEOOS4qumhtueCueWdkOagh1xyXG4gICAgICAgIGxldCBvdXQ6dmVjMyA9IG5ldyB2ZWMzKCk7IC8vIOWPmOaNouWQjueahOmhtueCuVxyXG4gICAgICAgIC8vIOmBjeWOhuWxgOmDqOWdkOagh+ezu+eahDjkuKpBQUJC5YyF5Zu055uS55qE6aG254K55Z2Q5qCHXHJcbiAgICAgICAgZm9yKGxldCBpOm51bWJlciA9IDA7IGkgPCBwdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIC8vIOWwhuWxgOmDqOWdkOagh+ihqOekuueahOmhtueCueWPmOaNouWIsG1hdOWdkOagh+epuumXtOS4reWOu++8jOWPmOaNouWQjueahOe7k+aenOaUvuWcqG91dOWPmOmHj+S4rVxyXG4gICAgICAgICAgICBtYXQubXVsdGlwbHlWZWMzKHB0c1tpXSxvdXQpO1xyXG4gICAgICAgICAgICAvLyDph43mlrDmnoTpgKDmlrDnmoTvvIzkuI7kuJbnlYzlnZDmoIfns7vovbTlr7nnp7DnmoRBQUJC5YyF5Zu055uSXHJcbiAgICAgICAgICAgIHRoaXMuYm91bmRCb3hBZGRQb2ludChvdXQsbWlucyxtYXhzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBib3VuZEJveENvbnRhaW5zUG9pbnQgKCBwb2ludDogdmVjMywgbWluczogdmVjMywgbWF4czogdmVjMyApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICggcG9pbnQueCA+PSBtaW5zLnggJiYgcG9pbnQueCA8PSBtYXhzLnggJiYgcG9pbnQueSA+PSBtaW5zLnkgJiYgcG9pbnQueSA8PSBtYXhzLnkgJiYgcG9pbnQueiA+PSBtaW5zLnogJiYgcG9pbnQueiA8PSBtYXhzLnogKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvdW5kQm94Qm91bmRCb3hPdmVybGFwICggbWluMTogdmVjMywgbWF4MTogdmVjMywgbWluMjogdmVjMywgbWF4MjogdmVjMyApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBtaW4xLnggPiBtYXgyLnggKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCBtYXgxLnggPCBtaW4yLnggKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggbWluMS55ID4gbWF4Mi55ICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICggbWF4MS55IDwgbWluMi55ICkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIG1pbjEueiA+IG1heDIueiApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIG1heDEueiA8IG1pbjIueiApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0VmVjM0lEQ29vcmQyR0xDb29yZCAoIHY6IHZlYzMsIHNjYWxlOiBudW1iZXIgPSAxMC4wICk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgZjogbnVtYmVyID0gdi55OyAvLyBvcGVuZ2wgcmlnaHQgPSBkb29vbTMgeFxyXG4gICAgICAgIHYueSA9IHYuejsgICAgICAgICAgLy9vcGVuZ2wgdXAgPSBkb29tMyB6XHJcbiAgICAgICAgdi56ID0gLWY7ICAgICAgICAgICAvL29wZW5nbCBmb3J3YXJkID0gZG9vbTMgLXlcclxuICAgICAgICBpZiAoICFNYXRoSGVscGVyLm51bWJlckVxdWFscyggc2NhbGUsIDAgKSAmJiAhTWF0aEhlbHBlci5udW1iZXJFcXVhbHMoIHNjYWxlLCAxLjAgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2LnggLz0gc2NhbGU7XHJcbiAgICAgICAgICAgIHYueSAvPSBzY2FsZTtcclxuICAgICAgICAgICAgdi56IC89IHNjYWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRWZWMySURDb29yZDJHTENvb3JkICggdjogdmVjMiApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdi55ID0gMS4wIC0gdi55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWF0cml4RnJvbSAoIHBvczogdmVjMywgcTogcXVhdCwgZGVzdDogbWF0NCB8IG51bGwgPSBudWxsICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBpZiAoIGRlc3QgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdCA9IG5ldyBtYXQ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHEudG9NYXQ0KCBkZXN0ICk7XHJcbiAgICAgICAgZGVzdC52YWx1ZXNbIDEyIF0gPSBwb3MueDtcclxuICAgICAgICBkZXN0LnZhbHVlc1sgMTMgXSA9IHBvcy55O1xyXG4gICAgICAgIGRlc3QudmFsdWVzWyAxNCBdID0gcG9zLno7XHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIlxyXG5leHBvcnQgbGV0IEVQU0lMT046IG51bWJlciA9IDAuMDAwMTtcclxuXHJcbmV4cG9ydCBjbGFzcyB2ZWMyXHJcbntcclxuICAgIHB1YmxpYyB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KCAyICk7XHJcblxyXG4gICAgcHVibGljIGdldCB4ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHkgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeCAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHkgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggdmFsdWVzOiBudW1iZXJbXSB8IG51bGwgPSBudWxsIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHZhbHVlcyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB2YWx1ZXNbIDAgXTtcclxuICAgICAgICAgICAgdGhpcy55ID0gdmFsdWVzWyAxIF07XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb3B5ICggZGVzdDogdmVjMiB8IG51bGwgPSBudWxsICk6IHZlYzJcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWMyKCk7XHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy54O1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMueTtcclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHZlYzNcclxue1xyXG5cclxuICAgIHB1YmxpYyB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KCAzICk7XHJcblxyXG4gICAgcHVibGljIGdldCB4ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHkgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeiAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAyIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB4ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDAgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeSAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHogKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMiBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggdmFsdWVzOiBudW1iZXJbXSB8IG51bGwgPSBudWxsIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHZhbHVlcyAhPT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB2YWx1ZXNbIDAgXTtcclxuICAgICAgICAgICAgdGhpcy55ID0gdmFsdWVzWyAxIF07XHJcbiAgICAgICAgICAgIHRoaXMueiA9IHZhbHVlc1sgMiBdO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0ICggaW5kZXg6IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIGluZGV4IF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0ICggeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgejogbnVtYmVyID0gMCApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvcHkgKCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHZlYzMoKTtcclxuXHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy54O1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMueTtcclxuICAgICAgICBkZXN0LnogPSB0aGlzLno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZWdhdGUgKCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gdGhpcztcclxuXHJcbiAgICAgICAgZGVzdC54ID0gLXRoaXMueDtcclxuICAgICAgICBkZXN0LnkgPSAtdGhpcy55O1xyXG4gICAgICAgIGRlc3QueiA9IC10aGlzLno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMgKCB2ZWN0b3I6IHZlYzMsIHRocmVzaG9sZCA9IEVQU0lMT04gKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMueCAtIHZlY3Rvci54ICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMueSAtIHZlY3Rvci55ICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMueiAtIHZlY3Rvci56ICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVuZ3RoICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLmxlbmd0aDIgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxlbmd0aDIgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy54LFxyXG4gICAgICAgICAgICB5ID0gdGhpcy55LFxyXG4gICAgICAgICAgICB6ID0gdGhpcy56O1xyXG5cclxuICAgICAgICByZXR1cm4gKCB4ICogeCArIHkgKiB5ICsgeiAqIHogKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQgKCB2ZWN0b3I6IHZlYzMgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCArPSB2ZWN0b3IueDtcclxuICAgICAgICB0aGlzLnkgKz0gdmVjdG9yLnk7XHJcbiAgICAgICAgdGhpcy56ICs9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCAoIHZlY3RvcjogdmVjMyApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54IC09IHZlY3Rvci54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2ZWN0b3IueTtcclxuICAgICAgICB0aGlzLnogLT0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2FsZSAoIHZhbHVlOiBudW1iZXIsIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0ID0gdGhpcztcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29weSggZGVzdCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVzdC54ICo9IHZhbHVlO1xyXG4gICAgICAgIGRlc3QueSAqPSB2YWx1ZTtcclxuICAgICAgICBkZXN0LnogKj0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUgKCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoIGxlbmd0aCA9PT0gMSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggbGVuZ3RoID09PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QueCA9IDA7XHJcbiAgICAgICAgICAgIGRlc3QueSA9IDA7XHJcbiAgICAgICAgICAgIGRlc3QueiA9IDA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxlbmd0aCA9IDEuMCAvIGxlbmd0aDtcclxuXHJcbiAgICAgICAgZGVzdC54ICo9IGxlbmd0aDtcclxuICAgICAgICBkZXN0LnkgKj0gbGVuZ3RoO1xyXG4gICAgICAgIGRlc3QueiAqPSBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub3JtYWxpemUyICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gMS4wIC8gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMueCAqPSBsZW47XHJcbiAgICAgICAgdGhpcy55ICo9IGxlbjtcclxuICAgICAgICB0aGlzLnogKj0gbGVuO1xyXG4gICAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aXBseVNjYWxhciAoIHZlY3RvcjogdmVjMywgdmFsdWU6IG51bWJlciwgZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcbiAgICAgICAgZGVzdC54ICo9IHZhbHVlO1xyXG4gICAgICAgIGRlc3QueSAqPSB2YWx1ZTtcclxuICAgICAgICBkZXN0LnogKj0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcm9zcyAoIHZlY3RvcjogdmVjMywgdmVjdG9yMjogdmVjMywgZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICBsZXQgeDIgPSB2ZWN0b3IyLngsXHJcbiAgICAgICAgICAgIHkyID0gdmVjdG9yMi55LFxyXG4gICAgICAgICAgICB6MiA9IHZlY3RvcjIuejtcclxuXHJcbiAgICAgICAgZGVzdC54ID0geSAqIHoyIC0geiAqIHkyO1xyXG4gICAgICAgIGRlc3QueSA9IHogKiB4MiAtIHggKiB6MjtcclxuICAgICAgICBkZXN0LnogPSB4ICogeTIgLSB5ICogeDI7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZG90ICggdmVjdG9yOiB2ZWMzLCB2ZWN0b3IyOiB2ZWMzICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICBsZXQgeDIgPSB2ZWN0b3IyLngsXHJcbiAgICAgICAgICAgIHkyID0gdmVjdG9yMi55LFxyXG4gICAgICAgICAgICB6MiA9IHZlY3RvcjIuejtcclxuXHJcbiAgICAgICAgcmV0dXJuICggeCAqIHgyICsgeSAqIHkyICsgeiAqIHoyICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdW0gKCB2ZWN0b3I6IHZlYzMsIHZlY3RvcjI6IHZlYzMsIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgdmVjMygpO1xyXG5cclxuICAgICAgICBkZXN0LnggPSB2ZWN0b3IueCArIHZlY3RvcjIueDtcclxuICAgICAgICBkZXN0LnkgPSB2ZWN0b3IueSArIHZlY3RvcjIueTtcclxuICAgICAgICBkZXN0LnogPSB2ZWN0b3IueiArIHZlY3RvcjIuejtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaWZmZXJlbmNlICggdmVjdG9yOiB2ZWMzLCB2ZWN0b3IyOiB2ZWMzLCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHZlYzMoKTtcclxuXHJcbiAgICAgICAgZGVzdC54ID0gdmVjdG9yLnggLSB2ZWN0b3IyLng7XHJcbiAgICAgICAgZGVzdC55ID0gdmVjdG9yLnkgLSB2ZWN0b3IyLnk7XHJcbiAgICAgICAgZGVzdC56ID0gdmVjdG9yLnogLSB2ZWN0b3IyLno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSB1cCA9IG5ldyB2ZWMzKCBbIDAsIDEsIDAgXSApO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGRvd24gPSBuZXcgdmVjMyggWyAwLCAtMSwgMCBdICk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgcmlnaHQgPSBuZXcgdmVjMyggWyAxLCAwLCAwIF0gKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBsZWZ0ID0gbmV3IHZlYzMoIFsgLTEsIDAsIDAgXSApO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGZvcndhcmQgPSBuZXcgdmVjMyggWyAwLCAwLCAxIF0gKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBiYWNrd2FyZCA9IG5ldyB2ZWMzKCBbIDAsIDAsIC0xIF0gKTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgemVybyA9IG5ldyB2ZWMzKCBbIDAsIDAsIDAgXSApO1xyXG5cclxuICAgIHN0YXRpYyB2MCA9IG5ldyB2ZWMzKCBbIDAsIDAsIDAgXSApO1xyXG4gICAgc3RhdGljIHYxID0gbmV3IHZlYzMoIFsgMCwgMCwgMCBdICk7XHJcbiAgICBzdGF0aWMgdjIgPSBuZXcgdmVjMyggWyAwLCAwLCAwIF0gKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHZlYzRcclxue1xyXG4gICAgcHVibGljIHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoIDQgKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHggKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMCBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgeSAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB6ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDIgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHcgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMyBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeCAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHkgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB6ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdyAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAzIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZlYzMgKCk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IHZlYzMoIFsgdGhpcy54LCB0aGlzLnksIHRoaXMueiBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGcgKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMSBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYiAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAyIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDMgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHIgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBnICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYiAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAyIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGEgKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMyBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICggdmFsdWVzOiBudW1iZXJbXSB8IG51bGwgPSBudWxsIClcclxuICAgIHtcclxuICAgICAgICBpZiAoIHZhbHVlcyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB2YWx1ZXNbIDAgXTtcclxuICAgICAgICAgICAgdGhpcy55ID0gdmFsdWVzWyAxIF07XHJcbiAgICAgICAgICAgIHRoaXMueiA9IHZhbHVlc1sgMiBdO1xyXG4gICAgICAgICAgICB0aGlzLncgPSB2YWx1ZXNbIDMgXTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueSA9IHRoaXMueiA9IHRoaXMudyA9IDAuMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0ICggaW5kZXg6IG51bWJlciApOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIGluZGV4IF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0ICgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMueiA9IDA7XHJcbiAgICAgICAgdGhpcy53ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29weSAoIGRlc3Q6IHZlYzQgfCBudWxsID0gbnVsbCApOiB2ZWM0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgdmVjNCgpO1xyXG5cclxuICAgICAgICBkZXN0LnggPSB0aGlzLng7XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy55O1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMuejtcclxuICAgICAgICBkZXN0LncgPSB0aGlzLnc7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMgKCB2ZWN0b3I6IHZlYzQsIHRocmVzaG9sZCA9IEVQU0lMT04gKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMueCAtIHZlY3Rvci54ICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMueSAtIHZlY3Rvci55ICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMueiAtIHZlY3Rvci56ICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMudyAtIHZlY3Rvci53ICkgPiB0aHJlc2hvbGQgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWQ6IHZlYzQgPSBuZXcgdmVjNCggWyAxLjAsIDAuMCwgMC4wLCAxLjAgXSApO1xyXG4gICAgc3RhdGljIGdyZWVuOiB2ZWM0ID0gbmV3IHZlYzQoIFsgMC4wLCAxLjAsIDAuMCwgMS4wIF0gKTtcclxuICAgIHN0YXRpYyBibHVlOiB2ZWM0ID0gbmV3IHZlYzQoIFsgMC4wLCAwLjAsIDEuMCwgMS4wIF0gKTtcclxuICAgIHN0YXRpYyBibGFjazp2ZWM0ID0gbmV3IHZlYzQoWzAsMCwwLDBdKTtcclxuXHJcbiAgICBzdGF0aWMgdjA6IHZlYzQgPSBuZXcgdmVjNCgpO1xyXG4gICAgc3RhdGljIHYxOiB2ZWM0ID0gbmV3IHZlYzQoKTtcclxuICAgIHN0YXRpYyB2MjogdmVjNCA9IG5ldyB2ZWM0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBtYXQ0XHJcbntcclxuICAgIHB1YmxpYyB2YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KCAxNiApO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHZhbHVlczogbnVtYmVyW10gfCBudWxsID0gbnVsbCApXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCB2YWx1ZXMgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQoIHZhbHVlcyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldElkZW50aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgKCB2YWx1ZXM6IG51bWJlcltdICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCAxNjsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWyBpIF0gPSB2YWx1ZXNbIGkgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdCAoIGluZGV4OiBudW1iZXIgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyBpbmRleCBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5ICggZGVzdDogbWF0NCB8IG51bGwgPSBudWxsICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBtYXQ0KCk7XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDE2OyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdC52YWx1ZXNbIGkgXSA9IHRoaXMudmFsdWVzWyBpIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXF1YWxzICggbWF0cml4OiBtYXQ0LCB0aHJlc2hvbGQgPSBFUFNJTE9OICk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCAxNjsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMudmFsdWVzWyBpIF0gLSBtYXRyaXguYXQoIGkgKSApID4gdGhyZXNob2xkIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSb3cgKCBpbmRleDogbnVtYmVyLCBkZXN0OiB2ZWM0IHwgbnVsbCA9IG51bGwgKTogdmVjNFxyXG4gICAge1xyXG4gICAgICAgIGlmICggZGVzdCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0ID0gbmV3IHZlYzQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy52YWx1ZXNbIGluZGV4ICogNCArIDAgXSxcclxuICAgICAgICAgICAgZGVzdC55ID0gdGhpcy52YWx1ZXNbIGluZGV4ICogNCArIDEgXSxcclxuICAgICAgICAgICAgZGVzdC56ID0gdGhpcy52YWx1ZXNbIGluZGV4ICogNCArIDIgXSxcclxuICAgICAgICAgICAgZGVzdC53ID0gdGhpcy52YWx1ZXNbIGluZGV4ICogNCArIDMgXVxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2x1bW4gKCBpbmRleDogbnVtYmVyLCBkZXN0OiB2ZWM0IHwgbnVsbCA9IG51bGwgKTogdmVjNFxyXG4gICAge1xyXG4gICAgICAgIGlmICggZGVzdCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0ID0gbmV3IHZlYzQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy52YWx1ZXNbIGluZGV4IF07XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy52YWx1ZXNbIGluZGV4ICsgNCBdO1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMudmFsdWVzWyBpbmRleCArIDggXTtcclxuICAgICAgICBkZXN0LncgPSB0aGlzLnZhbHVlc1sgaW5kZXggKyAxMiBdO1xyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbiAoIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXN0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgdmVjMygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0LnggPSB0aGlzLnZhbHVlc1sgMTIgXTtcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgMTMgXTtcclxuICAgICAgICBkZXN0LnogPSB0aGlzLnZhbHVlc1sgMTQgXTtcclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0WEF4aXMgKCBkZXN0OiB2ZWMzIHwgbnVsbCA9IG51bGwgKTogdmVjM1xyXG4gICAge1xyXG4gICAgICAgIGlmICggZGVzdCA9PT0gbnVsbCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0ID0gbmV3IHZlYzMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzdC54ID0gdGhpcy52YWx1ZXNbIDAgXTtcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgMSBdO1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMudmFsdWVzWyAyIF07XHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFlBeGlzICggZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoIGRlc3QgPT09IG51bGwgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdCA9IG5ldyB2ZWMzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc3QueCA9IHRoaXMudmFsdWVzWyA0IF07XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy52YWx1ZXNbIDUgXTtcclxuICAgICAgICBkZXN0LnogPSB0aGlzLnZhbHVlc1sgNiBdO1xyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRaQXhpcyAoIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCBkZXN0ID09PSBudWxsIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QgPSBuZXcgdmVjMygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0LnggPSB0aGlzLnZhbHVlc1sgOCBdO1xyXG4gICAgICAgIGRlc3QueSA9IHRoaXMudmFsdWVzWyA5IF07XHJcbiAgICAgICAgZGVzdC56ID0gdGhpcy52YWx1ZXNbIDEwIF07XHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF4aXMgKCBpZHg6IG51bWJlciwgZGVzdDogdmVjMyB8IG51bGwgPSBudWxsICk6IHZlYzNcclxuICAgIHtcclxuICAgICAgICBpZiAoIGlkeCA9PT0gMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRYQXhpcyggZGVzdCApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGlkeCA9PT0gMSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRZQXhpcyggZGVzdCApO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WkF4aXMoIGRlc3QgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldElkZW50aXR5ICgpOiBtYXQ0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDAgXSA9IDE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDMgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDQgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDUgXSA9IDE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDYgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDcgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDggXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDkgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEwIF0gPSAxO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMSBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTIgXSA9IDA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEzIF0gPSAwO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxNCBdID0gMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTUgXSA9IDE7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc3Bvc2UgKCk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcDAxID0gdGhpcy52YWx1ZXNbIDEgXSwgdGVtcDAyID0gdGhpcy52YWx1ZXNbIDIgXSxcclxuICAgICAgICAgICAgdGVtcDAzID0gdGhpcy52YWx1ZXNbIDMgXSwgdGVtcDEyID0gdGhpcy52YWx1ZXNbIDYgXSxcclxuICAgICAgICAgICAgdGVtcDEzID0gdGhpcy52YWx1ZXNbIDcgXSwgdGVtcDIzID0gdGhpcy52YWx1ZXNbIDExIF07XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gPSB0aGlzLnZhbHVlc1sgNCBdO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAyIF0gPSB0aGlzLnZhbHVlc1sgOCBdO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAzIF0gPSB0aGlzLnZhbHVlc1sgMTIgXTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNCBdID0gdGVtcDAxO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgNiBdID0gdGhpcy52YWx1ZXNbIDkgXTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNyBdID0gdGhpcy52YWx1ZXNbIDEzIF07XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDggXSA9IHRlbXAwMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgOSBdID0gdGVtcDEyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMSBdID0gdGhpcy52YWx1ZXNbIDE0IF07XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEyIF0gPSB0ZW1wMDM7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEzIF0gPSB0ZW1wMTM7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDE0IF0gPSB0ZW1wMjM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXRlcm1pbmFudCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWyAwIF0sIGEwMSA9IHRoaXMudmFsdWVzWyAxIF0sIGEwMiA9IHRoaXMudmFsdWVzWyAyIF0sIGEwMyA9IHRoaXMudmFsdWVzWyAzIF0sXHJcbiAgICAgICAgICAgIGExMCA9IHRoaXMudmFsdWVzWyA0IF0sIGExMSA9IHRoaXMudmFsdWVzWyA1IF0sIGExMiA9IHRoaXMudmFsdWVzWyA2IF0sIGExMyA9IHRoaXMudmFsdWVzWyA3IF0sXHJcbiAgICAgICAgICAgIGEyMCA9IHRoaXMudmFsdWVzWyA4IF0sIGEyMSA9IHRoaXMudmFsdWVzWyA5IF0sIGEyMiA9IHRoaXMudmFsdWVzWyAxMCBdLCBhMjMgPSB0aGlzLnZhbHVlc1sgMTEgXSxcclxuICAgICAgICAgICAgYTMwID0gdGhpcy52YWx1ZXNbIDEyIF0sIGEzMSA9IHRoaXMudmFsdWVzWyAxMyBdLCBhMzIgPSB0aGlzLnZhbHVlc1sgMTQgXSwgYTMzID0gdGhpcy52YWx1ZXNbIDE1IF07XHJcblxyXG4gICAgICAgIGxldCBkZXQwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcclxuICAgICAgICAgICAgZGV0MDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXHJcbiAgICAgICAgICAgIGRldDAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxyXG4gICAgICAgICAgICBkZXQwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcclxuICAgICAgICAgICAgZGV0MDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXHJcbiAgICAgICAgICAgIGRldDA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxyXG4gICAgICAgICAgICBkZXQwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcclxuICAgICAgICAgICAgZGV0MDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXHJcbiAgICAgICAgICAgIGRldDA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxyXG4gICAgICAgICAgICBkZXQwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcclxuICAgICAgICAgICAgZGV0MTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXHJcbiAgICAgICAgICAgIGRldDExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkZXQwMCAqIGRldDExIC0gZGV0MDEgKiBkZXQxMCArIGRldDAyICogZGV0MDkgKyBkZXQwMyAqIGRldDA4IC0gZGV0MDQgKiBkZXQwNyArIGRldDA1ICogZGV0MDYgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW52ZXJzZSAoIG91dDogbWF0NCApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb3B5KCBvdXQgKTtcclxuICAgICAgICBsZXQgYTAwID0gb3V0LnZhbHVlc1sgMCBdLCBhMDEgPSBvdXQudmFsdWVzWyAxIF0sIGEwMiA9IG91dC52YWx1ZXNbIDIgXSwgYTAzID0gb3V0LnZhbHVlc1sgMyBdLFxyXG4gICAgICAgICAgICBhMTAgPSBvdXQudmFsdWVzWyA0IF0sIGExMSA9IG91dC52YWx1ZXNbIDUgXSwgYTEyID0gb3V0LnZhbHVlc1sgNiBdLCBhMTMgPSBvdXQudmFsdWVzWyA3IF0sXHJcbiAgICAgICAgICAgIGEyMCA9IG91dC52YWx1ZXNbIDggXSwgYTIxID0gb3V0LnZhbHVlc1sgOSBdLCBhMjIgPSBvdXQudmFsdWVzWyAxMCBdLCBhMjMgPSBvdXQudmFsdWVzWyAxMSBdLFxyXG4gICAgICAgICAgICBhMzAgPSBvdXQudmFsdWVzWyAxMiBdLCBhMzEgPSBvdXQudmFsdWVzWyAxMyBdLCBhMzIgPSBvdXQudmFsdWVzWyAxNCBdLCBhMzMgPSBvdXQudmFsdWVzWyAxNSBdO1xyXG5cclxuICAgICAgICBsZXQgZGV0MDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXHJcbiAgICAgICAgICAgIGRldDAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxyXG4gICAgICAgICAgICBkZXQwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcclxuICAgICAgICAgICAgZGV0MDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXHJcbiAgICAgICAgICAgIGRldDA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxyXG4gICAgICAgICAgICBkZXQwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcclxuICAgICAgICAgICAgZGV0MDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXHJcbiAgICAgICAgICAgIGRldDA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxyXG4gICAgICAgICAgICBkZXQwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcclxuICAgICAgICAgICAgZGV0MDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXHJcbiAgICAgICAgICAgIGRldDEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxyXG4gICAgICAgICAgICBkZXQxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgICAgbGV0IGRldCA9ICggZGV0MDAgKiBkZXQxMSAtIGRldDAxICogZGV0MTAgKyBkZXQwMiAqIGRldDA5ICsgZGV0MDMgKiBkZXQwOCAtIGRldDA0ICogZGV0MDcgKyBkZXQwNSAqIGRldDA2ICk7XHJcblxyXG4gICAgICAgIGlmICggIWRldCApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgICBvdXQudmFsdWVzWyAwIF0gPSAoIGExMSAqIGRldDExIC0gYTEyICogZGV0MTAgKyBhMTMgKiBkZXQwOSApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDEgXSA9ICggLWEwMSAqIGRldDExICsgYTAyICogZGV0MTAgLSBhMDMgKiBkZXQwOSApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDIgXSA9ICggYTMxICogZGV0MDUgLSBhMzIgKiBkZXQwNCArIGEzMyAqIGRldDAzICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMyBdID0gKCAtYTIxICogZGV0MDUgKyBhMjIgKiBkZXQwNCAtIGEyMyAqIGRldDAzICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgNCBdID0gKCAtYTEwICogZGV0MTEgKyBhMTIgKiBkZXQwOCAtIGExMyAqIGRldDA3ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgNSBdID0gKCBhMDAgKiBkZXQxMSAtIGEwMiAqIGRldDA4ICsgYTAzICogZGV0MDcgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA2IF0gPSAoIC1hMzAgKiBkZXQwNSArIGEzMiAqIGRldDAyIC0gYTMzICogZGV0MDEgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyA3IF0gPSAoIGEyMCAqIGRldDA1IC0gYTIyICogZGV0MDIgKyBhMjMgKiBkZXQwMSApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDggXSA9ICggYTEwICogZGV0MTAgLSBhMTEgKiBkZXQwOCArIGExMyAqIGRldDA2ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgOSBdID0gKCAtYTAwICogZGV0MTAgKyBhMDEgKiBkZXQwOCAtIGEwMyAqIGRldDA2ICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTAgXSA9ICggYTMwICogZGV0MDQgLSBhMzEgKiBkZXQwMiArIGEzMyAqIGRldDAwICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTEgXSA9ICggLWEyMCAqIGRldDA0ICsgYTIxICogZGV0MDIgLSBhMjMgKiBkZXQwMCApICogZGV0O1xyXG4gICAgICAgIG91dC52YWx1ZXNbIDEyIF0gPSAoIC1hMTAgKiBkZXQwOSArIGExMSAqIGRldDA3IC0gYTEyICogZGV0MDYgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxMyBdID0gKCBhMDAgKiBkZXQwOSAtIGEwMSAqIGRldDA3ICsgYTAyICogZGV0MDYgKSAqIGRldDtcclxuICAgICAgICBvdXQudmFsdWVzWyAxNCBdID0gKCAtYTMwICogZGV0MDMgKyBhMzEgKiBkZXQwMSAtIGEzMiAqIGRldDAwICkgKiBkZXQ7XHJcbiAgICAgICAgb3V0LnZhbHVlc1sgMTUgXSA9ICggYTIwICogZGV0MDMgLSBhMjEgKiBkZXQwMSArIGEyMiAqIGRldDAwICkgKiBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aXBseSAoIG1hdHJpeDogbWF0NCApOiBtYXQ0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGEwMCA9IHRoaXMudmFsdWVzWyAwIF0sIGEwMSA9IHRoaXMudmFsdWVzWyAxIF0sIGEwMiA9IHRoaXMudmFsdWVzWyAyIF0sIGEwMyA9IHRoaXMudmFsdWVzWyAzIF07XHJcbiAgICAgICAgbGV0IGExMCA9IHRoaXMudmFsdWVzWyA0IF0sIGExMSA9IHRoaXMudmFsdWVzWyA1IF0sIGExMiA9IHRoaXMudmFsdWVzWyA2IF0sIGExMyA9IHRoaXMudmFsdWVzWyA3IF07XHJcbiAgICAgICAgbGV0IGEyMCA9IHRoaXMudmFsdWVzWyA4IF0sIGEyMSA9IHRoaXMudmFsdWVzWyA5IF0sIGEyMiA9IHRoaXMudmFsdWVzWyAxMCBdLCBhMjMgPSB0aGlzLnZhbHVlc1sgMTEgXTtcclxuICAgICAgICBsZXQgYTMwID0gdGhpcy52YWx1ZXNbIDEyIF0sIGEzMSA9IHRoaXMudmFsdWVzWyAxMyBdLCBhMzIgPSB0aGlzLnZhbHVlc1sgMTQgXSwgYTMzID0gdGhpcy52YWx1ZXNbIDE1IF07XHJcblxyXG4gICAgICAgIGxldCBiMCA9IG1hdHJpeC5hdCggMCApLFxyXG4gICAgICAgICAgICBiMSA9IG1hdHJpeC5hdCggMSApLFxyXG4gICAgICAgICAgICBiMiA9IG1hdHJpeC5hdCggMiApLFxyXG4gICAgICAgICAgICBiMyA9IG1hdHJpeC5hdCggMyApO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEgXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAyIF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMyBdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XHJcblxyXG4gICAgICAgIGIwID0gbWF0cml4LmF0KCA0ICk7XHJcbiAgICAgICAgYjEgPSBtYXRyaXguYXQoIDUgKTtcclxuICAgICAgICBiMiA9IG1hdHJpeC5hdCggNiApO1xyXG4gICAgICAgIGIzID0gbWF0cml4LmF0KCA3ICk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyA0IF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNSBdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDYgXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA3IF0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuXHJcbiAgICAgICAgYjAgPSBtYXRyaXguYXQoIDggKTtcclxuICAgICAgICBiMSA9IG1hdHJpeC5hdCggOSApO1xyXG4gICAgICAgIGIyID0gbWF0cml4LmF0KCAxMCApO1xyXG4gICAgICAgIGIzID0gbWF0cml4LmF0KCAxMSApO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgOCBdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDkgXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMCBdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDExIF0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcclxuXHJcbiAgICAgICAgYjAgPSBtYXRyaXguYXQoIDEyICk7XHJcbiAgICAgICAgYjEgPSBtYXRyaXguYXQoIDEzICk7XHJcbiAgICAgICAgYjIgPSBtYXRyaXguYXQoIDE0ICk7XHJcbiAgICAgICAgYjMgPSBtYXRyaXguYXQoIDE1ICk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMiBdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEzIF0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTQgXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxNSBdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aXBseVZlYzMgKCB2ZWN0b3I6IHZlYzMsIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgdmVjMygpO1xyXG4gICAgICAgIGxldCB4ID0gdmVjdG9yLngsXHJcbiAgICAgICAgICAgIHkgPSB2ZWN0b3IueSxcclxuICAgICAgICAgICAgeiA9IHZlY3Rvci56O1xyXG5cclxuICAgICAgICBkZXN0LnggPSB0aGlzLnZhbHVlc1sgMCBdICogeCArIHRoaXMudmFsdWVzWyA0IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDggXSAqIHogKyB0aGlzLnZhbHVlc1sgMTIgXTtcclxuICAgICAgICBkZXN0LnkgPSB0aGlzLnZhbHVlc1sgMSBdICogeCArIHRoaXMudmFsdWVzWyA1IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDkgXSAqIHogKyB0aGlzLnZhbHVlc1sgMTMgXTtcclxuICAgICAgICBkZXN0LnogPSB0aGlzLnZhbHVlc1sgMiBdICogeCArIHRoaXMudmFsdWVzWyA2IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDEwIF0gKiB6ICsgdGhpcy52YWx1ZXNbIDE0IF07XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aXBseVZlYzQgKCB2ZWN0b3I6IHZlYzQsIGRlc3Q6IHZlYzQgfCBudWxsID0gbnVsbCApOiB2ZWM0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgdmVjNCgpO1xyXG5cclxuICAgICAgICBsZXQgeCA9IHZlY3Rvci54LFxyXG4gICAgICAgICAgICB5ID0gdmVjdG9yLnksXHJcbiAgICAgICAgICAgIHogPSB2ZWN0b3IueixcclxuICAgICAgICAgICAgdyA9IHZlY3Rvci53O1xyXG5cclxuICAgICAgICBkZXN0LnggPSB0aGlzLnZhbHVlc1sgMCBdICogeCArIHRoaXMudmFsdWVzWyA0IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDggXSAqIHogKyB0aGlzLnZhbHVlc1sgMTIgXSAqIHc7XHJcbiAgICAgICAgZGVzdC55ID0gdGhpcy52YWx1ZXNbIDEgXSAqIHggKyB0aGlzLnZhbHVlc1sgNSBdICogeSArIHRoaXMudmFsdWVzWyA5IF0gKiB6ICsgdGhpcy52YWx1ZXNbIDEzIF0gKiB3O1xyXG4gICAgICAgIGRlc3QueiA9IHRoaXMudmFsdWVzWyAyIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDYgXSAqIHkgKyB0aGlzLnZhbHVlc1sgMTAgXSAqIHogKyB0aGlzLnZhbHVlc1sgMTQgXSAqIHc7XHJcbiAgICAgICAgZGVzdC53ID0gdGhpcy52YWx1ZXNbIDMgXSAqIHggKyB0aGlzLnZhbHVlc1sgNyBdICogeSArIHRoaXMudmFsdWVzWyAxMSBdICogeiArIHRoaXMudmFsdWVzWyAxNSBdICogdztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g55+p6Zi15Y+Y5o2iXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlICggdmVjdG9yOiB2ZWMzICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IHZlY3Rvci54LFxyXG4gICAgICAgICAgICB5ID0gdmVjdG9yLnksXHJcbiAgICAgICAgICAgIHogPSB2ZWN0b3IuejtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEyIF0gKz0gdGhpcy52YWx1ZXNbIDAgXSAqIHggKyB0aGlzLnZhbHVlc1sgNCBdICogeSArIHRoaXMudmFsdWVzWyA4IF0gKiB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMyBdICs9IHRoaXMudmFsdWVzWyAxIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDUgXSAqIHkgKyB0aGlzLnZhbHVlc1sgOSBdICogejtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMTQgXSArPSB0aGlzLnZhbHVlc1sgMiBdICogeCArIHRoaXMudmFsdWVzWyA2IF0gKiB5ICsgdGhpcy52YWx1ZXNbIDEwIF0gKiB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxNSBdICs9IHRoaXMudmFsdWVzWyAzIF0gKiB4ICsgdGhpcy52YWx1ZXNbIDcgXSAqIHkgKyB0aGlzLnZhbHVlc1sgMTEgXSAqIHo7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2FsZSAoIHZlY3RvcjogdmVjMyApOiBtYXQ0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB2ZWN0b3IueCxcclxuICAgICAgICAgICAgeSA9IHZlY3Rvci55LFxyXG4gICAgICAgICAgICB6ID0gdmVjdG9yLno7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWVzWyAwIF0gKj0geDtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMSBdICo9IHg7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSAqPSB4O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAzIF0gKj0geDtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDQgXSAqPSB5O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA1IF0gKj0geTtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNiBdICo9IHk7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDcgXSAqPSB5O1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgOCBdICo9IHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDkgXSAqPSB6O1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxMCBdICo9IHo7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDExIF0gKj0gejtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZSAoIGFuZ2xlOiBudW1iZXIsIGF4aXM6IHZlYzMgKTogbWF0NCB8IG51bGxcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IGF4aXMueCxcclxuICAgICAgICAgICAgeSA9IGF4aXMueSxcclxuICAgICAgICAgICAgeiA9IGF4aXMuejtcclxuXHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguc3FydCggeCAqIHggKyB5ICogeSArIHogKiB6ICk7XHJcblxyXG4gICAgICAgIGlmICggIWxlbmd0aCApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIGxlbmd0aCAhPT0gMSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZW5ndGggPSAxIC8gbGVuZ3RoO1xyXG4gICAgICAgICAgICB4ICo9IGxlbmd0aDtcclxuICAgICAgICAgICAgeSAqPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIHogKj0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLnNpbiggYW5nbGUgKTtcclxuICAgICAgICBsZXQgYyA9IE1hdGguY29zKCBhbmdsZSApO1xyXG5cclxuICAgICAgICBsZXQgdCA9IDEuMCAtIGM7XHJcblxyXG4gICAgICAgIGxldCBhMDAgPSB0aGlzLnZhbHVlc1sgMCBdLCBhMDEgPSB0aGlzLnZhbHVlc1sgMSBdLCBhMDIgPSB0aGlzLnZhbHVlc1sgMiBdLCBhMDMgPSB0aGlzLnZhbHVlc1sgMyBdLFxyXG4gICAgICAgICAgICBhMTAgPSB0aGlzLnZhbHVlc1sgNCBdLCBhMTEgPSB0aGlzLnZhbHVlc1sgNSBdLCBhMTIgPSB0aGlzLnZhbHVlc1sgNiBdLCBhMTMgPSB0aGlzLnZhbHVlc1sgNyBdLFxyXG4gICAgICAgICAgICBhMjAgPSB0aGlzLnZhbHVlc1sgOCBdLCBhMjEgPSB0aGlzLnZhbHVlc1sgOSBdLCBhMjIgPSB0aGlzLnZhbHVlc1sgMTAgXSwgYTIzID0gdGhpcy52YWx1ZXNbIDExIF07XHJcblxyXG4gICAgICAgIGxldCBiMDAgPSB4ICogeCAqIHQgKyBjLCBiMDEgPSB5ICogeCAqIHQgKyB6ICogcywgYjAyID0geiAqIHggKiB0IC0geSAqIHMsXHJcbiAgICAgICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLCBiMTEgPSB5ICogeSAqIHQgKyBjLCBiMTIgPSB6ICogeSAqIHQgKyB4ICogcyxcclxuICAgICAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLCBiMjIgPSB6ICogeiAqIHQgKyBjO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMyBdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgNCBdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA1IF0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDYgXSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgNyBdID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlc1sgOCBdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyA5IF0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDEwIF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDExIF0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOinhuefqemYteWSjOaKleW9seefqemYtVxyXG4gICAgcHVibGljIHN0YXRpYyBmcnVzdHVtICggbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciwgdG9wOiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGxldCBybCA9ICggcmlnaHQgLSBsZWZ0ICksXHJcbiAgICAgICAgICAgIHRiID0gKCB0b3AgLSBib3R0b20gKSxcclxuICAgICAgICAgICAgZm4gPSAoIGZhciAtIG5lYXIgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBtYXQ0KCBbXHJcbiAgICAgICAgICAgICggbmVhciAqIDIgKSAvIHJsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgKCBuZWFyICogMiApIC8gdGIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAoIHJpZ2h0ICsgbGVmdCApIC8gcmwsXHJcbiAgICAgICAgICAgICggdG9wICsgYm90dG9tICkgLyB0YixcclxuICAgICAgICAgICAgLSggZmFyICsgbmVhciApIC8gZm4sXHJcbiAgICAgICAgICAgIC0xLFxyXG5cclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgLSggZmFyICogbmVhciAqIDIgKSAvIGZuLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgXSApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGVyc3BlY3RpdmUgKCBmb3Y6IG51bWJlciwgYXNwZWN0OiBudW1iZXIsIG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3AgPSBuZWFyICogTWF0aC50YW4oIGZvdiAqIDAuNSApLFxyXG4gICAgICAgICAgICByaWdodCA9IHRvcCAqIGFzcGVjdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdDQuZnJ1c3R1bSggLXJpZ2h0LCByaWdodCwgLXRvcCwgdG9wLCBuZWFyLCBmYXIgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyAoIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHRvcDogbnVtYmVyLCBuZWFyOiBudW1iZXIsIGZhcjogbnVtYmVyICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmwgPSAoIHJpZ2h0IC0gbGVmdCApLFxyXG4gICAgICAgICAgICB0YiA9ICggdG9wIC0gYm90dG9tICksXHJcbiAgICAgICAgICAgIGZuID0gKCBmYXIgLSBuZWFyICk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgbWF0NCggW1xyXG4gICAgICAgICAgICAyIC8gcmwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyIC8gdGIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAtMiAvIGZuLFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgLSggbGVmdCArIHJpZ2h0ICkgLyBybCxcclxuICAgICAgICAgICAgLSggdG9wICsgYm90dG9tICkgLyB0YixcclxuICAgICAgICAgICAgLSggZmFyICsgbmVhciApIC8gZm4sXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb29rQXQgKCBwb3NpdGlvbjogdmVjMywgdGFyZ2V0OiB2ZWMzLCB1cDogdmVjMyA9IHZlYzMudXAgKTogbWF0NFxyXG4gICAge1xyXG4gICAgICAgIGlmICggcG9zaXRpb24uZXF1YWxzKCB0YXJnZXQgKSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZGVudGl0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB6ID0gdmVjMy5kaWZmZXJlbmNlKCBwb3NpdGlvbiwgdGFyZ2V0ICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbGV0IHggPSB2ZWMzLmNyb3NzKCB1cCwgeiApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCB5ID0gdmVjMy5jcm9zcyggeiwgeCApLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IG1hdDQoIFtcclxuICAgICAgICAgICAgeC54LFxyXG4gICAgICAgICAgICB5LngsXHJcbiAgICAgICAgICAgIHoueCxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIHgueSxcclxuICAgICAgICAgICAgeS55LFxyXG4gICAgICAgICAgICB6LnksXHJcbiAgICAgICAgICAgIDAsXHJcblxyXG4gICAgICAgICAgICB4LnosXHJcbiAgICAgICAgICAgIHkueixcclxuICAgICAgICAgICAgei56LFxyXG4gICAgICAgICAgICAwLFxyXG5cclxuICAgICAgICAgICAgLXZlYzMuZG90KCB4LCBwb3NpdGlvbiApLFxyXG4gICAgICAgICAgICAtdmVjMy5kb3QoIHksIHBvc2l0aW9uICksXHJcbiAgICAgICAgICAgIC12ZWMzLmRvdCggeiwgcG9zaXRpb24gKSxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByb2R1Y3QgKCBtMTogbWF0NCwgbTI6IG1hdDQsIHJlc3VsdDogbWF0NCB8IG51bGwgPSBudWxsICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBsZXQgYTAwID0gbTEuYXQoIDAgKSwgYTAxID0gbTEuYXQoIDEgKSwgYTAyID0gbTEuYXQoIDIgKSwgYTAzID0gbTEuYXQoIDMgKSxcclxuICAgICAgICAgICAgYTEwID0gbTEuYXQoIDQgKSwgYTExID0gbTEuYXQoIDUgKSwgYTEyID0gbTEuYXQoIDYgKSwgYTEzID0gbTEuYXQoIDcgKSxcclxuICAgICAgICAgICAgYTIwID0gbTEuYXQoIDggKSwgYTIxID0gbTEuYXQoIDkgKSwgYTIyID0gbTEuYXQoIDEwICksIGEyMyA9IG0xLmF0KCAxMSApLFxyXG4gICAgICAgICAgICBhMzAgPSBtMS5hdCggMTIgKSwgYTMxID0gbTEuYXQoIDEzICksIGEzMiA9IG0xLmF0KCAxNCApLCBhMzMgPSBtMS5hdCggMTUgKTtcclxuXHJcbiAgICAgICAgbGV0IGIwMCA9IG0yLmF0KCAwICksIGIwMSA9IG0yLmF0KCAxICksIGIwMiA9IG0yLmF0KCAyICksIGIwMyA9IG0yLmF0KCAzICksXHJcbiAgICAgICAgICAgIGIxMCA9IG0yLmF0KCA0ICksIGIxMSA9IG0yLmF0KCA1ICksIGIxMiA9IG0yLmF0KCA2ICksIGIxMyA9IG0yLmF0KCA3ICksXHJcbiAgICAgICAgICAgIGIyMCA9IG0yLmF0KCA4ICksIGIyMSA9IG0yLmF0KCA5ICksIGIyMiA9IG0yLmF0KCAxMCApLCBiMjMgPSBtMi5hdCggMTEgKSxcclxuICAgICAgICAgICAgYjMwID0gbTIuYXQoIDEyICksIGIzMSA9IG0yLmF0KCAxMyApLCBiMzIgPSBtMi5hdCggMTQgKSwgYjMzID0gbTIuYXQoIDE1ICk7XHJcblxyXG4gICAgICAgIGlmICggcmVzdWx0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXQoIFtcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzM1xyXG4gICAgICAgICAgICBdICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IG1hdDQoIFtcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMyxcclxuXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzAsXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzEsXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzIsXHJcbiAgICAgICAgICAgICAgICBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzMsXHJcblxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwICsgYjIzICogYTMwLFxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxLFxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyICsgYjIzICogYTMyLFxyXG4gICAgICAgICAgICAgICAgYjIwICogYTAzICsgYjIxICogYTEzICsgYjIyICogYTIzICsgYjIzICogYTMzLFxyXG5cclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMCxcclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMSxcclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMixcclxuICAgICAgICAgICAgICAgIGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzM1xyXG4gICAgICAgICAgICBdICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaWRlbnRpdHkgPSBuZXcgbWF0NCgpLnNldElkZW50aXR5KCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIG0wID0gbmV3IG1hdDQoKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgbTEgPSBuZXcgbWF0NCgpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgcXVhdFxyXG57XHJcbiAgICBwdWJsaWMgdmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheSggNCApO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgeCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAwIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbIDEgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHogKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgMiBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdyAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWyAzIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB4ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDAgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgeSAoIHZhbHVlOiBudW1iZXIgKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHogKCB2YWx1ZTogbnVtYmVyIClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMiBdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB3ICggdmFsdWU6IG51bWJlciApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDMgXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0SWRlbnRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXQgKCBpbmRleDogbnVtYmVyICk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sgaW5kZXggXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQgKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCA0OyBpKysgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbIGkgXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3B5ICggZGVzdDogcXVhdCB8IG51bGwgPSBudWxsICk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBxdWF0KCk7XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDQ7IGkrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkZXN0LnZhbHVlc1sgaSBdID0gdGhpcy52YWx1ZXNbIGkgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb2xsICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgeCA9IHRoaXMueCxcclxuICAgICAgICAgICAgeSA9IHRoaXMueSxcclxuICAgICAgICAgICAgeiA9IHRoaXMueixcclxuICAgICAgICAgICAgdyA9IHRoaXMudztcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoIDIuMCAqICggeCAqIHkgKyB3ICogeiApLCB3ICogdyArIHggKiB4IC0geSAqIHkgLSB6ICogeiApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwaXRjaCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLngsXHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnksXHJcbiAgICAgICAgICAgIHogPSB0aGlzLnosXHJcbiAgICAgICAgICAgIHcgPSB0aGlzLnc7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKCAyLjAgKiAoIHkgKiB6ICsgdyAqIHggKSwgdyAqIHcgLSB4ICogeCAtIHkgKiB5ICsgeiAqIHogKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgeWF3ICgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hc2luKCAyLjAgKiAoIHRoaXMueCAqIHRoaXMueiAtIHRoaXMudyAqIHRoaXMueSApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVxdWFscyAoIHZlY3RvcjogcXVhdCwgdGhyZXNob2xkID0gRVBTSUxPTiApOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICggTWF0aC5hYnMoIHRoaXMudmFsdWVzWyBpIF0gLSB2ZWN0b3IuYXQoIGkgKSApID4gdGhyZXNob2xkIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJZGVudGl0eSAoKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLnogPSAwO1xyXG4gICAgICAgIHRoaXMudyA9IDE7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxjdWxhdGVXICgpOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLngsXHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnksXHJcbiAgICAgICAgICAgIHogPSB0aGlzLno7XHJcblxyXG4gICAgICAgIHRoaXMudyA9IC0oIE1hdGguc3FydCggTWF0aC5hYnMoIDEuMCAtIHggKiB4IC0geSAqIHkgLSB6ICogeiApICkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkb3QgKCBxMTogcXVhdCwgcTI6IHF1YXQgKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHExLnggKiBxMi54ICsgcTEueSAqIHEyLnkgKyBxMS56ICogcTIueiArIHExLncgKiBxMi53O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnZlcnNlICgpOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRvdCA9IHF1YXQuZG90KCB0aGlzLCB0aGlzICk7XHJcblxyXG4gICAgICAgIGlmICggIWRvdCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldElkZW50aXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGludkRvdCA9IGRvdCA/IDEuMCAvIGRvdCA6IDA7XHJcblxyXG4gICAgICAgIHRoaXMueCAqPSAtaW52RG90O1xyXG4gICAgICAgIHRoaXMueSAqPSAtaW52RG90O1xyXG4gICAgICAgIHRoaXMueiAqPSAtaW52RG90O1xyXG4gICAgICAgIHRoaXMudyAqPSBpbnZEb3Q7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25qdWdhdGUgKCk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZhbHVlc1sgMCBdICo9IC0xO1xyXG4gICAgICAgIHRoaXMudmFsdWVzWyAxIF0gKj0gLTE7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbIDIgXSAqPSAtMTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxlbmd0aCAoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLngsXHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnksXHJcbiAgICAgICAgICAgIHogPSB0aGlzLnosXHJcbiAgICAgICAgICAgIHcgPSB0aGlzLnc7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3ICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vcm1hbGl6ZSAoIGRlc3Q6IHF1YXQgfCBudWxsID0gbnVsbCApOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgeCA9IHRoaXMueCxcclxuICAgICAgICAgICAgeSA9IHRoaXMueSxcclxuICAgICAgICAgICAgeiA9IHRoaXMueixcclxuICAgICAgICAgICAgdyA9IHRoaXMudztcclxuXHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IE1hdGguc3FydCggeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhbGVuZ3RoIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlc3QueCA9IDA7XHJcbiAgICAgICAgICAgIGRlc3QueSA9IDA7XHJcbiAgICAgICAgICAgIGRlc3QueiA9IDA7XHJcbiAgICAgICAgICAgIGRlc3QudyA9IDA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxlbmd0aCA9IDEgLyBsZW5ndGg7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHggKiBsZW5ndGg7XHJcbiAgICAgICAgZGVzdC55ID0geSAqIGxlbmd0aDtcclxuICAgICAgICBkZXN0LnogPSB6ICogbGVuZ3RoO1xyXG4gICAgICAgIGRlc3QudyA9IHcgKiBsZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQgKCBvdGhlcjogcXVhdCApOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNDsgaSsrIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWyBpIF0gKz0gb3RoZXIuYXQoIGkgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/meS4quaYr+W3puWIsOWPs+e7k+WQiCB0aGlzLmNyb3NzLm90aGVyXHJcbiAgICBwdWJsaWMgbXVsdGlwbHkgKCBvdGhlcjogcXVhdCApOiBxdWF0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHExeCA9IHRoaXMudmFsdWVzWyAwIF0sXHJcbiAgICAgICAgICAgIHExeSA9IHRoaXMudmFsdWVzWyAxIF0sXHJcbiAgICAgICAgICAgIHExeiA9IHRoaXMudmFsdWVzWyAyIF0sXHJcbiAgICAgICAgICAgIHExdyA9IHRoaXMudmFsdWVzWyAzIF07XHJcblxyXG4gICAgICAgIGxldCBxMnggPSBvdGhlci54LFxyXG4gICAgICAgICAgICBxMnkgPSBvdGhlci55LFxyXG4gICAgICAgICAgICBxMnogPSBvdGhlci56LFxyXG4gICAgICAgICAgICBxMncgPSBvdGhlci53O1xyXG5cclxuICAgICAgICB0aGlzLnggPSBxMXggKiBxMncgKyBxMXcgKiBxMnggKyBxMXkgKiBxMnogLSBxMXogKiBxMnk7XHJcbiAgICAgICAgdGhpcy55ID0gcTF5ICogcTJ3ICsgcTF3ICogcTJ5ICsgcTF6ICogcTJ4IC0gcTF4ICogcTJ6O1xyXG4gICAgICAgIHRoaXMueiA9IHExeiAqIHEydyArIHExdyAqIHEyeiArIHExeCAqIHEyeSAtIHExeSAqIHEyeDtcclxuICAgICAgICB0aGlzLncgPSBxMXcgKiBxMncgLSBxMXggKiBxMnggLSBxMXkgKiBxMnkgLSBxMXogKiBxMno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aXBseVZlYzMgKCB2ZWN0b3I6IHZlYzMsIGRlc3Q6IHZlYzMgfCBudWxsID0gbnVsbCApOiB2ZWMzXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCAhZGVzdCApIGRlc3QgPSBuZXcgdmVjMygpO1xyXG5cclxuICAgICAgICBsZXQgeCA9IHZlY3Rvci54LFxyXG4gICAgICAgICAgICB5ID0gdmVjdG9yLnksXHJcbiAgICAgICAgICAgIHogPSB2ZWN0b3IuejtcclxuXHJcbiAgICAgICAgbGV0IHF4ID0gdGhpcy54LFxyXG4gICAgICAgICAgICBxeSA9IHRoaXMueSxcclxuICAgICAgICAgICAgcXogPSB0aGlzLnosXHJcbiAgICAgICAgICAgIHF3ID0gdGhpcy53O1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGxldCBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeSxcclxuICAgICAgICAgICAgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHosXHJcbiAgICAgICAgICAgIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4LFxyXG4gICAgICAgICAgICBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XHJcbiAgICAgICAgZGVzdC55ID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcclxuICAgICAgICBkZXN0LnogPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9NYXQ0ICggZGVzdDogbWF0NCB8IG51bGwgPSBudWxsICk6IG1hdDRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBtYXQ0KCk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdGhpcy54LFxyXG4gICAgICAgICAgICB5ID0gdGhpcy55LFxyXG4gICAgICAgICAgICB6ID0gdGhpcy56LFxyXG4gICAgICAgICAgICB3ID0gdGhpcy53LFxyXG5cclxuICAgICAgICAgICAgeDIgPSB4ICsgeCxcclxuICAgICAgICAgICAgeTIgPSB5ICsgeSxcclxuICAgICAgICAgICAgejIgPSB6ICsgeixcclxuXHJcbiAgICAgICAgICAgIHh4ID0geCAqIHgyLFxyXG4gICAgICAgICAgICB4eSA9IHggKiB5MixcclxuICAgICAgICAgICAgeHogPSB4ICogejIsXHJcbiAgICAgICAgICAgIHl5ID0geSAqIHkyLFxyXG4gICAgICAgICAgICB5eiA9IHkgKiB6MixcclxuICAgICAgICAgICAgenogPSB6ICogejIsXHJcbiAgICAgICAgICAgIHd4ID0gdyAqIHgyLFxyXG4gICAgICAgICAgICB3eSA9IHcgKiB5MixcclxuICAgICAgICAgICAgd3ogPSB3ICogejI7XHJcblxyXG4gICAgICAgIGRlc3Quc2V0KCBbXHJcbiAgICAgICAgICAgIDEgLSAoIHl5ICsgenogKSxcclxuICAgICAgICAgICAgeHkgKyB3eixcclxuICAgICAgICAgICAgeHogLSB3eSxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgICggeHkgLSB3eiApLFxyXG4gICAgICAgICAgICAoIDEgLSAoIHh4ICsgenogKSApLFxyXG4gICAgICAgICAgICAoIHl6ICsgd3ggKSxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIHh6ICsgd3ksXHJcbiAgICAgICAgICAgIHl6IC0gd3gsXHJcbiAgICAgICAgICAgIDEgLSAoIHh4ICsgeXkgKSxcclxuICAgICAgICAgICAgMCxcclxuXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICBdICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3VtICggcTE6IHF1YXQsIHEyOiBxdWF0LCBkZXN0OiBxdWF0IHwgbnVsbCA9IG51bGwgKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHF1YXQoKTtcclxuXHJcbiAgICAgICAgZGVzdC54ID0gcTEueCArIHEyLng7XHJcbiAgICAgICAgZGVzdC55ID0gcTEueSArIHEyLnk7XHJcbiAgICAgICAgZGVzdC56ID0gcTEueiArIHEyLno7XHJcbiAgICAgICAgZGVzdC53ID0gcTEudyArIHEyLnc7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJvZHVjdCAoIHExOiBxdWF0LCBxMjogcXVhdCwgZGVzdDogcXVhdCB8IG51bGwgPSBudWxsICk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBxdWF0KCk7XHJcblxyXG4gICAgICAgIGxldCBxMXggPSBxMS54LFxyXG4gICAgICAgICAgICBxMXkgPSBxMS55LFxyXG4gICAgICAgICAgICBxMXogPSBxMS56LFxyXG4gICAgICAgICAgICBxMXcgPSBxMS53LFxyXG5cclxuICAgICAgICAgICAgcTJ4ID0gcTIueCxcclxuICAgICAgICAgICAgcTJ5ID0gcTIueSxcclxuICAgICAgICAgICAgcTJ6ID0gcTIueixcclxuICAgICAgICAgICAgcTJ3ID0gcTIudztcclxuXHJcbiAgICAgICAgZGVzdC54ID0gcTF4ICogcTJ3ICsgcTF3ICogcTJ4ICsgcTF5ICogcTJ6IC0gcTF6ICogcTJ5O1xyXG4gICAgICAgIGRlc3QueSA9IHExeSAqIHEydyArIHExdyAqIHEyeSArIHExeiAqIHEyeCAtIHExeCAqIHEyejtcclxuICAgICAgICBkZXN0LnogPSBxMXogKiBxMncgKyBxMXcgKiBxMnogKyBxMXggKiBxMnkgLSBxMXkgKiBxMng7XHJcbiAgICAgICAgZGVzdC53ID0gcTF3ICogcTJ3IC0gcTF4ICogcTJ4IC0gcTF5ICogcTJ5IC0gcTF6ICogcTJ6O1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyb3NzICggcTE6IHF1YXQsIHEyOiBxdWF0LCBkZXN0OiBxdWF0IHwgbnVsbCA9IG51bGwgKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHF1YXQoKTtcclxuXHJcbiAgICAgICAgbGV0IHExeCA9IHExLngsXHJcbiAgICAgICAgICAgIHExeSA9IHExLnksXHJcbiAgICAgICAgICAgIHExeiA9IHExLnosXHJcbiAgICAgICAgICAgIHExdyA9IHExLncsXHJcblxyXG4gICAgICAgICAgICBxMnggPSBxMi54LFxyXG4gICAgICAgICAgICBxMnkgPSBxMi55LFxyXG4gICAgICAgICAgICBxMnogPSBxMi56LFxyXG4gICAgICAgICAgICBxMncgPSBxMi53O1xyXG5cclxuICAgICAgICBkZXN0LnggPSBxMXcgKiBxMnogKyBxMXogKiBxMncgKyBxMXggKiBxMnkgLSBxMXkgKiBxMng7XHJcbiAgICAgICAgZGVzdC55ID0gcTF3ICogcTJ3IC0gcTF4ICogcTJ4IC0gcTF5ICogcTJ5IC0gcTF6ICogcTJ6O1xyXG4gICAgICAgIGRlc3QueiA9IHExdyAqIHEyeCArIHExeCAqIHEydyArIHExeSAqIHEyeiAtIHExeiAqIHEyeTtcclxuICAgICAgICBkZXN0LncgPSBxMXcgKiBxMnkgKyBxMXkgKiBxMncgKyBxMXogKiBxMnggLSBxMXggKiBxMno7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvcnRNaXggKCBxMTogcXVhdCwgcTI6IHF1YXQsIHRpbWU6IG51bWJlciwgZGVzdDogcXVhdCB8IG51bGwgPSBudWxsICk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBxdWF0KCk7XHJcblxyXG4gICAgICAgIGlmICggdGltZSA8PSAwLjAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcTEuY29weShxMSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0aW1lID49IDEuMCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxMi5jb3B5KGRlc3QpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29zID0gcXVhdC5kb3QoIHExLCBxMiApLFxyXG4gICAgICAgICAgICBxMmEgPSBxMi5jb3B5KCk7XHJcblxyXG4gICAgICAgIGlmICggY29zIDwgMC4wIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHEyYS5pbnZlcnNlKCk7XHJcbiAgICAgICAgICAgIGNvcyA9IC1jb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgazA6IG51bWJlcixcclxuICAgICAgICAgICAgazE6IG51bWJlcjtcclxuXHJcbiAgICAgICAgaWYgKCBjb3MgPiAwLjk5OTkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgazAgPSAxIC0gdGltZTtcclxuICAgICAgICAgICAgazEgPSAwICsgdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNpbjogbnVtYmVyID0gTWF0aC5zcXJ0KCAxIC0gY29zICogY29zICk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gTWF0aC5hdGFuMiggc2luLCBjb3MgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvbmVPdmVyU2luOiBudW1iZXIgPSAxIC8gc2luO1xyXG5cclxuICAgICAgICAgICAgazAgPSBNYXRoLnNpbiggKCAxIC0gdGltZSApICogYW5nbGUgKSAqIG9uZU92ZXJTaW47XHJcbiAgICAgICAgICAgIGsxID0gTWF0aC5zaW4oICggMCArIHRpbWUgKSAqIGFuZ2xlICkgKiBvbmVPdmVyU2luO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVzdC54ID0gazAgKiBxMS54ICsgazEgKiBxMmEueDtcclxuICAgICAgICBkZXN0LnkgPSBrMCAqIHExLnkgKyBrMSAqIHEyYS55O1xyXG4gICAgICAgIGRlc3QueiA9IGswICogcTEueiArIGsxICogcTJhLno7XHJcbiAgICAgICAgZGVzdC53ID0gazAgKiBxMS53ICsgazEgKiBxMmEudztcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtaXggKCBxMTogcXVhdCwgcTI6IHF1YXQsIHRpbWU6IG51bWJlciwgZGVzdDogcXVhdCB8IG51bGwgPSBudWxsICk6IHF1YXRcclxuICAgIHtcclxuICAgICAgICBpZiAoICFkZXN0ICkgZGVzdCA9IG5ldyBxdWF0KCk7XHJcblxyXG4gICAgICAgIGxldCBjb3NIYWxmVGhldGEgPSBxMS54ICogcTIueCArIHExLnkgKiBxMi55ICsgcTEueiAqIHEyLnogKyBxMS53ICogcTIudztcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggY29zSGFsZlRoZXRhICkgPj0gMS4wIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHExLmNvcHkoZGVzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhhbGZUaGV0YSA9IE1hdGguYWNvcyggY29zSGFsZlRoZXRhICksXHJcbiAgICAgICAgICAgIHNpbkhhbGZUaGV0YSA9IE1hdGguc3FydCggMS4wIC0gY29zSGFsZlRoZXRhICogY29zSGFsZlRoZXRhICk7XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHNpbkhhbGZUaGV0YSApIDwgMC4wMDEgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVzdC54ID0gcTEueCAqIDAuNSArIHEyLnggKiAwLjU7XHJcbiAgICAgICAgICAgIGRlc3QueSA9IHExLnkgKiAwLjUgKyBxMi55ICogMC41O1xyXG4gICAgICAgICAgICBkZXN0LnogPSBxMS56ICogMC41ICsgcTIueiAqIDAuNTtcclxuICAgICAgICAgICAgZGVzdC53ID0gcTEudyAqIDAuNSArIHEyLncgKiAwLjU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYXRpb0EgPSBNYXRoLnNpbiggKCAxIC0gdGltZSApICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGEsXHJcbiAgICAgICAgICAgIHJhdGlvQiA9IE1hdGguc2luKCB0aW1lICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGE7XHJcblxyXG4gICAgICAgIGRlc3QueCA9IHExLnggKiByYXRpb0EgKyBxMi54ICogcmF0aW9CO1xyXG4gICAgICAgIGRlc3QueSA9IHExLnkgKiByYXRpb0EgKyBxMi55ICogcmF0aW9CO1xyXG4gICAgICAgIGRlc3QueiA9IHExLnogKiByYXRpb0EgKyBxMi56ICogcmF0aW9CO1xyXG4gICAgICAgIGRlc3QudyA9IHExLncgKiByYXRpb0EgKyBxMi53ICogcmF0aW9CO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUF4aXMgKCBheGlzOiB2ZWMzLCBhbmdsZTogbnVtYmVyLCBkZXN0OiBxdWF0IHwgbnVsbCA9IG51bGwgKTogcXVhdFxyXG4gICAge1xyXG4gICAgICAgIGlmICggIWRlc3QgKSBkZXN0ID0gbmV3IHF1YXQoKTtcclxuXHJcbiAgICAgICAgYW5nbGUgKj0gMC41O1xyXG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbiggYW5nbGUgKTtcclxuXHJcbiAgICAgICAgZGVzdC54ID0gYXhpcy54ICogc2luO1xyXG4gICAgICAgIGRlc3QueSA9IGF4aXMueSAqIHNpbjtcclxuICAgICAgICBkZXN0LnogPSBheGlzLnogKiBzaW47XHJcbiAgICAgICAgZGVzdC53ID0gTWF0aC5jb3MoIGFuZ2xlICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpZGVudGl0eSA9IG5ldyBxdWF0KCkuc2V0SWRlbnRpdHkoKTtcclxuICAgIHN0YXRpYyBxMCA9IG5ldyBxdWF0KCk7XHJcbiAgICBzdGF0aWMgcTEgPSBuZXcgcXVhdCgpO1xyXG4gICAgc3RhdGljIHEyID0gbmV3IHF1YXQoKTtcclxufVxyXG4iLCJpbXBvcnQge0Jhc2ljV2ViR0xBcHBsaWNhdGlvbn0gZnJvbSAnLi9jb21tb24vQXBwbGljYXRpb24nO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG5jYW52YXMud2lkdGggPSAzMDBcbmNhbnZhcy5oZWlnaHQgPSAzMDBcbmNvbnN0IGJhc2UgPSBuZXcgQmFzaWNXZWJHTEFwcGxpY2F0aW9uKGNhbnZhcylcbmJhc2UuZHJhd1JlY3RCeUludGVybGVhdmVkVkJPKCk7XG4iLCIvLyDmnprkuL7nsbtcbmV4cG9ydCBlbnVtIEVTaGFkZXJUeXBlIHtcbiAgICBWU19TSEFERVIsXG4gICAgRlNfU0hBREVSXG59XG5cblxuZXhwb3J0IGVudW0gRUdMU0xFU0RhdGFUeXBlXG57XG4gICAgRkxPQVRfVkVDMiA9IDB4OEI1MCxcbiAgICBGTE9BVF9WRUMzLFxuICAgIEZMT0FUX1ZFQzQsXG4gICAgSU5UX1ZFQzIsXG4gICAgSU5UX1ZFQzMsXG4gICAgSU5UX1ZFQzQsXG4gICAgQk9PTCxcbiAgICBCT09MX1ZFQzIsXG4gICAgQk9PTF9WRUMzLFxuICAgIEJPT0xfVkVDNCxcbiAgICBGTE9BVF9NQVQyLFxuICAgIEZMT0FUX01BVDMsXG4gICAgRkxPQVRfTUFUNCxcbiAgICBTQU1QTEVSXzJELFxuICAgIFNBTVBMRVJfQ1VCRSxcblxuICAgIEZMT0FUID0gMHgxNDA2LFxuICAgIElOVCA9IDB4MTQwNFxufVxuXG5leHBvcnQgY2xhc3MgR0xVbmlmb3JtSW5mb1xue1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7ICAgLy8gc2l6ZSDmmK/mjId0eXBl55qE5Liq5pWw77yM5YiH6K6wXG4gICAgcHVibGljIHR5cGU6IEVHTFNMRVNEYXRhVHlwZTsgICAvLyB0eXBlIOaYr1VuaWZvcm0gVHlwZe+8jOiAjOS4jeaYr0RhdGFUeXBlXG4gICAgcHVibGljIGxvY2F0aW9uOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciAoIHNpemU6IG51bWJlciwgdHlwZTogbnVtYmVyLCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIClcbiAgICB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2M7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR0xBdHRyaWJJbmZvIHtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgdHlwZTogRUdMU0xFU0RhdGFUeXBlOyAgIC8vIHR5cGUg5pivVW5pZm9ybSBUeXBl77yM6ICM5LiN5pivRGF0YVR5cGVcbiAgICBsb2NhdGlvbjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyLCB0eXBlOiBudW1iZXIsIGxvYzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jXG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBHTFVuaWZvcm1NYXAgPSB7IFsga2V5OiBzdHJpbmcgXTogR0xVbmlmb3JtSW5mbyB9O1xuZXhwb3J0IHR5cGUgR0xBdHRyaWJNYXAgPSB7IFsga2V5OiBzdHJpbmcgXTogR0xBdHRyaWJJbmZvIH07XG5leHBvcnQgY2xhc3MgSGVscGVyIHtcbiAgICAvKipcbiAgICAgKiDojrflj5Z3ZWJnbOiDveWKm+S/oeaBr1xuICAgICAqIEBwYXJhbSBnbFxuICAgICAqL1xuICAgIHN0YXRpYyBwcmludFN0YXRlcyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIC8vIOaJgOacieeahGJvb2xlYW7nirbmgIHlj5jph4/vvIzlhbE55LiqXG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjEuIGlzQmxlbmRFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuQkxFTkQgKSApOyAvLyDkuIDkuKrlg4/ntKDnmoTmlrDml6fpopzoibLmt7flkIjnrpfms5VcbiAgICAgICAgY29uc29sZS5sb2coIFwiMi4gaXNDdWxsRmFjZUVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5DVUxMX0ZBQ0UgKSApO1xuICAgICAgICBjb25zb2xlLmxvZyggXCIzLiBpc0RlcHRoVGVzdEVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5ERVBUSF9URVNUICkgKTtcbiAgICAgICAgY29uc29sZS5sb2coIFwiNC4gaXNEaXRoZXJFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuRElUSEVSICkgKTtcbiAgICAgICAgY29uc29sZS5sb2coIFwiNS4gaXNQb2x5Z29uT2Zmc2V0RmlsbEVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5QT0xZR09OX09GRlNFVF9GSUxMICkgKTtcbiAgICAgICAgY29uc29sZS5sb2coIFwiNi4gaXNTYW1wbGVBbHBodFRvQ292ZXJhZ2VFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuU0FNUExFX0FMUEhBX1RPX0NPVkVSQUdFICkgKTtcbiAgICAgICAgY29uc29sZS5sb2coIFwiNy4gaXNTYW1wbGVDb3ZlcmFnZUVuYWJsZSA9IFwiICsgZ2wuaXNFbmFibGVkKCBnbC5TQU1QTEVfQ09WRVJBR0UgKSApO1xuICAgICAgICBjb25zb2xlLmxvZyggXCI4LiBpc1NjaXNzb3JUZXN0RW5hYmxlID0gXCIgKyBnbC5pc0VuYWJsZWQoIGdsLlNDSVNTT1JfVEVTVCApICk7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcIjkuIGlzU3RlbmNpbFRlc3RFbmFibGUgPSBcIiArIGdsLmlzRW5hYmxlZCggZ2wuU1RFTkNJTF9URVNUICkgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5Z3ZWJnbOS/oeW/g1xuICAgICAqIEBwYXJhbSBnbFxuICAgICAqL1xuICAgIHN0YXRpYyBwcmludFdlYkdMSW5mbyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcInJlbmRlcmVyID0gXCIgKyBnbC5nZXRQYXJhbWV0ZXIoIGdsLlJFTkRFUkVSICkgKTtcbiAgICAgICAgY29uc29sZS5sb2coIFwidmVyc2lvbiA9IFwiICsgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5WRVJTSU9OICkgKTtcbiAgICAgICAgY29uc29sZS5sb2coIFwidmVuZG9yID0gXCIgKyBnbC5nZXRQYXJhbWV0ZXIoIGdsLlZFTkRPUiApICk7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcImdsc2wgdmVyc2lvbiA9IFwiICsgZ2wuZ2V0UGFyYW1ldGVyKCBnbC5TSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04gKSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuedgOiJsuWZqFxuICAgICAqIEBwYXJhbSBnbFxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVNoYWRlcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBFU2hhZGVyVHlwZSkge1xuICAgICAgICBsZXQgc2hhZGVyOiBXZWJHTFNoYWRlciB8IG51bGwgPSBudWxsO1xuICAgICAgICBpZiAodHlwZSA9PT0gRVNoYWRlclR5cGUuVlNfU0hBREVSKSB7XG4gICAgICAgICAgICBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFkZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignd2ViZ2xzaGFkZXIg5Yib5bu65aSx6LSlJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZGVyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog57yW6K+R552A6Imy5ZmoXG4gICAgICogQHBhcmFtIGdsXG4gICAgICogQHBhcmFtIGNvZGVcbiAgICAgKiBAcGFyYW0gc2hhZGVyXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBpbGVTaGFkZXIoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgY29kZTogc3RyaW5nLCBzaGFkZXI6IFdlYkdMU2hhZGVyKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIOi9veWFpXNoYWRlcua6kOeggVxuICAgICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBjb2RlKVxuICAgICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcilcbiAgICAgICAgaWYgKGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIOW8ueWHuuWvueivneahhu+8jOaYvuekuumUmeivr+WOn+WboFxuICAgICAgICAgICAgYWxlcnQoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgICAgICAgICAgIC8vIOWIoOmZpHNoYWRlcu+8jOmYsuatouWGheWtmOazhOmcslxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu6Z2xzbOeoi+W6j1xuICAgICAqIEBwYXJhbSBnbFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVQcm9ncmFtKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpOiBXZWJHTFByb2dyYW0ge1xuICAgICAgICBsZXQgcHJvZ3JhbTogV2ViR0xQcm9ncmFtIHwgbnVsbCA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICBpZiAocHJvZ3JhbSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3ZWJnbCBwcm9ncmFtIOWIm+W7uuWksei0pScpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2dyYW1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpk77mjqVnbHNs56iL5bqPXG4gICAgICogQHBhcmFtIGdsXG4gICAgICogQHBhcmFtIHByb2dyYW1cbiAgICAgKiBAcGFyYW0gdnNTaGFkZXJcbiAgICAgKiBAcGFyYW0gZnNTaGFkZXJcbiAgICAgKiBAcGFyYW0gYmVmb3JlUHJvZ3JhbUxpbmtcbiAgICAgKiBAcGFyYW0gYWZ0ZXJQcm9ncmFtTGlua1xuICAgICAqL1xuICAgIHN0YXRpYyBsaW5rUHJvZ3JhbSAoXG4gICAgICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIC8vIOa4suafk+S4iuS4i+aWh+WvueixoVxuICAgICAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW0sICAgICAvLyDpk77mjqXlmajlr7nosaFcbiAgICAgICAgdnNTaGFkZXI6IFdlYkdMU2hhZGVyLCAgICAgLy8g6KaB6ZO+5o6l55qE6aG254K5552A6Imy5ZmoXG4gICAgICAgIGZzU2hhZGVyOiBXZWJHTFNoYWRlciwgICAgIC8vIOimgemTvuaOpeeahOeJh+auteedgOiJsuWZqFxuICAgICAgICBiZWZvcmVQcm9ncmFtTGluazogKCAoIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHByb2dyYW06IFdlYkdMUHJvZ3JhbSApID0+IHZvaWQgKSB8IG51bGwgPSBudWxsLFxuICAgICAgICBhZnRlclByb2dyYW1MaW5rOiAoICggZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogV2ViR0xQcm9ncmFtICkgPT4gdm9pZCApIHwgbnVsbCA9IG51bGwgKTogYm9vbGVhblxuICAgIHtcblxuICAgICAgICAvLyAx44CB5L2/55SoYXR0YWNoU2hhZGVy5pa55rOV5bCG6aG254K55ZKM54mH5q61552A6Imy5Zmo5LiO5b2T5YmN55qE6L+e5o6l5Zmo55u45YWz6IGUXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlciggcHJvZ3JhbSwgdnNTaGFkZXIgKTtcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKCBwcm9ncmFtLCBmc1NoYWRlciApO1xuXG4gICAgICAgIC8vIDLjgIHlnKjosIPnlKhsaW5rUHJvZ3JhbeaWueazleS5i+WJje+8jOaMiemcgOinpuWPkWJlZm9yZVByb2dyYW1MaW5r5Zue6LCD5Ye95pWwXG4gICAgICAgIGlmICggYmVmb3JlUHJvZ3JhbUxpbmsgIT09IG51bGwgKVxuICAgICAgICB7XG4gICAgICAgICAgICBiZWZvcmVQcm9ncmFtTGluayggZ2wsIHByb2dyYW0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDPjgIHosIPnlKhsaW5rUHJvZ3Jhbei/m+ihjOmTvuaOpeaTjeS9nFxuICAgICAgICBnbC5saW5rUHJvZ3JhbSggcHJvZ3JhbSApO1xuICAgICAgICAvLyA044CB5L2/55So5bimZ2wuTElOS19TVEFUVVPlj4LmlbDnmoRnZXRQcm9ncmFtUGFyYW1ldGVy5pa55rOV77yM6L+b6KGM6ZO+5o6l54q25oCB5qOA5p+lXG4gICAgICAgIGlmICggZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlciggcHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMgKSA9PT0gZmFsc2UgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyA0LjEg5aaC5p6c6ZO+5o6l5Ye66ZSZ77yM6LCD55SoZ2V0UHJvZ3JhbUluZm9Mb2fmlrnms5XlsIbplJnor6/kv6Hmga/ku6XlvLnmoYbmlrnlvI/pgJrnn6XosIPnlKjogIVcbiAgICAgICAgICAgIGFsZXJ0KCBnbC5nZXRQcm9ncmFtSW5mb0xvZyggcHJvZ3JhbSApICk7XG4gICAgICAgICAgICAvLyA0LjIg5Yig6Zmk5o6J55u45YWz6LWE5rqQ77yM6Ziy5q2i5YaF5a2Y5rOE5ryPXG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIoIHZzU2hhZGVyICk7XG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIoIGZzU2hhZGVyICk7XG4gICAgICAgICAgICBnbC5kZWxldGVQcm9ncmFtKCBwcm9ncmFtICk7XG4gICAgICAgICAgICAvLyA0LjMg6L+U5Zue6ZO+5o6l5aSx6LSl54q25oCBXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIDXjgIHkvb/nlKh2YWxpZGF0ZVByb2dyYW3ov5vooYzpk77mjqXpqozor4FcbiAgICAgICAgZ2wudmFsaWRhdGVQcm9ncmFtKCBwcm9ncmFtICk7XG4gICAgICAgIC8vIDbjgIHkvb/nlKjluKZnbC5WQUxJREFURV9TVEFUVVPlj4LmlbDnmoRnZXRQcm9ncmFtUGFyYW1ldGVy5pa55rOV77yM6L+b6KGM6aqM6K+B54q25oCB5qOA5p+lXG4gICAgICAgIGlmICggZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlciggcHJvZ3JhbSwgZ2wuVkFMSURBVEVfU1RBVFVTICkgPT09IGZhbHNlIClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gNi4xIOWmguaenOmqjOivgeWHuumUme+8jOiwg+eUqGdldFByb2dyYW1JbmZvTG9n5pa55rOV5bCG6ZSZ6K+v5L+h5oGv5Lul5by55qGG5pa55byP6YCa55+l6LCD55So6ICFXG4gICAgICAgICAgICBhbGVydCggZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coIHByb2dyYW0gKSApO1xuICAgICAgICAgICAgLy8gNi4yIOWIoOmZpOaOieebuOWFs+i1hOa6kO+8jOmYsuatouWGheWtmOazhOa8j1xuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKCB2c1NoYWRlciApO1xuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKCBmc1NoYWRlciApO1xuICAgICAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbSggcHJvZ3JhbSApO1xuICAgICAgICAgICAgLy8gNi4zIOi/lOWbnumTvuaOpeWksei0peeKtuaAgVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyA344CB5YWo6YOo5q2j56Gu77yM5oyJ6ZyA6LCD55SoYWZ0ZXJQcm9ncmFtTGlua+Wbnuiwg+WHveaVsFxuICAgICAgICBpZiAoIGFmdGVyUHJvZ3JhbUxpbmsgIT09IG51bGwgKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZnRlclByb2dyYW1MaW5rKCBnbCwgcHJvZ3JhbSApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gOOOAgei/lOWbnumTvuaOpeato+ehruihqOekulxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UHJvZ3JhbUFjdGl2ZUF0dHJpYnMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBvdXQ6IEdMQXR0cmliTWFwKTogdm9pZCB7XG4gICAgLy8gICAg6I635Y+W5b2T5YmNYWN0aXZl54q25oCB55qEYXR0cmlidXRl5ZKMdW5pZm9ybeaVsOmHj++8jOW/hemhu+WcqGxpbmvlkI7ojrflj5ZcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9BVFRSSUJVVEVTKVxuXG4gICAgICAgIC8v5b6I6YeN6KaB5LiA54K577yM5omA6LCTYWN0aXZl5piv5oyHdW5pZm9ybeW3sue7j+iiq+S9v+eUqOeahO+8jOWQpuWImeS4jeWxnuS6jnVuaWZvcm0sdW5pZm9ybeWcqHNoYWRlcuS4reW/hemhu+aYr+ivu+WPlu+8jOS4jeiDvei1i+WAvFxuICAgICAgICAvL+W+iOmHjeimgeS4gOeCue+8jGF0dHJpYnV0ZeWcqHNoYWRlcuS4reWPquiDveivu+WPlu+8jOS4jeiDvei1i+WAvCzlpoLmnpzmsqHmnInooqvkvb/nlKjnmoTor53vvIzkuZ/mmK/kuI3nrpflhaVhY3RpdmVBdHRyaWLkuK3ljrvnmoRcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmZvOiBXZWJHTEFjdGl2ZUluZm8gfCBudWxsID0gZ2wuZ2V0QWN0aXZlQXR0cmliKCBwcm9ncmFtLCBpICk7XG4gICAgICAgICAgICBpZiAoIGluZm8gKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG91dFsgaW5mby5uYW1lIF0gPSBuZXcgR0xBdHRyaWJJbmZvKCBpbmZvLnNpemUsIGluZm8udHlwZSwgZ2wuZ2V0QXR0cmliTG9jYXRpb24oIHByb2dyYW0sIGluZm8ubmFtZSApICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UHJvZ3JhbUFjdGl2ZVVuaWZvcm0oZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLCBvdXQ6IEdMVW5pZm9ybU1hcCkge1xuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmZvOiBXZWJHTEFjdGl2ZUluZm8gfCBudWxsID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybSggcHJvZ3JhbSwgaSApO1xuICAgICAgICAgICAgaWYgKCBpbmZvIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGwgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oIHByb2dyYW0sIGluZm8ubmFtZSApO1xuICAgICAgICAgICAgICAgIGlmICggbG9jICE9PSBudWxsIClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG91dFsgaW5mby5uYW1lIF0gPSBuZXcgR0xVbmlmb3JtSW5mbyggaW5mby5zaXplLCBpbmZvLnR5cGUsIGxvYyApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVCdWZmZXIgKCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ICk6IFdlYkdMQnVmZmVyXG4gICAge1xuICAgICAgICBsZXQgYnVmZmVyOiBXZWJHTEJ1ZmZlciB8IG51bGwgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgaWYgKCBidWZmZXIgPT09IG51bGwgKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiV2ViR0xCdWZmZXLliJvlu7rlpLHotKXvvIFcIiApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==