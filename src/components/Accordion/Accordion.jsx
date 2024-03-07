import { useState } from 'react';
import style from './Accordion.module.scss'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export const Accordion = ({ title, imgSrc, color, children }) => {
    //https://github.com/Eon4/CodeChallenge/blob/main/code/src/Components/Accordion/Accordion.jsx
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <section className={style.accordion}>
            <div className={style.accordiontitle}>
                <img src={imgSrc} alt={title} />
                <h3>{title}</h3>
            </div>
            <div className={style.accordionarrow}>{isOpen ? <IoIosArrowDropupCircle onClick={toggle} /> : <IoIosArrowDropdownCircle onClick={toggle} />}</div>
            {isOpen &&
                <article className={`${style.accContent} ${style.open}`}>
                    {children}
                </article>
            }
        </section>
    )
}