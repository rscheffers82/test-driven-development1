import React, {Component} from 'react';
import {connect} from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map( comment => <li key={comment}>{comment}</li>);
  return (
    <div className="comment-list">
      {list}
    </div>
  );
}
// map store or application state to props that can be used for the CommentList component
function mapStateToProps(state) {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList);
