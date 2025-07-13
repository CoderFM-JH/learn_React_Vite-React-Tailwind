
import { ItemExtension } from "./ItemExtension";
import { useState } from "react";
   
export const ListExtensions = () => {

   const [lesExtensions, setLesExtensions] = useState([
      {
         id: 1,
         icon: "",
         name: "Extension 1",
         description: "Ceci est une extension de test 1",
         state: false,
         remove: false
      },
      {
         id: 2,
         icon: "",
         name: "Extension 2",
         description: "Ceci est une extension de test 2",
         state: false,
         remove: false
      },
      {
         id: 3,
         icon: "",
         name: "Extension 3",
         description: "Ceci est une extension de test 3",
         state: false,
         remove: false
      },
      {
         id: 4,
         icon: "",
         name: "Extension 4",
         description: "Ceci est une extension de test 4",
         state: false,
         remove: false
      },
      {
         id: 5,
         icon: "",
         name: "Extension 5",
         description: "Ceci est une extension de test 5",
         state: false,
         remove: false
      },
      {
         id: 6,
         icon: "",
         name: "Extension 6",
         description: "Ceci est une extension de test 6",
         state: false,
         remove: false
      },
      {
         id: 7,
         icon: "",
         name: "Extension 7",
         description: "Ceci est une extension de test 7",
         state: false,
         remove: false
      },
      {
         id: 8,
         icon: "",
         name: "Extension 8",
         description: "Ceci est une extension de test 8",
         state: false,
         remove: false

      },
      {
         id: 9,
         icon: "",
         name: "Extension 9",
         description: "Ceci est une extension de test 9",
         state: false,
         remove: false
      }
   ]);

   const editStateExtension = (id, etatExtension) => {
      setLesExtensions(
         lesExtensions.map((extension) => extension.id === id ? {...extension, state: etatExtension} :extension  )
      );
   };

   const deleteExtension = (id) => {
      setLesExtensions(
         lesExtensions.filter((extension) => extension.id !== id   )
      );
   };

   // console.log(lesExtensions);
   
   return(
      <>
      <div className="mx-10 bg-gray-900 rounded-xl min-h-auto max-h-96 overflow-y-scroll  " >
         <ItemExtension 
            lesExtensions={lesExtensions}
            editStateExtension={editStateExtension} 
            deleteExtension={deleteExtension}
         />
      </div>   
      </>
   );
}
   
// export default ListExtensions;