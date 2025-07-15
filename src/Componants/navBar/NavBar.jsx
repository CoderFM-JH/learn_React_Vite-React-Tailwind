
import styles from "./NavBar.module.css";
import { useState } from 'react';

// function NavBar () {
//   return(
//     <>
//       <Interface />
//     </>
//   );
// }
  
// export default NavBar;

export const NavBar = () => {
  

  return(
    <>
      <div className="pt-2 mb-3 mt-5 mx-10 rounded-xl" >
        <div className="flex justify-between ">
          <div>
            <h1 className="text-2xl mx-5 font-bold" >Extensions List</h1>
          </div>
          <div type="radio" className="flex text-sm m-2 text-white appearance-none forced-colors:appearance-auto ">
            <button id="1" type="radio" name="radio-4"  aria-label="Radio" className={` btn-neutral btn-outline flex mx-2 rounded-xl h-6 px-3 bg-gray-700  ${styles.buttonN} `} >All</button> {/* ${styles.buttonN} */}
            <button id="2" type="radio" name="radio-4"  aria-label="Radio" className={` btn-neutral btn-outline flex mx-0 rounded-xl h-6 px-3 bg-gray-700  ${styles.buttonN} `}>Active</button>
            <button id="3" type="radio" name="radio-4"  aria-label="Radio" className={` btn-neutral btn-outline flex mx-2 rounded-xl h-6 px-3 bg-gray-700  ${styles.buttonN} `}>Inactive</button>
          </div>
        </div>
      </div>
      
    </>
  );
}

//" rounded-full shadow-md"


