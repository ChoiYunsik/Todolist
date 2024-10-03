import React from 'react';
import { faBell, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Outlet } from 'react-router-dom';
import S from './style';


const AdminLayout = () => {

    return (
        <S.Background>
            <S.Wrapper>
                <S.Header>
                    <Link to={"/"}>Yunsik Todo</Link>
                </S.Header>
                <S.Main>
                    <Outlet />
                </S.Main>
                <S.Nav>
                    <NavLink to={"/todo"}>
                        <FontAwesomeIcon icon={faHouse} className='icon'></FontAwesomeIcon>
                        <p>피드</p>
                    </NavLink> 
                    <NavLink to={"/search"}>
                        <FontAwesomeIcon icon={faSearch} className='icon'></FontAwesomeIcon>
                        <p>검색</p>
                    </NavLink> 
                    <NavLink to={"/notice"}>
                        <FontAwesomeIcon icon={faBell} className='icon'></FontAwesomeIcon>
                        <p>알림</p>
                    </NavLink> 
                    <NavLink to={"/my"}>
                        <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon>
                        <p>My</p>
                    </NavLink> 
                </S.Nav>
            </S.Wrapper>
            
        </S.Background>
    );
};

export default AdminLayout;