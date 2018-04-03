import React from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({note, onSave, onChange}) => {
  return (
    <form>
      <div className="row">
        <div className="form-group">
          <textarea
            name="text"
            value={note.text}
            onChange={onChange}
            rows="3"
            className="form-control" />
        </div>
        <input
          type="checkbox"
          name="is_url"
          value={note.is_url}
          onChange={onChange} /> is URL
        <input
          type="text"
          name="user_id"
          value={note.user_id}
          onChange={onChange}
          hidden />
        <input
          type="submit"
          value="+"
          className="btn btn-success pull-right"
          onClick={onSave} />
      </div>
    </form>
  )
};

NoteForm.propTypes = {
  note: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NoteForm;
