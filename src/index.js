import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import './i18n/i18nconfig'  
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
