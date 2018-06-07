import { h } from 'preact';
import { viewFactory, BlockComponent } from '../base';


export class LayoutComponent extends BlockComponent {

    get name(){
        return 'layout';
    }

    render({block}) {
        let className = `pico-core-${this.name}`;
        return (
            <div class={className} data-pico-sid={block.id}>
                {this.blockChildren(block)}
            </div>
        );
    }
}


export class SectionComponent extends LayoutComponent {
    get name(){
        return 'section';
    }
}
export class ContainerComponent extends LayoutComponent {
    get name(){
        return 'container';
    }
}
export class ColumnComponent extends LayoutComponent {
    get name(){
        return 'column';
    }
}

export default [
    viewFactory('core.section', SectionComponent),
    viewFactory('core.container', ContainerComponent),
    viewFactory('core.column', ColumnComponent)
];