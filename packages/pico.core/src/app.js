import { h, render } from 'preact';

import { buildStructure } from './blocks/index';


export default class App {
    constructor(blocks) {
        this._blocks = blocks;
    }
    startup(container) {
        let nodes = _loadStructure();
        this.root = buildStructure(this._blocks, nodes);
        // setTimeout(() => {
        //     let nodes = _loadStructure();
        //     nodes = nodes.splice(0, 5);
        //     debugger
        //     buildStructure(this._blocks, root, nodes);
        // }, 2000);
    }
    dispose() {
        if (this.$workspace && this.$workspace.parentNode) {
            this.$workspace.parentNode.removeChild(this.$workspace);
        }
    }

}
function _loadStructure() {
    return [{
        id: 80,
        parent: 0,
        block: 'core.section'
    }, {
        id: 90,
        parent: 80,
        block: 'core.container'
    }, {
        id: 100,
        parent: 90,
        block: 'core.form',
        attrs:{
            method: 'POST',
            action: '/send',
        }
    }, {
        id: 110,
        parent: 100,
        block: 'core.form.input',
        attrs: {
            label: 'Label',
            value: 'hi'
        }
    }, {
        id: 120,
        parent: 100,
        block: 'core.form.textarea',
        attrs: {
            value: 'hi'
        }
    }, {
        id: 130,
        parent: 100,
        block: 'core.form.label',
        attrs: {
            label: 'Some smart label'
        }
    }, {
        id: 140,
        parent: 100,
        block: 'core.form.radio',
        attrs: {
            label: 'Some smart label'
        }
    }, {
        id: 150,
        parent: 100,
        block: 'core.form.checkbox',
        attrs: {
            label: 'Some smart label'
        }
    }, {
        id: 20,
        block: 'core.section'
    }, {
        id: 21,
        parent: 20,
        block: 'core.container'
    }, {
        id: 30,
        block: 'core.section'
    }, {
        id: 10,
        parent: 21,
        block: 'core.list',
        attrs: {
            name: 'main-nav',
            type: 'unordered'
        }
    }, {
        id: 11,
        parent: 10,
        block: 'core.link',
        attrs: {
            name: 'link',
            label: 'Link 1',
            type: 'url',
            url: 'https://example.com/',
            newtab: true
        }
    }, {
        id: 12,
        parent: 10,
        block: 'core.link',
        attrs: {
            name: 'to-page',
            label: 'Link 2',
            type: 'page',
            url: '/page1'
        }
    }, {
        id: 13,
        parent: 10,
        block: 'core.link',
        attrs: {
            name: 'to-page',
            label: 'Link 3 (Work)',
            type: 'section',
            url: '#work'
        }
    }];
}
