import React, { useState, useRef, useEffect, Fragment } from "react";
import "react-multiple-select-dropdown-lite/dist/index.css";
import './Add.css';
import Container from 'react-bootstrap/Container';


function Add(props) {

  //Setting up the state vars
  const [disabled, cDisabled] = useState(false);
  const [fields, setFields] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  //creating state for the visability of each form sections
  const [visible, setVisible] = useState(true);
  const [visibleq, setVisibleq] = useState(false);
  const [visiblecd, setVisiblecd] = useState(false);
  
  // Allow a user to insert an image of themsleves
  const handleChange = (e) => {
    console.log(e.target.value)
    const newState = {...fields}
    newState[e.target.name] = e.target.value;
    setFields(newState);
  };

  //updates the form when submit is clicked
  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentProfile) {
      console.log(fields)
      result = props.client.updateProfile(
        props.currentProfile._id,
        fields.fullName,
        fields.email,
        fields.businessName,
        fields.optin,
        fields.score,
        fields.q1a,
        fields.q1b,
        fields.q1c,
        fields.q1d,
        fields.q1e,
        fields.q2a,
        fields.q2b,
        fields.q2c,
        fields.q2d,
        fields.q2e,
        fields.q3b,
        fields.q3c,
        fields.q3d,
        fields.q3e,
        fields.q4a,
        fields.q4b,
        fields.q4c,
        fields.q4d,
        fields.q4e,
        fields.q5a,
        fields.q5b,
        fields.q5c,
        fields.q5d,
        fields.q5e
        );
    } else {
      result = props.client.addProfile(
        fields.fullName,
        fields.email,
        fields.businessName,
        fields.optin,
        fields.optin,
        fields.score,
        fields.q1a,
        fields.q1b,
        fields.q1c,
        fields.q1d,
        fields.q1e,
        fields.q2a,
        fields.q2b,
        fields.q2c,
        fields.q2d,
        fields.q2e,
        fields.q2a,
        fields.q3b,
        fields.q3c,
        fields.q3d,
        fields.q3e,
        fields.q4a,
        fields.q4b,
        fields.q4c,
        fields.q4d,
        fields.q4e,
        fields.q5a,
        fields.q5b,
        fields.q5c,
        fields.q5d,
        fields.q5e
        );
    }

    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        console.error("error occurred -incorrect input format, please try again");
        cDisabled(false);
        props.refreshList();
      });
  };

