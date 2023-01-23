import React, { useState, useEffect} from "react";
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
  const [unfilter, unfilterProfiles] = useState([]);
  const [visibleOutput, setVisibleOutput] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);


  const refreshList = () => {
    props.client.getProfiles().then((response) => {
    // console.log(response.data)
    cProfiles(response.data)
    unfilterProfiles(response.data)             
    })
  };

  const filters = (tech) => {
    // console.log(profiles)
    cProfiles (profiles.filter(profiles => {
      return profiles.fullName.toUpperCase().includes(tech);
        }
    ))
  };

  const rolefilters = (tech) => {
    // console.log(profiles)
    cProfiles (profiles.filter(profiles => {
      return profiles.roles.toUpperCase().includes(tech);
        }
    ))
  };

  const unfilters = () => {
    cProfiles (unfilter);
    document.getElementById("search").value = "";
  };

  const roleunfilters = () => {
    cProfiles (unfilter);
    document.getElementById("searchroles").value = "";
  };

  const removeProfile = (id) => {
    props.client.removeProfile(id).then(() => refreshList());
  };

  const updateProfile = (profile) => {
    cCurrent(profile);
  };

  useEffect(() => {
    refreshList();
  }, []);

  const NewGrad = () => {
    return profiles.map((current) => {
      return (
        <div className="gradProfile" key={current._id}>
            <div className = "gradCard">
              <div className="topLeft">
                
                <h3>Full Name:</h3>                       
                <h4>{current.fullName}</h4>

                {/* Will need score here */}
                <h3>Score</h3>                       
                <h4>{current.fullName}</h4>  
                
              </div>                                                                       
            </div>
            <br></br>    
        </div>
                
      );
    });
  };
  
  


  return (
    <>


      {/* /****Navigation Bar****************************************************************************************************************************/}
          
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


      {/* /****Main Container*********************************************************************************************************************************/}

      <Container fluid className = " row mainFrame col-md-12">
        <div className = "col-md-10">

            <Container className = "rightSection col-md-10">   
              <div className = "col-md-12">                   
                  {NewGrad()}                                     
              </div>                 
            </Container>

        </div>         
      </Container>
        
    </>
  );
}

export default TDAGradSearch;


