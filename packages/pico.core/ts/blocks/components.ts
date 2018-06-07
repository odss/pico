import {h, Component} from 'preact';


export function blockFactory(name, category, view){
    return {
        info: {
            name,
            category
        },
        view
    };
}
export function registerAllComponents(register){
    register.register(SectionBlock());
    register.register(LinkBlock());
    register.register(ListBlock());
}

export const SectionBlock = () => blockFactory(
    'core.section', 'core.layout', SectionComponent
);

export const ListBlock = () => blockFactory(
    'core.list', 'core.basic', ListComponent
);
export const LinkBlock = () => blockFactory(
    'core.link', 'core.basic', LinkComponent
);



class SectionComponent extends Component {
    render(){
        let {options, children} = this.props;
        return h('div', {
            class: 'pico-core-list',
            'data-pico-sid': options.uid,
            'data-pico-component': 'core.section'
        }, children);
    }
}

class ListComponent extends Component {
    render(){
        let {options, children} = this.props;
        let tag = options.attrs.type === 'unordered' ? 'ul' : 'li';
        return h(tag, {
            class: 'pico-core-list',
            'data-pico-sid': options.uid,
            'data-pico-component': 'core.list'
        }, children.map(child => h('li', null, child)));
    }
}

class LinkComponent extends Component {
    render(){
        let {options, children} = this.props;
        return h('a', {
            href: options.attrs.url,
            class: 'pico-core-link',
            'data-pico-sid': options.uid,
            'data-pico-component': 'core.link'
        }, [h('span', null, options.attrs.label));
    }
}
export function WorkspaceComponent() {
    return h('div', {
        class:'workspace-container'
    });
}

export class DefaultComponent extends Component {
    render(options) {
        return h('div', {
            'data-uid': this.props.options.uid
        }, this.props.children);
    }
}
