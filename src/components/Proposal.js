import React from "react";
import "./Proposal.css";

function Proposal(props) {
  return (
      <div class="basic-card basic-card-light">
        <div class="card-content">
          <span class="card-title">Proposal Title</span>
          <p class="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div class="card-link">
          <button className="button button2">yes</button>
          <button className="button button4">no</button>
        </div>
      </div>
  );
}

export default Proposal;
