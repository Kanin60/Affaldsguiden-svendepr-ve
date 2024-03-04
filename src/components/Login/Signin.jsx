
    import style from './Login.module.scss'

    export const Signin = () => {
        //state fra context som bliver opdateret
        const { setUserData, userData } = useContext(UserContext);

        //Her fetcher jeg med metoden POST til login
        function handleLogin(e) {
            e.preventDefault()

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
                .then((data) => setUserData(data))
                .catch((err) => console.error(err))
        }

        console.log('User: ', userData);

        //Retunere login
        return (
            <>
                <form className={style.form} onSubmit={(e) => handleLogin(e)}>
                    <h2>Login</h2>
                    <label>
                        <input type='email' name='username' placeholder='Write your email here' />
                    </label>
                    <label>
                        <input type='password' name='password' placeholder='********' />
                    </label>
                    <input value='Login' type='submit' />
                </form>
            </>
        )
    }

