
import "tailwindcss";
import {Header} from './header/header.jsx';
import { NavBar } from './navBar/NavBar.jsx';
import { ListExtensions } from './listExtensions/ListExtensions.jsx';
import { useState } from "react";



export const Interface = () => {
   return(
      <>
         <Header />
         <NavBar />
         <ListExtensions />
      </>
   );
}
   

