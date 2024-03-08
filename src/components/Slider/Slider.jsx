import { useState } from 'react';
import style from './Slider.module.scss'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import skov from '../../assets/Slideshow/affald-skov-1.jpg'
import strand from '../../assets/Slideshow/affald-strand-2.jpg'
import spande from '../../assets/Slideshow/malerspande.jpg'


export const Slider = () => {

    //importere billederne og gemmer dem i et array. 
    //To funktioner som incrementer (lægger 1 til) og decrementer (minuser med 1) 
    //alt efter hviklet icon der bliver trykket på.
    const sliderArray = [
        skov,
        strand,
        spande
    ]

    const [sliderIndex, setSliderIndex] = useState(0)
    const totalSlides = sliderArray?.length;

    function increment() {
        setSliderIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }
    function decrement() {
        setSliderIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    }

    return (
        <>
            <div className={style.slider}>
                <img src={sliderArray[sliderIndex]} alt={sliderArray[sliderIndex]} />
                <FaRegArrowAltCircleRight className={style.next} onClick={increment} alt='next' />
                <FaRegArrowAltCircleLeft className={style.previous} onClick={decrement} alt='previous' />
            </div>
        </>
    )
}