import {BasicWebGLApplication} from './common/Application';
const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = 300
canvas.height = 300
const base = new BasicWebGLApplication(canvas)
base.drawRectByInterleavedVBO();
