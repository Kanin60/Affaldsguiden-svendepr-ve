import { useFetch } from '../../hooks/useFetch'
import { ContainerForm } from '../../components/ContainerForm/ContainerForm'
import style from './TrashContainerPageStepTwo.module.scss'
import { useEffect, useState } from 'react'
export function TrashContainerPageStepTwo() {

    const [container, setContainer] = useState([])
    const [type, setType] = useState()
    let containerData = useFetch('http://localhost:4000/containers')

    useEffect(() => {
        setContainer(containerData)
    }, [])

    console.log('container data:', containerData);
    return (
        <section className={style.trashcontainerpage}>
            <p>TrashContainerPageStepTwo</p>
            <div>
                <ContainerForm
                    trin={'Trin 1'}
                    title={'Vælg type'}
                    text={'Når du vælger skraldebeholder, skal du overveje dine behov. Rest- og madaffaldsbeholdere er ideelle til almindeligt affald, mens pap- og papirbeholdere er velegnede til genanvendelse. Plastik- og metalbeholdere er til genbrugbart materiale, og farligt affald bør sorteres korrekt for sikker bortskaffelse.'}
                    containers={container}
                    value={'Videre'}
                    styling2={'brightness(70%)'}
                />
            </div>
        </section>
    )
}