import { h } from '../src/h.js';
import { createElement } from '../src/create.js';


let vnode = h('div', {id:'new', style: {
    color: '#aaa'
}}, [
    h('span', 'test')
]);

let element = createElement(vnode);
console.log(element);
document.body.appendChild(element);


