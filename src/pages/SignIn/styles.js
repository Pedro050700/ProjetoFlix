import styled, { css, Keyframes, keyframes } from 'styled-components';
import { darken } from 'polished';

import fundo from '../../assets/images/bkground.jpg';

export const body = styled.body`
    background: black;
    height: 100vh;
`;
export const Footer = styled.footer`
    background: black;
    color: white;
    height: 100px;
`;

export const Wrapper = styled.div`
    /* position: fixed; */
    width: 100%;
    height: 100%;
    background-image: url(${fundo});
`;

export const Header = styled.header`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    img {
        position: absolute;
        left: 2%;
        top: -6%;
    }
`;

export const Box = styled.div`
    flex-direction: column;
    width: 450px;
    height: 650px;
    border-radius: 30px 20px 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    background: rgba(0, 0, 0, 0.8);
`;

export const Text = styled.div`
    font-size: 30px;
    color: white;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 70px;
    font-weight: bold;

    font-family: Helvetica;
`;

export const Login = styled.form`
    #email {
        font-size: 120%;
        margin-left: 16%;
        margin-top: -100px;
        width: 69%;
        border-radius: 4px;
        border: 0;
        color: #fff;
        height: 50px;
        line-height: 50px;
        padding: 16px 20px 0;
        color: black;
        font-family: Helvetica;

        :focus {
            background: ${darken(0.04, '#454545')};
        }
    }

    #password {
        font-size: 120%;
        margin-left: 16%;
        width: 69%;
        border-radius: 4px;
        border: 0;
        color: #fff;
        height: 50px;
        line-height: 50px;
        padding: 16px 20px 0;
        color: black;
        margin-top: 10%;
        font-family: Helvetica;

        :focus {
            background: ${darken(0.04, '#454545')};
        }
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
    margin-top: 10%;
    margin-left: 16%;
    border: none;
    cursor: pointer;
    height: 50px;
    width: 69%;
    background: red;
    border-radius: 4px;
    font-weight: bold;
    font-family: Helvetica;

    ${(props) =>
        props.loading &&
        css`
            background: ${darken(0.1, '#ff0000')};
            cursor: default;

            > svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}

    > span {
        color: #fff;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4%;
        font-size: 20px;
    }
`;

export const Check = styled.div`
    margin-left: 16%;
    margin-top: 3%;
    color: grey;
    font-size: 13px;
    font-family: Helvetica;
    margin-top: 3%;

    a {
        margin-left: 18%;
        color: grey;
        text-decoration: none;
        font-weight: bold;
    }
`;
export const Facebook = styled.div`
    margin-top: 10px;
    margin-left: 16%;
    padding: 5% 10%;
    font-family: Helvetica;
    text-decoration: none;

    a {
        color: grey;
        text-decoration: none;
    }
`;
export const Novo = styled.div`
    color: grey;
    font-family: Helvetica;
    margin-top: 30px;
    margin-left: 16%;

    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
`;
export const Captcha = styled.div`
    color: grey;
    font-family: Helvetica;
    margin-top: 25px;
    margin-left: 16%;
    margin-right: 16%;
    font-size: 13px;

    a {
        color: #0071eb;
        text-decoration: none;
    }
`;
