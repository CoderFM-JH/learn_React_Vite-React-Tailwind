
import { ItemExtension } from "./ItemExtension";
import { useState } from "react";
   
export const ListExtensions = () => {

   const [lesExtensions, setLesExtensions] = useState([
      {
         id: 1,
         icon: ``, //src/assets/images/logo-console-plus.svg
         name: " DevLens ",
         description: " Quickly inspect page layouts and visualize element boundaries.",
         state: false,
         remove: false
      },
      {
         id: 2,
         icon: "",
         name: "StyleSpy",
         description: " Instantly analyze and copy CSS from any webpage element.",
         state: false,
         remove: false
      },
      {
         id: 3,
         icon: "",
         name: "SpeedBoost",
         description: " Optimizes browser resource usage to accelerate page loading.",
         state: false,
         remove: false
      },
      {
         id: 4,
         icon: "",
         name: "JSONWizard",
         description: "Formats, validates, and prettifies JSON responses in-browser.",
         state: false,
         remove: false
      },
      {
         id: 5,
         icon: "",
         name: "TabMaster Pro",
         description: "Organizes browser tabs into groups and sessions.",
         state: false,
         remove: false
      },
      {
         id: 6,
         icon: "",
         name: "ViewportBuddy",
         description: "Simulates various screen resolutions directly within the browser.",
         state: false,
         remove: false
      },
      {
         id: 7,
         icon: "",
         name: "Markup Notes",
         description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
         state: false,
         remove: false
      },
      {
         id: 8,
         icon: "",
         name: "GridGuides",
         description: "Overlay customizable grids and alignment guides on any webpage.",
         state: false,
         remove: false
      },
      {
         id: 9,
         icon: "",
         name: "Palette Picker",
         description: "Instantly extracts color palettes from any webpage.",
         state: false,
         remove: false
      },
      {
         id: 10,
         icon: "",
         name: "LinkChecker",
         description: "Scans and highlights broken links on any page.",
         state: false,
         remove: false
      },
      {
         id: 11,
         icon: "",
         name: "DOM Snapshot",
         description: "Capture and export DOM structures quickly.",
         state: false,
         remove: false
      },
      {
         id: 12,
         icon: "",
         name: "ConsolePlus",
         description: "Enhanced developer console with advanced filtering and logging.",
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
   //    overflow-y-scroll  bg-gray-900
   return(
      <>
      <div className="ml-20 mx-20 mb-0 rounded-xl min-h-auto max-h-auto " >
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