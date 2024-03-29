import { useEffect, useState, useContext } from 'react';
import style from './RecyclingDetailsPage.module.scss';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import map from '../../assets/map.svg'
import { FiMessageSquare } from "react-icons/fi";
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { starconverter } from '../../helpers/starconverter';
import { UserContext } from "../../context/UserContext";

export function RecyclingDetailsPage() {

    const [recyclingCenterDetails, setRecyclingCenterDetails] = useState()
    const [review, setReview] = useState()
    const { id } = useParams()
    const [star, setStar] = useState(null)
    const [coloredStar, setColoredStar] = useState()
    const [message, setMessage] = useState("");
    const { setUserData, userData } = useContext(UserContext); //Usercontext til at checke login

    //fetcher data og gemmer i state
    let recyclingCenterDetailsArray = useFetch(`http://localhost:4000/orgs/${id}`)
    let recyclingCenterDetailsList = recyclingCenterDetailsArray?.data
    let reviewArray = useFetch(`http://localhost:4000/reviews/${id}`)

    useEffect(() => {
        setRecyclingCenterDetails(recyclingCenterDetailsList)
        setReview(reviewArray?.data)
    }, [recyclingCenterDetailsList, reviewArray, handleReview])

    // fetcher med POST
    function handleReview(e) {
        e.preventDefault()

        let url = 'http://localhost:4000/reviews'

        //appender på body
        let body = new URLSearchParams()
        body.append('org_id', id)
        body.append('subject', e.target.subject.value)
        body.append('comment', e.target.comment.value)
        body.append('num_stars', star)
        body.append('date', new Date())

        //bruger authorization fra context (user access_token)
        let options = {
            method: 'POST',
            body: body,
            headers: { Authorization: `Bearer ${userData.access_token}` }
        }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'Record created') {
                    setMessage(`Kommentar modtaget`);
                } else {
                    setMessage("Der opstod en fejl - prøv igen");
                }
            })
            .catch((err) => console.error(err))
    }
    //helper funktion til at konvertere stjerner
    let convetedStar = starconverter(star)
    useEffect(() => {
        setColoredStar(convetedStar)
    }, [star])

    // console.log("convetedStar: ", convetedStar);
    // console.log('antal star: ', star);
    // console.log('coloredStar: ', coloredStar);

    //retunere figur, form og cards med anmeldelser
    return (
        <div className={style.bg}>
            <section className={style.recyclingdetailspage}>
                {recyclingCenterDetails &&
                    <>
                        <figure>
                            <img src={map} alt={recyclingCenterDetails?.name} />
                            <figcaption>
                                <h2>{recyclingCenterDetails?.name}</h2>
                                <p>★★★★☆</p>
                                <p>{recyclingCenterDetails?.address}</p>
                                <p>{recyclingCenterDetails?.zipcode} {recyclingCenterDetails?.city}</p>
                                <p>{recyclingCenterDetails?.country}</p>
                            </figcaption>
                        </figure>
                        <div>
                            <form onSubmit={(e) => handleReview(e)} className={style.reviewform}>
                                <div className={style.reviewformtitle}>
                                    {!userData ? <h3>Du skal være logget ind for at skrive en kommentar</h3> : <h3>Skriv en kommentar</h3>}
                                    {message && <p>{message}</p>}
                                    {star == null
                                        ?
                                        <div>
                                            <span onClick={() => setStar(1)}>{!coloredStar ? '☆' : coloredStar}</span>
                                            <span onClick={() => setStar(2)}>{!coloredStar ? '☆' : coloredStar}</span>
                                            <span onClick={() => setStar(3)}>{!coloredStar ? '☆' : coloredStar}</span>
                                            <span onClick={() => setStar(4)}>{!coloredStar ? '☆' : coloredStar}</span>
                                            <span onClick={() => setStar(5)}>{!coloredStar ? '☆' : coloredStar}</span>
                                        </div>
                                        : < span > {coloredStar}</span>
                                    }
                                </div>
                                <input type="text" name="subject" placeholder='Emne' />
                                <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                                <div className={style.reviewformbuttonwrapper}>
                                    <div className={style.reviewformbutton}>
                                        <FiMessageSquare />
                                        <input value={'Kommentar'} type='submit' name='submit' />
                                    </div>
                                </div>
                            </form>
                            <div className={style.reviewlist}>
                                {review && review?.map((review) => {
                                    return (
                                        <ReviewCard
                                            key={review?.id}
                                            username={review?.user?.firstname + ' ' + review?.user?.lastname}
                                            date={review?.created_at}
                                            title={review?.subject}
                                            stars={review?.num_stars}
                                            text={review.comment}
                                        />
                                    )
                                })

                                }
                            </div>
                        </div>
                    </>
                }
            </section >
        </div >
    )
}