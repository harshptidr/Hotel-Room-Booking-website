import './admin.css';
function Admin()
{
    return(
        <>
       <div className="bg-light">
        <div className="container-fluid bg-dark text-light p-3 d-flex align-items-center justify-content-between">
            <h3 className="mb-0">STAY EASE</h3>
            <a href="/admin" className="btn btn-light btn-sm">LOG OUT</a>
        </div>
       </div>
       <div class="sidebar">
  <a class="active" href="#home">ADMIN PANEL</a>
  <a href="/reguser">USERS</a>
  <a href="">BOOKING</a>
  <a href="">CONTACT US</a>
</div>


<div class="content">
HYYY
</div>
        </>
    )
   
}
export default Admin;
