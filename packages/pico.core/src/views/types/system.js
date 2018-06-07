import { h, Component } from 'preact';
import { viewFactory } from '../base';


export class WorkspaceComponent extends Component {
    componentDidMount(){
        this.remove = this.props.block.on('reset', () => this.forceUpdate());
    }
    componentWillUnmount(){
        // this.remove()
    }
    render() {
        let block = this.props.block;
        let root = block.root;
        debugger
        return h('div', {
            class: 'pico-core-workspace'
        }, block.children().map(child => h(root.views.getView(child), {block: child})));
    }
}
export class DefaultComponent extends Component {
    render() {
        return h('div', {
            class: 'pico-core-default-block'
        }, block.children().map(child => h(block.root.views.getView(child), {block: child})));
    }
}

export default [
    viewFactory('core.workspace', WorkspaceComponent),
    viewFactory('core.default', DefaultComponent)
];