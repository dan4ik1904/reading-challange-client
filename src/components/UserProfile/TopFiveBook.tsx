import { observer } from 'mobx-react-lite'
import { FaBook } from "react-icons/fa6";
import { IBook } from '../../types/book.interface';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IUser } from '../../types/user.interface';

interface IProps {
    books: IBook[] | null[] | undefined,
    title: string,
    currentUser: IUser
}

const TopFiveBook = observer(({ books, title, currentUser }: IProps) => {

    const nav = useNavigate()
    
    if(!books) return <span>Здесь пока ничего нет :(</span>
    return (
    <div className="home__item">
        <NavLink to={`/users/${currentUser.id}/books`}>
            <div className="all">
                Все
            </div>
        </NavLink>
        <div className="title">
            {title}
        </div>
        <div className="top__users">
            {books.length > 0 ? (
                <>{books.slice(0, 5).map((book, key) => (
                    <div className="top__user" style={{cursor: 'pointer'}} onClick={() => nav(`/books/${book?.id}`)}>
                        <div className="place"> 
                            {key+1}
                        </div>
                        <div className="name">
                            <span>{book?.name}</span>
                        </div>
                        <div className="info__user">
                            <div className="books">
                                <span>{book?.pageCount}</span>
                                <FaBook fontSize={'20px'} />
                            </div>
                            <div className="pages">
                                <span>{book?.pageCount}</span>
                                <FaStar color='yellow' fontSize={'20px'}/>
                            </div>
                        </div>
                    </div>
                ))}</>
            ) : (
                <span>Здесь пока ничего нет :(</span>
            )}
        </div>
    </div>
    )
})

export default TopFiveBook