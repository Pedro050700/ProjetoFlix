import React from 'react';

import history from '../../services/history';
import { toast } from 'react-toastify';
import { FiLogOut } from 'react-icons/all';

import {
    Wrapper,
    Header,
    Users,
    Names,
    Button,
    Add,
    User1,
    User2,
    User3,
    User4,
    UserAdd,
} from './styles';

import logo from '../../assets/images/logo.png';

function Dashboard() {
    const [profile, setProfile] = React.useState({ actualProfile: null });

    const profileNavigate = (event, user) => {
        event.preventDefault();

        if (user) {
            setProfile({ actualProfile: user });
            history.push(`/profile?user=${user}`);
        }
    };

    return (
        <>
            <Wrapper>
                <Header>
                    <img src={logo} />
                </Header>

                <h1>Quem está assistindo?</h1>

                <Users>
                    <User1 />
                    <User2 />
                    <User3 />
                    <User4 />
                    <UserAdd />
                </Users>

                <Names>
                    <article class="button">
                        <Button
                            onClick={(event) => {
                                profileNavigate(event, 'pedro');
                            }}
                        ></Button>
                    </article>
                    <article class="item">User2</article>
                    <article class="item">Batman</article>
                    <article class="item">Joker</article>
                    <Add>Adicionar Perfil</Add>
                </Names>

                <Button>
                
                    <span>GERENCIAR PERFIS</span>

                </Button>
            </Wrapper>
        </>
    );
}

export default Dashboard;
