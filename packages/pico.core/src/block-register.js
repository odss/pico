// import { DefaultComponent } from './blocks';

export default class BlockRegister {
    constructor() {
        this._blocks = new Map();
    }
    add(factory) {
        this._blocks.set(factory.info.name, factory);
    }
    remove(name) {
        this._blocks.delete(name);
    }
    create(options) {
        let name = options.block || options.name;
        if (!name) {
            throw new TypeError(`Empty block name`);
        }
        if (this._blocks.has(name)) {
            const factory = this._blocks.get(name);
            return factory.create(options, this);
        }
        const factory = this._blocks.get('core.default');
        return factory.create(options, this);
    }
    getInfo(name) {
        return this._blocks.get(name).info;
    }
    getAllInfo() {
        return Array.from(this._blocks.values()).map(item => item.info);
    }
}
