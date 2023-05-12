import { useState } from "react"
import { Link} from "react-router-dom"
import React from "react"
import Confirm from "./Confirm"
export const NameContext=React.createContext()
export const AgeContext=React.createContext()
export const EmailContext=React.createContext()
export const MobileContext=React.createContext()

const FormDetails = (contact,setContact) => {
    
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    
    
    
    const handleSubmit=(e) =>{

        if(!name){
            alert('please enter your name')
            return
        }
        e.preventDefault()
        console.log({name, age, email, mobile})
    
    }
    
     
    
    return (    
        
        <form className="add-form " onSubmit={handleSubmit}>
            <h2> Fill your details:</h2>
            <NameContext.Provider value={name}>
            <AgeContext.Provider value={age}>
            <EmailContext.Provider value={email}>
            <MobileContext.Provider value={mobile}>
                <div className='form-control'>
                    <label><strong>Name:</strong></label>
                    <input type='text' placeholder='Enter your name'
                    value={name} onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label><strong> Age:</strong></label>
                    <input type='number' placeholder='Enter your age' 
                    value={age} onChange={(e)=> setAge(e.target.value)}
                    />
                    </div>
                <div className='form-control'>
                    <label><strong>Email:</strong></label>
                    <input type='email' placeholder='Enter your email id' 
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label><strong> Mobile Number:</strong></label>
                    <input type='text' placeholder='enter your mobile number' 
                    value={mobile} onChange={(e)=> setMobile(e.target.value)}
                    />
                </div>

                <input type='submit' value='Submit' className='btn'/>

                <button className="btn"><Link to="/confirm"> Next</Link></button>
                <Confirm />
                </MobileContext.Provider>
                </EmailContext.Provider>
                </AgeContext.Provider>
            </NameContext.Provider>
        </form>
    )
}

export default FormDetails