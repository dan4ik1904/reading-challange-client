import { IUser } from "../types/user.interface";
import api from "./axios";


export const getAllUsers = async(): Promise<IUser[]> => {
    const res = await api.get('/users/')
    return res.data
}

export const getTopUsers = async(): Promise<IUser[]> => {
    const res = await api.get('/users/top')
    return res.data
}

export const getClassmatesUsers = async(tgId: number): Promise<IUser[]> => {
    const res = await api.get('/users/classmates', {
        headers: {
            Authorization: tgId
        }
    })
    return res.data
}