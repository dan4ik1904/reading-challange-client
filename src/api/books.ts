import { IBook, ICreateBook } from "../types/book.interface"
import api from "./axios"


export const getAllBooks = async(): Promise<IBook[] | undefined>  => {
    try {
        const res = await api.get('/api/v1/books')
        return res.data
    } catch (error) {
        // return error
    }
}

export const createBook = async(data: ICreateBook): Promise<IBook[] | unknown> => {
    try {
        const res = await api.post('/api/v1/books', data)
        return res.data
    } catch (error) {
        return error
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