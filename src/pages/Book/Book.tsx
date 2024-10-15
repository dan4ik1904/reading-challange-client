import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getInfoBook } from "../../api/googleApiBook"
import books from "../../stores/books"


const Book = () => {

    const [res, setRes] = useState()

    const params = useParams()
    const id = params.id

    useEffect(() => {
        if(id) books.fetchOneBook(id)
    }, [])

    useEffect(() => {
        if(books.book) {
            getInfoBook(books.book.id)
            .then(res => {
                setRes(res.data)
            })
        }
    }, [books.book])

    return (
        <>{JSON.stringify(res)}</>
    )
}

export default Book