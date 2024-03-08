import { useState } from 'react';
import style from './ContainerForm.module.scss'

export const ContainerForm = ({ trin, title, text, styling2, styling, container_id }) => {
    const [message, setMessage] = useState("Indtast login oplysninger");
    const [orderSend, setOrderSend] = useState(false)

    function handleOrder(e) {
        e.preventDefault()

        if (e.target.name.value === "") {
            setMessage("Venligst indtast dit navn");
            return;
        }

        if (e.target.email.value === "") {
            setMessage("Venligst indtast din email");
            return;
        }

        if (e.target.phone.value === "") {
            setMessage("Venligst indtast dit telefonnummer");
            return;
        }

        if (e.target.address.value === "") {
            setMessage("Venligst indtast din addresse");
            return;
        }

        let url = 'http://localhost:4000/orders'

        /* Body er inholdet af det vi sender til serveren/ request's body som sendes til serveren */
        let body = new URLSearchParams()
        body.append('fullname', e.target.name.value)
        body.append('address', e.target.address.value)
        body.append('zipcode', e.target.zipcode.value)
        body.append('city', e.target.city.value)
        body.append('email', e.target.email.value)
        body.append('phone', e.target.phone.value)
        body.append('container_id', container_id)


        let options = {
            method: 'POST',
            body: body,
        }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                console.log('data:', data);
                if (data?.message === 'Record created') {
                    setMessage(`Bestilling modtaget`);
                    // setOrderSend(true)
                } else {
                    setMessage("Der opstod en fejl - prøv igen");
                }
            })
            .catch((err) => console.error(err))
    }

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
            <div className={style.containerform2}>
                <p>{trin}</p>
                <h2>{title}</h2>
                <p>{text}</p>
                <form className={style.form} onSubmit={(e) => handleOrder(e)}>
                    {message && <p>{message}</p>}
                    <div>
                        <label>
                            <input type='text' name='name' placeholder='Navn' />
                        </label>
                        <label>
                            <input type='text' name='address' placeholder='Vej' />
                        </label>
                        <label>
                            <input type='text' name='zipcode' placeholder='Postnummer' />
                        </label>
                        <label>
                            <input type='text' name='city' placeholder='By' />
                        </label>
                        <label>
                            <input type='email' name='email' placeholder='Email' />
                        </label>
                        <label>
                            <input type='number' name='phone' placeholder='Telefon' />
                        </label>
                        <div className={style.buttoncontainer}>
                            <input value='Send' type='submit' />
                        </div>
                    </div>
                </form>
            </div>
        </section >
    )
}