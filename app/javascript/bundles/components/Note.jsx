import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as noteActions from '../actions/noteActions';

class Note extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // note: this.props.note,
      isEditable: false,
      currentUserId: '1' // HARDCODED BECAUSE WE DON'T HAVE AUTHORIZATION YET
    };

    this.editNote = this.editNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNoteState = this.updateNoteState.bind(this);
    this.getTextArea = this.getTextArea.bind(this);
    this.getButtons = this.getButtons.bind(this);
    this.editButton = this.editButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.isEditable) {
      this.setState({isEditable: false});
    }
  }

  saveNote(event) {
    event.preventDefault();
    this.props.actions.saveNote(this.props.note);
  }

  editNote() {
    this.setState({isEditable: true});
  }

  deleteNote() {
    this.props.actions.deleteNote(this.props.note);
  }

  updateNoteState(event) {
    const target = event.target;
    const field = target.name;
    let note = this.props.note;
    note[field] = target.value;
    return this.setState({note: note});
  }

  getTextArea() {
    if(this.state.isEditable) {
      return <textarea
                name="text"
                className="form-control"
                defaultValue={this.props.note.attributes.text}
                rows="3"
                onChange={this.updateNoteState}></textarea>;
    }

    if(this.props.note.attributes.is_url) {
      return <a href={this.props.note.attributes.text} target="_blank">{this.props.note.attributes.text}</a>;
    }

    return <p>{this.props.note.attributes.text}</p>;
  }

  getButtons() {
    let {currentUserId} = this.state;
    let {note} = this.props;

    if(note.relationships.user.data.id !== currentUserId) {
      return null;
    }

    return (
      <div>
        {this.editButton()}
        <button onClick={this.deleteNote} className="btn btn-danger btn-xs">Remove</button>
      </div>
    )
  }

  editButton() {
    if(this.state.isEditable) {
      return <button onClick={this.saveNote} className="btn btn-primary btn-xs">Save</button>;
    }

    return <button onClick={this.editNote} className="btn btn-primary btn-xs">Edit</button>;
  }

  render() {
    let textArea = this.getTextArea();
    let {note} = this.props;

    return (
      <div className="media">
        <div className="media-body">
          <h4 className="media-heading">{textArea}</h4>
          <time className="text-muted">{note.attributes.created_at.toLocaleString()}, {note.attributes.user_name}</time>
        </div>
        {this.getButtons()}
        <hr />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(noteActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Note);
