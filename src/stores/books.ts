import { makeAutoObservable, runInAction } from "mobx"
import { IBook } from "../types/book.interface";
import { getMyBooks } from "../api/auth";
import { getAllBooks } from "../api/books";


class BooksStore {

    myBooks: IBook[] | Array<null> = []
    isLoading = false
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
}

export default new BooksStore()
