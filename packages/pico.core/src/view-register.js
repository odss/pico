export default class ViewRegistry {

    constructor(render) {
        this._render = render;
        this._views = new Map();
    }
    set(name, view){
        this._views.set(name, view);
    }
    reset() {
        this._views = new Map();
    }
    getView (block) {
        if (!block) {
            throw new TypeError('Incorrect object for view');
        }
        return this._views.get(block.name);
    }
    render(container, block) {
        return this._render.render(container, block, this);
    }
}