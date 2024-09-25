import axios from "axios";
import config from "../config";
import BaseRepository from "./base";


type AuthToken = {
    token: string
}

export interface ResponseBody<T> {
    error: boolean
    msg: string
    data?: T
}

export class UserRepository extends BaseRepository {
    async login(email: string, password: string): Promise<ResponseBody<AuthToken>> {
        return axios.post<ResponseBody<AuthToken>>(config.BASE_URL + '/users/login', {
            email,
            password
        })
            .then((res) => {
                return res.data
            })
            .catch(() => {
                return { error: true, msg: config.ERROR_MSG }
            })
    }
}