import BlockRegister from './block-register';
import ViewRegister from './view-register';

import { ALL_BLOCKS } from './blocks/index';
import { PreactViewProvider, ALL_VIEWS } from './views/index';

import App from './app';


export class Activator {
    async start(ctx) {
        let blocks = new BlockRegister();
        let views = new ViewRegister(new PreactViewProvider());
        ALL_BLOCKS.map(block => blocks.add(block));
        ALL_VIEWS.map(item => views.set(item.name, item.view))
        this.app = new App(blocks, views);
        await this.app.startup(document.body);
    }
    stop() {
        this.workspace.dispose();
    }
}
