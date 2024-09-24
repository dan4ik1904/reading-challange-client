import { FC, useEffect } from "react";
import books from "../../stores/books";
import './Home.css'


const InfoLitsey: FC = () => {

    useEffect(() => {
        books.fetchAllBooks()
    }, [])


    return (
        <div className="home__item">
            <div className="litse__logo">

            </div>
            <div className="info">
                {books.books ? (
                        <span>{books.books.length}/330</span>
                    ): (
                        <span>loading...</span>
                )}
            </div>
        </div>
    )
}

export default InfoLitsey