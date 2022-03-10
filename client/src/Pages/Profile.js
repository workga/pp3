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
            
            <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src='image.png' alt="..." class="img-thumbnail" width = "150"></img>
                                
                                <div class="mt-3">
                                    <h4>{firstName} {lastName}</h4>
                                    <p class="text-secondary mb-1">Преподаватель, ученик</p>
                                    
                                    
                                    <Link to="/" className="btn btn-primary mt-2">Написать</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            <div class="col-md-8">
              <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">Полное имя</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {firstName} {lastName}
                            </div>
                        </div>
                        <hr/>

                            
                           

                        <div class="row">
                            <div class="col-sm-3">
                            <h6 class="mb-0">Краткая информация</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {abstract}
                            </div>
                        </div>
                        <hr/>

                        
                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Описание</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {description}
                                </div>
                            </div>
                            <hr/>


                            <div class="row">
                                <div class="col-sm-3">
                                <h6 class="mb-0">Объявления</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    
                                </div>
                            </div>
                            

                        

                        
                        <div class="row">
                            <div class="col-sm-12">
                            <Link to="/" className="btn btn-primary mt-4">Создать объявление</Link>
                            </div>
                        </div>
                        

                        </div>
              </div>




            </div>
        </div>

            
           

            

           

        </div>
    )
}

export default Profile