import { makeAutoObservable, runInAction } from "mobx"
import { getAllUsers } from "../api/users"
import { IUser } from "../types/user.interface"


class UserStore {

    users: IUser[] = []
    isLoading = false

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
}

export default new UserStore()