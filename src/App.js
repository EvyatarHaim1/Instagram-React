import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Post from './components/Post';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Button, Input} from '@material-ui/core';
import { db, auth, storage} from './firebase';
import AppRightSection from './components/AppRightSection';
import ImageUpload from './components/ImageUpload';
import HeaderIcons from './components/HeaderIcons';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [avatarImg, setAvatarImg] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        console.log(authUser);
        setUser(authUser);
      } 
      else {
        setUser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  },[user, username]);


  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  },[]);

  useEffect(() => {
    if(user){
      storage.ref("users")
            .child(`${user.uid}/avatarImg`)
            .getDownloadURL()
            .then(avatarUrl => {
              setAvatarImg(avatarUrl)
            })
    }
  },[user, avatarImg])


  const signUp = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      storage.ref(`users/${authUser.user.uid}/avatarImg`).put(avatarImg);
      console.log('the avatarImg uploaded succesfully')
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message))
    setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
    setOpenSignIn(false);
  }

  const handleAvatarImgChange = (e) => {
    if(e.target.files[0]){
      setAvatarImg(e.target.files[0]);
    }
  }

  
  return (
    <div className="app">

      <Modal
            open={open}
            onClose={() => setOpen(false)}
      >
            <div style={modalStyle} className={classes.paper}>
              <form className="appSignup">
                <center>
                  <img className="app_headerImg"
                      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                      alt="headerImg"
                  />
                </center>

                  <Input 
                      placeholder="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input 
                      placeholder="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input 
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input type="file" onChange={handleAvatarImgChange} />
                  <Button type="submit"
                         variant="contained" 
                         color="primary"
                         disabled={!password || !email || !username || !avatarImg }
                         onClick={signUp}>Sign Up</Button>
              </form>
          </div>
      </Modal>

      <Modal
            open={openSignIn}
            onClose={() => setOpenSignIn(false)}
      >
            <div style={modalStyle} className={classes.paper}>
              <form className="appSignup">
                <center>
                  <img className="app_headerImg"
                      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                      alt="headerImg"
                  />
                </center>

                  <Input 
                      placeholder="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input 
                      placeholder="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                 <Button type="submit"
                         variant="contained" 
                         color="primary"
                         disabled={ !email || !password }
                         onClick={signIn}
                         >Sign In</Button>
              </form>
          </div>
      </Modal>

      
        

      <Header>
        <img className="headerImg"
             src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
             alt="IG logo"
        />
        <HeaderIcons currentUserImg={user ? avatarImg : username}/>
         {user ? (
        <Button className="app_logoutContainer"
               onClick={() => auth.signOut()}>Logout</Button>
        ) : ( 
        <div className="app_loginContainer">
            <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
        )}
      </Header>

      <div className="app_posts">
        <div className="app_postLeft">
      {posts.map(({ id, post}) => (
        <Post key={id}
              postId={id}
              username={post.username}
              avatarImg={post.avatarImg || "EH"}
              postImg={post.postImg}
              caption={post.caption}
              user={user}
              />
        ))
      }
        </div>
        <div className="app_postRight">
        {user?.displayName ? (
             <AppRightSection avatarImg={avatarImg} 
                              username={user.displayName}
                              email={user.email}
             /> ) : ( null )}
         </div>
      </div>
      
            {user?.displayName ? (
                            <ImageUpload username={user.displayName}
                                         avatarImg={avatarImg}/>
                          ) : ( null )
            }
      
    </div>
  );
}

export default App;

const Header = styled.div`
position: sticky;
top: 0;
z-index: 1;
display: flex;
justify-content: space-between;
background-color: white;
padding: 10px;
border-bottom: 1px solid lightgray;
.headerImg{
  object-fit: contain;
  margin-left: 18.5%;
}
.app_loginContainer , .app_logoutContainer{
  margin-right: 5%;
}
`



