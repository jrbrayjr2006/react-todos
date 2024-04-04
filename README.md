# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Additional Dependencies

Add Foundation framework to the application.

```cmd
npm install foundation-sites
```

## Run the Application

```cmd
npm run dev

yarn dev
```

## Additional Dependencies

```cmd
npm install react-router-dom
```

## Testing
Some additional libraries and configuration must be added for Jest to support tests written using TypeScript.

### Testing with Jest and TypeScript

Babel must be installed and configured to support TypeScipt in Jest unit tests.

```cmd
npm install --save-dev jest @types/jest @babel/preset-typescript

npm install -D jsdom

npm install -D jest-environment-jsdom
```

Add the `ts-jest` preprocessor to the project.

```cmd
npm install --save-dev ts-jest

npm install --save-dev @jest/globals

npm install --save-dev ts-node
```

### Support for CSS in Testing

```cmd
npm install --save-dev jest-transform-css
```

## References

- [Configuring Jest](https://jestjs.io/docs/configuration)
- [Using TypeScript with Jest](https://jestjs.io/docs/getting-started#using-typescript)
- [Installing Jest for Testing in Your Vite-React TypeScript Project. A Step-by-Step Guide.](https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap)
- [Foundation Todo List Card Example](https://get.foundation/building-blocks/blocks/todo-list-card.html)
- [React Router](https://reactrouter.com/en/main)