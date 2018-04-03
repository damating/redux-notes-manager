import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../actions/noteActions';

import NoteForm from './NoteForm';
import NoteList from './NoteList';


class NotesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      note: this.props.note
    };

    this.updateNoteState = this.updateNoteState.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.note.id != nextProps.note.id) {
      this.setState({note: nextProps.note});
    }
  }

  updateNoteState(event) {
    const target = event.target;
    const field = target.name;
    let note = this.state.note;
    note[field] = target.type === 'checkbox' ? target.checked : target.value;
    return this.setState({ note: note });
  }

  saveNote(event) {
    event.preventDefault();
    this.props.actions.saveNote(this.state.note);
  }

  render() {
    return (
      <div>
        <NoteForm
          note={this.state.note}
          onChange={this.updateNoteState}
          onSave={this.saveNote}
        />
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
}

NotesPage.propTypes = {
  note: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired
};


const mapStateToProps = (state) => {
  let note = { id: '', text: '', is_url: false, user_id: 1 };

  return {
    notes: state.notes,
    note: note
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(noteActions, dispatch)
    // createNote: note => dispatch(noteActions.createNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
