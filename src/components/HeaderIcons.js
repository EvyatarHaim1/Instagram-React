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
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <HomeIcon />
            <SendIcon />
            <ExploreIcon />
            <FavoriteBorderIcon />
             <Avatar
            className="post_avatar"
            alt={ currentUserImg }
            src={ currentUserImg }
            />
        </Div>
    )
}

export default HeaderIcons;

const Div = styled.div`
display: flex;
.MuiSvgIcon-root{ color: black;}`


const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    height: "25px",
    textAlign: 'right',
    border: "1px solid lightgray",
    backgroundColor: "#fafafa",
    marginRight: "280px",
    marginLeft: "10px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
//   
}));



 

          

