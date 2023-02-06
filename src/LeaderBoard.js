import React, { useState, useRef, useEffect} from "react";

import TDAGradSearch from "./TDAGradSearch";

class Leaderboard extends React.Component {

  state = {
    arr: cProfiles()
  }

  atoz() {

    this.setState(this.state.arr.sort(function(a,b)
    {
      return a.localeCompare(b)
    }
    ))
  }

  render()
  {
    return(
    <div>
      <center>
        <strong>{this.state.arr}</strong>
      </center>
    </div>
    )
  }


}
export default Leaderboard;