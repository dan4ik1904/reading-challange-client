import { makeAutoObservable, runInAction } from "mobx"
import { IBook } from "../types/book.interface";
import { getMyBooks } from "../api/auth";


class BooksStore {

    myBooks: IBook[] | Array<null> = []
    isLoading = false
    error: unknown | null = null

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

}

export default new BooksStore()
