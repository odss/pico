import { h, Component } from 'preact';
import { viewFactory } from '../base';


class ListComponent extends Component {
    render() {
        let { block, children } = this.props;
        let tag = block.attrs.type === 'unordered' ? 'ul' : 'li';
        return h(tag, {
            class: 'pico-core-list',
            'data-pico-sid': block.id,
            'data-pico-block': 'core.list'
        }, children.map(child => h('li', null, child)));
    }
}

class LinkComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('a', {
            href: block.attrs.url,
            class: 'pico-core-link',
            'data-pico-id': block.id,
            'data-pico-block': 'core.link'
        }, [h('span', null, block.attrs.label)]);
    }
}


export default [
    viewFactory('core.list', ListComponent),
    viewFactory('core.link', LinkComponent)
];