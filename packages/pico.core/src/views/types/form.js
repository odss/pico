import { h } from 'preact';
import { viewFactory, BlockComponent } from '../base';


class FormComponent extends BlockComponent {
    render({block}) {
        return (
            <form class="pico-core-form" data-pico-sid={block.id}>
                {this.blockChildren(block)}
            </form>
        );
    }
}

class LabelComponent extends BlockComponent {
    render({block}) {
        return (
            <label class="pico-core-form-label" data-pico-sid={block.id}>
                {block.attrs.label}
            </label>
        );
    }
}
class InputComponent extends BlockComponent {
    render({block}) {
        return (
            <div class="pico-core-form-input s-form-text" data-pico-sid={block.id}>
              <input type="text" value={block.attrs.value} />
              {block.attrs.label ? <label>{block.attrs.label}</label> : null}
            </div>
        );
    }
}
class SelectComponent extends BlockComponent {
    render({block}) {
        return (
            <div class="pico-core-form-select s-form-select" data-pico-sid={block.id}>
              <select></select>
              {block.attrs.label ? <label>{block.attrs.label}</label> : null}
            </div>
        );
    }
}
class RadioComponent extends BlockComponent {
    render({block}) {
        return (
            <div class="pico-core-form-radio s-form-radio" data-pico-sid={block.id}>
              <label>
                <input type="radio" value={block.attrs.value} />
                <span>{block.attrs.label}</span>
              </label>
            </div>
        );
    }
}
class CheckboxComponent extends BlockComponent {
    render({block}) {
        return (
            <div class="pico-core-form-checkbox s-form-checkbox" data-pico-sid={block.id}>
              <label>
                <input type="checkbox" value={block.attrs.value} />
                <span>{block.attrs.label}</span>
              </label>
            </div>
        );
    }
}
class TextareaComponent extends BlockComponent {
    render({block}) {
        return (
            <div class="pico-core-form-textarea s-form-text" data-pico-sid={block.id}>
              <textarea>{block.attrs.value}</textarea>
              {block.attrs.label ? <label>{block.attrs.label}</label> : null}
            </div>
        );
    }
}

export default [
    viewFactory('core.form', FormComponent),
    viewFactory('core.form.label', LabelComponent),
    viewFactory('core.form.input', InputComponent),
    viewFactory('core.form.select', SelectComponent),
    viewFactory('core.form.radio', RadioComponent),
    viewFactory('core.form.checkbox', CheckboxComponent),
    viewFactory('core.form.textarea', TextareaComponent)
];
