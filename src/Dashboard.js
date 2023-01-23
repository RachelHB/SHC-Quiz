import React, { useState, useEffect } from "react";
import './App.css';
import './Login.css';
import './Navigation.css';
import './Buttons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Add from './Add';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import logo from "./TDA Logo.jpg";
import LinkedIn from "./LinkedInLogo.png";
import GitHub from "./GitHub Logo.png";
import Portfolio from "./Portfolio.png";

function Dashboard(props) {
  const [profiles, cProfiles] = useState({});
  const [current, cCurrent] = useState(undefined);
  const [visibleOutput, setVisibleOutput] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);
    
  const refreshList = () => {
    props.client.getGradProfile(props.token).then((response) => cProfiles(response.data));
  };

  const updateProfile = (profile) => {
    cCurrent(profile);
  };

  useEffect(() => {
    refreshList();
    console.log(props)
  }, []);


  const section = () => {
      return (
        <div>
          <Card className = "col-md-8">
            <div>

              <div className = "fieldSpace"><strong>Full Name:</strong>   {profiles.fullName}</div>      
              <div className = "fieldSpace"><strong>Business Name (optional)</strong>   {profiles.businessName}</div>
              <div className = "fieldSpace"><strong>Email:</strong> {profiles.email}</div>
              <div className = "fieldSpace"><strong>Optin:</strong> {profiles.optin}</div>
              
            </div>
            </Card>
        </div>
      );

  };

  const section1 = () => {
      return (
        <div>
          <Card className = "col-md-2">
            <div>
              <div className = "fieldSpace"><strong>List of Skills:</strong> {profiles.skills}</div>   
            </div>
          </Card>
        </div>
      );
  };


  const section3 = () => {
      return (
        <div>
          <Card className = "">
              <div className = "add-submit">

                {/* <Button className = "buttonspace updatebutton"  onClick={() => removeProfile (current._id)}> Remove</Button> */}

                <br></br> 
                <Button className = " buttonspace updatebutton"  onClick={() => {updateProfile(profiles); setVisibleInput(false); setVisibleOutput(true)}}> Have a go!</Button>
              </div>
            </Card>
        </div>
      );
  };

  return (
    <Container>

      {/* /****Navigation Bar****************************************************************************************************************************/}
          
      <Navbar  className = "header col-md-12">
        <Container >
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="140"
              height="140"
              alt="TDA logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>


      {/* /****Main Container*********************************************************************************************************************************/}

      <Container fluid className = "mainContainer col-md-12">

       

        {/* /****Column 2 - Name, details and 2 tabs***************************************************************************************************************/}      
      
        <Container className = "column2 col-md-8">

            <div className="userField">
              {/* <Col>{section()}</Col> */}
              <Col>{section3()}</Col>
            </div>

            

        {/* /****Column 2 - User Input form***************************************************************************************************************/}  
        <Container className = "column2Section11 col-md-8">

            {visibleOutput && 

              <Row >
            
                  <Col className = "addForm">
                    <Add
                      client={props.client}
                      refreshList={() => {
                        refreshList();
                        cCurrent(undefined);
                        window.location.reload(true) 
                      }}
                      currentProfile={profiles} />
                  </Col>

              </Row> 
              
            }

          </Container>


            {/* /****Column 2 - Profile Display table***************************************************************************************************************/}   
            <Container className = "column2Section22 col-md-8"> 

              {visibleInput &&  

                <div className = "col1">

                    <Row className="col-md-4">
                      <Col>{section1()}</Col> <br></br>
                    </Row>

                </div>

              }

            </Container> 


        </Container>
    
  {/* /********************************************************************************************************************************/}      
      </Container>
      
{/* /**********************************************************************************************************************/}
    </Container>
  );
}

export default Dashboard;


