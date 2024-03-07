import style from './SortingCard.module.scss'

export const SortingCard = ({ ImgSrc, title, bgcolor }) => {

    return (
        <div className={style.sortingcard}>
            <img src={ImgSrc} alt={title} />
            <p style={{ backgroundColor: bgcolor }}>{title}</p>
        </div>
    )
}