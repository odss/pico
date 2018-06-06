import { h, render } from 'preact';

import system from './types/system';
import basic from './types/basic';
import layout from './types/layout';
import form from './types/form';

export const ALL_VIEWS = [...system, ...layout, ...basic, ...form];


export class PreactViewProvider {
    render(container, block, views) {
        return render(pack(block, views), container);
    }
}

function pack(block, views){
    return h(
        views.getView(block),
        {block},
        block.children()
            .map(child => pack(child, views))
    );
}