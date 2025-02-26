/*----------------------------------------------------------------------
Author: Tytrez Dixon 
Date Written: 2/23/2025
Date Updated: _________

This is the .css file which provides part of the styling for the 
"Approve Sales/Orders" webpage for Mr.Tucker's Car Dealership. 
-----------------------------------------------------------------------*/

/* This class provides the styling for the "Approve" button. */
.approve {
    cursor: pointer;
    justify-content: center;
    position: absolute;
    content: "Approve ";
  
    width: 5%;
      padding: 3px; 
      background-color:#0c6008;
      color: white; 
      border: none; 
      border-radius: 5px;
      font-size: 18px; 
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: -150px; 
      margin-left: 500px;
}

/* This class provides the styling for the "Approved" button. */
.approved {
    cursor: pointer;
    justify-content: center;
    position: absolute;
    content: "Approved";
  
    width: 4%;
      padding: 3px; 
      background-color:#0c6008;
      color: white; 
      border: none; 
      border-radius: 5px;
      font-size: 18px; 
      cursor: not-allowed;
      transition: background-color 0.3s;
      margin-top: -150px; 
      margin-left: 500px;
}

/* This class provides the styling for the "Approved" button when the 
    "Reject" button is clicked. */
.not-approved {
    cursor: pointer;
    justify-content: center;
    position: absolute;
    content: "Approve";
  
    width: 4%;
      padding: 3px; 
      background-color:grey;
      color: black; 
      border: none; 
      border-radius: 5px;
      font-size: 18px; 
      cursor: not-allowed;
      transition: background-color 0.3s;
      margin-top: -150px; 
      margin-left: 500px;
}

/* This class provides the styling for the "Reject" button.*/
.reject {
    cursor: pointer;
    justify-content: center;
    position: absolute;
    content: "Reject";
  
    width: 4%;
      padding: 3px; 
      background-color: #8f0a0a;
      color: white; 
      border: none; 
      border-radius: 5px;
      font-size: 18px; 
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: -150px; 
      margin-left: 600px;
}

/* This class provides the styling for the "Rejected" button.*/
.rejected {
    cursor: pointer;
    justify-content: center;
    position: absolute;
    content: "Rejected";
  
    width: 4%;
      padding: 3px; 
      background-color:#8f0a0a;
      color: white; 
      border: none; 
      border-radius: 5px;
      font-size: 18px; 
      cursor: not-allowed;
      transition: background-color 0.3s;
      margin-top: -150px; 
      margin-left: 6000px;
}

/* This class provides the styling for the "Reject" button when the 
"Approve" button is clicked.*/
.not-rejected {
    cursor: pointer;
    justify-content: center;
    position: absolute;
    content: "Reject";
  
    width: 4%;
      padding: 3px; 
      background-color: grey;
      color: black; 
      border: none; 
      border-radius: 5px;
      font-size: 18px; 
      cursor: not-allowed;
      transition: background-color 0.3s;
      margin-top: -150px; 
      margin-left: 6000px;
}
