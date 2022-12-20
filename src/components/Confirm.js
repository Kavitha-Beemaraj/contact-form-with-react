import { Link } from "react-router-dom"
import { useContext } from "react"
import { NameContext,AgeContext,EmailContext, MobileContext } from "./FormDetails"
const Confirm = () => {

  const UserName=useContext(NameContext)
  const UserAge=useContext(AgeContext)
  const UserEmail=useContext(EmailContext)
  const UserMobile=useContext(MobileContext)

  return (
    <>
      <h2>Confirm your details:</h2><br/>
        <ol> 
          <li> <strong>NAME:</strong>{UserName}</li>
          <li> <strong>AGE:</strong>{UserAge}</li>
          <li> <strong>E-MAIL ID:</strong>{UserEmail}</li>
          <li > <strong>MOBILE NUMBER :</strong>{UserMobile}</li>
        </ol>
      <button className="btn"><Link to="/form/*">Back</Link></button>

      <button className="btn"><Link to="/success"> Submit</Link></button>
    </>
  )
}

export default Confirm