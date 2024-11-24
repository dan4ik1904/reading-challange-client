import { FC } from 'react'
import { IUser } from '../../types/user.interface'
import './Me.css'
import { IoLogOut } from "react-icons/io5";
import users from '../../stores/users';
import { FaBook } from 'react-icons/fa6';
import { BiSolidSpreadsheet } from 'react-icons/bi';


interface IProps {
    me: IUser,
    thisMe?: boolean
}

const MeInfo: FC<IProps> = ({me, thisMe}: IProps) => {

    return (
        <div className="me__item">
            {thisMe && (
                <div className="delete" style={{ cursor: 'pointer' }}>
                    <IoLogOut fontSize={'30px'} color='red' onClick={() => users.isAvtiveLogoutButton = true} />
                </div> 
            )}
            <div className="me__avatar__wrapper">
                <div className="avatar">
                    <span>{me.fullName[0]}</span>
                </div>
            </div>
            <div className="me__info">
                <div className="man">
                    <h3>{me.fullName}</h3>
                    <h4>{me.className}</h4>
                </div>
                <div className="book">
                    <span>{me.booksCount}<FaBook color='white' fontSize={'20px'} /></span><br />
                    <span>{me.pagesCount}<BiSolidSpreadsheet fontSize={'20px'} /></span>
                </div>
            </div>
        </div>
    )
    
}

export default MeInfo