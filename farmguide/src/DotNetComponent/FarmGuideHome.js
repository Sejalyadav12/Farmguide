import React from 'react';
// import { Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../photos/Welcome.jpg"

const FarmGuideHomePage = () => {
  const myStyle = {
    backgroundImage:`url(${background})`,
    height: "97.5vh",
    marginTop: "-7px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div style={myStyle}>
      {/* <span className="mt-4">
        <Row>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh'
        }}>
            <h1 >Welcome to FarmGuide<br/><br/> <h4>Your one-stop destination for buying and selling fresh crops directly from the farm.</h4></h1>
           
        </div>
        </Row>
      </span> */}
    </div>
  );
}

export default FarmGuideHomePage;