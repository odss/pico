import { Block, blockFactory } from '../base';


class DefaultBlock extends Block {
    constructor(blocks, options){
        super(options);
        this.origin = this.name;
        this.name = 'core.default';
    }
}

export default [
    blockFactory('core.workspace', 'core.system',
        () => new Block({id:0, block: 'core.workspace'})),
    blockFactory('core.default', 'core.system',
        (options, blocks) => new DefaultBlock(blocks, options))
];