import { h, render } from 'preact';

import { buildStructure } from './blocks/index';


export default class App {
    constructor(blocks, views) {
        this._blocks = blocks;
        this._views = views;
    }
    startup(container) {
        this._create(container);

        let nodes = _loadStructure();
        let root = buildStructure(this._blocks, nodes);
        this._views.render(this.$workspace, root);
    }
    dispose() {
        if (this.$workspace && this.$workspace.parentNode) {
            this.$workspace.parentNode.removeChild(this.$workspace);
        }
    }
    _create(container) {
        this.$workspace = document.createElement('div');
        container.appendChild(this.$workspace);
    }
}
function _loadStructure() {
    return [{
        id: 100,
        parent: 0,
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
            id: 20,
            block: 'core.section2',
            attrs: {
                name: 'hero',
            }
        }, {
            id: 30,
            block: 'core.section',
            attrs: {
                name: 'work'
            }
        }, {
            id: 10,
            parent: 30,
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
