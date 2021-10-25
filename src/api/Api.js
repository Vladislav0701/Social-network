import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "467a0b90-5d62-46af-9300-417ab8395ae7"
    }
});

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}

export const queryUnfollow = (id) => {
    return instance.delete(`follow/${id}`)}

export const queryFollow = (id) => {
    return instance.post(`follow/${id}`)}
            
