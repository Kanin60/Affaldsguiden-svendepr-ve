
import style from './Nav.module.scss'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Modal } from '../Modal/Modal';
import { Signin } from "../Login/Signin";

export const Nav = () => {

    //styling ved active link
    const activeStyle = ({ isActive, isPending }) => {
        return {
            color: isActive ? '#6DA830' : '',
            borderTop: isActive ? '1px solid #6DA830' : ''
        }
    }

    //retunere navigationsbar
    return (
        <nav className={style.nav} id='top'>
            <figure>
                <img src={logo} alt='logo' />
                <h1>Affaldsguiden</h1>
            </figure>
            <ul>
                <li>
                    <NavLink to='/' style={activeStyle}>Forside</NavLink>
                </li>
                <li>
                    <NavLink to='/sortering' style={activeStyle}>Sortering</NavLink>
                </li>
                <li>
                    <NavLink to='/genbrugsstationer' style={activeStyle}>Genbrugsstationer</NavLink>
                </li>
                <li>
                    <NavLink to='/bestil-beholder' style={activeStyle}>Bestil beholder</NavLink>
                </li>
            </ul>
            <Modal>
                <div>
                    <figure>
                        <img src={logo} alt='logo' />
                        <h1>Affaldsguiden</h1>
                    </figure>
                    <p>Log ind på Affaldsguiden <br /> for at anmelde stationer</p>
                </div>
                <Signin />
            </Modal>
        </nav>
    )
}

