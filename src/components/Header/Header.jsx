import style from './Header.module.scss'
import { Nav } from "../Nav/Nav";

export const Header = () => {

    return (
        <header className={style.header}>
            <Nav />
        </header>
    )
}

