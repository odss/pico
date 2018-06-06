import { h, Component } from 'preact';
import { viewFactory } from '../base';


export class WorkspaceComponent extends Component {
    render() {
        return h('div', {
            class: 'pico-core-workspace'
        }, this.props.children);
    }
}
export class DefaultComponent extends Component {
    render() {
        return h('div', {
            class: 'pico-core-default'
        }, this.props.children);
    }
}

export default [
    viewFactory('core.workspace', WorkspaceComponent),
    viewFactory('core.default', DefaultComponent)
];