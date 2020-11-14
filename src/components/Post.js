import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

function Post({ avatarImg, postImg, username, caption}) {
    return (
        <POST>
            <PostHeader>
          <Avatar
            className="post_avatar"
            alt="EvyatarHaim"
            src={avatarImg}
            />
            <h3>{username}</h3>
            </PostHeader>
            <img className="postImg"
                 src={postImg}
                 alt="postImg"
            />
            <h4 className="postText"><strong>{username} </strong> {caption}</h4>
        </POST>
    )
}

export default Post;

const POST = styled.div`
max-width: 600px;
border: 1px solid lightgray;
background-color: white;
margin-bottom: 60px;
margin-left: 19%;
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
}`
