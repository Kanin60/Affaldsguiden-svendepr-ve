import style from './Footer.module.scss'
import logo from "../../assets/logo-white.svg";
import { FaCircleArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";


export const Footer = () => {

    return (
        <footer className={style.footer}>
            <ul>
                <li>
                    <img src={logo} alt="logo" />
                    <h3>Affaldsguiden</h3>
                </li>
                <li><p>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p></li>
                <li>
                    <p>©2023 Affaldsguiden. </p>
                    <a href='#top'>Tilbage til toppen <FaCircleArrowUp /></a>
                </li>
            </ul>
        </footer>
    )
}

