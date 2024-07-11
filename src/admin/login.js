import './admin.css';


function Login()
{
    
    return(
        <>

         <div className="bg-light">
         <div className="login text-center rounded bg-white shadow overflow-hidden" >
            <form>
                <h4 className="bg-dark text-white py-3">ADMIN LOGIN</h4>
                <div className="p-4">
                    <div className="mb-3">
                        <input type="text"  required class="form-control shadow-none text-center" placeholder="Admin Name"></input>
                    </div>
                    <div className="mb-4">
                        <input type="password" required class="form-control shadow-none text-center" placeholder="Password"></input>
                    </div>
                    
                    <a href="/adminpanel" className="btn btn-dark text-white shadow-none">LOGIN</a>
                    
                </div>
            </form>

         </div></div>
        </>
    )
}
export default Login;