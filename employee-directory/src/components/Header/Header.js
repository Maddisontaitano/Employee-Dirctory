import React from "react";
 import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Employee Directory</h1>
      <p>
        The perfect way to look up the employee you've heard so much about!
         Wondering where they are located or want to put a face to the name? 
         Simply type in the name of the employee, and the other cards will be 
         quickly eliminated to show you the employee you're looking for! 
      </p>
    </div>
  );
}
export default Header;