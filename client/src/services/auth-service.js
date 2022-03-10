import axios from "axios";

class AuthService {
    register(email, password, firstName, lastName) {
        return axios.put('/api/users/' , {
            email: email,
            password : password,
            first_name: firstName,
            last_name: lastName 
        })
        .then(function(response){
            return response.status;
        })
        .catch(function(error){
            console.log(error.response.status);
            return error.response.status
        })
    }

    login(username, password) {
        return axios.post('/api/token/', {
            email: username,
            password: password
        })
        .then(function(response){
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        })
        .catch(function(error){
            localStorage.setItem("user", JSON.stringify(null));
            return error.response;
        });
    }

    refresh(refreshToken) {
        return axios.post('/api/token/refresh/', {
            refresh: refreshToken
        })
        .then(function(response){
            let user = JSON.parse(localStorage.getItem('user'));
            user.access = response.data.access;
            localStorage.setItem("user", JSON.stringify(user));
            console.log(response);
            console.log("resp")
            return response.data;
        })
        .catch(function(error){
            localStorage.setItem("user", JSON.stringify(null));
            return error.response;
        })
    }

    logout(){
        localStorage.removeItem("user");
    }
}

export default new AuthService();