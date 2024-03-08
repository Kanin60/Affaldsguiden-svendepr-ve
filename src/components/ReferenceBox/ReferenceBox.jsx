import { Button } from '../Button/Button'
import style from './ReferenceBox.module.scss'

export const ReferenceBox = () => {
    //Button tager imod text, onclick, bg, color, border properties
    return (
        <section className={style.referenceboxwrapper}>
            <div className={style.referencebox}>
                <p>Find og anmeld genbrugsstationer</p>
                <div>
                    <Button text='Find station' bg={'#114D46'} color={'#FFF'} border={'none'} path='/genbrugsstationer' />
                    <Button text='Log ind' bg={'#114D46'} color={'#FFF'} border={'none'} path='/' />
                </div>
            </div>
        </section>
    )
}