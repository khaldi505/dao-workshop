import React, { useState } from "react";
import Header from "./components/Header";
import Proposal from "./components/Proposal";
const Homepage = () => {
    // From where we get the proposals
    // checking login status
    const loginStatus = useState('')
    return (
    <div>
      <Header/>
      <div class="card-category-1">
      <Proposal/>
      <Proposal/>
      <Proposal/>

      </div>
    </div>
  )
}

export default Homepage
