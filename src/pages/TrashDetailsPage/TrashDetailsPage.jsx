import { Accordion } from "../../components/Accordion/Accordion";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import style from './TrashDetailsPage.module.scss'

export function TrashDetailsPage() {
    //https://github.com/Kanin60/Det-utrolige-teater/blob/main/src/pages/DetailsPage/DetailsActorPage.jsx
    const { id } = useParams()
    const [sectionDetails, setSectionDetails] = useState()

    useEffect(() => {
        const url = `http://localhost:4000/section/${id}`
        fetch(url).then(res => res.json()).then(data => setSectionDetails(data))
    }, [])

    return (
        <>
            {sectionDetails &&
                <div className={style.trashdetailspage}>
                    <div className={style.trashdetailspagewrapper} style={{ backgroundColor: '#' + sectionDetails?.color }}>
                        <h2>{sectionDetails.title}</h2>
                        <img src={`http://localhost:4000/Assets/Images/Guide/Categories/${sectionDetails.filename}`} alt="" />
                    </div>
                    {
                        sectionDetails?.categories?.map((category) => {
                            return (
                                <Accordion key={category.id} title={category.title} imgSrc={`http://localhost:4000/Assets/Images/Guide/Icons/${category.icon_filename}`}>
                                    <p>Dette er en Accordion med children.</p>
                                </Accordion>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

