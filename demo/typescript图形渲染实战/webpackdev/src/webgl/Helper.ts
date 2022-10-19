// 枚举类
export enum EShaderType {
    VS_SHADER,
    FS_SHADER
}


export enum EGLSLESDataType
{
    FLOAT_VEC2 = 0x8B50,
    FLOAT_VEC3,
    FLOAT_VEC4,
    INT_VEC2,
    INT_VEC3,
    INT_VEC4,
    BOOL,
    BOOL_VEC2,
    BOOL_VEC3,
    BOOL_VEC4,
    FLOAT_MAT2,
    FLOAT_MAT3,
    FLOAT_MAT4,
    SAMPLER_2D,
    SAMPLER_CUBE,

    FLOAT = 0x1406,
    INT = 0x1404
}

export class GLUniformInfo
{
    public size: number;   // size 是指type的个数，切记
    public type: EGLSLESDataType;   // type 是Uniform Type，而不是DataType
    public location: WebGLUniformLocation;

    public constructor ( size: number, type: number, loc: WebGLUniformLocation )
    {
        this.size = size;
        this.type = type;
        this.location = loc;
    }
}

export class GLAttribInfo {
    size: number;
    type: EGLSLESDataType;   // type 是Uniform Type，而不是DataType
    location: number;

    constructor(size: number, type: number, loc: number) {
        this.size = size
        this.type = type
        this.location = loc
    }
}

export type GLUniformMap = { [ key: string ]: GLUniformInfo };
export type GLAttribMap = { [ key: string ]: GLAttribInfo };
export class Helper {
    /**
     * 获取webgl能力信息
     * @param gl
     */
    static printStates(gl: WebGLRenderingContext): void {
        // 所有的boolean状态变量，共9个
        console.log( "1. isBlendEnable = " + gl.isEnabled( gl.BLEND ) ); // 一个像素的新旧颜色混合算法
        console.log( "2. isCullFaceEnable = " + gl.isEnabled( gl.CULL_FACE ) );
        console.log( "3. isDepthTestEnable = " + gl.isEnabled( gl.DEPTH_TEST ) );
        console.log( "4. isDitherEnable = " + gl.isEnabled( gl.DITHER ) );
        console.log( "5. isPolygonOffsetFillEnable = " + gl.isEnabled( gl.POLYGON_OFFSET_FILL ) );
        console.log( "6. isSampleAlphtToCoverageEnable = " + gl.isEnabled( gl.SAMPLE_ALPHA_TO_COVERAGE ) );
        console.log( "7. isSampleCoverageEnable = " + gl.isEnabled( gl.SAMPLE_COVERAGE ) );
        console.log( "8. isScissorTestEnable = " + gl.isEnabled( gl.SCISSOR_TEST ) );
        console.log( "9. isStencilTestEnable = " + gl.isEnabled( gl.STENCIL_TEST ) );
    }

    /**
     * 获取webgl信心
     * @param gl
     */
    static printWebGLInfo(gl: WebGLRenderingContext): void {
        console.log( "renderer = " + gl.getParameter( gl.RENDERER ) );
        console.log( "version = " + gl.getParameter( gl.VERSION ) );
        console.log( "vendor = " + gl.getParameter( gl.VENDOR ) );
        console.log( "glsl version = " + gl.getParameter( gl.SHADING_LANGUAGE_VERSION ) );
    }

    /**
     * 创建着色器
     * @param gl
     * @param type
     */
    static createShader(gl: WebGLRenderingContext, type: EShaderType) {
        let shader: WebGLShader | null = null;
        if (type === EShaderType.VS_SHADER) {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            shader = gl.createShader(gl.FRAGMENT_SHADER)
        }
        if (shader === null) {
            throw new Error('webglshader 创建失败')
        }
        return shader
    }

