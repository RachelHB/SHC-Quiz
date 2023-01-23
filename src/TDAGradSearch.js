import React, { useState, useRef, useEffect} from "react";
import './App.css';
import './TDAGradSearch.css';
import './Login.css';
import './Navigation.css';
import './Buttons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Add from './Add';
import logo from "./TDA Logo.jpg";

function TDAGradSearch(props) {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [visibleOutput, setVisibleOutput] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);

  const refreshList = () => {
    props.client.getProfiles().then((response) => {
    // console.log(response.data)
    cProfiles(response.data);
    })
  };

  const updateProfile = (profiles) => {
    cProfiles(profiles);
  };

  useEffect(() => {
    refreshList();
  }, []);


const NewGrad = () => {

    return profiles.map((current) => {

      const scores =  (current.q1a ? ( Number(current.q1a) ) : (0))  + (current.q1b ?  ( Number(current.q1b) ) : (0)) + (current.q1c ?  ( Number(current.q1c) ) : (0)) + (current.q1d ? ( Number(current.q1d) ) : (0))  + (current.q1e ?  ( Number(current.q1e) ) : (0)) +

      (current.q2a ? ( Number(current.q2a) ) : (0))  + (current.q2b ?  ( Number(current.q2b) ) : (0)) + (current.q2c ?  ( Number(current.q2c) ) : (0)) + (current.q2d ? ( Number(current.q2d) ) : (0))  + (current.q2e ?  ( Number(current.q2e) ) : (0)) +

      (current.q3a ? ( Number(current.q3a) ) : (0))  + (current.q3b ?  ( Number(current.q3b) ) : (0)) + (current.q3c ?  ( Number(current.q3c) ) : (0)) + (current.q3d ? ( Number(current.q3d) ) : (0))  + (current.q3e ?  ( Number(current.q3e) ) : (0)) +

      (current.q4a ? ( Number(current.q4a) ) : (0))  + (current.q4b ?  ( Number(current.q4b) ) : (0)) + (current.q4c ?  ( Number(current.q4c) ) : (0)) + (current.q4d ? ( Number(current.q4d) ) : (0))  + (current.q4e ?  ( Number(current.q4e) ) : (0)) +

      (current.q5a ? ( Number(current.q5a) ) : (0))  + (current.q5b ?  ( Number(current.q5b) ) : (0)) + (current.q5c ?  ( Number(current.q5c) ) : (0)) + (current.q5d ? ( Number(current.q5d) ) : (0))  + (current.q5e ?  ( Number(current.q5e) ) : (0));
   
      const fname =  current.fullName ;

      // var numArray = [scores];
      // numArray.sort((a,b) => a.scores - b.scores);
      // console.log(numArray);

      // let arr1 = [numArray[0]];
      // let arr2 = [numArray[1]];
      // let arr3 = [numArray[2]];
      // arr1.push(...arr3);
      // console.log(arr1)

      // var numArray = [{scores:10}, {scores:6}, {scores:3}];
      // numArray.sort((a,b) => a.scores - b.scores);
      // console.log(numArray);

      return (
        <div className="gradProfile" key={current._id}>
            <div className = "gradCard">
              <div className="topLeft">  

                <h3>Full Name:</h3>                       
                {fname} 
                
                <h3>Score</h3>
                {scores} 

              </div>                                                                      
            </div>
            <br></br> 
                     
        </div>
                
      );
    });
  };

  const arr = [NewGrad()];
  arr.sort((a,b) => b.scores - a.scores);
  console.log(arr);

  console.log(NewGrad()); //its only returning the values and not the variables

  // const numArray = [NewGrad.scores];
  // numArray.sort((a,b) => a.scores - b.scores);
  // console.log(numArray);

  // var numArray = [{scores:10}, {scores:6}, {scores:3}];
  // numArray.sort((a,b) => a.scores - b.scores);
  // console.log(numArray);

return (
    <>

      {/* /****Navigation Bar*****************************************************************************************************/}
          
      <Navbar  className = "header col-md-12">
        <Container >
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="140"
              height="140"
              // className="d-inline-block align-top"
              alt="TDA logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>


      {/* /****Main Container*****************************************************************************/}

      <Container fluid className = " row mainFrame col-md-12">

         {/* /****Column 1 - Seven Hills Creative Info******************************************************************/}
      
        <div className ="leftPannel col-md-4">     
          <Row>
            <h1 className="tda"> SEVEN
              <br></br>HILLS 
              <br></br>CREATIVE
            </h1>

            {/*create a new Gradute */}
            <div className="innerLeftPannel">             
  
              Contact Us ...
                  
            </div>
          </Row>
        </div>
      
        {/* /****Column 1 - Quiz Links******************************************************************/}
      
        <div className =" leftPannel col-md-4">
     
          <Row>
            <h1 className="tda"> Take Our Quiz</h1>

                {/*create a new Gradute */}
                <div className="innerLeftPannel">             
                  
                  <button className = "createNewButton"  onClick={() => {updateProfile(current); setVisibleInput(false); setVisibleOutput(true)}}> Have a Go!</button>          

                </div>

          </Row>

          <br></br>

        </div>

        {/* /****Column 2 - Name, details and 2 tabs***************************************************************************************************************/}      
      
        <div className = "col-md-10">

            {/* /****Column 2/1 - User Input form**********************************************************************/}  

            <Container className = "rightSection col-md-4">

              {visibleOutput && 
                                
                    <div className = "editProfile">

                      <Add
                        client={props.client}
                        refreshList={() => {
                          refreshList();
                          cProfiles(undefined);
                          window.location.reload(true) 
                        }}
                        currentProfile={profiles}
                      />
                    </div>

                }


              {/* /****Column 2/2 - Profile Display table***************************************************************************/}    
              <div className = "newGradDisplay col-md-4">

                {visibleInput &&  

                <div>
                  
                  Leader Board
                 
                  {NewGrad()}

                     
              </div>                              

                } 
              
              </div>     
              
            </Container>

        </div>
         
      </Container>
        
    </>
  );
}

export default TDAGradSearch;


