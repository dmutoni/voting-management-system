import axios from "axios"
import { url } from "../utils/url"

const login = async (body) => {
    return await axios.post(`${url}/auth`, body);
}

const signUp = async (body) => {
    return await axios.post(`${url}/auth/client/signup`, body);
}

export {
    login, signUp
}