    /**
     * 编译着色器
     * @param gl
     * @param code
     * @param shader
     */
    static compileShader(gl: WebGLRenderingContext, code: string, shader: WebGLShader): boolean {
        // 载入shader源码
        gl.shaderSource(shader, code)
        gl.compileShader(shader)
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false) {
            // 弹出对话框，显示错误原因
            alert(gl.getShaderInfoLog(shader));
            // 删除shader，防止内存泄露
            gl.deleteShader(shader)
            return false
        }
        return true
    }

    /**
     * 创建glsl程序
     * @param gl
     */
    static createProgram(gl: WebGLRenderingContext): WebGLProgram {
        let program: WebGLProgram | null = gl.createProgram()
        if (program === null) {
            throw new Error('webgl program 创建失败')
        }
        return program
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
    static linkProgram (
        gl: WebGLRenderingContext, // 渲染上下文对象
        program: WebGLProgram,     // 链接器对象
        vsShader: WebGLShader,     // 要链接的顶点着色器
        fsShader: WebGLShader,     // 要链接的片段着色器
        beforeProgramLink: ( ( gl: WebGLRenderingContext, program: WebGLProgram ) => void ) | null = null,
        afterProgramLink: ( ( gl: WebGLRenderingContext, program: WebGLProgram ) => void ) | null = null ): boolean
    {

        // 1、使用attachShader方法将顶点和片段着色器与当前的连接器相关联
        gl.attachShader( program, vsShader );
        gl.attachShader( program, fsShader );

        // 2、在调用linkProgram方法之前，按需触发beforeProgramLink回调函数
        if ( beforeProgramLink !== null )
        {
            beforeProgramLink( gl, program );
        }

        // 3、调用linkProgram进行链接操作
        gl.linkProgram( program );
        // 4、使用带gl.LINK_STATUS参数的getProgramParameter方法，进行链接状态检查
        if ( gl.getProgramParameter( program, gl.LINK_STATUS ) === false )
        {
            // 4.1 如果链接出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert( gl.getProgramInfoLog( program ) );
            // 4.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader( vsShader );
            gl.deleteShader( fsShader );
            gl.deleteProgram( program );
            // 4.3 返回链接失败状态
            return false;
        }


        // 5、使用validateProgram进行链接验证
        gl.validateProgram( program );
        // 6、使用带gl.VALIDATE_STATUS参数的getProgramParameter方法，进行验证状态检查
        if ( gl.getProgramParameter( program, gl.VALIDATE_STATUS ) === false )
        {
            // 6.1 如果验证出错，调用getProgramInfoLog方法将错误信息以弹框方式通知调用者
            alert( gl.getProgramInfoLog( program ) );
            // 6.2 删除掉相关资源，防止内存泄漏
            gl.deleteShader( vsShader );
            gl.deleteShader( fsShader );
            gl.deleteProgram( program );
            // 6.3 返回链接失败状态
            return false;
        }


        // 7、全部正确，按需调用afterProgramLink回调函数
        if ( afterProgramLink !== null )
        {
            afterProgramLink( gl, program );
        }

        // 8、返回链接正确表示
        return true;
    }

    static getProgramActiveAttribs(gl: WebGLRenderingContext, program: WebGLProgram, out: GLAttribMap): void {
    //    获取当前active状态的attribute和uniform数量，必须在link后获取
        let count: number = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)

        //很重要一点，所谓active是指uniform已经被使用的，否则不属于uniform,uniform在shader中必须是读取，不能赋值
        //很重要一点，attribute在shader中只能读取，不能赋值,如果没有被使用的话，也是不算入activeAttrib中去的
        for ( let i = 0; i < count; i++ )
        {
            let info: WebGLActiveInfo | null = gl.getActiveAttrib( program, i );
            if ( info )
            {
                out[ info.name ] = new GLAttribInfo( info.size, info.type, gl.getAttribLocation( program, info.name ) );
            }
        }
    }

    static getProgramActiveUniform(gl: WebGLRenderingContext, program: WebGLProgram, out: GLUniformMap) {
        let count: number = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for ( let i = 0; i < count; i++ )
        {
            let info: WebGLActiveInfo | null = gl.getActiveUniform( program, i );
            if ( info )
            {
                let loc: WebGLUniformLocation | null = gl.getUniformLocation( program, info.name );
                if ( loc !== null )
                {
                    out[ info.name ] = new GLUniformInfo( info.size, info.type, loc );
                }
            }
        }
    }

    static createBuffer ( gl: WebGLRenderingContext ): WebGLBuffer
    {
        let buffer: WebGLBuffer | null = gl.createBuffer();
        if ( buffer === null )
        {
            throw new Error( "WebGLBuffer创建失败！" );
        }
        return buffer;
    }
}
