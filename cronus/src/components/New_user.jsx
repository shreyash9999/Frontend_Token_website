import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { setDoc,doc , addDoc, collection, Timestamp, serverTimestamp } from "firebase/firestore"; 
import {db} from "../firebase";

export default function new_user() {

  //const [data,setData] = useState({});
  const [name, setName] = useState('');
  const [number, setNumber]  = useState('');
  const [des, setDes] = useState('');
  const [tokens,setTokens] = useState('');
  const [pass, setPass] = useState('');

  const handleAdd = async(e)=>{
    e.preventDefault()

    const data = {
      name: name,
      number: number,
      des: des,
      tokens: tokens,
      pass: pass
    };

  //   try{
  //   const res = await addDoc(collection(db, "cities"), {
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA",
  //     Timestamp: serverTimestamp()
  //   });
  // }catch(err){
  //   console.log(res)
  // }

    
  }
    return (
      <div>
        



<div className="card bg-transparent">
  <div className="card-body p-1000">
  <form className="row g-3 text-white p-1000" onSubmit={handleAdd}>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" value={name} onChange={(e) => setName(e.target.value)} required />
  </div>
  
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Phone Number</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" value={number} onChange={(e) => setNumber(e.target.value)} required/>
    </div>
    
  </div>
  <div className="col-md-6">
    <label for="validationDefault03" className="form-label">Describe why tokes are given</label>
    <input type="text" className="form-control" id="validationDefault03" value={des} onChange={(e) => setDes(e.target.value)} required/>
  </div>
 
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Tokens</label>
    <input type="text" className="form-control" id="validationDefault05" value={tokens} onChange={(e) => setTokens(e.target.value)} required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Password</label>
    <input type="text" className="form-control" id="validationDefault01" value={pass} onChange={(e) => setPass(e.target.value)} required/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Add the Entry</button>
  </div>

</form>

  </div>
</div>
    </div>

    
    );
  }