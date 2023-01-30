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
    // console.log(response.data);
    cProfiles(response.data.sort((a, b) => b.score - a.score))
    // console.log(response.data.sort((a, b) => a.fullName.localeCompare(b.fullName))) 
      
    }
    ) 
  };


 const updateProfile = (profiles) => {
    cProfiles(profiles);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const NewGrad = () => {

    return profiles.map((current) => {

      const fname = current.fullName;
      const scores = current.score;

      return (
        <div className="gradProfile" key={current._id}>
            <div className = "gradCard">
              <div className="topLeft">  

                <h3>Full Name: {fname} </h3>  
                <h3>Score: {scores} </h3>                    

              </div>                                                                      
            </div>
            <br></br> 
                     
        </div>
                
      );
    });
  };

  // console.log(NewGrad());

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

        {/* /****Column 2 - Name, details and 2 tabs******************************************************************/}      
      
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


