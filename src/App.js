import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Post from './components/Post';
import { db } from './firebase';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  },[]);

  return (
    <div className="app">
      <Header >
        <img className="headerImg"
             src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
             alt="IG logo"
        />
      </Header>

      {posts.map(({ id, post}) => (
        <Post key={id}
              username={post.username}
              avatarImg={post.avatarImg}
              postImg={post.postImg}
              caption={post.caption}
              />
      ))}
      
    </div>
  );
}

export default App;

const Header = styled.div`
max-width: 100%;
background-color: white;
padding: 20px;
border-bottom: 1px solid lightgray;
.headerImg{
  object-fit: contain;
}
`