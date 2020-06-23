import React from 'react';

 import { Wrapper } from './styles';

 import { toast } from 'react-toastify';
 import api from '../../services/api';
 import history from '../../services/history';


function Registration() {
 const user = history.location;
 const [loading, setLoading] = React.useState(false);


 const createNewUser =  async (event) => {

   try {
    setLoading(true);

    const { data } = await api.post('/usuario',  user);

    toast.success('Usuário cadastrado com sucesso.') 

    const parsedJson = JSON.stringify(data);
    localStorage.setItem('userProfile', parsedJson);

    setLoading(false);

    history.push('/');
    

   } catch (err) {
          toast.error('Erro ao cadastrar usuário');
        return;
   }
 }



  return (

    <Wrapper>
        
    <input type="text" id="email" name="email" value="" />
    <input type="password" id="password" name="password" value="" />
    <button onClick={(event) => {createNewUser(event)}}>Cadastrar</button>
   


    </Wrapper>


  )
}

export default Registration;