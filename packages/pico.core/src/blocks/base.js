import { Node } from './node';

export class Block extends Node {
    constructor(options = {}){
        super()
        this.id = options.id;
        this.name = options.block;
        this.attrs = options.attrs || {};
        this.styles = options.styles || {};
    }
}
function defaultCreator(options, blocks){
    return new Block(options);
}

export function blockFactory(name, category, create=defaultCreator) {
    return {
        info: {
            name,
            category
        },
        create
    };
}
