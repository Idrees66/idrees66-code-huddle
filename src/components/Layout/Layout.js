import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2"
import MapComp from '../MapComp/MapComp';
import SearchComp from '../SearchComp/SearchComp';
import Submenu from '../Submenu/Submenu';
import VideoSection from '../VideoSection/VideoSection';


const Layout = () => {
   const [open, setOpen] = useState(false);
   const [searchItem, setSearchItem] = useState("");

   useEffect(() => {
      Swal.fire({
         icon: "success",
         title: `Welcome Code-Huddle!🙂`,
         text: "Let's Go! 👍",
         timer: 2500,
         showConfirmButton: false,
     })
   }, [])

   function openSidebar() {
      setOpen(!open)
   }



   return (
      <>

         <button onClick={openSidebar} type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside id="sideBar" class={`fixed top-0 left-0 z-40 ${!open ? "-translate-x-full w-[25rem]" : "w-[25rem]"} h-screen transition-transform  lg:translate-x-0`} >
            <div class="h-full px-5 py-6  overflow-y-auto bg-gray-50 dark:bg-blueshade">

               <div onClick={openSidebar} class="lg:hidden  text-white text-xl mb-5 cursor-pointer"> &#x2630;</div>
               <ul class="space-y-2">

                  <SearchComp updateSearch={setSearchItem} />
                  <Submenu />
                  <Submenu />
                  <Submenu />

               </ul>
            </div>
         </aside>

         <div class="p-4 lg:ml-[25rem]">
            <div class="p-4  rounded-lg  dark:border-gray-700">
               <MapComp />
               <VideoSection searchItem={searchItem} />
            </div>
         </div>

      </>
   )
}

export default Layout