import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

function AppRightSection({avatarImg, username, email}) {
    return (
        <Div>
            <FirstRow>
            <Avatar
            className="userAvatarImg"
            alt={username}
            src={avatarImg}
            />
            <div className="userDetails">
              <h5 className="username">{username}</h5>
              <h5 className="email"> {email}</h5>
            </div>
            <h5 className="switch">Switch</h5>
            </FirstRow>
            <SecondRow>
            <h4 className="suggestionsText">Suggestions For You</h4>
            <h5 className="seeAll">See All</h5>
            </SecondRow>
            <ThirdRow>
            <Avatar
            className="userToAdd"
            alt="user1"
            src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/125120408_212395700253211_1874736530317427873_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_ohc=xAl_fJzepT0AX8EJgun&_nc_ht=scontent.ftlv5-1.fna&oh=846c5d86c2246e6fced3ab619f299f18&oe=5FD7FABF"
            />
            <p className="userToAddName">Robert Richer</p>
            <h5 className="follow">Follow</h5>
            </ThirdRow>
            <ThirdRow>
            <Avatar
            className="userToAdd"
            alt="user1"
            src="https://www.shenkar.ac.il/system/personal_photos/hp_person_big_Anna_Geslev.jpg?1410688136"
            />
            <p className="userToAddName">Robert Richer</p>
            <h5 className="follow">Follow</h5>
            </ThirdRow>
            <ThirdRow>
            <Avatar
            className="userToAdd"
            alt="user1"
            src="https://www.cs.tau.ac.il/~ophirf/me_17.jpg"
            />
            <p className="userToAddName">Robert Richer</p>
            <h5 className="follow">Follow</h5>
            </ThirdRow>
            <ThirdRow>
            <Avatar
            className="userToAdd"
            alt="user1"
            src="https://format-com-cld-res.cloudinary.com/image/private/s--hrCai3YB--/c_limit,g_center,h_65535,w_700/fl_keep_iptc.progressive,q_95/v1/8416162e6d3bb86cd9ffd2148b8b51c4/headshot.jpg"
            />
            <p className="userToAddName">Robert Richer</p>
            <h5 className="follow">Follow</h5>
            </ThirdRow>
            <ThirdRow>
            <Avatar
            className="userToAdd"
            alt="user1"
            src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/54256301_10156372266473121_4075601347435560960_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=NOOCrbt9aDEAX8MXyXs&_nc_ht=scontent.ftlv5-1.fna&oh=02d3aae1f1822ddcc5d295395dd74cc6&oe=5FD56023"
            />
            <p className="userToAddName">Robert Richer</p>
            <h5 className="follow">Follow</h5>
            </ThirdRow>
            <h6 className="rights">About Help Press API Jobs Privacy Terms Locations Top Accounts Hashtags Language English</h6>
            <h6 className="rights">© 2020 FAKE INSTAGRAM FROM FACEBOOK</h6>

         
        </Div>
    )
}

export default AppRightSection;

const Div = styled.div`
.userAvatarImg {
object-fit: contain;
width: 58px;
height: 58px;
}
.rights{ color: lightgray; margin-top: 30px;}
`
const FirstRow = styled.div`
display: flex;
align-items: center;
.userDetails{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}
.switch{ 
    margin-left: 115px; 
    color: #0095f6; 
    opacity: 1;
    }`

const SecondRow = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
width: 500px;
.suggestionsText{
    color: gray;
    font-weight: 500;
}
.seeAll{ margin-left: 160px;}`

const ThirdRow = styled.div`
display:flex;
align-items: center;
width: 500px;
margin-top: 20px;
margin-bottom: 20px;
.userToAddName{
    margin-left: 20px;
}
.follow{
    color: #0095f6; 
    margin-left: 150px;
}`