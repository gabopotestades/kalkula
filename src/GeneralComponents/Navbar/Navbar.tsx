
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div className="navbar">

            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link className="nav-link" to="/finite-state-machines">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-polygon" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                        <span className="link-text logo-text">Finite State Machines</span>
                    </Link>       
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/finite-state-transducers">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-percentage" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx={17} cy={17} r={1}></circle>
                        <circle cx={7} cy={7} r={1}></circle>
                        <line x1={6} y1={18} x2={18} y2={6}></line>
                        </svg>
                        <span className="link-text logo-text">Finite State Transducers</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/pushdown-automata">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-parentheses" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 4a12.25 12.25 0 0 0 0 16"></path>
                        <path d="M17 4a12.25 12.25 0 0 1 0 16"></path>
                        </svg>
                        <span className="link-text logo-text">Pushdown Automata</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/turing-machines">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-artboard" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                    <Link className="nav-link" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alien" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11 17a2.5 2.5 0 0 0 2 0"></path>
                    <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z"></path>
                    <line x1="8" y1="11" x2="10" y2="13"></line>
                    <line x1="16" y1="11" x2="14" y2="13"></line>
                    </svg>
                    <span className="link-text logo-text">Home</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Navbar