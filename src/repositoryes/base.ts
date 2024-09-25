import axios from "axios";
import config from "../config";

class BaseRepository {
    api
    constructor() {
        const token = localStorage.getItem(config.TOKEN_KEY)
        this.api = axios.create({
            baseURL: config.BASE_URL,
            headers: { Authorization: `Bearer ${token}` }
        })
    }
}

export default BaseRepository