//  creates counter
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  
 
  return (
    <>

   {props.currentProfile ? "" : ""}
    <br />

      {visible &&

      <Container className = "Container">

        <button onClick={(e) => { setVisibleq(true); setVisiblecd(true); setCounter(60)}}>Start Quiz</button>
                   
        <form id="addForm">

          <div className = "addForm">

              <div className="form-col-one">

                {/* Customer Detials    */}
                 Full Name:&nbsp;&nbsp;
                    <textarea className = "inputForm" type="text" rows="1" defaultValue={props.currentProfile?.fullName} name="fullName" onChange={(e) => handleChange(e)} disabled={disabled}/>
                  <br />  

                  Email:&nbsp;&nbsp;  
                    <textarea className = "inputForm" type="text" rows="1" defaultValue={props.currentProfile?.email} name="email" onChange={(e) => handleChange(e)} disabled={disabled}/>     
                  <br />

                  Business Name (Optional):&nbsp;&nbsp;              
                    <textarea className = "inputForm" type="text" cols="35" rows="1" defaultValue={props.currentProfile?.businessName} name="businessName" onChange={(e) => handleChange(e)} disabled={disabled}/>       
                  <br /> 

                  Please send the lastest news from Seven Hills Creative&nbsp;&nbsp;
                  <input className = "inputForm" type="radio" value = "Yes" defaultValue={props.currentProfile?.optin}  name="optin" onChange={(e) => handleChange(e)} disabled={disabled}/>    
                  <br />
                  <br />
                  <br />
               
              <div>

{visibleq && 
                
                <div className = "Questions">  

                  <div>Countdown: {counter}</div>
                                                                                                                             
                        {/* Question 1    */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                onClick={() => setIsActive1(!isActive1)}
                              >
                                <div>SECURITY</div>
                                <div>{isActive1 ? '-' : '+'}</div>
                              </div>
                              {isActive1 && <div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                  <div className=" col-sm-3" >
                                    <input type="checkbox" id="a1" value="1"  defaultValue={props.currentProfile?.q1a}  name="q1a" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label  className="text-center"> &nbsp; a. SSL Certificate</label>
                                  </div>
                              
                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a2" value="1" defaultValue={props.currentProfile?.q1b}  name="q1b" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; b. Strong Passwords</label>
                                  </div>

                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a3" value="0" defaultValue={props.currentProfile?.q1c}  name="q1c" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; c. Chain around your laptop</label>
                                  </div>

                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a4" value="1" defaultValue={props.currentProfile?.q1d}  name="q1d" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; d. 2 Factor Authentication</label>
                                  </div>

                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a5" value="0" defaultValue={props.currentProfile?.q1e}  name="q1e" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; d. Regular Backups</label>
                                    <br></br>
                                  </div>

                                </div>                               

                                </div>}
                            </div>
                          </div>
                        </Fragment>
                                  
                        {/* Question 2     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                onClick={() => setIsActive2(!isActive2)}
                              >
                                <div>EASE OF USE</div>
                                <div>{isActive2 ? '-' : '+'}</div>
                              </div>
                              {isActive2 && <div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                <div className=" col-sm-3" >
                              <input type="checkbox" id="a1" value="1" defaultValue={props.currentProfile?.q2a}  name="q2a" onChange={(e) => handleChange(e)} disabled={disabled}/>
                              <label for="a1" className="text-center"> &nbsp; a. SSL Certificate</label>
                            </div>
                        
                            <div className=" col-sm-3">
                              <input type="checkbox" id="a2" value="1" defaultValue={props.currentProfile?.q2b}  name="q2b" onChange={(e) => handleChange(e)} disabled={disabled}/>
                              <label for="a2" className="text-center"> &nbsp; b. Strong Passwords</label>
                            </div>

                            <div className=" col-sm-3">
                              <input type="checkbox" id="a3" value="0" defaultValue={props.currentProfile?.q2c}  name="q2c" onChange={(e) => handleChange(e)} disabled={disabled}/>
                              <label for="a3" className="text-center"> &nbsp; c. Chain around your laptop</label>
                            </div>

                            <div className=" col-sm-3">
                              <input type="checkbox" id="a4" value="1" defaultValue={props.currentProfile?.q2d}  name="q2d" onChange={(e) => handleChange(e)} disabled={disabled}/>
                              <label for="a4" className="text-center"> &nbsp; d. None of the above</label>
                            </div>

                            <div className=" col-sm-3">
                              <input type="checkbox" id="a5" value="0" defaultValue={props.currentProfile?.q2e}  name="q2e" onChange={(e) => handleChange(e)} disabled={disabled}/>
                              <label for="a5" className="text-center"> &nbsp; d. None of the above</label>
                            </div>                
                                </div>                               

                                </div>}
                            </div>
                          </div>
                        </Fragment>
                    
                        {/* Question 3     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                onClick={() => setIsActive3(!isActive3)}
                              >
                                <div>PLAN</div>
                                <div>{isActive3 ? '-' : '+'}</div>
                              </div>
                              {isActive3 && <div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                <div className=" col-sm-3" >
                                    <input type="checkbox" id="a1" value="1" defaultValue={props.currentProfile?.q3a}  name="q3a" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label for="a1" className="text-center"> &nbsp; a. SSL Certificate</label>
                                  </div>
                              
                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a2" value="1" defaultValue={props.currentProfile?.q3b}  name="q3b" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label for="a2" className="text-center"> &nbsp; b. Strong Passwords</label>
                                  </div>

                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a3" value="0" defaultValue={props.currentProfile?.q3c}  name="q3c" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label for="a3" className="text-center"> &nbsp; c. Chain around your laptop</label>
                                  </div>

                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a4" value="1" defaultValue={props.currentProfile?.q3d}  name="q3d" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label for="a4" className="text-center"> &nbsp; d. None of the above</label>
                                  </div>

                                  <div className=" col-sm-3">
                                    <input type="checkbox" id="a5" value="0" defaultValue={props.currentProfile?.q3e}  name="q3e" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label for="a5" className="text-center"> &nbsp; d. None of the above</label>
                                  </div>

                                </div>                               

                                </div>}
                            </div>
                          </div>
                        </Fragment>
                    
                        {/* Question 4     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                onClick={() => setIsActive4(!isActive4)}
                              >
                                <div>BUILT RIGHT</div>
                                <div>{isActive4 ? '-' : '+'}</div>
                              </div>
                              {isActive4 && <div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                <div className=" col-sm-3" >
                                  <input type="checkbox" id="a1" value="1" defaultValue={props.currentProfile?.q4a}  name="q4a" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a1" className="text-center"> &nbsp; a. SSL Certificate</label>
                                </div>
                            
                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a2" value="1" defaultValue={props.currentProfile?.q4b}  name="q4b" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a2" className="text-center"> &nbsp; b. Strong Passwords</label>
                                </div>

                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a3" value="0" defaultValue={props.currentProfile?.q4c}  name="q4c" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a3" className="text-center"> &nbsp; c. Chain around your laptop</label>
                                </div>

                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a4" value="1" defaultValue={props.currentProfile?.q4d}  name="q4d" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a4" className="text-center"> &nbsp; d. None of the above</label>
                                </div>

                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a5" value="0" defaultValue={props.currentProfile?.q4e}  name="q4e" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a5" className="text-center"> &nbsp; d. None of the above</label>
                                </div>

                                </div>                               

                                </div>}
                            </div>
                          </div>
                        </Fragment>
                      
                        {/* Question 5     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                onClick={() => setIsActive5(!isActive5)}
                              >
                                <div>GREAT DESIGN</div>
                                <div>{isActive5 ? '-' : '+'}</div>
                              </div>
                              {isActive5 && <div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                <div className=" col-sm-3" >
                                  <input type="checkbox" id="a1" value="1" defaultValue={props.currentProfile?.q5a}  name="q5a" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a1" className="text-center"> &nbsp; a. SSL Certificate</label>
                                </div>
                            
                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a2" value="1" defaultValue={props.currentProfile?.q5b}  name="q5b" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a2" className="text-center"> &nbsp; b. Strong Passwords</label>
                                </div>

                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a3" value="0" defaultValue={props.currentProfile?.q5c}  name="q5c" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a3" className="text-center"> &nbsp; c. Chain around your laptop</label>
                                </div>

                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a4" value="1" defaultValue={props.currentProfile?.q5d}  name="q5d" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a4" className="text-center"> &nbsp; d. None of the above</label>
                                </div>

                                <div className=" col-sm-3">
                                  <input type="checkbox" id="a5" value="0" defaultValue={props.currentProfile?.q5e}  name="q5e" onChange={(e) => handleChange(e)} disabled={disabled}/>
                                  <label for="a5" className="text-center"> &nbsp; d. None of the above</label>
                                </div>              

                                </div>                               

                                </div>}
                            </div>
                          </div>
                        </Fragment>

                        {/* Score:&nbsp;&nbsp;              
                        <textarea className = "inputForm" type="text" cols="35" rows="1" defaultValue={score} name="score" onChange={(e) => handleChange(e)} disabled={disabled}/>       
                        <br />      */}

                                                          
                        <div className = "submit2 ">
                          <button className = "updatebutton" type="submit" onClick={(e) => {submitHandler(e); setVisible(); setVisibleq(); }} disabled={disabled}>{" "}Submit{" "}</button>
                        </div>
                       
                </div> 
       
              }          

               
              </div>
          
              </div>
          </div>

        </form>
       
      </Container>
 
      }

    </>
  );
};

export default Add;

