import { FC } from 'react'
import './Item.css'

interface IProps {
    h4: string,
    h3: string,
    books?: number|string
    pagesCount: number|string
}


const Item: FC<IProps> = (props: IProps) => {
    return (
        <div className="item">
            <div className="item__info__main">
                <h3>{props.h3}</h3>
                <h5>{props.h4}</h5>
            </div>
            <div className="item__info">
                {props.books && (
                    <span><span style={{
                    color: '#646cff'
                    }}>{props.books}</span> книг</span>
                )}
                
                <span><span style={{
                color: '#646cff'
                }}>{props.pagesCount}</span> страниц</span>
            </div>
        </div>
    )
}

export default Item