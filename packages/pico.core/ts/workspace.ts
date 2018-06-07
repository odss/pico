import { h, render } from 'preact';

import {IComponentRegister} from './interfaces';
import ComponentRegister from './register';
import { WorkspaceComponent } from './components';
// import { createElement, diff, patch, h } from 'sjs-vdom';


class WorkspaceComponent {
    render(){
        let children = build(this.props.components, _loadStructure());
        return h('div', {class: 'pico-workspace'}, children);
    }
}


function build(components, data){
    let map = {}
    let children = []

    for(let i = 0; i < data.length;) {
        let options = data[i]
        map[options.uid] = {
            options,
            children: []
        };
        if(!options.parent) {
            children.push(options);
            data.splice(i, 1);
            continue;
        }
        i += 1;
    }

    for(let options of data){
        if(map[options.parent]){
            map[options.parent].children.push(map[options.uid]);
        }else{
            console.warn(`Not found node parent: ${JSON.stringify(options)}`);
        }
    }
    let nodes = prepare(children.map(child => map[child.uid]));
    function prepare(nodes){
        return nodes.map(node => h(
            components.get(node.options.component),
            {options: node.options},
            prepare(node.children)
        ));
    }
    return nodes;
}


export default class Workspace {

    private $workspace: HTMLElement;
    private _components: IComponentRegister;

    constructor(components: IComponentRegister){
        this._components = components;

    }
    public startup(container: HTMLElement){
        this._create(container);
        render(h(WorkspaceComponent, {components: this._components}), this.$workspace);


    }
    public dispose(){
        if(this.$workspace && this.$workspace.parentNode) {
            this.$workspace.parentNode.removeChild(this.$workspace);
        }
    }
    private _create(container){
        this.$workspace = document.createElement('div');
        container.appendChild(this.$workspace);

    }
}
function _loadStructure() {
    return [{
        uid: 20,
        component: 'core.section',
        attrs: {
            name: 'hero',
        }
    }, {
        uid: 30,
        component: 'core.section',
        attrs: {
            name: 'work'
        }
    },{
        uid: 10,
        parent: 30,
        component: 'core.list',
        attrs: {
            name: 'main-nav',
            type: 'unordered'
        }
    }, {
        uid: 11,
        parent: 10,
        component: 'core.link',
        attrs: {
            name: 'link',
            label: 'Link 1',
            type: 'url', //  page | section | email | phone | file,
            url: 'https://example.com/',
            newtab: true
        }
    }, {
        uid: 12,
        parent: 10,
        component: 'core.link',
        attrs: {
            name: 'to-page',
            label: 'Link 2',
            type: 'page', //  page | section | email | phone | file,
            url: '/page1'
        }
    }, {
        uid: 13,
        parent: 10,
        component: 'core.link',
        attrs: {
            name: 'to-page',
            label: 'Link 3 (Work)',
            type: 'section', //  page | section | email | phone | file,
            url: '#work'
        }
    }];
}