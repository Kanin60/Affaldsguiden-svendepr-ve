import style from './Button.module.scss'
import { Link } from 'react-router-dom'

export const Button = ({ text, svg, onclick, bg, color, border, path }) => {

    return (
        <button className={style.button} /* onclick={onclick} */ style={{ backgroundColor: bg, border: border }}><Link to={path} style={{ color: color }}>{svg} {text}</Link></button>
    )
}