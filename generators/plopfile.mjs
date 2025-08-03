import { join, resolve } from 'node:path';

const curPath = console.log(resolve(import.meta.dirname));
const prevPath = console.log(join('../', import.meta.dirname));

export default function generator(plop) {
  plop.setGenerator('new-component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: ',
      },
    ],
    // actions: [
    //   {
    //     type: 'addMany',
    //     destination:
    //       '../../' + resolve(import.meta.dirname, 'packages/components') + '/{{ name }}.json',
    //     templateFiles: 'templates/component/json/*.hbs',
    //   },
    // ],
    description: 'Create new component: ',
  });
}
