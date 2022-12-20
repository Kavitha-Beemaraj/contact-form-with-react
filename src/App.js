import FormDetails from "./components/FormDetails";
import Confirm from "./components/Confirm";
import Success from "./components/Success";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="container">
      
      <Routes>
        <Route path="/*" element={<FormDetails/>}/>
        <Route path="/confirm" element={<Confirm />}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>  
    </div>
  );
}

export default App;
