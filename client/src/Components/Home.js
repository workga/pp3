import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="container">

            <div className="row">
                <div>
                    <h1>Home</h1>
                </div>
            </div>

            

            <div className="row mt-2">
                
                <div className="col float-left">
                    <Link to="/" className="btn btn-primary">На главную</Link>
                </div>
                
                
                <div className="float-right col-md-1 btn-group"> 
                    <div >
                        <a href="/" className="btn btn-success">Войти</a>  
                    </div>
                    <div>
                        <Link to="/user" className="btn btn-secondary">Профиль</Link>
                    </div>
                </div>
                
                

                
            </div>


            
                <div className="row mt-5">
                    <h1 class="col-md-5">Фильтры</h1>
                    <div class="col-md-5 col-md-offset-2 input-group">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <a href="/" type="button" class="btn btn-outline-primary">search</a>
                    </div>
                </div>

                
            
            
            
               
           <div>
                <Link to="/advert" className="mt-5 btn btn-secondary">Объявление</Link>
           </div>

        </div>
    );
}

export default Home;