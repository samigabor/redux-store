# Redux-store with vanilla TypeScript

## The 3 principle of Redux:

- single source of truth
- state is read-only
- pure functions update state

## Redux: Core Concepts

### Single state tree

- plain JS Object
- composed by reducers
- the only way to update the state tree is via reducers

### Actions

- Two properties: `type`(string, describes event) & `payload`(optional data)
- Dispatch actions to reducers

### Reducers

Pure Functions
Givent dispatched action

- Responds to `action.type`
- Access to `action.payload`
- Composes new state
- Returns new state
  When we dispatch an action, the store actually passes that action into our reducer. We are given the dispatched action and inside the reducer we can respond to the action.type

### Store

- State container
  Components interact with the Store
- Subscribe to slices of State
- Dispatch Actions to the Store
  Store invokes Reducers with previous State and Action
  Resducers compose new State
  Store is updated, notifies subscribers
