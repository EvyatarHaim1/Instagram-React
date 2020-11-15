import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { fade, makeStyles } from '@material-ui/core/styles';

function HeaderIcons({ currentUserImg}) {
    const classes = useStyles();

    return (
        <Div>
             {/* <InputBase
            
             placeholder= "Search…"/> */}
             <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              inputProps={{ 'aria-label': 'search' }}
              placeholder="Search…"
            />
          </div>
            <HomeIcon />
            <SendIcon />
            <ExploreIcon />
            <FavoriteBorderIcon />
             <Avatar
            className={classes.avatar}
            alt={ currentUserImg }
            src={ currentUserImg }
            />
        </Div>
    )
}

export default HeaderIcons;

const Div = styled.div`
display: flex;
.MuiSvgIcon-root{ color: black; margin-left:20px; align-self: center; }
`


const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    position: 'relative',
    height: "25px",
    textAlign: 'center',
    border: "1px solid lightgray",
    backgroundColor: "#fafafa",
    marginRight: "200px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(25),
      width: 'auto',
    },
  },
  searchIcon: {
    paddingLeft: "5px",
    // height: '100%',
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2.5),
    },
  objectFit: "contain",
  width: "25px",
  height: "25px",
  alignSelf: "center",
  marginLeft: "20px"
  }
//   
}));



 

          

