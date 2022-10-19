import {List} from "./ListNode";

console.log('--lbp 2', 'TreeNode.ts', '', 'TreeNode');


// region 堆栈数据结构
export interface IAdapter<T> {
    add (t: T): void;
    remove(): T | undefined;
    clear(): void;
    // 属性
    length: number;
    isEmpty: boolean;
}

abstract class AdapterBase<T> implements IAdapter<T> {
    protected _arr : Array<T> | List<T>;
    public constructor(useList: boolean = true) {
        if (useList) {
            this._arr = new List<T>();
        } else {
            this._arr = new Array<T>()
        }
    }

    public get isEmpty (): boolean {
        return this._arr.length <= 0;
    };
    public get length(): number {
        return this._arr.length
    };

    public add(t: T): void {
        this._arr.push(t)
    }

    public clear(): void {
        if (this._arr instanceof List) {
            this._arr = new List<T>();
        } else {
            this._arr = new Array<T>()
        }
    }

    public abstract remove(): T | undefined;
}

export class Queue<T> extends AdapterBase<T> {
    public remove(): T | undefined {
        if (this._arr instanceof List) {
            return this._arr.pop_front();
        } else {
            return this._arr.shift()
        }
    }
}

export class Stack<T> extends AdapterBase<T> {
    public remove(): T | undefined {
        if (this._arr.length > 0) {
            return this._arr.pop();
        } else {
            return undefined;
        }
    }
}
// endregion


// region 树结构
export class TreeNode<T> {
    private _parent: TreeNode<T> | undefined
    private _children: Array <TreeNode<T>> | undefined
    public name: string
    public data: T | undefined

    public constructor(data: T | undefined = undefined, parent: TreeNode<T> | undefined = undefined, name: string = '') {
        this._parent = parent;
        this._children = undefined;
        this.name = name;
        this.data = data;
        if (this._parent !== undefined) {
            this._parent.addChild(this)
        }
    }

    // public get parent():

    public isDescendantOf(ancestor: TreeNode<T> | undefined) :boolean {
        if (ancestor === undefined) {
            return  false;
        }
        // let node: ThreeNode<T> | undefined = this._parent;
        for (let node: TreeNode<T> | undefined = this._parent; node !== undefined; node = node._parent) {
            if (node === ancestor) {
                return true
            }
        }
        return false
    }

    public getChildAt(index: number): TreeNode<T> | undefined{
        if (this._children === undefined)
            return undefined;
        if (index < 0 || index >= this._children.length)
            return undefined;
        return this._children[index];
    }

    public removeChild (child: TreeNode<T> | undefined) : TreeNode<T> | undefined {
        if (child === undefined) {
            return undefined
        }

        //  叶节点处理
        if (this._children === undefined) {
            return undefined;
        }

        let index = -1;
        for (let i = 0; i < this._children.length; i++) {
            if (this.getChildAt(i) === child) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            return undefined
        }
        return this.removeChildAt(index)
    }

    public remove(): TreeNode<T> | undefined {
        if (this._parent !== undefined) {
            return this._parent.removeChild(this)
        }
        return undefined
    }

    public removeChildAt (index: number) : TreeNode<T> | undefined {
        if (this._children=== undefined) {
            return undefined;
        }
        let child: TreeNode<T> | undefined = this.getChildAt(index)
        if (child === undefined) {
            return  undefined
        }
        this._children.splice(index, 1)
        child._parent = undefined;
        return child;
    }

    public addChildAt(child: TreeNode<T>, index: number) : TreeNode<T> | undefined {
        if (this.isDescendantOf(child)) {
            return undefined
        }
        if (this._children === undefined) {
            this._children = []
        }
        if (index >= 0 && index <= this._children.length) {
            // 要添加的节点有父节点
            if (child._parent !== undefined) {
                child._parent.removeChild(child)
            }
            //     要添加的节点不是当前节点，并且也没有父节点
            child._parent = this;
            this._children.splice(index, 0, child);
            return child;
        } else {
            return undefined;
        }
    }

    public addChild(child: TreeNode<T>) : TreeNode<T> | undefined {
        if (this._children === undefined) {
            this._children = [];
        }
        return this.addChildAt(child, this._children.length)
    }

