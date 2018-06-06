let defautlFactory = data => new Node(data);


export class Node {

    constructor(data, comparator=()=>{}) {
        this._deep = 0;
        this._parent = null;
        this._children = [];
        this._comparator = comparator
        this.data = data;
    }
    get parent() {
        return this._parent;
    }
    get root() {
        let node = this;
        while(node._parent ){
            node = node._parent ;
        }
        return node;
    }
    size() {
        return this._children.length;
    }
    reset() {
        this._children.forEach(node => node.reset());
        this._children = [];
        this._parent  = null;
    }
    children() {
        return this._children.concat();
    }
    accept(visitor) {
        visitor(this);
        this._children.forEach(node => node.accept(visitor));
    }
    walk(visitor){
        if(visitor(this)){
            return this;
        }
        for(let i = 0; i < this._children.length; i+=1){
            let child = this._children[i];
            let node = child.walk(visitor);
            if(node){
                return node;
            }
        }
        return null;
    }
    *[Symbol.iterator](){
        yield this;
        for(let child of this._children){
            yield* child;
        }
    }
    isRoot() {
        return this._parent  === null;
    }
    isLeaf() {
        return this.size() === 0;
    }
    getPath(){
        let node = this;
        let buff = [node];
        while(node._parent ){
            buff.push(node._parent);
            node = node._parent;
        }
        return buff.reverse();
    }
    findNode(id) {
        return this.walk(node => {
            if(node.data && node.data.id === id){
                return node;
            }
        });
    }
    hasChild(node) {
        return this._children.indexOf(node) !== -1;
    }
    addChild(node) {
        if (!this.hasChild(node)) {
            let nextChild = this._findNextChild(node);
            if (nextChild) {
                this._insertBefore(node, nextChild);
            } else {
                this._appendChild(node);
            }
            node.deep = this._deep + 1;
        }
    }
    removeChild(node){
        this._removeChild(node);
    }
    compare(node) {
        return this._comparator(this, node);
    }
    clone(deep=true, factory=defautlFactory){
        let node = factory(copy(this.data));
        if(deep){
            let child;
            for (let i = 0; i < this._children.length; i += 1) {
                child = this._children[i];
                node._appendChild(child.clone(deep, factory));
            }
        }
        return node;
    }
    toString() {
        return `Node(${this.data})`;
    }
    _insertBefore(node, referenceChild) {
        this._removeChild(node);
        let index = this._children.indexOf(referenceChild);
        if (index === -1) {
            throw new TypeError('Not found reference node');
        }
        node._parent  = this;
        this._children.splice(index, 0, node);
    }
    _appendChild(node) {
        if (node._parent) {
            node._parent._removeChild(node);
        }
        node._parent  = this;
        this._children.push(node);
    }
    _removeChild(node) {
        let index = this._children.indexOf(node);
        if (index !== -1) {
            this._children[index]._parent = null;
            this._children.splice(index, 1);
            return true;
        }
        return false;
    }
    _findNextChild(node) {
        for (let i = 0; i < this._children.length; i += 1) {
            if (this._children[i].compare(node) > 0) {
                return this._children[i];
            }
        }
        return null;
    }
}
