import React, { useEffect } from 'react';
import { resolve, join } from 'path';
import { AiTwotoneHome } from 'react-icons/all';

import DropdownWrapper from '../../components/Dropdown';

import { toast } from 'react-toastify';
import api from '../../services/api';

import {
    Wrapper,
    Header,
    Nav,
    Item,
    Others,
    Search,
    Text,
    Box,
    Bell,
    Fotos,
    NetflixLogo,
} from './styles';

import logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.png';
import box from '../../assets/images/gift-box.png';
import notification from '../../assets/images/notification.png';

function Profile(props) {
    const [profileInfo, setProfileInfo] = React.useState({
        id: '',
        username: '',
        picture: '',
    });

    useEffect(() => {
        const [_, user] = props.location.search.split('=');

        async function getProfileInfos() {
            try {
                const { data } = await api.get(`/profiles?username=${user}`);

                const [profile] = data;

                setProfileInfo({
                    id: profile.id,
                    username: profile.username,
                    picture: '',
                });
            } catch (err) {
                toast.error('Erro ao consultar o perfil');
            }
        }

        getProfileInfos();
    }, []);

    return (
        <Wrapper>
            <Header>
                <img src={logo} />
                <Nav>
                    <Item>Início</Item>
                    <Item>Séries</Item>
                    <Item>Filmes</Item>
                    <Item>Mais Recentes</Item>
                    <Item>Minha Lista</Item>
                </Nav>
                <Others>
                    <Search>
                        <img src={search} />
                    </Search>
                    <Text>
                        <p>INFANTIL</p>
                    </Text>
                    <Box>
                        <img src={box} />
                    </Box>
                    <Bell>
                        <img src={notification} />
                    </Bell>

                    <DropdownWrapper />
                </Others>
            </Header>
        </Wrapper>
    );
}

export default Profile;

// const signOut = () => {
//     localStorage.removeItem('userProfile');
//     history.push('/');

//     toast.success('Usuário deslogado com sucesso');
// };

//         <Button
//             onClick={(event) => {
//                 signOut(event);
//             }}
//         >
//             <FiLogOut color="#8159ca" size="34px" />
//         </Button>

// <script
// crossorigin
// src="https://bootswatch.com/4/lux/bootstrap.min.css"
// ></script>
