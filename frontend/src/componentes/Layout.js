import React from "react";
import Header1 from "../componentes/Header1";

function Layout (props){
 return (
   <>
   <Header1/>
   {props.children}
   </>
 )

}
export default Layout;