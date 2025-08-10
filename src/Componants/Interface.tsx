
import "tailwindcss";
import {Header} from './header/header.js';
import { NavBar } from './navBar/NavBar.js';
import { ListExtensions } from './listExtensions/ListExtensions.js';
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
   

