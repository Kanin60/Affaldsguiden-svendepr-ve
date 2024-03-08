import style from './ReviewCard.module.scss'
import { FaUser } from "react-icons/fa";
import { dateconverter } from "../../helpers/dateconverter";
import { starconverter } from '../../helpers/starconverter';

export const ReviewCard = ({ username, date, title, stars, text }) => {
    //card forkorter antal tegn
    let newDate = dateconverter(date)
    let star = starconverter(stars)

    return (
        <div className={style.reviewcard}>
            <div className={style.reviewcardwrapper}>
                <FaUser />
                <div className={style.reviewcontent}>
                    <div className={style.reviewcardtitle}>
                        <h3>{username}</h3>
                        <p>{newDate}</p>
                    </div>
                    <div className={style.review}>
                        <h4>{title.substring(0, 25)}...</h4>
                        <p>{text.substring(0, 100)}...</p>
                        <p>{star}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}