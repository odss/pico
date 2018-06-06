import { h, Component } from 'preact';
import { viewFactory } from '../base';


export class SectionComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('div', {
            class: 'pico-core-block-section',
            'data-pico-sid': block.id,
            'data-pico-block': 'core.section'
        }, children);
    }
}

export class ContainerComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('div', {
            class: 'pico-core-block-container',
            'data-pico-sid': block.id,
            'data-pico-block': 'core.container'
        }, children);
    }
}

export class ColumnComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('div', {
            class: 'pico-core-block-column',
            'data-pico-sid': block.id,
            'data-pico-block': 'core.column'
        }, children);
    }
}
export default [
    viewFactory('core.section', SectionComponent),
    viewFactory('core.container', ContainerComponent),
    viewFactory('core.column', ColumnComponent)
];