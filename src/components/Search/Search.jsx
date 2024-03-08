import style from './Search.module.scss'
import { IoSearchOutline } from "react-icons/io5";

export const Search = ({ setSearch }) => {
    //updatere staten Search
    return (
        <search className={style.search}>
            <form>
                <label htmlFor="search">
                    <input
                        type="search"
                        name='search'
                        placeholder={'søg på affald'}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <IoSearchOutline />
                </label>
            </form>
        </search>
    )
}