    public get parent(): TreeNode<T> | undefined {
        return this._parent;
    }

    public get childCount(): number {
        if (this._children !== undefined) {
            return this._children.length;
        } else {
            return 0
        }
    }

    public hasChild(): boolean {
        return this._children !== undefined && this._children.length > 0
    }

    public get root(): TreeNode<T> {
        let curr: TreeNode<T> = this;
        while (curr !== undefined && curr._parent !== undefined) {
            curr = curr._parent
        }
        return curr
    }

    public get depth(): number {
        let cur: TreeNode<T> = this;
        let level: number = 0;
        while (cur !== undefined && cur._parent !== undefined) {
            cur = cur._parent;
            level ++;
        }
        return level
    }
}

// endregion


// region 枚举器接口、语料
// 枚举器
export interface IEnumerator<T> {
    reset(): void;
    moveNext(): boolean;
    readonly current: T | undefined;
}
// 回调函数类型定义
export type indexer = (len: number, idx: number) => number;
// 获取从左到右索引
export function IndexerL2R(len: number, idx: number) : number {
    return idx
}
// 获取从右到左索引
export function IndexerR2L(len: number, idx: number): number {
    return (len - idx - 1)
}
// endregion


// region 枚举器实现
// 先根枚举器
export class NodeT2BEnumerator<T, IdxFunc extends indexer, Adapter extends IAdapter<TreeNode<T>>> implements IEnumerator<TreeNode<T>> {
    // 头节点，用于指向输入的根节点
    private _node: TreeNode<T> | undefined;
//     枚举器内部持有的一个队列或者堆栈是配置，用于存储遍历的元素
    private _adapter!: IAdapter<TreeNode<T>>;
    private _currNode!: TreeNode<T> | undefined;
    // 选择从左到右还是从右到左
    private _indexer!: IdxFunc;

    public constructor(node: TreeNode<T> | undefined, func: IdxFunc, adapter: new () => Adapter) {
        if (node === undefined) {
            return;
        }
        this._node = node; // 头节点
        this._indexer = func; // 设置回调
        this._adapter = new adapter()
        this._adapter.add(this._node)
        this._currNode = undefined
    }

    public reset(): void {
        if (this._node === undefined) {
            return;
        }
        this._currNode = undefined;
        this._adapter.clear()
        this._adapter.add(this._node)
    }

    public moveNext(): boolean {
        if (this._adapter.isEmpty) {
            return false
        }
        this._currNode = this._adapter.remove()
        if (this._currNode !== undefined) {
            let len: number = this._currNode.childCount;
            for (let i = 0; i < len; i++) {
                let childIndex: number = this._indexer(len, i)
                let child: TreeNode<T> | undefined = this._currNode.getChildAt(childIndex)
                if (child !== undefined) {
                    this._adapter.add(child)
                }
            }
        }
        return true
    }

    public get current(): TreeNode<T> | undefined {
        return this._currNode;
    }
}

// 后根枚举器
export class NodeB2TEnumerator<T> implements IEnumerator<TreeNode<T>> {
    private _iter: IEnumerator<TreeNode<T>>;
    private _arr !: Array<TreeNode<T> | undefined>
    private _arrIdx !: number;

    public constructor(iter: IEnumerator<TreeNode<T>>) {
        this._iter = iter; // 指向先跟迭代器
    }

    public reset() :void {
        this._arr = [];
        while (this._iter.moveNext()) {
            this._arr.push(this._iter.current)
        }
        this._arrIdx = this._arr.length
    }

    public get current(): TreeNode<T> | undefined {
        if (this._arrIdx >= this._arr.length) {
            return undefined;
        } else {
            return this._arr[this._arrIdx]
        }
    }

    public moveNext(): boolean {
        this._arrIdx --;
        return (this._arrIdx >= 0 && this._arrIdx < this._arr.length);
    }
}

