import STYLES from './main.scss';
import BlockRegister from './block-register';
import ViewRegister from './view-register';

import { ALL_BLOCKS } from './blocks/index';
import { createViews, PreactViewProvider, ALL_VIEWS } from './views/index';

import App from './app';


export class Activator {
    async start(ctx) {
        ctx.styles(STYLES);
        let blocks = new BlockRegister();
        // let views = new ViewRegister();
        ALL_BLOCKS.map(block => blocks.add(block));
        // ALL_VIEWS.map(item => views.set(item.name, item.view))
        this.app = new App(blocks);

        await this.app.startup();
        createViews(this.app, document.body);
    }
    stop() {
        this.workspace.dispose();
    }
}