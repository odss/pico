import { h, Component } from 'preact';
import { viewFactory } from '../base';


class FormComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('form', {
            class: 'pico-core-form',
            'data-pico-id': block.id,
        }, block.children().map(child => h(block.root.views.getView(child), {block: child})));
    }
}

class LabelComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('label', {
            class: 'pico-core-form-label',
            'data-pico-id': block.id,
        }, [h('span', null, block.attrs.label)]);
    }
}
class InputComponent extends Component {
    render() {
        let { block } = this.props;
        return h('div', {class:'s-form-text'}, [
            h('input', {
                type: 'text',
                value: block.attrs.value,
                'data-pico-id': block.id,
            }),
            block.attrs.label ? h('label', null, block.attrs.label) : null
        ]);
    }
}
class SelectComponent extends Component {
    render() {
        let { block } = this.props;
        return h('div', {class:'s-form-select'}, [
            h('select', {
                class: 'pico-core-form-select',
                'data-pico-id': block.id,
            })
        ]);
    }
}
class RadioComponent extends Component {
    render() {
        let { block } = this.props;
        return h('div', {class:'s-form-radio'}, [
            h('label', null, [
                h('input', {
                    type: 'radio',
                    'data-pico-id': block.id,
                }),
                block.attrs.label
            ])
        ]);
    }
}
class CheckboxComponent extends Component {
    render() {
        let { block } = this.props;
        return h('div', {class:'s-form-checkbox'}, [
            h('label', null, [
                h('input', {
                    type: 'checkbox',
                    'data-pico-id': block.id,
                }),
                block.attrs.label
            ])
        ]);
    }
}
class TextareaComponent extends Component {
    render() {
        let { block } = this.props;
        return h('div', {class:'s-form-text'}, [
            h('textarea', {
                type: 'text',
                value: block.attrs.value,
                'data-pico-id': block.id,
            }),
            block.attrs.label ? h('label', null, block.attrs.label) : null
        ]);
    }
}
class ButtonComponent extends Component {
    render() {
        let { block } = this.props;
        return h('input', {
            type: 'button',
            class: 'pico-core-form-button',
            'data-pico-id': block.id,
        });
    }
}



export default [
    viewFactory('core.form', FormComponent),
    viewFactory('core.form.label', LabelComponent),
    viewFactory('core.form.input', InputComponent),
    viewFactory('core.form.select', SelectComponent),
    viewFactory('core.form.radio', RadioComponent),
    viewFactory('core.form.checkbox', CheckboxComponent),
    viewFactory('core.form.textarea', TextareaComponent),
    viewFactory('core.form.button', ButtonComponent)
];
