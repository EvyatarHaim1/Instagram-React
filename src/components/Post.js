import React, {useState, useEffect }from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { Input } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';

function Post({ postId, avatarImg, postImg, username, caption, user }) {
    
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
      let unsubscribe;
      if (postId) {
          unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
      }

      return () => {
          unsubscribe();
      };
    },[postId]);

    
    const postComment = (e) => {
        e.preventDefault()
        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }

    return (
        <POST>
            <PostHeader>
          <Avatar
            className="post_avatar"
            alt={username}
            src={avatarImg}
            />
            <h3>{username}</h3>
            </PostHeader>
            <img className="postImg"
                 src={postImg}
                 alt="postImg"
            />
            <h4 className="postText"><strong>{username} </strong> {caption}</h4>

         
            <div className="post_comments">
                {comments.map((comment) => (
                    <p style={{paddingTop: "4px"}}>
                        <strong> {comment.username} </strong> {comment.text}
                    </p>
                ))}
            </div>  
            { user && (
            <form className="post_commentBox">
                <Input
                    className="post_input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    // variant="contained" 
                    // color="primary"
                    disabled={!comment}
                    className="post_button"
                    type="submit"
                    onClick={postComment}
                >
                Post
                </button>
            </form>
            )}
        </POST>
    )
}

export default Post;

const POST = styled.div`
max-width: 600px;
border: 1px solid lightgray;
background-color: white;
margin-bottom: 60px;
.post_comments{
    padding-left: 20px;
}
.post_commentBox {
    display: flex;
    margin-top: 10px;
    .post_input{
        flex: 1;
        border: none;
        padding: 10px;
        padding-left: 15px;
        border-top: 1px solid lightgray;
    }
    .post_button{
        flex: 0;
        padding-right: 15px;
        border: none;
        color: #5095F6;
        font-weight: 750;
        background-color: transparent;
        border-top: 1px solid lightgray;
        :disabled{
            color: #6082a3;
            font-weight: 500;
        }
    }
}
/* margin-left: 19%; */
.postImg {
    width: 100%; 
    object-fit: contain;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
}
.postText{
    font-weight: normal;
    padding: 20px;
}`

const PostHeader = styled.div`
display: flex;
align-items: center;
padding: 10px;
.post_avatar {
    margin-right: 10px;
}
`





