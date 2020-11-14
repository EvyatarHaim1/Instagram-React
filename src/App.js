import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './components/Post';
import './App.css';

function App() {

  const [posts, setPosts] = useState([
    {
      avatarImg:"https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118824089_981814128951279_6475924373542749959_n.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_ohc=HV_gjXn4vOcAX-6qhBC&_nc_tp=25&oh=aacb2af2b1f1eddb8025a7f6056de6f0&oe=5FDA1AE5",
      postImg:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/117166831_10157709216476947_6742071503243751974_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=UmC9x5stEhAAX-ZYbet&_nc_ht=scontent.ftlv5-1.fna&oh=c468e4d3eeb259ae54274ec5913edfc1&oe=5FD4BF00",
      username:"evyatarhaim1",
      caption:"Cartagena"
    },
    {
      avatarImg:"https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76889412_430786451201129_6663815791818833920_n.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_ohc=jrmuF1XEMqoAX9Lenyd&_nc_tp=25&oh=6d116049694cb9691198053da3f3c549&oe=5FD776E2",
      postImg:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/72530991_10221245016615152_8900941622104031232_o.jpg?_nc_cat=107&ccb=2&_nc_sid=84a396&_nc_ohc=i6A-HiwNfrgAX9C6XWZ&_nc_ht=scontent.ftlv5-1.fna&oh=4e36c8ff088e98a9ab1b9a15228e916c&oe=5FD70992",
      username:"yanis.suarez",
      caption:"💖No puedo mentir ,ni ocultar lo que siento @evyatarhaim1 amor mío 💖"
    },
    {
      avatarImg:"https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118214345_746785359197956_1362684934721040126_n.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_ohc=B5plEJIJtjQAX9INy8s&_nc_tp=25&oh=4531354b882404691d7388a38f0f9acf&oe=5FD9CD8C",
      postImg:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/119455783_3617544401591786_2041829546527088886_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=2kMnCAkM8sAAX-89Ym6&_nc_ht=scontent.ftlv5-1.fna&oh=42fbd6f919b93ccdabd9ed95d5d1de5f&oe=5FD6ED76",
      username:"shirhaim95",
      caption:"My everything💙"
    },
  ]);

  return (
    <div className="app">
      <Header >
        <img className="headerImg"
             src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
             alt="IG logo"
        />
      </Header>

      {posts.map(post => (
        <Post username={post.username}
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