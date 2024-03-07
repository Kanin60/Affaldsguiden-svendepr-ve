
import { ContainerForm } from '../../components/ContainerForm/ContainerForm'
import style from './TrashContainerPage.module.scss'
export function TrashContainerPage() {


    return (
        <section className={style.trashcontainerpage}>
            <div>
                <ContainerForm />
            </div>
        </section>
    )
}