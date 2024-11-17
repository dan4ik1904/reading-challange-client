import { FC } from "react";
import { IBook } from "../../types/book.interface";
import '../Item.css'
import { MdMenuBook } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface IProps {
    book: IBook
}

const BookCard: FC<IProps> = ({book}) => {

    const nav = useNavigate()

    return (
        <div style={{cursor: 'pointer'}} className="item page-mybook__item book" onClick={() => nav(`/books/${book.id}`)}>
            <div className="item__info__main">
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>
            </div>
            <div className="item__info">
                <span>
                    <span className="highlight">{book.pageCount}</span> <MdMenuBook color="white" fontSize={'22px'} />
                </span>
            </div>
        </div>
        
    );
}

export default BookCard