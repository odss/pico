import { h } from 'preact';
import { viewFactory, BlockComponent } from '../base';


class ListComponent extends BlockComponent {
    render({block}) {
        let Tag = block.attrs.type === 'unordered' ? 'ul' : 'ol';
        return (
            <Tag class="pico-core-list" data-pico-sid={block.id}>
                {this.blockChildren(block, child => <li>{child}</li> )}
            </Tag>
        );
    }
}

class LinkComponent extends BlockComponent {
    render({block}) {
        return (
            <a href={block.attrs.url} class="pico-core-link" data-pico-id={block.id}>
                {block.attrs.label}
            </a>
        );
    }
}


export default [
    viewFactory('core.list', ListComponent),
    viewFactory('core.link', LinkComponent)
];