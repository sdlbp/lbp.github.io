let buffer: ArrayBuffer = new ArrayBuffer(16);
let view: DataView = new DataView(buffer);
view.setFloat32(8, 99.99);
view.setInt16(8 + 4, 2048);

console.log('arrayBuffer.ts', '6', '', new Date(), view.getFloat32(8))
console.log('arrayBuffer.ts', '7', '', new Date(), view.getUint16(8 + 4))

console.log('arrayBuffer.ts', '9', 'isView', new Date(), ArrayBuffer.isView(view))

const a = new Int8Array(10);
a[0] = 1;
a[2] = 3;
console.log('arrayBuffer.ts', '14', '', new Date(), a)
