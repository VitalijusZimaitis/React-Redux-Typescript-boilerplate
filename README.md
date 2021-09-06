[React]((https://reactjs.org/)) part was created with [Create React App](https://github.com/facebook/create-react-app). Added [Typescript](https://www.typescriptlang.org/) support.

## Additional libraries
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [i18next](https://www.i18next.com/)
- [React Router](https://reactrouter.com/)
- [Lodash](https://lodash.com/)
- [Axios](https://github.com/axios/axios)
- [Formik](https://formik.org/)

## Available Scripts

In the project directory, you can run:

`yarn start` or `npm run start` - Watches resource folder for changes

`yarn build` or `npm run build` - Building the app for deployment

## Cheatsheet

### Simple React Component
```
//TestComponent.tsx

import React from "react";

const TestComponent: React.FC = (): JSX.Element => {
  return <div>Hello World</div>;
};

export default TestComponent;

```

### Component with props
```
//TestComponent.tsx

import React from "react";

interface ITestComponentProps {
  text: string;
}

const TestComponent: React.FC<ITestComponentProps> = (props): JSX.Element => {
  return <div>{props.text}</div>;
};

export default TestComponent;

```

## Entities
- Entities are handled through [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter)

### Entity selectors
- `selectIds`: returns the `state.ids` array.
- `selectEntities`: returns the `state.entities` lookup table.
- `selectAll`: maps over the `state.ids` array, and returns an array of entities in the same order.
- `selectTotal`: returns the total number of entities being stored in this state.
- `selectById`: given the state and an entity ID, returns the entity with that ID or undefined.

### Entity crud operations
- `addOne`: accepts a single entity, and adds it if it's not already present.
- `addMany`: accepts an array of entities or an object in the shape of `Record<EntityId, T>`, and adds them if not already present.
- `setOne`: accepts a single entity and adds or replaces it
- `setMany`: accepts an array of entities or an an object in the shape of `Record<EntityId, T>`, and adds or replaces them.
- `setAll`: accepts an array of entities or an object in the shape of `Record<EntityId, T>`, and replaces all existing entities with the values in the array.
- `removeOne`: accepts a single entity ID value, and removes the entity with that ID if it exists.
- `removeMany`: accepts an array of entity ID values, and removes each entity with those IDs if they exist.
- `removeAll`: removes all entities from the entity state object.
- `updateOne`: accepts an "update object" containing an entity ID and an object containing one or more new field values to update inside a `changes` field, and performs a shallow update on the corresponding entity.
- `updateMany`: accepts an array of update objects, and performs shallow updates on all corresponding entities.
- `upsertOne`: accepts a single entity. If an entity with that ID exists, it will perform a shallow update and the specified fields will be merged into the existing entity, with any matching fields overwriting the existing values. If the entity does not exist, it will be added.
- `upsertMany`: accepts an array of entities or an object in the shape of `Record<EntityId, T>` that will be shallowly upserted.

### Entity initial state
- `{ids: [], entities: {}}`

## Async Requests
- Async request are handled through [createAsyncThunk](https://redux-toolkit.js.org/api/createEntityAdapter)
