import React from 'react';
import { NavLink } from "react-router-dom";
import { FaSpinner, IoIosArrowForward } from 'react-icons/all';

import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';

import {
    Wrapper,
    Header,
    Button,
    Box,
    Text,
    Login,
    Check,
    Facebook,
    Novo,
    Captcha,
    Footer,
    body,
} from './styles';

import logo from '../../assets/images/logo.png';

function SignUp() {
    const [loading, setLoading] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({
        usuario: '',
        email: '',
        senha: '',
    });

    const handleOnChange = (event) => {
        event.preventDefault();

        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value,
        });
    };

    const createUserAccount = async (event) => {
        event.preventDefault();

        if (userInfo.email === '') {
            toast.error('Preencha as informações antes de continuar.');

            return;
        }

        try {
            setLoading(true);

            const { data } = await api.post(`/userinfo?email=${userInfo.email}`);

            if(data.exists) {
                toast.info('Já existe um usuário utilizando este email');
                return;
            }

            history.push('/registration', { user:  userInfo }  )

            
        } catch (err) {
            toast.error(`Erro ao autenticar - ${err}`);
            setLoading(false);
        }
    };


    return (
        <Wrapper>
            <Header>
                <img src={logo} />
            </Header>

           <Novo>
  
                <>
                <Box>
                    <h1>Milhares de filmes e séries.</h1>
                    <h1>Diversão garantida.</h1>
                    <p>Você vai adorar a Netflix! Mas, se não gostar, cancele nos primeiros 21 dias para receber o reembolso.</p>
                  
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email ou número de telefone"
                        value={userInfo.email}
                        onChange={(event) => {
                            handleOnChange(event);
                        }}
                    />
    
                    <div>
                        <button onClick={(event) => { createUserAccount(event) }}>Vamos lá</button>  
                        <IoIosArrowForward />
                    </div>
                  
                 
                </Box>
                </>
             </Novo>
            <Footer>aqui fica meu footer</Footer>
        </Wrapper>
    );
 
}

export default SignUp;
