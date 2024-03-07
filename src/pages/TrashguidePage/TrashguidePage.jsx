import style from './TrashguidePage.module.scss'
import { useFetch } from '../../hooks/useFetch'
import { SortingCard } from '../../components/SortingCard/SortingCard'
import { useEffect, useState } from 'react'
import { Search } from '../../components/Search/Search'
import { SearchCard } from '../../components/SearchCard/SearchCard'
import { Link } from 'react-router-dom'
export function TrashguidePage() {
    const [sectionList, setSectionList] = useState()
    const [search, setSearch] = useState()
    const [searchResult, setSearchResult] = useState(null)

    let sectionListArray = useFetch('http://localhost:4000/section?sort_key=title')

    useEffect(() => {
        setSectionList(sectionListArray.data)
    }, [sectionListArray])

    //https://github.com/TCAA-Web/Search_in_React/blob/main/src/App.jsx
    useEffect(() => {
        let url = `http://localhost:4000/search/${search}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                let filteredData = data?.data/* ?.filter((data) => data.type === "section") */
                setSearchResult(filteredData)
            });
    }, [search])

    console.log('searchResult', searchResult);
    return (
        <section className={style.trashguidepagebg}>
            <div className={style.trashguidepage}>
                <h2>Din guide</h2>
                <h2>til en sund affaldssortering</h2>
                <Search setSearch={setSearch} />
                <div className={style.trashguidepagewrapper}>
                    {!searchResult || searchResult.length == 0 || search == ''
                        ?
                        sectionList?.map((section, index) => {
                            return (
                                <Link key={index} to={`/sortering/${section.id}`}>
                                    <SortingCard ImgSrc={`http://localhost:4000/Assets/Images/Guide/Categories/${section?.filename}`} title={section?.title} bgcolor={'#' + section?.color} />
                                </Link>
                            )
                        })
                        :
                        searchResult?.map((section, index) => {
                            return (
                                <SearchCard key={index} title={section?.title} type={section?.type} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

