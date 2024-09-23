import { FC } from 'react'
import { IUser } from '../../types/user.interface'
import './Me.css'


interface IProps {
    me: IUser
}

const MeInfo: FC<IProps> = ({me}: IProps) => {
    return (
        <div className="me__item">
            <div className="me__avatar__wrapper">
                <div className="avatar">
                    <span>{me.fullName[0]}</span>
                </div>
            </div>
            
            <div className="me__info">
                <h3>{me.fullName}</h3>
                <h4>{me.className}</h4>
            </div>
        </div>
    )
    
}

export default MeInfo