/**
 * 类似于TypedArray，提供了动态扩容的能力
 */
export class TypedArrayList<T extends Uint16Array | Float32Array | Uint8Array> {
    private _array: T;
    private _typeArrayConstructor: ( new (length: number) => T)
    private _length: number
    private _capacity: number
    public capacityChangeCallBack: ( (arrayList: TypedArrayList<T>) => void ) | null = null;
    public constructor(typeArrayConstructor: new (capacity: number) => T, capacity = 8) {
        this._typeArrayConstructor = typeArrayConstructor;
        this._capacity = capacity;
        if (this._capacity === 0) {
            this._capacity = 8
        }
        this._length = 0;
        this._array = new this._typeArrayConstructor(this._capacity)
    }

    public push(num: number) : number {
        if (this._length >= this._capacity) {
            console.log('TypedArrayList.ts', '18', 'push', new Date(), this._capacity, this._length)
            this._capacity += this._capacity;
            let oldArray = this._array;
            this._array = new this._typeArrayConstructor(this._capacity)
            this._array.set(oldArray)
            if (this.capacityChangeCallBack !== null) {
                this.capacityChangeCallBack(this)
            }
        }
        this._array[this._length ++] = num;
        return this._length;
    }

    public slice(start: number = 0, end: number = this._length) : T {
        return this._array.slice(start, end) as T
    }

    pushArray(nums:number[]):void{
        for(let i:number=0; i < nums.length;i++){
            this.push(nums[i]);
        }
    }

    public subArray(start: number = 0, end: number = this._length) : T {
        return this._array.subarray(start, end) as T
    }

    public get length () : number {
        return this._length;
    }

    public get capacity() : number {
        return this._capacity
    }

    public get typeArray() : T {
        return this._array;
    }

    public clear () : void {
        // TODO 可能会访问到历史旧值
        this._length = 0;
    }

    // js没有操作符重载
    public at (idx: number) :number {
        if (idx < 0 || idx >= this._length) {
            throw new RangeError('索引越界')
        }
        return this._array[idx]
    }
}

export default TypedArrayList;
