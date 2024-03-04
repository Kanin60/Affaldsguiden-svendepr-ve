import { Button } from '../Button/Button'
import style from './Article.module.scss'

export const Article = ({ title, text, buttonText, buttonText2, buttonbg, buttonbg2, buttoncolor, buttoncolor2, buttonborder, buttonborder2, imgSrc, imgSrc2, path, path2 }) => {

    return (
        <article className={style.article}>
            {imgSrc2 &&
                <img src={imgSrc2} alt={title} />
            }
            <div className={style.textwrapper}>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={style.buttonwrapper}>
                    <Button text={buttonText} bg={buttonbg} color={buttoncolor} border={buttonborder} path={path} />
                    {buttonText2 &&
                        <Button text={buttonText2} bg={buttonbg2} color={buttoncolor2} border={buttonborder2} path={path2} />
                    }
                </div>
            </div>
            {imgSrc &&
                <img src={imgSrc} alt={title} />
            }
        </article>
    )
}