import {Link} from "react-router-dom";

const Success = () => {
  return (
    <>
    <nav>
        <button className="btn"><Link to="/*"> Home</Link></button>
      </nav>
    <h2 className="success-control"> Thank You. </h2><br/>
    <h3 className="success-control">Your Form have been submitted successfully.</h3>
    <p className="success-control"> (you will get an email with further instructions)</p>
    </>
  )
}

export default Success