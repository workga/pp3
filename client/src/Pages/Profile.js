import { Link } from "react-router-dom";
import userService from "../services/user-service";
import { useNavigate } from "react-router";

import './Profile.scss'
import { useEffect, useState } from "react";
import authService from "../services/auth-service";
import { userLogIn, userLogOut, successLogin, failLogin } from "../redux/actions"
import { useDispatch } from "react-redux";



function Profile() {

    //const user = JSON.parse(localStorage.getItem('user'));
    const [abstract, setAbstract] = useState("");
    const [description, setDescription] = useState("");
    const [firstName, setFirstName] = useState("");
    const [id, setID] = useState("");
    const [lastName, setLastName] = useState("");
    const [homeURL] = useState("/profile");

    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    const navigate = useNavigate();

   
    useEffect(() => {
        const getProfile = userService
                            .getUserData()
                            .then(response => response.data)
                            .catch(async function(error){
                                console.log(error.response);

                                if (error.response.status === 401) {
                                    const data = await authService.refresh(user.refresh);
                                    console.log("refresh");
                                    console.log(data);
                                    if (!data.access) {
                                        dispatch(userLogOut());
                                        navigate('/login');
                                    }
                                    else {
                                        const response = await userService.getUserData();
                                        return response.data;
                                    }
                                }
                            })
                            ;

        const profileToState = async() => {
            const prof = await getProfile;
            setAbstract(prof.abstract);
            setDescription(prof.description);
            setFirstName(prof.first_name);
            setID(prof.id);
            setLastName(prof.last_name);
            console.log(prof);
            //const user = JSON.parse(localStorage.getItem('user'));
            
        }

        profileToState();
    })

    

    

    return (
        <div className="container mt-5">
            <img src='image.png' alt="..." class="img-thumbnail"></img>
            <h1>{firstName} {lastName}</h1>

            <div className="col">
                <h2>Преподаватель, ученик</h2>
                <Link to="/" className="btn btn-primary">Написать</Link>
            </div>

            <div className="mt-2">
                <p>{abstract}</p>
            </div>
            
            <div>
                <p>{description}</p>
            </div>
            
            <div>
                <p>Объявления</p>
                <Link to="/" className="btn btn-primary">Создать объявление</Link>
            </div>

        </div>
    )
}

export default Profile