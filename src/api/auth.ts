import { IAuthData, IPatchData } from "../types/user.interface";
import api from "./axios";


export const auth = async(userData: IAuthData) => {
    const res = await api.post('/auth', userData)
    return res
}

export const authMe = async(tgId: number) => {
    const res = await api.get('/auth/me', {
        headers: {
            Authorization: tgId
        }
    })
    return res
}

export const patchMe = async(tgId: number, patchData: IPatchData) => {
    const res = await api.patch('/auth/me', patchData, {
        headers: {
            Authorization: tgId
        }
    })
    return res
}

export const getMyBooks = async(tgId: number) => {
    const res = await api.get('/auth/mybooks', {
        headers: {
            Authorization: tgId
        }
    })
    return res
}

export const getSessions = async(tgId: number) => {
    const res = await api.get('/auth/sessions', {
        headers: {
            Authorization: tgId
        }
    })
    return res
}
