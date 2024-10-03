import styled from "styled-components";
import { flexCenter, flexCenterColumn } from './../../global/common';


const S={};

    S.Wrapper = styled.div`
        width: 100%;
        height: 100%;
        ${flexCenterColumn}

        /* 미디어쿼리가 사용해야 하는 경우 */
        /* @media screen and (max-width : 300px){
            .tag{
                color : blue;
            }
        } */
    
    `
    S.ImageWrapper = styled.div`
        flex: 0.7;
        ${flexCenter}
    
    `
    S.ButtonWrapper = styled.div`

        width: 100%;
        height: 110px;
        display : flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px 0 100px 0;
    
    `

export default S;