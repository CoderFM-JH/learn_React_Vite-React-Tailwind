
import "tailwindcss";
import {Header} from './header/header.jsx'
import { NavBar } from './navBar/NavBar.jsx';
import { ListExtensions } from './listExtensions/ListExtensions.jsx'

export const Interface = () => {
   return(
      <>
         
         <Header />
         <NavBar />
         <ListExtensions />
      </>
   );
}
   

