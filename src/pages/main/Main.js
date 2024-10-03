import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
const Main = () => {
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                <img src={process.env.PUBLIC_URL + "/images/main/icon.jpg"} alt='icon'/>
            </S.ImageWrapper>
            <S.ButtonWrapper>
                <Link to={"/signIn"}>
                    <BasicButton size={"full"} shape={"small"} variant={"blue"} color={"white"}>Sign In</BasicButton>
                </Link>
                <Link to={"/signUp"}>
                    <BasicButton size={"full"} shape={"small"} variant={"blue"} color={"white"}>Sign Up</BasicButton>
                </Link>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};

export default Main;