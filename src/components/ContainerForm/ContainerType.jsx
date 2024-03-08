import style from './ContainerForm.module.scss'
import { Link } from "react-router-dom";


export const ContainerType = ({ trin, title, text, containers, value, styling, styling2, setContainer_id, setChosenType }) => {

    console.log('Beholder: ', containers);
    console.log(containers);

    return (
        <section className={style.containerformwrapper}>
            <div className={style.trin}>
                <div className={style.trinnum} style={{ filter: styling }}>
                    <p>1</p>
                </div>
                <div className={style.trinnum} style={{ filter: styling2 }}>
                    <p>2</p>
                </div>
            </div>
            <div className={style.containerform}>
                <p>{trin}</p>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className={style.containerformimg}>
                    {
                        !!containers.length && containers?.map((container) => {
                            // console.log("url: " + `http://localhost:4000/Assets/Images/Icons/${container?.icon_filename}`);

                            return (
                                <figure key={container.id} className={style.figure}>
                                    <img src={`http://localhost:4000/Assets/Images/Icons/${container?.icon_filename}`} alt={container?.name} />
                                    <input type="radio" name='type' required value={container.id} onClick={() => setContainer_id(container.id)} />
                                    <figcaption>{container?.name}</figcaption>
                                </figure>
                            )
                        })
                    }
                </div>
                <Link className={style.containerformbutton} onClick={() => setChosenType(true)}>
                    {value}
                </Link>
            </div>
        </section >
    )
}