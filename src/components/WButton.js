
import React from "react";

const WButton = ({ className, onClick, type, children }) => (
    <button className= {className} onClick={onClick} type={type}>{children}</button>
 );

export default  WButton