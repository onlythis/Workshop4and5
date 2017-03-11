import React from 'react';
import {unixTimeToString} from '../util'
import {Link} from 'react-router';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  handleLikeComment(clickEvent) {
    clickEvent.preventDefault();
      if (this.didUserLike()) {
        // User clicked 'unlike' button.
        this.props.handleUnlikeComment(this.state.index);
      } else {
        // User clicked 'like' button.
        this.props.onLikeComment(this.state.index);
      }
    }

  didUserLike() {
    var likeCounter = this.state.likeCounter;
    var liked = false;
    // Look for a likeCounter entry with userId 4 -- which is the
    // current user.
    for (var i = 0; i < likeCounter.length; i++) {
      if (likeCounter[i] === 4) {
        liked = true;
        break;
      }
    }
    return liked;
  }

 render() {
   var likeButtonText = "Like";
   if (this.didUserLike()) {
     likeButtonText = "Unlike";
   }
   return (
     <div>
       <div className="media-left media-top">
         PIC
       </div>
       <div className="media-body">
         <Link to={"/profile/" + this.props.author._id}>{this.props.author.fullName}</Link> {this.props.children}
         <br /><a href="#" onClick={(e) => this.handleLikeComment(e)}>{likeButtonText}</a> · <a href="#">Reply</a> · {unixTimeToString(this.props.postDate)} · <a href="#">{this.state.likeCounter.length} people</a> like this
       </div>
     </div>
   )
 }
}
