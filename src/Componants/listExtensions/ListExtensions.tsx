
import { ItemExtension } from "./ItemExtension";
import { useState } from "react";
import devlens from "@assets/images/logo-devlens.svg";
import StyleSpy from "@assets/images/logo-style-spy.svg";
import SpeedBoost from "@assets/images/logo-speed-boost.svg";
import JSONWizard from "@assets/images/logo-json-wizard.svg";
import TabMasterPro from "@assets/images/logo-tab-master-pro.svg";
import ViewportBuddy from "@assets/images/logo-viewport-buddy.svg";
import MarkupNotes from "@assets/images/logo-markup-notes.svg";
import GridGuides from "@assets/images/logo-grid-guides.svg";
import PalettePicker from "@assets/images/logo-palette-picker.svg";
import LinkChecker from "@assets/images/logo-link-checker.svg";
import DOMSnapshot from "@assets/images/logo-dom-snapshot.svg";
import ConsolePlus from "@assets/images/logo-console-plus.svg";
   
export const ListExtensions = () => {

   const [lesExtensions, setLesExtensions] = useState([
      {
         id: 1,
         icon: devlens, 
         name: " DevLens ",
         description: " Quickly inspect page layouts and visualize element boundaries.",
         state: false,
         remove: false
      },
      {
         id: 2,
         icon: StyleSpy,
         name: "StyleSpy",
         description: " Instantly analyze and copy CSS from any webpage element.",
         state: false,
         remove: false
      },
      {
         id: 3,
         icon: SpeedBoost,
         name: "SpeedBoost",
         description: " Optimizes browser resource usage to accelerate page loading.",
         state: false,
         remove: false
      },
      {
         id: 4,
         icon: JSONWizard,
         name: "JSONWizard",
         description: "Formats, validates, and prettifies JSON responses in-browser.",
         state: false,
         remove: false
      },
      {
         id: 5,
         icon: TabMasterPro,
         name: "TabMaster Pro",
         description: "Organizes browser tabs into groups and sessions.",
         state: false,
         remove: false
      },
      {
         id: 6,
         icon: ViewportBuddy,
         name: "ViewportBuddy",
         description: "Simulates various screen resolutions directly within the browser.",
         state: false,
         remove: false
      },
      {
         id: 7,
         icon: MarkupNotes,
         name: "Markup Notes",
         description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
         state: false,
         remove: false
      },
      {
         id: 8,
         icon: GridGuides,
         name: "GridGuides",
         description: "Overlay customizable grids and alignment guides on any webpage.",
         state: false,
         remove: false
      },
      {
         id: 9,
         icon: PalettePicker,
         name: "Palette Picker",
         description: "Instantly extracts color palettes from any webpage.",
         state: false,
         remove: false
      },
      {
         id: 10,
         icon: LinkChecker,
         name: "LinkChecker",
         description: "Scans and highlights broken links on any page.",
         state: false,
         remove: false
      },
      {
         id: 11,
         icon: DOMSnapshot,
         name: "DOM Snapshot",
         description: "Capture and export DOM structures quickly.",
         state: false,
         remove: false
      },
      {
         id: 12,
         icon: ConsolePlus,
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

   // console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
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