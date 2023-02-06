import React, { useState, useRef, useEffect, Fragment } from "react";
import "react-multiple-select-dropdown-lite/dist/index.css";
import './Add.css';
import Container from 'react-bootstrap/Container';
import $, { nodeName } from 'jquery';

function Add(props) {

  //Setting up the state vars
  const [disabled, cDisabled] = useState(false);
  const [fields, setFields] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  // Allow a user to insert an image of themsleves
  const handleChange = (e) => {

    if( fields.q1a || fields.q1b || fields.q1c || fields.q1d || fields.q1e ||
        fields.q2a || fields.q2b || fields.q2c || fields.q2d || fields.q2e ||
        fields.q3a || fields.q3b || fields.q3c || fields.q3d || fields.q3e ||
        fields.q4a || fields.q4b || fields.q4c || fields.q4d || fields.q4e ||
        fields.q5a || fields.q5b || fields.q5c || fields.q5d || fields.q5e) {
      
      // console.log(e.target.name);    

      if (e.target.checked) {
        const newState = {...fields}
        newState[e.target.name] = e.target.value;
        setFields(newState);
        console.log(e.target.value)
        console.log(e.target.name)

      } else {        
        const newState = {...fields}
        newState[e.target.name] = '0'
        setFields(newState);
      }
  
    } else {
      console.log(e.target.value)
      // console.log(e.target.name)
      const newState = {...fields}
      newState[e.target.name] = e.target.value;
      setFields(newState);
    }
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
        fields.score=(fields.q1a ? (Number(fields.q1a)) : (0))+
                     (fields.q1b ? (Number(fields.q1b)) : (0))+
                     (fields.q1c ? (Number(fields.q1c)) : (0))+
                     (fields.q1d ? (Number(fields.q1d)) : (0))+
                     (fields.q1e ? (Number(fields.q1e)) : (0))+

                     (fields.q2a ? (Number(fields.q2a)) : (0))+
                     (fields.q2b ? (Number(fields.q2b)) : (0))+
                     (fields.q2c ? (Number(fields.q2c)) : (0))+
                     (fields.q2d ? (Number(fields.q2d)) : (0))+
                     (fields.q2e ? (Number(fields.q2e)) : (0))+

                     (fields.q3a ? (Number(fields.q3a)) : (0))+
                     (fields.q3b ? (Number(fields.q3b)) : (0))+
                     (fields.q3c ? (Number(fields.q3c)) : (0))+
                     (fields.q3d ? (Number(fields.q3d)) : (0))+
                     (fields.q3e ? (Number(fields.q3e)) : (0))+

                     (fields.q4a ? (Number(fields.q4a)) : (0))+
                     (fields.q4b ? (Number(fields.q4b)) : (0))+
                     (fields.q4c ? (Number(fields.q4c)) : (0))+
                     (fields.q4d ? (Number(fields.q4d)) : (0))+
                     (fields.q4e ? (Number(fields.q4e)) : (0))+

                     (fields.q5a ? (Number(fields.q5a)) : (0))+
                     (fields.q5b ? (Number(fields.q5b)) : (0))+
                     (fields.q5c ? (Number(fields.q5c)) : (0))+
                     (fields.q5d ? (Number(fields.q5d)) : (0))+
                     (fields.q5e ? (Number(fields.q5e)) : (0)),                       
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
        fields.q3a,
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
    //const timerId = window.setTimeout(() => {submitHandler(e); setVisible(); setVisibleq();}, 5000) ;   
    return () => clearInterval(timer);
  }, [counter]);


  var limit = 3;
  $('input.single-checkbox1').on('change', function(evt) {
     if($(this).siblings(':checked').length >= limit) {
         this.checked = false;
     }
  });

  $('input.single-checkbox2').on('change', function(evt) {
     if($(this).siblings(':checked').length >= limit) {
         this.checked = false;
     }
  });

  $('input.single-checkbox3').on('change', function(evt) {
     if($(this).siblings(':checked').length >= limit) {
         this.checked = false;
     }
  });

  $('input.single-checkbox4').on('change', function(evt) {
     if($(this).siblings(':checked').length >= limit) {
         this.checked = false;
     }
  });

  $('input.single-checkbox5').on('change', function(evt) {
     if($(this).siblings(':checked').length >= limit) {
         this.checked = false;
     }
  });

    //creating state for the visability of each form sections
    const [visible, setVisible] = useState(true);
    const [visibleq, setVisibleq] = useState(false);
    const [visiblecd, setVisiblecd] = useState(true);
    const [show, setShow] = useState(true);

