import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form: form,
  notes: noteReducer
});

export default rootReducer;
