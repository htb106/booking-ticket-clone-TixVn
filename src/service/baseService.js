import Axios from "axios";
import { DOMAIN, TOKEN, TOKENCYBERSOFT } from "util/settings/config";

export class baseService {
    put = (url, data) => Axios({
        url: `${DOMAIN}/${url}`,
        method: "PUT",
        data,
        headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKENCYBERSOFT,
        }
    });

    get = (url, data) => Axios({
        url: `${DOMAIN}/${url}`,
        method: "GET",
        data,
        headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKENCYBERSOFT,
        }
    });

    post = (url, data) => Axios({
        url: `${DOMAIN}/${url}`,
        method: "POST",
        data,
        headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKENCYBERSOFT,
        }
    });

    delete = (url, data) => Axios({
        url: `${DOMAIN}/${url}`,
        method: "DELETE",
        data,
        headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKENCYBERSOFT,
        }
    });
    
};