return (
    <>

   {props.currentProfile ? "" : ""}
    <br />

{visible &&

<Container className = "Container">

        <h1 className="add-title">Start Quiz</h1>

        {show &&
          <button disabled={!fields.fullName} className ="createNewButton start-button" onClick={(e) => {setVisibleq(true); setVisiblecd(false); setCounter(60); setShow(false)}} >Let's Go</button>
        }   

<form id="addForm">

          <div className = "addForm">

{visiblecd &&

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

                  Yes, Please send the lastest news from Seven Hills Creative
                  <input className = "inputFormr" type="radio" value = "Yes" defaultValue={props.currentProfile?.optin} id="radio" name="optin" onChange={(e) => handleChange(e)} disabled={disabled}/>    
                  <br /> 
                  </div>
                }  
                  <p className = "task">Please select the <strong>TOP 3 MOST IMPORTANT</strong> factors per category, that you think makes a great website!</p>  
                               
            


{visibleq && 
                
                <div className = "Questions">  

                  <div className ="countdown"> {counter}</div>
                                                                                                                             
                        {/* Question 1    */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                // onClick={() => setIsActive1(!isActive1)}
                              >
                                <div>SECURITY</div>
                                {/* <div>{isActive1 ? '-' : '+'}</div> */}
                              </div>
                              <div className="accordion-content">
                                
                                <div className= "row answers">
                                  <div className=" col-sm-3" >              

                                    <input className = "single-checkbox1" type="checkbox" name="q1a" id="q1a" value = "5" defaultValue={props.currentProfile?.q1a} onChange={(e) => handleChange(e)} disabled={disabled}/>                                   
                                    <label  className="text-center"> &nbsp; a. HTTPS</label>
                                   
                                    <br /> 
                                    <input className = "single-checkbox1" type="checkbox"  name="q1b" id="q1b" value="3" defaultValue={props.currentProfile?.q1b} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; b. Strong Passwords</label>
                                    <br/> 

                                    <input className = "single-checkbox1" type="checkbox" name="q1c" id="q1c" value="4" defaultValue={props.currentProfile?.q1c} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; c. Multi-Factor Authentication</label>
                                    <br />

                                    <input className = "single-checkbox1" type="checkbox"  name="q1d" id="q1d" value="2" defaultValue={props.currentProfile?.q1d} onChange={(e) => handleChange(e)} disabled={disabled}/>                                
                                    <label className="text-center"> &nbsp; d. Security Headers</label>
                                    <br /> 

                                    <input className = "single-checkbox1" type="checkbox"  name="q1e" id="q1e" value="1" defaultValue={props.currentProfile?.q1e} onChange={(e) => handleChange(e)} disabled={disabled}/>                                   
                                    <label className="text-center"> &nbsp; e. Keep the site backed up and up to date</label>
                                    <br /> 
                                  </div>

                                </div>                               

                                </div>
                            </div>
                          </div>
                        </Fragment>
                                  
                        {/* Question 2     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                // onClick={() => setIsActive2(!isActive2)}
                              >
                                <div>EASE OF USE</div>
                                {/* <div>{isActive2 ? '-' : '+'}</div> */}
                              </div>
                              <div className="accordion-content">
                                
                              <div className= "row answers">
                                <div className=" col-sm-3" >

                                <input className = "single-checkbox2" type="checkbox" name="q2a" id="q2a" value="3" defaultValue={props.currentProfile?.q2a} onChange={(e) => handleChange(e)} disabled={disabled}/>                            
                                <label className="text-center"> &nbsp; a. Accessible</label>
                                <br></br>

                                <input className = "single-checkbox2" type="checkbox" name="q2b" id="q2b" value="5" defaultValue={props.currentProfile?.q2b} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                <label className="text-center"> &nbsp; b. Clear Navigation</label>
                                <br></br>

                                <input className = "single-checkbox2" type="checkbox" name="q2c" id="q2c" value="4" defaultValue={props.currentProfile?.q2c} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                <label className="text-center"> &nbsp; c. Intuitive</label>
                                <br></br>

                                <input className = "single-checkbox2" type="checkbox" name="q2d" id="q2d" value="2" defaultValue={props.currentProfile?.q2d} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                <label className="text-center"> &nbsp; d. Easy to Edit</label>
                              <br></br>

                                <input className = "single-checkbox2" type="checkbox" name="q2e" id="q2e" value="1" defaultValue={props.currentProfile?.q2e} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                <label className="text-center"> &nbsp; e. Great User Journeys</label>
                              </div>                
                                </div>                               

                                </div>
                            </div>
                          </div>
                        </Fragment>
                    
                        {/* Question 3     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                // onClick={() => setIsActive3(!isActive3)}
                              >
                                <div>EFFECTIVE PLANNING</div>
                                {/* <div>{isActive3 ? '-' : '+'}</div> */}
                              </div>
                              <div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                  <div className=" col-sm-3" >
                                    <input className = "single-checkbox3" type="checkbox" name="q3a" id="q3a" value="4" defaultValue={props.currentProfile?.q3a} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; a. Great content that meets your marketing plan</label>
                                    <br />

                                    <input className = "single-checkbox3" type="checkbox" name="q3b" id="q3b" value="3" defaultValue={props.currentProfile?.q3b} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; b. Creates efficiencies or automates your business</label>
                                    <br />

                                    <input className = "single-checkbox3" type="checkbox" name="q3c" id="q3c" value="5" defaultValue={props.currentProfile?.q3c} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; c. Delivers against your business goals and target audience</label>
                                    <br />

                                    <input className = "single-checkbox3" type="checkbox" name="q3d" id="q3d" value="2" defaultValue={props.currentProfile?.q3d} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; d. Clear hierarchy</label>
                                    <br />
                                    
                                    <input className = "single-checkbox3" type="checkbox" name="q3e" id="q3e" value="1" defaultValue={props.currentProfile?.q3e} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; e. Has analytical tools to measure success</label>
                                  </div>

                                </div>                               

                              </div>
                            </div>
                          </div>
                        </Fragment>
                    
                        {/* Question 4     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                // onClick={() => setIsActive4(!isActive4)}
                              >
                                <div>FLAWLESS BUILD</div>
                                {/* <div>{isActive4 ? '-' : '+'}</div> */}
                              </div>
                              <div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                  <div className=" col-sm-3" >
                                    <input className = "single-checkbox4" type="checkbox" name="q4a" id="q4a" value="1" defaultValue={props.currentProfile?.q4a} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; a. Not a page builder in site</label>
                                    <br></br>

                                    <input className = "single-checkbox4" type="checkbox" name="q4b" id="q4b" value="4" defaultValue={props.currentProfile?.q4b} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; b. Great performance</label>
                                    <br></br>

                                    <input className = "single-checkbox4" type="checkbox" name="q4c" id="q4c" value="5" defaultValue={props.currentProfile?.q4c} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; c. Developed not "just designed"</label>
                                    <br></br>

                                    <input className = "single-checkbox4" type="checkbox" name="q4d" id="q4d" value="3" defaultValue={props.currentProfile?.q4d} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; d. Meets coding standards</label>
                                    <br></br>
                                    
                                    <input className = "single-checkbox4" type="checkbox" name="q4e" id="q4e" value="2" defaultValue={props.currentProfile?.q4e} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; e. Uses up to date frameworks</label>
                                  </div>

                                </div>                               

                              </div>
                            </div>
                          </div>
                        </Fragment>
                      
                        {/* Question 5     */}
                        <Fragment>
                          <div className="accordion">
                            <div className="accordion-item">
                              <div
                                className="accordion-title"
                                // onClick={() => setIsActive5(!isActive5)}
                              >
                                <div>BEAUTIFUL DESIGN</div>
                                {/* <div>{isActive5 ? '-' : '+'}</div> */}
                              </div>
                              {/*{isActive5 && */}<div className="accordion-content">
                                
                                <div className= "row answers">
                        
                                  <div className=" col-sm-3" >
                                    <input className = "single-checkbox5" type="checkbox" name="q5a" id="q5a" value="3" defaultValue={props.currentProfile?.q5a} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; a. Clear and simple</label>
                                    <br></br>

                                    <input className = "single-checkbox5" type="checkbox" name="q5b" id="q5b" value="1" defaultValue={props.currentProfile?.q5b} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; b. Consistent</label>
                                    <br></br>

                                    <input className = "single-checkbox5" type="checkbox" name="q5c" id="q5c" value="5" defaultValue={props.currentProfile?.q5c} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; c. Clear branding</label>
                                    <br></br>

                                    <input className = "single-checkbox5" type="checkbox" name="q5d" id="q5d" value="4" defaultValue={props.currentProfile?.q5d} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; d. Aesthetically pleasing</label>
                                    <br></br>
                                    
                                    <input className = "single-checkbox5" type="checkbox"name="q25e" id="q5e" value="2" defaultValue={props.currentProfile?.q5e} onChange={(e) => handleChange(e)} disabled={disabled}/>
                                    <label className="text-center"> &nbsp; e. Clear call to actions</label>
                                  </div>              

                                </div>                               

                              </div>{/*}*/}
                            </div>
                          </div>
                        </Fragment>
                                           
                        <div className = "submit2 ">
                          <button className = "createNewButton" type="submit" onClick={(e) => {submitHandler(e); setVisible(); setVisibleq();}} disabled={disabled}>{" "}Submit{" "}</button>
                        </div>
               
                </div> 
       
}                         
          </div>
          
</form>
       
</Container>
 
}

    </>
  );
};

export default Add;

