import { h, Component } from 'preact';
import { viewFactory } from '../base';


class FormComponent extends Component {
    render() {
        let { block, children } = this.props;
        return h('form', {
            class: 'pico-core-form',
            'data-pico-id': block.id,
        }, children);
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
        return h('div', {class:'s-form-group'}, [
            block.attrs.label ? h('label', null, block.attrs.label) : null,
            h('input', {
                type: 'text',
                class: 'pico-core-form-input',
                value: block.attrs.value,
                'data-pico-id': block.id,
            })
        ]);
    }
}
class SelectComponent extends Component {
    render() {
        let { block } = this.props;
        return h('select', {
            class: 'pico-core-form-select',
            'data-pico-id': block.id,
        });
    }
}
class RadioComponent extends Component {
    render() {
        let { block } = this.props;
        return h('input', {
            type: 'radio',
            class: 'pico-core-form-radio',
            'data-pico-id': block.id,
        });
    }
}
class CheckboxComponent extends Component {
    render() {
        let { block } = this.props;
        return h('input', {
            type: 'checkbox',
            class: 'pico-core-form-checkbox',
            'data-pico-id': block.id,
        });
    }
}
class TextareaComponent extends Component {
    render() {
        let { block } = this.props;
        return h('textarea', {
            class: 'pico-core-form-textarea',
            'data-pico-id': block.id,
        });
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
