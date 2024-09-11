import api from "./axios";


export const getAllUsers = async() => {
    const res = await api.get('/users/')
    return res.data
}

export const getTopUsers = async() => {
    const res = await api.get('/users/top')
    return res
}

export const getClassmatesUsers = async(tgId: number) => {
    const res = await api.get('/users/', {
        headers: {
            Authorization: tgId
        }
    })
    return res
}