import { PHONES } from './phones';
import { PROJECTORS } from './projectors';


function merge(arrays) {
    const output = [];
    const max = Math.max(...arrays.map(arr => arr.length));
    
    for(let i = 0; i < max; i += 3) {
      arrays.forEach(arr => output.push(...arr.slice(i, i + 3)))
    }
    
    return output;
}

export const allProducts = merge([PHONES, PROJECTORS]);
