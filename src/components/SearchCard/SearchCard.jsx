import style from './SearchCard.module.scss'

export const SearchCard = ({ title, type }) => {

    return (
        <div>
            <h3>{title}</h3>
            <p>Se mere i {title} {type}</p>
        </div>
    )
}