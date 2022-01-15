import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes"
import { GlobalStyles } from "./styles/style"


ReactDOM.render(
    <React.StrictMode>

        <ThemeProvider theme={darkTheme} >
            <GlobalStyles />
            <App />
        </ThemeProvider>

    </React.StrictMode>,
    document.getElementById('root')
);

