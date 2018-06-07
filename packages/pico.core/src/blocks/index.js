import system from './types/system';
import basic from './types/basic';
import layout from './types/layout';
import form from './types/form';

export const ALL_BLOCKS = [...system, ...layout, ...basic, ...form];

export function buildStructure(container, data) {
    const root = container.create({name: 'core.workspace'});
    const map = {
        [0]: root
    };
    for (let option of data) {
        let node = container.create(option);
        map[node.id] = node;
        if (!option.parent) {
            option.parent = 0;
        }
    }
    for (let option of data) {
        if (map[option.parent]) {
            map[option.parent].addChild(map[option.id]);
        } else {
            console.warn(`Not found parent node: ${JSON.stringify(option)}`);
        }
    }
    return root;
}