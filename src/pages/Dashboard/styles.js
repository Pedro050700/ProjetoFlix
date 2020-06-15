import styled from 'styled-components';
import batman from '../../assets/images/batman.jpg';
import user1 from '../../assets/images/user1.png';
import coringa from '../../assets/images/coringa.png';
import add from '../../assets/images/add.png';
import arrow from '../../assets/images/arrow.png';

export const Wrapper = styled.div`
    height: 100vh;
    background-color: #141414;

    img {
        width: 7%;
        margin-top: 25px;
        margin-left: 25px;
    }

    h1 {
        width: 100%;
        color: #fff;
        font-size: 3.5vw;
        font-family: 'Netflix Sans';
        font-weight: normal;
        text-align: center;
    }
`;

export const Header = styled.h1`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 170px;

    img {
        position: absolute;
        left: 2%;
        top: -6%;
    }
`;

export const Users = styled.section`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20%;
    cursor: pointer;
`;

export const User1 = styled.section`
    position: relative;
    height: 10vw;
    width: 10vw;
    color: black;
    background: red;
    margin: 1.5%;
    border: 0.3em solid #333;
    cursor: pointer;
    background-image: url(${user1});
    background-size: 10vw 10vw;
`;

export const User2 = styled.section`
    position: relative;
    height: 10vw;
    width: 10vw;
    color: black;
    background: red;
    margin: 1.5%;
    border: 0.3em solid #333;
    cursor: pointer;
    background-image: url(${arrow});
    background-size: 10vw 10vw;
`;

export const User3 = styled.section`
    position: relative;
    height: 10vw;
    width: 10vw;
    color: black;
    background: red;
    margin: 1.5%;
    border: 0.3em solid #333;
    cursor: pointer;
    background-image: url(${batman});
    background-size: 10vw 10vw;
`;

export const User4 = styled.section`
    position: relative;
    height: 10vw;
    width: 10vw;
    color: black;
    background: red;
    margin: 1.5%;
    border: 0.3em solid #333;
    cursor: pointer;
    background-image: url(${coringa});
    background-size: 10vw 10vw;
`;
export const UserAdd = styled.section`
    position: relative;
    height: 10vw;
    width: 10vw;
    margin: 1.5%;
    cursor: pointer;
    background-image: url(${add});
    background-size: 10vw 10vw;
`;

export const Names = styled.section`
    color: #333;
    font-family: Netflix Sans;
    display: flex;
    margin-left: 19%;
    margin-top: -50px;

    article {
        margin: 50px;
        margin-left: 5%;
        cursor: pointer;
        color: grey;
        display: block;
        font-size: 1.3vw;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Add = styled.section`
    margin: 50px;
    margin-left: 3%;
    cursor: pointer;
    color: grey;
    display: block;
    font-size: 1.3vw;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const Button = styled.button`
    background: #141414;
    margin-left: 43%;
    width: 250px;
    height: 50px;
    border: 1px solid grey;
    color: grey;
    text-transform: uppercase;
    padding: 0.5em 1.5em;
    letter-spacing: 2px;
    cursor: pointer;
    font-size: 0.9em;
`;
