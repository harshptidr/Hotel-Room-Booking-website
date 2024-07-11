import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Login from './admin/login';
import { Navigate, useNavigate } from 'react-router-dom';
function Nav1()
{
    const [show, setShow] = useState(false);
    // const[reg,setReg]=useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleClose1=()=>setReg(false);
  // const handleShow1=()=>setReg(true);
 
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[users,Setusers]=useState([]);
  const navigate=useNavigate();


  const[firstname,setFirst]=useState("");
  const[lastname,setLast]=useState("");
  const[email1,setEmail1]=useState("");
  const[mobileno,setMobile]=useState("");
  const[birthdate,setBirth]=useState("");
  const[gender,setGender]=useState("");
  const[address,setAddress]=useState("");
  const[password1,setPassword1]=useState("");
  const[conform,setConform]=useState("");


  // const Lo=()=>
  // {
  //     axios.post("http://localhost:4000/submit",{
  //        email,password
  //     })

  //     .then((result)=>{console.log("Record Inserted")}
  //     )
  //     .catch((err)=>{console.log(err)
  //     })
     
  // }

  // const Reg=()=>
  // {
  //   axios.post("http://localhost:4000/signup",{
  //    firstname,lastname,email1,mobileno,birthdate,gender,address,password1,conform
  //  })

  //  .then((result)=>{console.log("Record Inserted")}
  //  )
  //  .catch((err)=>{console.log(err)
  //  })
  // }

  const Reg=()=>
  {
    const response=axios.post('http://localhost:10000/regdata',{
      firstname:firstname,
      lastname:lastname,
      email1:email1,
      mobileno:mobileno,
      birthdate:birthdate,
      gender:gender,
      address:address,
      password1:password1,
      conform:conform,

    })
    .then(response=>{
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error);
    });
    alert("Register Data Successfully");
  }

  function h()
  {
    axios.get("http://localhost:10000/viewuser")
    .then((result)=>Setusers(result.data))
    

    .catch((err)=>{console.log(err)})
    console.log(users);
  }

  useEffect(()=>
  {
    h();
  },[]);

  const Login=()=>
  {
    console.log(users);
    let found=false;
    for(let i=0;i<users.length ;i++){
      if(email==users[i]['email1']&& password==users[i]['password1']){
        found=true;
        break;
      }
    }
    if(found)
    {
      alert("Login Succesfully");
      navigate('/detail')

    }
    
    else
    {
      alert("Login Failed");
    }
  

  }
   
    return(
        <>
       <div class="m-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
          <img
                  alt="..."
                   src="/images/logo1.png"
                  style={{width:"110px" ,height:"90px" ,overflow:"hidden" ,borderRadius:"100px"}}
                /></a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
           
                <div class="navbar-nav ms-auto">
                      <a class="nav-link" href="/"><font color="white"> HOME</font>  </a>
                      <a class="nav-link" href="" ><font color="white">ROOMS</font>  </a>
                      <a class="nav-link" href="fact" ><font color="white">FACILITIES</font>  </a>
                      <a class="nav-link" href="staff" ><font color="white">OUR STAFF</font>  </a>
                      <a class="nav-link" href="about" ><font color="white">ABOUT US</font>  </a>
                      <a class="nav-link" href="contact" ><font color="white">CONTACT US</font>  </a>
                </div>
            </div>
            <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button class="btn btn-info my-2 my-sm-0" type="submit"><font color="black">LOGIN</font></button> */}
    </form>



    <Button variant="primary" onClick={handleShow}>
       Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle m-2" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
            User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
      </Form.Group>
      {email}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}  />
      </Form.Group>
      {password}
      <Button variant="btn btn-info" type="submit" onClick={Login}>
        Submit
      </Button>
    </Form>



        </Modal.Body>
      </Modal>
<button type="button" class="btn btn-primary ml-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Registration
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Registration</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>

<div class="row">
  <div class="col-md-6 mb-4">

    <div class="form-outline">
      <input type="text" id="firstName" class="form-control form-control"  Value={firstname}  onChange={(e)=>setFirst(e.target.value)} />
      <label class="form-label" for="firstName">First Name</label>
    </div>
    {firstname}

  </div>
  <div class="col-md-6 mb-4">

    <div class="form-outline">
      <input type="text" id="lastName" class="form-control form-control"  Value={lastname} onChange={(e)=>setLast(e.target.value)} />
      <label class="form-label" for="lastName">Last Name</label>
    </div>{lastname}

  </div>
</div>
 


<div class="row">
  <div class="col-md-6 mb-4 pb-2">

    <div class="form-outline">
      <input type="email" id="emailAddress" class="form-control form-control"   Value={email1} onChange={(e)=>setEmail1(e.target.value)} />
      <label class="form-label" for="emailAddress">Email</label>
    </div>{email1}

  </div>
  <div class="col-md-6 mb-4 pb-2">

    <div class="form-outline">
      <input type="number" id="phoneNumber" class="form-control form-control"   Value={mobileno} onChange={(e)=>setMobile(e.target.value)} />
      <label class="form-label" for="phoneNumber">Mobile Number</label>
    </div>{mobileno}

  </div>
</div>
<div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="date" class="form-control form-control" id="birthdayDate"   Value={birthdate} onChange={(e)=>setBirth(e.target.value)} />
                    <label for="birthdayDate" class="form-label">Birthday</label>
                  </div>{birthdate}

                </div>
                <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="female"  onChange={(e)=>setGender(e.target.value)}  Value={gender}/>
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="male" onChange={(e)=>setGender(e.target.value)}  Value={gender} />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                </div>
              </div>
              {gender}
              <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control"  Value={address} onChange={(e)=>setAddress(e.target.value)} />
                  <label class="form-label" for="form3Example8">Address</label>
                </div>{address}

                <div class="row">
  <div class="col-md-6 mb-4 pb-2">

    <div class="form-outline">
      <input type="password" id="pass" class="form-control form-control"  Value={password1}  onChange={(e)=>setPassword1(e.target.value)}/>
      <label class="form-label" for="pass">Password</label>
    </div>{password1}

  </div>
  <div class="col-md-6 mb-4 pb-2">

    <div class="form-outline">
      <input type="password" id="conform" class="form-control form-control"   Value={conform} onChange={(e)=>setConform(e.target.value)} />
      <label class="form-label" for="conform">Conform Password</label>
    </div>
    {conform}

  </div>
</div>
<div class="mt-2 pt-2">
  <input class="btn btn-primary btn" type="submit" value="Signup" onClick={Reg} />
</div>

</form>
      
        
      </div>
      
    </div>
  </div>
</div>

        </div>
        
    </nav>
</div>




        </>
    )
}
export default Nav1;