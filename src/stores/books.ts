import { makeAutoObservable, runInAction } from "mobx"
import { IBook, ICreateBook } from "../types/book.interface";
import { getMyBooks } from "../api/auth";
import { createBook, getAllBooks } from "../api/books";


class BooksStore {

    myBooks: IBook[] | Array<null> = []
    isLoading = false
    isLoadingAddBook = false
    error: unknown | null = null
    books: IBook[] | Array<null> | undefined = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchMybooks(tgId: number) {
        try {
            this.isLoading = true
            const books = await getMyBooks(tgId)
            if(books) {
                this.myBooks = books
                runInAction(() => {
                    this.isLoading = false
                })
            }
        } catch (error) {
            this.error = error
            runInAction(() => {
                this.isLoading = false
            })
        }
    }

    async fetchAllBooks() {
        try {
            const books = await getAllBooks()
            this.books = books
        } catch (error) {
            
        }
    }

    async createBook(data: ICreateBook, tgID: number, setLoading: any) {
        try {
            setLoading(true)
            const res = await createBook(data, tgID)
            if(res?.status === 200) {
                setLoading(false)
            }
        } catch (error) {
            
        }
    }
}

export default new BooksStore()
