// import {Node} from './node';




class AppCollection {

    private _apps: Set<App> = new Set();

    addApp(app: App){
        this._apps.add(app);
    }
}

class App extends Node {
    constructor(data) {
        super(data);
    }
}
interface IDisposable {
    dispose(): void;
}

const VISIBLE_ALL_DEVICES = 0;
const VISIBLE_DESKTOP = 1;
const VISIBLE_TABLET = 2;
const VISIBLE_LANDSCAPE = 4;
const VISIBLE_PORTRAIL = 8;

abstract class Node implements IDisposable {

    public readonly type: string;
    public id: string = '';
    public name: string;

    public visible: number = VISIBLE_ALL_DEVICES;
    public styles: any = {};
    public attrs: any = {};
    public classes: any = {};

    public children: Node[] = [];

    appendNode(block: Node){
        this.children.push(block);
    }

    render(): void {
    }
    appendChild(node){

    }
    dispose(){
        this.children.forEach(block => block.dispose());
        this.element.parentNode.removeChild(this.element);
    }
}
class Page extends Block {

}

enum HeadersTag {
    H1 = 1, H2, H3, H4, H5, H6
}


class HeaderBlock extends Block {

    readonly tag: HeadersTag;
    readonly text: string;

    constructor(tag: HeadersTag, text: string, data: any) {
        super();
        this.tag = tag;
        this.text = text;
    }
    render(){
        this.element = document.createElement(`h${this.tag}`);
        this.element.textContent = this.text;
    }
    dispose(){
        this.element.parentNode.removeChild(this.element);
    }
}
class TextBlock extends Block {

    private text: string;

    constructor(text: string){
        super();
        this.text = text;
    }

    render(container: HTMLElement){
        this.element = document.createElement(`div`);
        this.element.classList.add('text');
        this.element.textContent = this.text;
        container.appendChild(this.element);
    }

    dispose(){
        this.element.parentNode.removeChild(this.element);
    }
}

export class Activator {
    start(ctx){
        this.root = new Block();
        this.root.append(new HeaderBlock(HeadersTag.H1, 'Header'));
        this.root.append(new TextBlock('Content'));
        this.root.render(document.body);
    }
    stop(ctx){
        this.root.dispose();
    }
}

class IField {

}

class FieldsRegistry {
    private _fields: Map<string, Function> = new Map();
    register(name, factory){
        if(this._fields.has(name)){
            throw new TypeError(`Field: ${name} already exits`);
        }
        this._fields.set(name, factory);
    }
    create(name, data){
        if(this._fields.has(name)){
            return this._fields.get(name)(data);
        }
        throw new TypeError(`Not found field: ${name}`);
    }
}


class Datasource {
    readonly name: string;
    constructor(name){
        this.name = name;
    }
}

