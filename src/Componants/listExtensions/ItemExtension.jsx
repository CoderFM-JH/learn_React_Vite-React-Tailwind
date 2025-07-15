
// import { useState } from "react";
import styles from "./ItemExtension.module.css";
// import icon1 from './assets/icon/icon1.png';
// import iconImage from './src/assets/icons/icon1.png';

export const ItemExtension = ( {lesExtensions, editStateExtension, deleteExtension} ) => {

   // lise des extensions

   // const extensions = [
   //    {
   //       id: 1,
   //       icon: "",
   //       name: "Extension 1",
   //       description: "Ceci est une extension de test 1",
   //       state: false,
   //       remove: false
   //    },
   //    {
   //       id: 2,
   //       icon: "",
   //       name: "Extension 2",
   //       description: "Ceci est une extension de test 2",
   //       state: false,
   //       remove: false
   //    },
   //    {
   //       id: 3,
   //       icon: "",
   //       name: "Extension 3",
   //       description: "Ceci est une extension de test 3",
   //       state: false,
   //       remove: false
   //    },
   //    {
   //       id: 4,
   //       icon: "",
   //       name: "Extension 4",
   //       description: "Ceci est une extension de test 4",
   //       state: false,
   //       remove: false
   //    },
   //    {
   //       id: 5,
   //       icon: "",
   //       name: "Extension 5",
   //       description: "Ceci est une extension de test 5",
   //       state: false,
   //       remove: false
   //    },
   //    {
   //       id: 6,
   //       icon: "",
   //       name: "Extension 6",
   //       description: "Ceci est une extension de test 6",
   //       state: false,
   //       remove: false
   //    },
   //    {
   //       id: 7,
   //       icon: "",
   //       name: "Extension 7",
   //       description: "Ceci est une extension de test 7",
   //       state: false,
   //       remove: false
   //    },
   //    {
   //       id: 8,
   //       icon: "",
   //       name: "Extension 8",
   //       description: "Ceci est une extension de test 8",
   //       state: false,
   //       remove: false

   //    },
   //    {
   //       id: 9,
   //       icon: "",
   //       name: "Extension 9",
   //       description: "Ceci est une extension de test 9",
   //       state: false,
   //       remove: false
   //    }
   // ];

   const extensionList = lesExtensions.map(extension =>
      // <li>
         <div key={extension.id} className="grid grid-flow-col grid-cols-5 grid-rows-3 gap-1 bg-gray-800 hover:bg-gray-900 border-2 p-2 rounded-xl  border-gray-600 ">
               <div className="row-span-2 col-span-1 p-1 w-16 h-13 rounded"> 
                  <img  className=" rounded aspect-3/2 object-cover" 
                     src="src\assets\icons\icon1.png"
                  />
               </div>
               <div className="row-span-1 col-span-5 p-1 flex justify-between text-sm " >
                  <button className={` btn-dash mx-0 rounded-xl border-2 border-gray-600 h-6 px-3 bg-gray-900 hover:font-medium ${styles.buttonI}`} 
                     onClick={(e) =>{ // border-1
                        e.stopPropagation();
                        deleteExtension(extension.id) 
                     }}
                  >
                     remove
                  </button>
                  {/* <button id="2" className="btn flex mx-0 rounded-xl h-6 px-1 bg-gray-800">
                     Activé
                  </button> */}
                  {/* <input type="checkbox" value="synthwave" className="toggle theme-controller bg-neutral-500" /> */}
                  {/* <input type="checkbox"  className="toggle toggle-md" /> */}
                  <input
                     type="checkbox"
                     className="toggle border-b-neutral-400 bg-gray-500 checked:border-b-gray-700 checked:bg-orange-700 checked:text-white"
                     onClick={() => editStateExtension(extension.id, !extension.state)}
                  />
               </div>
               <div className="row-span-1 col-span-4 px-0 text-2xl font-bold ">
                  {extension.name}
               </div>
               <div className="row-span-1 col-span-4 px-0 flex justify-start text-sm">
                  {extension.description}
               </div>
            </div>
      // </li>
   );

   return(
      <>
         <div className="grid grid-cols-3  border-amber-5 gap-2 p-1 rounded-lg">
            {/*  border-amber-5 */}
               {extensionList}
            
            {/* <div class="grid grid-flow-col grid-cols-5 grid-rows-3 gap-1 bg-gray-800 border-1 p-2 rounded-lg">
               <div class="row-span-2 col-span-1 p-1 ">
                  <img className="h-15" src="src\assets\imageInterface\interface.jpg" alt="interface" />
               </div>
               <div className="row-span-1 col-span-5 p-1 flex justify-between " >
                  <button id="1" className={`border-1 mx-0 rounded-xl h-6 px-3 bg-gray-900 ${styles.buttonI}`} >
                     remove
                  </button>
                  <button id="2" className="flex mx-0 rounded-xl h-6 px-1 bg-gray-800">
                     Activé
                  </button>
               </div>
               <div class="row-span-1 col-span-4 px-0 text-2xl font-bold ">
                  nom
               </div>
               <div class="row-span-1 col-span-4 px-0 flex justify-start ">
                  description de l'extension 
               </div>
            </div> */}
         </div>
      </>
   );
}