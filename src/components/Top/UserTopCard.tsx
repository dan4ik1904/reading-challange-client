import { FC } from "react";
import { Link } from "react-router-dom";
import '../Item.css'
import { IUser } from "../../types/user.interface";

interface IProps {
    user: IUser
}

const UserTopCard: FC<IProps> = ({user}) => {
    return (
        <Link to={`/users/${user.id}`}>
            <div className="item">
                <div className="item__info__main">
                    <h3>{user.fullName}</h3>
                    <h4>{user.className}</h4>
                </div>
                <div className="item__info">
                    <span>
                        <span className="highlight">{user.booksCount}</span> книг
                    </span>
                    <span>
                        <span className="highlight">{user.pagesCount}</span> страниц
                    </span>
                </div>
            </div>
        </Link>
        
    );
}

export default UserTopCard