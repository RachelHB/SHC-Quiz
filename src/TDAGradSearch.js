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
import logo from "./Seven-Hills-Logo-RGB.png";

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

                <h3>{fname} </h3>  
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
          
      <Navbar  className = "header ">
        <Container >
          <Navbar.Brand href="#home">
            {/* <img className="logo"
              src={logo}
              width="200"
              height="200"             
              alt="TDA logo"
            /> */}
          </Navbar.Brand>
        </Container>
      </Navbar>


      {/* /****Main Container*****************************************************************************/}

      <Container fluid className = " row mainFrame">

         {/* /****Column 1 - Seven Hills Creative Info******************************************************************/}
      
        <div className ="leftPannel">     
          <Row>
            <h1 className="tda"> Get In Touch With Our Team
            </h1>

            {/*create a new Gradute */}
            <div className="innerLeftPannel">             
  
              <p><strong>Visit: </strong>www.sevenhillscreative.co.uk</p>
              <p><strong>Email: </strong>hello@sevenhillscreative.co.uk</p>
              <p><strong>Call: </strong>0114 398 4121</p>

            <div className ="logo-center">
              <img className="logo"
              src={logo}
              width="200"
              height="200"
              // className="d-inline-block align-top"
              alt="TDA logo"
            /></div>
                  
            </div>
          </Row>
        </div>
      
        {/* /****Column 1 - Quiz Links******************************************************************/}
      
        <div className =" leftPannel">
     
          <Row className="center">
            <h1 className="tda"> Take Our Quiz</h1>

                {/*create a new Gradute */}
                <div className="innerLeftPannel">             
                  
                  <button className = "createNewButton"  onClick={() => {updateProfile(current); setVisibleInput(false); setVisibleOutput(true)}}> Have a Go!</button>       

                </div>

                <div className="quiz-aim">
                  <p>What do you think makes a great website?</p>
                  <br></br>
                  <p>Have a go at our Quiz to win a <strong>bottle of Champagne</strong> and a <strong>free website audit!!</strong></p> 
                </div>  

          </Row>

          <br></br>

        </div>

        {/* /****Column 2 - Name, details and 2 tabs******************************************************************/}      
      
        <div className = "leftpanel">

            {/* /****Column 2/1 - User Input form**********************************************************************/}  

            <Container className = "rightSection ">

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
              {visibleInput &&    

              <div className = "newGradDisplay ">
          
                  <h1 class="tda">Leader Board</h1>                 
    
                  {NewGrad()}               

              </div>   }  
              
            </Container>

        </div>
         
      </Container>
        
    </>
  );
}

export default TDAGradSearch;


