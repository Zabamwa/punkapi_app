import axios from "axios";
import {API_URL} from "./apiConfig";

export function requestGetListOfBeer(params:any) {
    return axios.request({
        method: "get",
        url: `${API_URL}&page=${params}`
    }).then(response => {return response.data});
}