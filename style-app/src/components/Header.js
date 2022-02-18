import { userInfo } from "os";
import styled from "styled-components";
import Avatar from '../../public/assets/img/avatar.jpg';
import Icon from '../../public/assets/img/notification.svg';

function Header() {
  return (
    <Headerwrap>
        <UserInfo>
            <UserAvatar>
                <UserImg src={Avatar.src} alt="Avatar"/>
            </UserAvatar>
            <UserBox>
                <WelcomeTxt>Welcome</WelcomeTxt>
                <UserName>Mr. Ademir</UserName>
            </UserBox>
        </UserInfo>
        <NotificationBell>
            <NotificationIcon src={Icon.src} alt="icon" />
        </NotificationBell>
    </Headerwrap>
  )
}

export default Header;

const Headerwrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: flex-start;
`;

const UserAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 2px solid #2196f3;
    padding: 3px;
`;

const UserImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
`;

const UserBox = styled.div`
    margin-left: 12px;
`;

const WelcomeTxt = styled.span`
    font-size: 12px;
    line-height: 21px;
    font-weight: normal;
    color: #fff;
    opacity: 0.8;
`;

const UserName = styled.h2`
    font-size: 20px;
    line-height: 15px;
    font-weight: 60px;
    color: #fff;
`;

const NotificationBell = styled.div`
    cursor: pointer;
    transition: 0.3s all;

    &:hover{
        opacity: 0.7;
    }
`;

const NotificationIcon = styled.img`
    width: 30px;
    height: 30px;
`;