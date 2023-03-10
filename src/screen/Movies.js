import React, { useEffect, useMemo } from 'react'
import Layout from './../layout/Layout'
import Filter from '../components/Filter'
import { Movies } from '../data/MoviesData'
import Movie from '../components/Movie'
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Loader from '../components/Notifications/Loader'
import { RiMovie2Line } from 'react-icons/ri'
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb'
import { moviesListAction } from '../Redux/Actions/MovieAction'
import { LanguageData, RateData, TimeData, YearData } from '../data/FilterData'
import { useParams } from 'react-router-dom'


function MoviesPage() {
    const {search} = useParams();
    const dispatch = useDispatch();
    const [category, setCategory] = useState({ title: "All Categories" });
    const [year, setYear] = useState(YearData[0]);
    const [time, setTime] = useState(TimeData[0]);
    const [rate, setRate] = useState(RateData[0]);
    const [language, setLanguage] = useState(LanguageData[0])
    const sameClass = 'text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain';

    const { isLoading, isError, movies, isSuccess, pages, page } = useSelector((state) => state.movieList);

    const { categories } = useSelector(state => state.getCategory)

    //queries

    const queries = useMemo(() => {
        const query = {
            category: category?.title === "All Categories" ? "" : category?.title,
            time: time?.title.replace(/\D/g, ""),
            language: language?.title == "Sort By Languages" ? "" : language?.title,
            rate: rate?.title.replace(/\D/g, ""),
            year: year?.title.replace(/\D/g, ""),
            search: search ? search : "",
        };
        return query;
    }, [category, time, language, rate, year, search])


    useEffect(() => {
        if (isError) {
            toast.error(isError)
        }
        //get all movies
        dispatch(moviesListAction(queries))
    }, [dispatch, isError, queries])

    //pagination
    const nextPageHandler = () => {
        dispatch(
            moviesListAction({
                ...queries,
                pageNumber: page + 1
            })
        )
    } 
    const prevPageHandler = () => {
        dispatch(
            moviesListAction({
                ...queries,
                pageNumber: page - 1
            })
        )
    }

    const datas={
        categories: categories,
        category: category,
        setCategory: setCategory,
        year: year,
        setYear: setYear,
        time: time,
        setTime: setTime,
        rate: rate,
        setRate: setRate,
        language: language,
        setLanguage: setLanguage
    }
console.log(search)
    return (
        <Layout>
            <div className='min-height-screen container mx-auto px-2 my-6'>
                <Filter data={datas} />
                <p className='text-lg font-medium my-6'>
                    Total <span className='font-bold text-subMain'>{`" " ` + movies ? movies?.length : 0}</span>{' '} items found
                    {
                        search && ` for "${search}"`
                    }
                </p>
                {
                    isLoading ? (<div className="w-full gap-6 flex flex-col justify-center items-center min-h-screen">
                        <Loader />
                    </div>
                    ) :
                        movies?.length > 0 ? (
                            <>
                                <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                                    {
                                        movies.map((movie, index) => (
                                            <Movie key={index} movie={movie} />
                                        ))
                                    }
                                </div>
                                {/*Loading More*/}
                                <div className='w-full flex flex-rows justify-center items-center gap-6 md:my-20 my-10 '>
                                    <button onClick={prevPageHandler} disabled={page === 1} className={sameClass}>
                                        <TbPlayerTrackPrev className='text-xl' />
                                    </button>
                                    <button onClick={nextPageHandler} disabled={page === pages} className={sameClass}>
                                        <TbPlayerTrackNext className='text-xl' />
                                    </button>
                                </div>
                            </>


                        ) : (
                            <div className="w-full gap-6 flex flex-col justify-center items-center min-h-screen">
                                <div className='w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex flex-col justify-center items-center'>
                                    <RiMovie2Line />
                                </div>
                                <p className='text-border text-sm'>
                                    No movies found
                                </p>
                            </div>
                        )

                }

            </div>
        </Layout>
    )
}

export default MoviesPage