import axios from 'axios';

const API_URL = '/notes';

var instance = axios.create({
  baseURL: '/notes',
  headers: {
    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
  },
});

export function deleteNote(note) {
  return instance.delete(`/${note.id}`);
}

export function createNote(note) {
  return instance.post('', { note: note });
}

export function updateNote(note) {
  return instance.put(`/${note.id}`, { note: note });
}
