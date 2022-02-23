import React from 'react'
import Fade from 'react-reveal/Fade'

export default function TimeLine() {
  return (
//    <Fade left>
<div class="container">
    <ul>
      <li><span></span>
        <div>
          <div class="title">Blueprint Submission</div>
          <div class="info">The first step of getting your course published is emailing us a blueprint of it.</div>
         
        </div> <span class="number"><span>1</span> <span>1.5</span></span>
      </li>
      <li>
        <div><span></span>
          <div class="title">Approval</div>
          <div class="info">The second step is to get your blueprint approved, once you have emailed it to us we will reach out to you if we approve of it.</div>
  
        </div> <span class="number"><span>1.75</span> <span>2</span></span>
      </li>
      <li>
        <div><span></span>
          <div class="title">Creation</div>
          <div class="info"></div>This is the fun part, Once your blueprint gets approved we will start working on the course content with you. 
          
        </div> <span class="number"><span>2.5</span> <span>2.75</span></span>
      </li>
      <li>
        <div><span></span>
          <div class="title">Publishing</div>
          <div class="info">Once your course  content is all prepared , get ready for the actual show as we put it live on Nexum.</div>
          
        </div> <span class="number"><span>3</span> <span>3.5</span></span>
      </li>
    </ul>
  </div>
//   
)
}
