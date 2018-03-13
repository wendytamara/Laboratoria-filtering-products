import { createStore, combineReducers } from 'redux';
//en AppReducer esta el store almacenado
import AppReducer from './reducer';


const rootReducer = combineReducers({
  // aquí puedes ir agregando entradas de tu store
  AppReducer,
});

const store = createStore(
  rootReducer,
  // inyectamos la capacidad de usar Redux Dev Tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
