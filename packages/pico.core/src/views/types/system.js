import { h } from 'preact';
import { viewFactory, BlockComponent } from '../base';


export class WorkspaceComponent extends BlockComponent {
    render({block}) {
        return (<div class="pico-core-workspace">
            {this.blockChildren(block)}
        </div>)
    }
}
export class DefaultComponent extends BlockComponent {
    render({block}) {
        return (<div class="pico-core-default-block">
            {this.blockChildren(block)}
        </div>)
    }
}

export default [
    viewFactory('core.workspace', WorkspaceComponent),
    viewFactory('core.default', DefaultComponent)
];