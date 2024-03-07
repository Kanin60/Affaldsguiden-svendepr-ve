import { useFetch } from '../../hooks/useFetch'
import { ContainerType } from '../../components/ContainerForm/ContainerType'
import style from './TrashContainerPage.module.scss'
import { useEffect, useState } from 'react'
export function TrashContainerPage() {

    const [container, setContainer] = useState([])
    const [type, setType] = useState()
    let containerData = useFetch('http://localhost:4000/containers')

    useEffect(() => {
        setContainer(containerData)
    }, [])

    console.log('container', container)
    console.log('type', type)

    return (
        <section className={style.trashcontainerpage}>
            <div>
                <ContainerType
                    trin={'Trin 1'}
                    title={'Vælg type'}
                    text={'Når du vælger skraldebeholder, skal du overveje dine behov. Rest- og madaffaldsbeholdere er ideelle til almindeligt affald, mens pap- og papirbeholdere er velegnede til genanvendelse. Plastik- og metalbeholdere er til genbrugbart materiale, og farligt affald bør sorteres korrekt for sikker bortskaffelse.'}
                    containers={container}
                    value={'Videre'}
                    styling2={'brightness(70%)'}
                    setType={setType}
                />
            </div>
        </section>
    )
}