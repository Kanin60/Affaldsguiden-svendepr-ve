import style from './ContainerForm.module.scss'
import { useFetch } from '../../hooks/useFetch'

export const ContainerForm = () => {

    let containers = useFetch('http://localhost:4000/containers')

    console.log('Beholder: ', containers);

    return (
        <section className={style.containerformwrapper}>
            <div className={style.trin}>
                <div className={style.trinnum}>
                    <p>1</p>
                </div>
                <div className={style.trinnum}
                ><p>2</p>
                </div>
            </div>
            <form action="" className={style.containerform}>
                <p>Trin 1</p>
                <h2>Vælg type</h2>
                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                <div className={style.containerformimg}>
                    {
                        containers && containers?.data?.map((container) => {
                            return (
                                <figure key={container.id} className={style.figure}>
                                    <img src={`http://localhost:4000/Assets/Images/icons/${container?.icon_filename}`} alt={container?.name} />
                                    <input type="radio" name='type' required value={container.id} />
                                    <figcaption>{container?.name}</figcaption>
                                </figure>
                            )
                        })
                    }
                </div>
                <div className={style.containerformbutton}>
                    <input type="submit" value={'Videre'} />
                </div>
            </form>
        </section>
    )
}