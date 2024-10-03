import React from 'react';
import { faBell, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviousUrl } from '../../modules/user';

const Layout = () => {
    // 비로그인 회원이 My 페이지에 접근 못하게 한다.

    const location = useLocation();
    const dispatch = useDispatch();

    const previousUrl = useSelector((state)=> state.user.previousUrl);
    
    const path = location.pathname + location.search;

    if(path !== '/my'){
        dispatch(setPreviousUrl(path))
        console.log("리덕스 이전경로", previousUrl)
        console.log("현재 경로", path)
    }
    console.log(path)


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
                        <p>Feed</p>
                    </NavLink> 
                    <NavLink to={"/search"}>
                        <FontAwesomeIcon icon={faSearch} className='icon'></FontAwesomeIcon>
                        <p>Search</p>
                    </NavLink> 
                    <NavLink to={"/notice"}>
                        <FontAwesomeIcon icon={faBell} className='icon'></FontAwesomeIcon>
                        <p>Notification</p>
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

export default Layout;