import { Article } from "../../components/Article/Article";
import { ReferenceBox } from "../../components/ReferenceBox/ReferenceBox";
import { Slider } from "../../components/Slider/Slider";
import trash from '../../assets/din-guide-til-sortering.webp'
import trashcan from '../../assets/bestil-din-nye-affaldsbeholder.webp'

export function HomePage() {

    //returner Slider, ReferenceBox og to fjollede Articler
    return (
        <section>
            <Slider />
            <ReferenceBox />
            <Article
                title='Din guide til sortering'
                text='Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.'
                buttonText='Se affaldsguide'
                buttonText2='Bestil storskrald'
                buttonbg='#114D46'
                buttoncolor='#FFF'
                buttonborder='none'
                buttonbg2='#FFF'
                buttoncolor2='#6DA830'
                buttonborder2='1px solid #6DA830'
                path='/sortering'
                path2='/bestil-beholder'
                imgSrc={trash}
            />
            <Article
                title='Bestil din nye affaldsbeholder'
                text='when an unknown printer took a galley of type and scramble it to make a type specimen book. It has survived not only.'
                buttonText='Bestil nu'
                buttonbg='#114D46'
                buttoncolor='#FFF'
                buttonborder='none'
                path='/bestil-beholder'
                imgSrc2={trashcan}
            />
        </section>
    )
}

