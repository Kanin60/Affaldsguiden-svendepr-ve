import { useFetch } from '../../hooks/useFetch'
import { ContainerType } from '../../components/ContainerForm/ContainerType'
import { ContainerForm } from '../../components/ContainerForm/ContainerForm'
import style from './TrashContainerPage.module.scss'
import { useEffect, useState } from 'react'
export function TrashContainerPage() {

    const [container, setContainer] = useState([])
    const [container_id, setContainer_id] = useState()
    const [chosenType, setChosenType] = useState(false)

    let { data } = useFetch('http://localhost:4000/containers')


    useEffect(() => {
        setContainer(data)
    }, [data > 0])

    console.log('container', container)
    console.log('type', container_id)
    console.log('chosenType', chosenType)

    return (
        <section className={style.trashcontainerpage}>
            <div>
                {chosenType === false && data && (
                    <ContainerType
                        trin={'Trin 1'}
                        title={'Vælg type'}
                        text={'Når du vælger skraldebeholder, skal du overveje dine behov. Rest- og madaffaldsbeholdere er ideelle til almindeligt affald, mens pap- og papirbeholdere er velegnede til genanvendelse. Plastik- og metalbeholdere er til genbrugbart materiale, og farligt affald bør sorteres korrekt for sikker bortskaffelse.'}
                        containers={data}
                        value={'Videre'}
                        styling2={'brightness(70%)'}
                        setContainer_id={setContainer_id}
                        setChosenType={setChosenType}
                    />)}
                {chosenType === true && <ContainerForm
                    trin={'Trin 2'}
                    title={'Hvor skal den leveres?'}
                    text={'Det er vigtigt at levere skraldebeholdere til egnede steder. Kommunale genbrugscentre og affaldsstationer er ofte dedikerede steder til korrekt bortskaffelse af affald. Sørg for at følge lokale forskrifter og instruktioner for at sikre, at affaldet bortskaffes på miljøvenlig vis og overholder lovgivningen.'}
                    styling={'brightness(70%)'}
                    container_id={container_id}
                />}
            </div>
        </section>
    )
}