import { FC, useEffect } from "react";
import books from "../../stores/books";
import './Home.css'

const InfoLitsey: FC = () => {

    useEffect(() => {
        books.fetchAllBooks()
    }, [])


    return (
        <div className="home__item">
            <div className="litsey__logo">
                <img src="ec8b418d-d4dc-4264-8d29-a8f907ad4898.png"/>
            </div>
            <div className="info">
                {books.books ? (
                        <span>{books.books.length}/500</span>
                    ): (
                        <span>loading...</span>
                )}
            </div>
        </div>
    )
}

export default InfoLitsey