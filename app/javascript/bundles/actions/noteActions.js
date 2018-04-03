import * as types from './actionTypes';
import * as noteApi from '../api/noteApi';

export function updateNoteSuccess(note) {
  return { type: types.UPDATE_NOTE_SUCCESS, note };
}

export function deleteNoteSuccess(note) {
  return { type: types.DELETE_NOTE_SUCCESS, note };
}

export function createNoteSuccess(note) {
  return { type: types.CREATE_NOTE_SUCCESS, note };
}

export function saveNote(note) {
  return function(dispatch, getState) {
    if(note.id) {
      return noteApi.updateNote(note).then(response => {
        dispatch(updateNoteSuccess(response.data))
      }).catch(error => {
        throw(error);
      });
    } else {
      return noteApi.createNote(note).then(response => {
        dispatch(createNoteSuccess(response.data))
      }).catch(error => {
        throw(error);
      });
    }
  };
}

export function deleteNote(note) {
  return function(dispatch, getState) {
    return noteApi.deleteNote(note).then(response => {
      dispatch(deleteNoteSuccess(note));
    }).catch(error => {
      throw(error);
    });
  };
}
