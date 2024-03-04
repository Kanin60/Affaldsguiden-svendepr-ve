
    import { useState } from 'react';
import style from './Login.module.scss'

export const Signup = () => {

    const [signupData, setSignupData] = useState()

    //Her fetcher jeg med metoden POST til signup(users)
    function handleSignup(e) {
        e.preventDefault()

        let url = 'http://localhost:4000/users'

        let body = new URLSearchParams()
        body.append('firstname', e.target.firstname.value)
        body.append('lastname', e.target.lastname.value)
        body.append('email', e.target.email.value)
        body.append('password', e.target.password.value)
        body.append('is_active', 1)
        body.append('org_id', 1)
        body.append('refresh_token', 1234)

        let options = {
            method: 'POST',
            body: body
        }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => setSignupData(data))
            .catch((err) => console.log(err));
    }
    console.log('USERDATA FRA SIGN UP:', signupData);

    //retunere en sigup form
    return (
        <>
            <form className={style.form} onSubmit={(e) => handleSignup(e)}>
                <h2>Sign Up Here</h2>
                <label>Fornavn:
                    <input name='firstname' type='text' placeholder='Skriv dit fornavn her' />
                </label>

                <label>Efternavn:
                    <input name='lastname' type='text' placeholder='Skriv dit efternavn her' />
                </label>

                <label>Email:
                    <input name='email' type='email' placeholder='Write your email here' />
                </label>

                <label>Password:
                    <input name='password' type='password' placeholder='********' />
                </label>

                <input value='Sign up' type='submit' />
            </form>
        </>
    )
}

