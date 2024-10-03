import styled, { css } from "styled-components"

const variantCSS = {
    blue : css`
        background-color: ${({theme})=>theme.PALETTE.background["blue"]};
    `
}

const shapeCSS = {

    default: css``,
    small: css`
        border-radius: 10px;
    `,
    large: css`
        border-radius: 20px;
    `,
    big: css`
        border-radius: 30px;
    `,
    round: css`
        border-radius: 50%;
    `
}


const sizeCSS = {

    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,

    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        padding: 16px 0;
`,
}

const colorCSS = {
    white: css`
        color: #fff;
    `,
    black: css`
        color : #131313;
    `,
    blue : css`
        color: #2A67C9;
    `
}

const Button = styled.button`

    margin-top: 20px;
    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]}
    ${({color}) => colorCSS[color]}

    border: none;
    cursor : pointer;

    font-size: 16px;

`
export default Button;