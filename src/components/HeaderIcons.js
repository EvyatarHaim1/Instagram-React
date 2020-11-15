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
import { red } from '@material-ui/core/colors';

function HeaderIcons({ currentUserImg}) {
    const classes = useStyles();

    return (
        <Div>
             {/* <InputBase
            
             placeholder= "Search…"/> */}
             <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className="search"/>
            </div>
            <InputBase className="input"
              inputProps={{ 'aria-label': 'search' }}
              placeholder="Search"
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
.MuiSvgIcon-root{ color: black;  align-self: center; margin-left: 20px;
  &.search {margin: auto;} }
.MuiInputBase-root , .input{ width: 20px; left: 50px;}
.MuiInputBase-input {width: 50px;}
.search{ color: gray; text-align: center !important; font-size:16px; }
.input{width: 170px; font-size:14px; }
`


const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    borderRadius: "4px",
    display: 'flex',
    textAlign: "center",
    justifyContent: "center",
    position: 'relative',
    height: "25px",
    textAlign: 'center',
    border: "1px solid lightgray",
    backgroundColor: "#fafafa",
    marginRight: "200px",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(25),
      width: 'auto',
    },
  },
  searchIcon: {
    paddingLeft: "5px",
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    justifyContent: "center",
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



 

          

