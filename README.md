[React]((https://reactjs.org/)) part was created with [Create React App](https://github.com/facebook/create-react-app). Added [Typescript](https://www.typescriptlang.org/) support.

## Additional libraries
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [i18next](https://www.i18next.com/)
- [React Router](https://reactrouter.com/)
- [Lodash](https://lodash.com/)
- [Axios](https://github.com/axios/axios)
- [Formik](https://formik.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Material UI](https://material-ui.com/)

## Available Scripts

In the project directory, you can run:

`yarn start` or `npm run start`

Watches resource folder for changes

`yarn build` or `npm run build`

Building the app for deployment

## Development

All request made to and api endpoint must have redux action with given suffixes: `_REQUEST`, `_SUCCESS`, `_FAILED`. In example:

```
export enum UserGetAll {
   REQUEST = "USER_GET_ALL_REQUEST",
   SUCCESS = "USER_GET_ALL_SUCCESS",
   FAILED = "USER_GET_ALL_FAILED",
}
```

Simple app actions should not use those suffixes, since they are mostly for tracking app loading state.

## Formatting

Project must be formatted with [Prettier](https://prettier.io/). Add following line to: `package.json`

```
"prettier": {
   "tabWidth": 2
}
```

## Cheatsheet

### Simple React Component
```
//TestComponent.tsx

import * as React from "react";

const TestComponent: React.FC = (): JSX.Element => {
  return <div>Hello World</div>;
};

export default TestComponent;

```

### Component with props
```
//TestComponent.tsx

import * as React from "react";

interface ITestComponentProps {
  text: string;
}

const TestComponent: React.FC<ITestComponentProps> = (props): JSX.Element => {
  return <div>{props.text}</div>;
};

export default TestComponent;

```

### Commonly used Hooks
- [useEffect()](https://reactjs.org/docs/hooks-effect.html) - performing additional tasks inside component (ie: fetching from api, updating state)
- [useState()](https://reactjs.org/docs/hooks-state.html) - managing state inside component
- [useSelector()](https://react-redux.js.org/api/hooks#useselector) - fetching data from Redux Store
- [useDispatch()](https://react-redux.js.org/api/hooks#usedispatch) - dispatching actions (api calls, redux actions and etc)
- [useRef()](https://reactjs.org/docs/hooks-reference.html#useref) - managing additional actions for HTML element (like focusing input and etc)
