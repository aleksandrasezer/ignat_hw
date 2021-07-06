import axios from "axios";
/*

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test/',
})*/

export const requestAPI = {
    success() {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test/', {success: true})
    }
}