import * as types from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case types.CREATE_NOTE_SUCCESS:
      return [...state, action.note];

    case types.UPDATE_NOTE_SUCCESS:
      return [...state.filter(note => note.id !== action.note.id), action.note];

    case types.DELETE_NOTE_SUCCESS:
      return state.filter(note => note.id !== action.note.id);

    default:
      return state;
  }
}
