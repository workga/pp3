import axios from "axios";
import authHeader from "./auth-header";

class UserService {
    getUserData() {
        return axios.get('/api/profile/', { headers: authHeader()});
    }



}

export default new UserService();