export class Dictionary<T> {
    private _items: ({[index: string] : T}) | Map<string,T>
    private _count: number = 0
    public constructor(useES6Map: boolean = true) {
        if (useES6Map) {
            this._items = new Map();
        } else {
            this._items = {};
        }
    }

    public get length () : number {
        return this._count;
    }

    public contains (key:string) : boolean {
        if (this._items instanceof Map) {
            return this._items.has(key);
        } else {
            return this._items[key] !== undefined
        }
    }

    public find (key: string) :T | undefined {
        if (this._items instanceof Map) {
            return this._items.get(key);
        } else {
            return this._items[key]
        }
    }

    public insert (key: string, value: T) :void {
        if (this._items instanceof Map) {
            this._items.set(key, value);
        } else {
            this._items[key] = value
        }
        this._count ++;
    }

    public remove(key: string): boolean {
        let ret: T|undefined = this.find(key)
        if (ret === undefined) {
            return false
        }
        if (this._items instanceof Map) {
            this._items.delete(key);
        } else {
            delete this._items[key]
        }
        return true
    }

    public get keys (): string [] {
        let keys: string[] = [];
        if (this._items instanceof Map) {
            let keyArray = this._items.keys();
            keys = Array.from(keyArray);
        } else {
            keys = Array.from(Object.keys(this._items))
        }
        return keys;
    }

    public get values (): T [] {
        let values: T[] = []
        if (this._items instanceof Map) {
            values = Array.from(this._items.values());
        } else {
            values = Array.from(Object.values(this._items))
        }
        return values
    }

    public toString() : string {
        console.log('--lbp 76', 'Dictionary.ts', 'toString', '');
        if (this._items instanceof Map) {
            return JSON.stringify(Array.from(this._items.entries()));
        } else {
            return JSON.stringify(this._items);
        }
    }

    public toJSON() : string {
        if (this._items instanceof Map) {
            return JSON.stringify(Array.from(this._items.entries()));
        } else {
            return JSON.stringify(this._items);
        }
    }
}

const dic = new Dictionary(true)
dic.insert('a', 'b')
console.log('--lbp 82', 'Dictionary.ts', '', dic.keys);
console.log('--lbp 83', 'Dictionary.ts', '', dic.values);
console.log('--lbp 84', 'Dictionary.ts', '', dic.length);
console.log('--lbp 82', 'Dictionary.ts', '', JSON.stringify(dic));


export default Dictionary
