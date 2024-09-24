import { IBook, ICreateBook } from "../types/book.interface"
import api from "./axios"


export const getAllBooks = async(): Promise<IBook[] | undefined>  => {
    try {
        const res = await api.get('/books')
        return res.data
    } catch (error) {
        // return error
    }
}

export const createBook = async(data: ICreateBook, tgID: number)=> {
    try {
        const res = await api.post('/books', data, {
            headers: {
                Authorization: tgID
            }
        })
        return res
    } catch (error) {
        console.error(error)
    }
}

export const getOneBook = async(id: string): Promise<IBook | unknown> => {
    try {
        const res = await api.get(`/api/v1/books/${id}`)
        return res.data
    } catch (error) {
        return error
    }
}