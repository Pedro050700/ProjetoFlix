import React from 'react';
import { Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './config/ReactotronConfig';
import history from './services/history';
import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
    return (
        <Router history={history}>
            <GlobalStyle />
            <Routes />
            <ToastContainer
                autoClose={3000}
                position="top-right"
                className="toast-container"
                toastClassName="dark-toast"
            />
        </Router>
    );
}

export default App;
