import style from './Waves.module.scss'
import wave1 from '../../assets/waves/wave1.svg'
import wave2 from '../../assets/waves/wave2.svg'
import wave3 from '../../assets/waves/wave3.svg'
import wave4 from '../../assets/waves/wave4.svg'
import wave5 from '../../assets/waves/wave5.svg'
import wave6 from '../../assets/waves/wave6.svg'
import wave7 from '../../assets/waves/wave7.svg'
import wave8 from '../../assets/waves/wave8.svg'
import { useEffect, useState } from 'react'

export const Waves = () => {

    const wave = [wave1, wave2, wave3, wave4, wave5, wave6, wave7, wave8]
    const [waveId, setWaveId] = useState(0);

    // randome waveId hvert 3 sekund 
    useEffect(() => {
        const randomId = setInterval(() => {
            setWaveId(Math.floor(Math.random() * 7))
        }, 3000);
        return () => clearInterval(randomId);
    }, [waveId])

    return (
        <figure className={style.waveswrapper}>
            <img src={wave[waveId]} alt="grafik" />
        </figure>
    )
}