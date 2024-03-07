import style from './RecyclingCenterPage.module.scss'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import map from '../../assets/map.svg'
import { Link } from 'react-router-dom'

export function RecyclingCenterPage() {
    const [averageStar, setAverageStar] = useState()
    const [recyclingCenterList, setRecyclingCenterList] = useState()
    let recyclingCenterArray = useFetch('http://localhost:4000/orgs?attributes=id,name,address,zipcode,city')

    useEffect(() => {
        setRecyclingCenterList(recyclingCenterArray.data)
    }, [recyclingCenterArray])

    console.log(recyclingCenterList);
    console.log('Gennemsnit af stjerner: ', averageStar);
    return (
        <section className={style.bg}>
            <div className={style.recyclingcenterpage}>
                {recyclingCenterList && recyclingCenterList.map((center) => {
                    return (
                        <Link to={`/genbrugsstationer/${center.id}`}>
                            <figure key={center.id} style={{ backgroundColor: center.color }}>
                                <img src={map} alt={center.name} />
                                <figcaption>
                                    <h3>{center.name}</h3>
                                    <p>{center.address}</p>
                                    <p>{center.zipcode} {center.city}</p>
                                </figcaption>
                            </figure>

                        </Link>
                    )
                })}
            </div>
        </section>
    )
}