import { makeAutoObservable, runInAction } from "mobx"
import { getAllUsers, getClassmatesUsers, getTopUsers } from "../api/users"
import { IAuthData, ISession, IUser } from "../types/user.interface"
import { auth, authMe, getSessions } from "../api/auth"
import { IBook } from "../types/book.interface"


class UserStore {

    users: IUser[] = []
    me: IUser | null = null
    isLoading = false
    error: unknown | null = null
    myBooks: IBook[] | Array<null> = []
    mySessions: ISession[] | Array<null> = []
    classmates: IUser[] | Array<null> = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchAllUsers() {
        this.isLoading = true
        const users = await getAllUsers()
        console.log(users)
        this.users = users
        runInAction(() => {
            this.isLoading = false
            console.log(this.users)
        })
    }

    async fetchMe(tgId: number) {
        try {
            this.isLoading = true
            const me = await authMe(tgId)
            this.me = me
            runInAction(() => {
                this.isLoading = false
            })
        } catch (error) {
            this.error = error
            runInAction(() => {
                this.isLoading = false
            })
        }

    }

    async fetchMySesions(tgId: number) {
        try {
            this.isLoading = true
            const sessions = await getSessions(tgId)
            if(sessions) {
                this.mySessions = sessions
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

    async fetchClassmaets(tgId: number) {
        try {
            const classmates = await getClassmatesUsers(tgId) 
            this.classmates = classmates
        } catch (error) {
            
        }
    }

    async fetchTopUsers() {
        try {
            this.isLoading = true
            const users = await getTopUsers()
            this.users = users
            runInAction(() => {
                this.isLoading = false
            })
        } catch (error) {
            this.error = error
        }
    }

    async auth(data: IAuthData) {
        this.isLoading = true
        const res = await auth(data)
        if(res.status === 200){
            this.isLoading = false
        }
        return res
    }

    
}

export default new UserStore()