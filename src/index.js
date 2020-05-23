import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';

const rootElement = document.getElementById('app');

const renderApp = (Component) => {
    ReactDOM.render(
        <Component />,
        rootElement,
    );
}

renderApp(App);