export class NodeEnumeratorFactory {
    // 创建深度优先( stack )、从左到右 ( IndexerR2L ) 、从上到下的枚举器
    public static create_df_l2r_t2b_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        let iter: IEnumerator<TreeNode<T>> = new NodeT2BEnumerator(node, IndexerR2L, Stack);
        return iter;
    }
    // 创建深度优先( stack )、从右到左( IndexerL2R )、从上到下的枚举器
    public static create_df_r2l_t2b_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        let iter: IEnumerator<TreeNode<T>> = new NodeT2BEnumerator(node, IndexerL2R, Stack);
        return iter;
    }

    // 创建广度优先( Queue )、从左到右( IndexerL2R )、从上到下的枚举器
    public static create_bf_l2r_t2b_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        let iter: IEnumerator<TreeNode<T>> = new NodeT2BEnumerator(node, IndexerL2R, Queue);
        return iter;
    }

    // 创建广度优先( Queue )、从右到左( IndexerR2L )、从上到下的枚举器
    public static create_bf_r2l_t2b_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        let iter: IEnumerator<TreeNode<T>> = new NodeT2BEnumerator(node, IndexerR2L, Queue);
        return iter;
    }

    // 上面都是从上到下(先根)遍历
    // 下面都是从下到上(后根)遍历，是对上面的从上到下(先根)枚举器的包装

    // 创建深度优先、从左到右、从下到上的枚举器
    public static create_df_l2r_b2t_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        //向上转型，自动(向下转型，需要as或< >手动)
        let iter: IEnumerator<TreeNode<T>> = new NodeB2TEnumerator<T>(NodeEnumeratorFactory.create_df_r2l_t2b_iter(node));
        return iter;
    }

    // 创建深度优先、从右到左、从下到上的枚举器
    public static create_df_r2l_b2t_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        let iter: IEnumerator<TreeNode<T>> = new NodeB2TEnumerator<T>(NodeEnumeratorFactory.create_df_l2r_t2b_iter(node));
        return iter;
    }

    // 创建广度优先、从左到右、从下到上的枚举器
    public static create_bf_l2r_b2t_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        let iter: IEnumerator<TreeNode<T>> = new NodeB2TEnumerator<T>(NodeEnumeratorFactory.create_bf_r2l_t2b_iter(node));
        return iter;
    }

    // 创建广度优先、从右到左、从下到上的枚举器
    public static create_bf_r2l_b2t_iter<T>(node: TreeNode<T> | undefined): IEnumerator<TreeNode<T>> {
        let iter: IEnumerator<TreeNode<T>> = new NodeB2TEnumerator<T>(NodeEnumeratorFactory.create_bf_l2r_t2b_iter(node));
        return iter;
    }
}
// endregion


// region test
// let root: TreeNode<number> = new TreeNode<number>(0, undefined, 'root')
// let node1: TreeNode<number> = new TreeNode<number>(1, root, 'node1')
// let node2:  TreeNode<number> = new TreeNode<number>(2, root, 'node2')

class NumberNode extends TreeNode<number> {}

export class TreeNodeText {
    public static createTree(): NumberNode {
        let root: NumberNode = new NumberNode(0, undefined, "root")
        let node1 = new NumberNode(1, root, 'node1')
        let node2 = new NumberNode(2, root, 'node2')
        let node3 = new NumberNode(3, root, 'node3')
        let node4 = new NumberNode(4, node1, 'node4')
        let node5 = new NumberNode(5, node1, 'node5')
        let node6 = new NumberNode(6, node2, 'node6')
        let node7 = new NumberNode(7, node2, 'node7')
        let node8 = new NumberNode(8, node3, 'node8')
        let node9 = new NumberNode(9, node4, 'node9')
        let node10 = new NumberNode(10, node6, 'node10')
        let node11 = new NumberNode(11, node7, 'node11')
        let node12 = new NumberNode(12, node11, 'node12')
        return root
    }
}

let root: NumberNode = TreeNodeText.createTree();
let iter :IEnumerator<NumberNode>
let current: NumberNode | undefined = undefined
iter = NodeEnumeratorFactory.create_bf_l2r_t2b_iter<number>(root)
console.log('--lbp 409', 'TreeNode.ts', '', '');

while (iter.moveNext()) {
    current = iter.current;
    if (current !== undefined) {
        console.log(current.depth, current.name)
    }
}
// endregion

