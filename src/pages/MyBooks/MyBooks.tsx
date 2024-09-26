import { useEffect } from "react"
import NoAuth from "../../components/Auth/NoAuth"
import Loading from "../../components/Loading/Loading"
import useAuth from "../../hooks/useAuth"
import books from "../../stores/books"
import useTelegram from "../../hooks/useTelegram"
import Item from "../../components/Item/Item"
import AddBook from "../../components/MyBooks/AddBookButton"
import { observer } from "mobx-react-lite"


const MyBooks = observer(() => {
    const {isAuthenticated, loading} = useAuth()
    const { tgID } = useTelegram()

    useEffect(() => {
        try {
            books.fetchMybooks(tgID)
        } catch (error) {
            
        }
        
    }, [tgID])

    if(loading === true) return <Loading />

    if(isAuthenticated === false) return <NoAuth />
    return (
        <>
            <AddBook />
            {books.myBooks && (
                books.myBooks.map((book) => (
                    book && (
                        <Item 
                            h3={book.name} 
                            h4={book?.author} 
                            pagesCount={book?.pageCount} 
                        />
                    )
                ))
            )}
        </>
    );

})

export default MyBooks