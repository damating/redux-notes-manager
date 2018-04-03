import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const NoteList = ({notes}) => {
  return (
    <div className="row">
      {notes.map(note =>
        <Note key={note.id} note={note} />
      )}
    </div>
  )
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NoteList;
