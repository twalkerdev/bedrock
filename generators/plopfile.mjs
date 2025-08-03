import { join, resolve } from 'node:path';

const curPath = resolve(import.meta.dirname);
// const srcPath = join(import.meta.dirname, '/src');

const prevPath = join('../', 'packages/components');
// const componentDir = join(prevPath, '/{{dashCase name}}');
// const componentSrcDir = join(prevPath, '/{{dashCase name}}/src');

export function generator(plop) {
  plop.setGenerator('new-component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/index.html',
        templateFiles: 'templates/component/index-html.hbs',
        stripExtensions: ['hbs'],
      },
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/vite.config.json',
        templateFiles: 'templates/component/vite-config-json.hbs',
        stripExtensions: ['hbs'],
      },
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/tsconfig.node.json',
        templateFiles: 'templates/component/tsconfig-node-json.hbs',
        stripExtensions: ['hbs'],
      },
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/tsconfig.json',
        templateFiles: 'templates/component/tsconfig-json.hbs',
        stripExtensions: ['hbs'],
      },
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/package.json',
        templateFiles: 'templates/component/package-json.hbs',
        stripExtensions: ['hbs'],
      },
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/src/index.ts',
        templateFiles: 'templates/component/index-ts.hbs',
        stripExtensions: ['hbs'],
      },
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/src/index.css',
        templateFiles: 'templates/component/index-css.hbs',
        stripExtensions: ['hbs'],
      },
      {
        type: 'add',
        path: curPath + '/components/{{ kebabCase name }}/src/vite-env.d.ts',
        templateFiles: 'templates/component/vite-end-d-ts.hbs',
        stripExtensions: ['hbs'],
      },
    ],
    description: 'Create new component: ',
  });
}

// {
//   type: 'addMany',
//   destination: curPath,
//   templateFiles: 'templates/component/*.hbs',
//   stripExtensions: ['hbs'],
// },
// {
//   type: 'addMany',
//   destination: curPath,
//   templateFiles: 'templates/component/src/**.*.hbs',
//   stripExtensions: ['hbs'],
// },
