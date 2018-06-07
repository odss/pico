import { h, Component } from 'preact';

export function viewFactory(name, component) {
    return {
        name, component
    };
}

const d = Component => Component;

export class BlockComponent extends Component {

    blockChildren(block, decorator=d) {
        let views = this.context.views;
        return block.children()
            .map(child => {
                let Component = views.findComponent(child.name);
                return decorator(<Component block={child} />);
            });
    }
}
