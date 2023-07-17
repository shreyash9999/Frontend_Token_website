import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function dashboard() {
  function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button className="btn btn-primary" onClick={handleClick}>
        Tokens to add "{count}"
      </button>
    );
  }
  
    return (
      <div>
        <nav className="navbar bg-transparent" >
        <div className="container-fluid">
        <span className="text-white navbar-brand h1"><h1>Dashboard</h1></span>
      </div>
</nav>
<div className="text-left">
<Link to="/new_user">
  <button type="button" className="btn btn-primary m-4  float-left "><h5>Add New</h5></button>
  </Link>
</div>
<ol className="list-group list-group-numbered ">
  <li className="text-white list-group-item d-flex justify-content-between align-items-start bg-transparent">
    <div className="ms-2 me-auto text-white">
      <div className="fw-bold ">testing5@test.com</div>
      RfcZVyEDWZPzCVrnOELkVqGe55F2    </div>
    <button type="button" className="btn btn-success m-2">Edit</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
    <span className="badge bg-primary rounded-pill"><MyButton  /></span>
  </li>
  <li className="text-white list-group-item d-flex justify-content-between align-items-start bg-transparent">
    <div className="ms-2 me-auto text-white">
      <div className="fw-bold">testing6@test.com</div>
      f26UL0Di2xhWqCubwicosxz9G0f2
    </div>
    
    <button type="button" className="btn btn-success m-2">Edit</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
    <span className="badge bg-primary rounded-pill"><MyButton /></span>
  </li>
  <li className="text-white list-group-item d-flex justify-content-between align-items-start bg-transparent">
    <div className="ms-2 me-auto text-white">
      <div className="fw-bold">dongareshreyash20@gmail.com
</div>
f26UL0Di2xhWqCubwicosxz9G0f2
    </div>
    <button type="button" className="btn btn-success m-2">Edit</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
    <span className="badge bg-primary rounded-pill"><MyButton /></span>
  </li>
  <li className="text-white list-group-item d-flex justify-content-between align-items-start bg-transparent">
    <div className="ms-2 me-auto text-white">
      <div className="fw-bold">testing@test.com</div>
      C9TtSWKdF3aEQqql7RBI3kwbN4G3
    </div>
    <button type="button" className="btn btn-success m-2">Edit</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
    <span className="badge bg-primary rounded-pill"><MyButton /></span>
  </li>
  <li className="text-white list-group-item d-flex justify-content-between align-items-start bg-transparent">
    <div className="ms-2 me-auto text-white">
      <div className="fw-bold">admin@is.dev</div>
      ZgzeBGPrf3evNYTnH3xQCAnMTY93
    </div>
    <button type="button" className="btn btn-success m-2">Edit</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
    <span className="badge bg-primary rounded-pill"><MyButton /></span>
  </li>
  <li className="text-white list-group-item d-flex justify-content-between align-items-start bg-transparent">
    <div className="ms-2 me-auto text-white">
      <div className="fw-bold">admin@iam.dev</div>
      enhiJRCCr9WR54oWIYAwf88vT6A3
    </div>
    <button type="button" className="btn btn-success m-2">Edit</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
    <span className="badge bg-primary rounded-pill"><MyButton /></span>
  </li>
  <li className="text-white list-group-item d-flex justify-content-between align-items-start bg-transparent">
    <div className="ms-2 me-auto text-white">
      <div className="fw-bold">kingirut@gmail.com</div>
      ZgzeBGPrf3evNYTnH3xQCAnMTY93
    </div>
    <button type="button" className="btn btn-success m-2">Edit</button>
    <button type="button" className="btn btn-danger m-2">Delete</button>
    <span className="badge bg-primary rounded-pill"><MyButton /></span>
  </li>
</ol>
    </div>

    );
  }
  