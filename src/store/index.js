import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import reducer from '../reducers/';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
};

export default configureStore;
