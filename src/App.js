import FormDetails from "./components/FormDetails";
import Confirm from "./components/Confirm";
import Success from "./components/Success";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [contact,setContact]=useState({
    name:'',
    age:0,
    email:'',
    mobile:''
  })
  
  
  return (
    <div className="container">
      
      <Routes>
        <Route path="/*" element={<FormDetails contact={contact} setContact={setContact}/>}/>
        <Route path="/confirm" element={<Confirm contact={contact} setContact={setContact}/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>  
    </div>
  );
}

export default App;
