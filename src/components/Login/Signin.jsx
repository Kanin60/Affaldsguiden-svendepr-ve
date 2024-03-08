
import { useContext, useState } from 'react';
import { UserContext } from "../../context/UserContext";
import style from './Login.module.scss'

// koden er fra https://github.com/Kanin60/Det-utrolige-teater/blob/main/src/components/Login/Login.jsx
export const Signin = ({ closeModal }) => {
    //state fra context som bliver opdateret
    const { setUserData, userData } = useContext(UserContext);
    const [message, setMessage] = useState("Indtast login oplysninger");

    //Her fetcher jeg med metoden POST til login
    function handleLogin(e) {
        e.preventDefault()

        if (e.target.username.value === "") {
            setMessage("Venligst indtast dit brugernavn");
            return;
        }

        if (e.target.password.value === "") {
            setMessage("Venligst indtast dit password");
            return;
        }

        let url = 'http://localhost:4000/login'

        /* Body er inholdet af det vi sender til serveren/ request's body som sendes til serveren */
        let body = new URLSearchParams()
        body.append('username', e.target.username.value)
        body.append('password', e.target.password.value)

        let options = {
            method: 'POST',
            body: body,
        }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                console.log('data:', data);
                if (data?.access_token) {
                    setUserData(data);
                    setMessage(`Du er nu logget ind som `);
                } else {
                    setMessage("Der opstod en fejl - prøv igen");
                }
            })
            .catch((err) => console.error(err))
    }

    console.log('User: ', userData);

    //Retunere login
    return (
        <>
            {
                userData &&
                    userData ? <p className={style.user}>Velkommen {userData?.user?.firstname} {userData?.user?.lastname}</p>
                    :
                    <form className={style.form} onSubmit={(e) => handleLogin(e)}>
                        <h2>Log ind</h2>
                        {message && <p>{message}</p>}
                        <div>
                            <label>
                                <input type='email' name='username' placeholder='Email' />
                            </label>
                            <label>
                                <input type='password' name='password' placeholder='Password' />
                            </label>
                            <div className={style.buttoncontainer}>
                                <input value='Log ind' type='submit' />
                            </div>
                        </div>
                    </form>
            }
        </>
    )
}

