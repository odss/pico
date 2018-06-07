import { h, render, Component } from 'preact';

import system from './types/system';
import basic from './types/basic';
import layout from './types/layout';
import form from './types/form';

const COMPONENTS = [...system, ...layout, ...basic, ...form];


export class PreactViewProvider {
    render(container, block, views) {
        return render(pack(block, views), container);
    }
}
function findComponentByName(components, name){

}

export class ViewComponents extends Component {
    getChildContext(){
        return {
            app: this.app,
            views: this.views
         };
    }
    constructor(props, context) {
        super(props, context)
        this.app = props.app;
        this.views = props.views;
      }

    render() {
        let blockName = this.app.root.name;
        let Component = this.views.findComponent(blockName);
        return <Component block={this.app.root} />
    }
}
class Views {
    constructor(components){
        this._components = components;
    }
    findComponent(name){
        for(let item of this._components){
            if(item.name === name){
                return item.component;
            }
        }
    }
}

export function createViews(app, container) {
    let views = new Views(COMPONENTS);
    render(<ViewComponents app={app} views={views} />, container);
}
