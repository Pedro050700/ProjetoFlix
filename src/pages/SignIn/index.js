import React from 'react';
import { FaSpinner } from 'react-icons/all';

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

function SignIn() {
    const [loading, setLoading] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({
        email: '',
        password: '',
    });

    const handleOnChange = (event) => {
        event.preventDefault();

        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value,
        });
    };

    const userSignIn = async (event) => {
        event.preventDefault();

        if (userInfo.email === '') {
            toast.error('Preencha as informações antes de continuar.');

            return;
        }

        if (userInfo.password === '') {
            toast.error('Preencha as informações antes de continuar.');

            return;
        }

        try {
            setLoading(true);

            const { data } = await api.get(`/user?email=${userInfo.email}`);

            if (Array.isArray(data) && !data.length) {
                toast.info('Usuário não cadastrado');
                return;
            }

            const [profile] = data;

            if (userInfo.password === profile.password) {
                const parsedJson = JSON.stringify(userInfo);
                localStorage.setItem('userProfile', parsedJson);

                toast.success(`Seja bem-vindo ${profile.username}`);

                history.push('/dashboard');
                setLoading(false);
                return;
            }
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

            <body>
                <Box>
                    <Text>Entrar</Text>
                    <Login>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email ou número de telefone"
                            value={userInfo.user}
                            onChange={(event) => {
                                handleOnChange(event);
                            }}
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Senha"
                            value={userInfo.password}
                            onChange={(event) => {
                                handleOnChange(event);
                            }}
                        />

                        <Button
                            disabled={loading}
                            loading={loading}
                            onClick={(event) => {
                                userSignIn(event);
                            }}
                        >
                            {loading ? (
                                <FaSpinner color="#fff" size="32" />
                            ) : (
                                <span>Entrar</span>
                            )}
                        </Button>

                        <Check>
                            <p>
                                <input
                                    type="checkbox"
                                    name="check"
                                    value="senha"
                                />{' '}
                                Lembre-se de mim
                                <a href="">Precisa de ajuda?</a>
                            </p>
                        </Check>

                        <Facebook>
                            <a href="">
                                <p>
                                    <img
                                        class="icon-facebook"
                                        src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                                        height="20px"
                                    ></img>
                                    Conectar com Facebook
                                </p>
                            </a>
                        </Facebook>

                        <Novo>
                            <p>
                                Novo por aqui?
                                <a href=""> Assine agora.</a>
                            </p>
                        </Novo>

                        <Captcha>
                            <p>
                                Esta página é protegida pelo Google reCAPTCHA{' '}
                            </p>
                            <p>
                                para garantir que você não é um robô.
                                <a href=""> Saiba mais.</a>
                            </p>
                        </Captcha>
                    </Login>
                </Box>
            </body>
            <Footer>aqui fica meu footer</Footer>
        </Wrapper>
    );
}

export default SignIn;
