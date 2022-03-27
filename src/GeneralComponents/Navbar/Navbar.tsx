
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Switch, FormControlLabel, createTheme, ThemeProvider} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { THEME_DARK_CAPTION, THEME_LIGHT_CAPTION } from '../../Constants/settingsConstants';

function Navbar () {

    const [currentTheme, setTheme] = useState<string>(THEME_DARK_CAPTION);
    const [themeText, setThemeText] = useState<string>('');

    const themeSettings = createTheme({
        typography: {
          fontFamily: [
            'Inconsolata',
          ].join(','),
          fontSize: 12
        }
      });
    
    useEffect(() => {
         
        const cachedTheme = localStorage.getItem('kalkula-theme');

        if (cachedTheme && cachedTheme === THEME_LIGHT_CAPTION) {
            changeTheme(false);
            
        } 

    }, [])

    useEffect(() => {
         
        if (currentTheme === THEME_DARK_CAPTION) {
            document.body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('kalkula-theme', THEME_DARK_CAPTION)
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('kalkula-theme', THEME_LIGHT_CAPTION)
        }

    }, [currentTheme])

    function changeTheme(isClicked:boolean) {
        setTheme(currentTheme === THEME_DARK_CAPTION ? THEME_LIGHT_CAPTION : THEME_DARK_CAPTION);

        if (isClicked) // Change label only if clicked in UI 
            setThemeText(currentTheme === THEME_DARK_CAPTION ? THEME_LIGHT_CAPTION : THEME_DARK_CAPTION);  
        
    }

    return (
        <div className="navbar">

            <ul className="navbar-nav" onMouseEnter={() => {setThemeText(currentTheme)}} onMouseLeave={() => {setThemeText('')}}>

                <li className="nav-item">
                    <Link className="nav-link" to="/finite-state-acceptors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-polygon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx={12} cy={5} r={2}></circle>
                            <circle cx={19} cy={8} r={2}></circle>
                            <circle cx={5} cy={11} r={2}></circle>
                            <circle cx={15} cy={19} r={2}></circle>
                            <path d="M6.5 9.5l3.5 -3"></path>
                            <path d="M14 5.5l3 1.5"></path>
                            <path d="M18.5 10l-2.5 7"></path>
                            <path d="M13.5 17.5l-7 -5"></path>
                        </svg>
                        <span className="link-text logo-text">Finite State Acceptors</span>
                    </Link>       
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/finite-state-transducers">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-a-b" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"></path>
                        <line x1={12} y1={6} x2={12} y2={18}></line>
                        <path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3"></path>
                    </svg>
                        <span className="link-text logo-text">Finite State Transducers</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/pushdown-automata">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack-3" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 2l-8 4l8 4l8 -4l-8 -4"></path>
                            <path d="M4 10l8 4l8 -4"></path>
                            <path d="M4 18l8 4l8 -4"></path>
                            <path d="M4 14l8 4l8 -4"></path>
                        </svg>
                        <span className="link-text logo-text">Pushdown Automata</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/turing-machines">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-artboard" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x={8} y={8} width={8} height={8} rx={1}></rect>
                            <line x1={3} y1={8} x2={4} y2={8}></line>
                            <line x1={3} y1={16} x2={4} y2={16}></line>
                            <line x1={8} y1={3} x2={8} y2={4}></line>
                            <line x1={16} y1={3} x2={16} y2={4}></line>
                            <line x1={20} y1={8} x2={21} y2={8}></line>
                            <line x1={20} y1={16} x2={21} y2={16}></line>
                            <line x1={8} y1={20} x2={8} y2={21}></line>
                            <line x1={16} y1={20} x2={16} y2={21}></line>
                        </svg>
                        <span className="link-text logo-text">Turing Machines</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <div className="nav-link">
                        <ThemeProvider theme={themeSettings}>
                            <FormControlLabel className="nav-frm-control-label" label={themeText} 
                              control={<Switch  className="nav-switch" color="default" 
                                        checked={currentTheme === THEME_LIGHT_CAPTION} onChange={() => {changeTheme(true)}}/>}/>
                        </ThemeProvider>
                    </div>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <rect x="10" y="12" width="4" height="4"></rect>
                        </svg>
                        <span className="link-text logo-text">Home</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Navbar