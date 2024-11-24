import { FC, useEffect } from "react";
import books from "../../stores/books";
import './Home.css'
import { FaBook } from "react-icons/fa6";
import { observer } from "mobx-react-lite";

const InfoLitsey: FC = observer(() => {

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
                        <span>{books.books.length}/500<FaBook color='white' fontSize={'26px'} /></span>
                    ): (
                        <span>loading...</span>
                )}
            </div>
        </div>
    )
})

export default InfoLitsey