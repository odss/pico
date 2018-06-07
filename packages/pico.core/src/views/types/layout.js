import { h, Component } from 'preact';
import { viewFactory } from '../base';


export class SectionComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('div', {
            class: 'pico-core-section',
            'data-pico-sid': block.id,
            'data-pico-block': 'core.section'
        }, block.children().map(child => h(block.root.views.getView(child), {block: child})));

    }
}

export class ContainerComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('div', {
            class: 'pico-core-container',
            'data-pico-sid': block.id,
            'data-pico-block': 'core.container'
        }, block.children().map(child => h(block.root.views.getView(child), {block: child})));
    }
}

export class ColumnComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('div', {
            class: 'pico-core-column',
            'data-pico-sid': block.id,
            'data-pico-block': 'core.column'
        }, block.children().map(child => h(block.root.views.getView(child), {block: child})));
    }
}
export default [
    viewFactory('core.section', SectionComponent),
    viewFactory('core.container', ContainerComponent),
    viewFactory('core.column', ColumnComponent)
];