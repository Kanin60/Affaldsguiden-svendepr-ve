import { Accordion } from "../../components/Accordion/Accordion";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import style from './TrashDetailsPage.module.scss'
import { useFetch } from "../../hooks/useFetch";

export function TrashDetailsPage() {
    //https://github.com/Kanin60/Det-utrolige-teater/blob/main/src/pages/DetailsPage/DetailsActorPage.jsx
    const { id } = useParams()
    const [sectionDetails, setSectionDetails] = useState()
    const [categoryDetails, setCategoryDetails] = useState()


    useEffect(() => {
        const url = `http://localhost:4000/section/${id}`
        fetch(url).then(res => res.json()).then(data => setSectionDetails(data))
    }, [])

    useEffect(() => {
        const url = `http://localhost:4000/category/details/${sectionDetails?.id}`
        fetch(url).then(res => res.json()).then(data => setCategoryDetails(data))
    }, [sectionDetails])


    console.log('category:', categoryDetails);

    return (
        <section className={style.bg}>
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
                                    <div className={style.receive}>
                                        <h3>Hvad modtager vi?</h3>
                                        <div className={style.wrapper}>
                                            {categoryDetails && categoryDetails.types.filter((data) => data.rules.is_allowed === true).map((type, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p>{type?.title}</p>
                                                        <p>Ja, tak</p>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className={style.noreceive}>
                                        <h3>Hvad modtager vi ikke?</h3>
                                        <div className={style.wrapper}>
                                            {categoryDetails && categoryDetails.types.filter((data) => data.rules.is_allowed === false).map((type) => {
                                                return (
                                                    <div>
                                                        <p>{type?.title}</p>
                                                        <p>Nej, tak</p>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </Accordion>
                            )
                        })
                    }
                </div>
            }
        </section>
    )
}

