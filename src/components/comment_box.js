import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }
  handleChange(e) {
    this.setState({ comment: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState ({ comment: '' });
    document.getElementById('input-comment').focus();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          id="input-comment"
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
          <div>
            <button action="submit">Submit commit</button>
          </div>
        </form>
    );
  }
}
// 1st argument is reserved for mapStateToProps
// 2nd argument are the actions
export default connect(null, actions)(CommentBox);
