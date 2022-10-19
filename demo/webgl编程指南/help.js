/**
 * webgl提供的api抽象程度较低、有些操作具有固定套路
 * TypeScript写更好
 * twgl.js
 */
/**
 * 获取
 * @param canvas
 * @returns {null|*}
 */
export function getWebGLContext (canvas) {
  const gl = canvas.getContent('webgl')
  if (gl) {
    return gl
  }
  return null
}

