import { makeAutoObservable, runInAction } from "mobx"
import { getAllUsers, getClassmatesUsers } from "../api/users"
import { ISession, IUser } from "../types/user.interface"
import { authMe, getMyBooks, getSessions } from "../api/auth"
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
}

export default new UserStore()