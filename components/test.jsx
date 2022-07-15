// import React from 'react'

// function test() {
//   return (
//     <div className="flex flex-col">
//         <div>
//           <span className="text-back text-3xl font-semibold mt-[50px] mb-5">
//             Event Checkpoints
//           </span>
//         </div>
//         <div className="h-px mt-3 mb-[25px] bg-neutral-200"></div>
//         <div className="flex flex-row">
//           <div className="flex items-center mr-[50px]">
//             <input
//               type="radio"
//               value=""
//               name="default-radio"
//               className="w-4 h-4"
//               defaultChecked
//             />
//             <label
//               htmlFor="default-radio-1"
//               className="ml-2 text-sm font-medium"
//             >
//               No path
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               value=""
//               name="default-radio"
//               className="w-4 h-4"
//             />
//             <label
//               htmlFor="default-radio-2"
//               className="ml-2 text-sm font-medium "
//             >
//               Random path
//             </label>
//           </div>
//         </div>
//         <div className="h-px mt-[25px] mb-[9px] bg-neutral-200 "></div>
//         <div className="flex flex-row font-semibold px-[10px]">
//           <span className="mr-[120px]">No.</span>
//           <span className="mr-[150px]">Location Name</span>
//           <span className="mr-[380px]">Detail</span>
//           <span className="mr-[270px]">Location</span>
//           <span className="mr-[270px]">File</span>
//           <span>Edit</span>
//         </div>
//         <div className="h-px mt-[9px] mb-3 bg-neutral-200 "></div>
//         {/* ----------------------------------- 1 ----------------------------------- */}
//         <div className="flex flex-row bg-[#EBEBEB] mb-[10px]">
//           <div className="w-[40px] bg-black text-white flex justify-center mr-[115px]">
//             <span className="mt-1">1</span>
//           </div>
//           <div className="mr-[120px]">
//             <input
//               type="text"
//               className="border border-gray-200 rounded-lg w-[140px] mt-1 px-4"
//               onChange={(e) => setLocationName1(e.target.value)}
//               name="location_name1"
//               maxLength={151}
//             />
//           </div>
//           <div className="flex flex-row mr-[110px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">
//                 Check point
//                 <br />
//                 summary
//               </label>
//               <label htmlFor="Description">Description</label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[40px] mt-1 px-4"
//                 onChange={(e) => setCheckPoint1(e.target.value)}
//                 name="check_point1"
//                 maxLength={151}
//               />
//               <textarea
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[95px] mt-[8px] px-4"
//                 onChange={(e) => setDescrption1(e.target.value)}
//                 name="Descrption1"
//                 maxLength={301}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row mr-[115px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Latitude</label>
//               <label className="mt-2" htmlFor="Description">
//                 Longitude
//               </label>
//               <label className="mt-2" htmlFor="Length">
//                 Length
//               </label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLatitude1(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLongitude1(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[40px] mt-1 text-center"
//                 onChange={(e) => setLength1(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Start file</label>
//               <label className="mt-2" htmlFor="Description">
//                 Result file
//               </label>
//             </div>
//             <div className="flex flex-col mt-1">
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setStartfile1(e)}
//               />
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setResultfile1(e)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* ----------------------------------- 1 ----------------------------------- */}
//         <div className="flex flex-row bg-[#EBEBEB] mb-[0.5%]">
//           <div className="w-[40px] bg-black text-white flex justify-center mr-[115px]">
//             <span className="mt-1">2</span>
//           </div>
//           <div className="mr-[120px]">
//             <input
//               type="text"
//               className="border border-gray-200 rounded-lg w-[140px] mt-1 px-4"
//               onChange={(e) => setLocationName2(e.target.value)}
//               name="location_name2"
//               maxLength={151}
//             />
//           </div>
//           <div className="flex flex-row mr-[110px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">
//                 Check point
//                 <br />
//                 summary
//               </label>
//               <label htmlFor="Description">Description</label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[40px] mt-1 px-4"
//                 onChange={(e) => setCheckPoint2(e.target.value)}
//                 name="check_point1"
//                 maxLength={151}
//               />
//               <textarea
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[95px] mt-[8px] px-4"
//                 onChange={(e) => setDescrption2(e.target.value)}
//                 name="Descrption2"
//                 maxLength={301}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row mr-[115px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Latitude</label>
//               <label className="mt-2" htmlFor="Description">
//                 Longitude
//               </label>
//               <label className="mt-2" htmlFor="Length">
//                 Length
//               </label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLatitude2(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLongitude2(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[40px] mt-1 text-center"
//                 onChange={(e) => setLength2(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Start file</label>
//               <label className="mt-2" htmlFor="Description">
//                 Result file
//               </label>
//             </div>
//             <div className="flex flex-col mt-1">
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setStartfile2(e)}
//               />
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setResultfile2(e)}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row bg-[#EBEBEB] mb-[0.5%]">
//           <div className="w-[40px] bg-black text-white flex justify-center mr-[115px]">
//             <span className="mt-1">3</span>
//           </div>
//           <div className="mr-[120px]">
//             <input
//               type="text"
//               className="border border-gray-200 rounded-lg w-[140px] mt-1 px-4"
//               onChange={(e) => setLocationName3(e.target.value)}
//               name="location_name3"
//               maxLength={151}
//             />
//           </div>
//           <div className="flex flex-row mr-[110px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">
//                 Check point
//                 <br />
//                 summary
//               </label>
//               <label htmlFor="Description">Description</label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[40px] mt-1 px-4"
//                 onChange={(e) => setCheckPoint3(e.target.value)}
//                 name="check_point3"
//                 maxLength={151}
//               />
//               <textarea
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[95px] mt-[8px] px-4"
//                 onChange={(e) => setDescrption3(e.target.value)}
//                 name="Descrption3"
//                 maxLength={301}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row mr-[115px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Latitude</label>
//               <label className="mt-2" htmlFor="Description">
//                 Longitude
//               </label>
//               <label className="mt-2" htmlFor="Length">
//                 Length
//               </label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLatitude3(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLongitude3(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[40px] mt-1 text-center"
//                 onChange={(e) => setLength3(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Start file</label>
//               <label className="mt-2" htmlFor="Description">
//                 Result file
//               </label>
//             </div>
//             <div className="flex flex-col mt-1">
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setStartfile3(e)}
//               />
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setResultfile3(e)}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row bg-[#EBEBEB] mb-[0.5%]">
//           <div className="w-[40px] bg-black text-white flex justify-center mr-[115px]">
//             <span className="mt-1">4</span>
//           </div>
//           <div className="mr-[120px]">
//             <input
//               type="text"
//               className="border border-gray-200 rounded-lg w-[140px] mt-1 px-4"
//               onChange={(e) => setLocationName4(e.target.value)}
//               name="location_name4"
//               maxLength={151}
//             />
//           </div>
//           <div className="flex flex-row mr-[110px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">
//                 Check point
//                 <br />
//                 summary
//               </label>
//               <label htmlFor="Description">Description</label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[40px] mt-1 px-4"
//                 onChange={(e) => setCheckPoint4(e.target.value)}
//                 name="check_point4"
//                 maxLength={151}
//               />
//               <textarea
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[95px] mt-[8px] px-4"
//                 onChange={(e) => setDescrption4(e.target.value)}
//                 name="Descrption4"
//                 maxLength={301}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row mr-[115px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Latitude</label>
//               <label className="mt-2" htmlFor="Description">
//                 Longitude
//               </label>
//               <label className="mt-2" htmlFor="Length">
//                 Length
//               </label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLatitude4(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLongitude4(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[40px] mt-1 text-center"
//                 onChange={(e) => setLength4(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Start file</label>
//               <label className="mt-2" htmlFor="Description">
//                 Result file
//               </label>
//             </div>
//             <div className="flex flex-col mt-1">
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setStartfile4(e)}
//               />
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setResultfile4(e)}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row bg-[#EBEBEB] mb-[0.5%]">
//           <div className="w-[40px] bg-black text-white flex justify-center mr-[115px]">
//             <span className="mt-1">5</span>
//           </div>
//           <div className="mr-[120px]">
//             <input
//               type="text"
//               className="border border-gray-200 rounded-lg w-[140px] mt-1 px-4"
//               onChange={(e) => setLocationName5(e.target.value)}
//               name="location_name5"
//               maxLength={151}
//             />
//           </div>
//           <div className="flex flex-row mr-[110px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">
//                 Check point
//                 <br />
//                 summary
//               </label>
//               <label htmlFor="Description">Description</label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[40px] mt-1 px-4"
//                 onChange={(e) => setCheckPoint5(e.target.value)}
//                 name="check_point5"
//                 maxLength={151}
//               />
//               <textarea
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[210px] h-[95px] mt-[8px] px-4"
//                 onChange={(e) => setDescrption5(e.target.value)}
//                 name="Descrption5"
//                 maxLength={301}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row mr-[115px]">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Latitude</label>
//               <label className="mt-2" htmlFor="Description">
//                 Longitude
//               </label>
//               <label className="mt-2" htmlFor="Length">
//                 Length
//               </label>
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLatitude5(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[125px] mt-1 px-4"
//                 onChange={(e) => setLongitude5(e.target.value)}
//               />
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[40px] mt-1 text-center"
//                 onChange={(e) => setLength5(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="flex flex-row">
//             <div className="flex flex-col mr-5">
//               <label htmlFor="Check point summary">Start file</label>
//               <label className="mt-2" htmlFor="Description">
//                 Result file
//               </label>
//             </div>
//             <div className="flex flex-col mt-1">
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setStartfile5(e)}
//               />
//               <input
//                 className="block w-[220px] rounded-lg border border-gray-200 bg-white cursor-pointer"
//                 aria-describedby="file_input_help"
//                 type="file"
//                 onChange={(e) => setResultfile5(e)}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row bg-[#EBEBEB] ">
//           <div className="w-[40px] bg-black text-white flex justify-center mr-[115px]">
//             <span className="mt-1"></span>
//           </div>
//           <div className="mr-[120px]">
//             <div className="flex flex-row">
//               <h2 className="font-bold mr-[20px]">URL</h2>
//               <input
//                 type="text"
//                 className="border border-gray-200 rounded-lg w-[500px] mt-1 px-4"
//                 onChange={(e) =>
//                   setUrlWeb(
//                     "https://nextcercise-webapp-main-git-master-inyuttasak.vercel.app"
//                   )
//                 }
//                 value="https://nextcercise-webapp-main-git-master-inyuttasak.vercel.app"
//               />
//             </div>
//           </div>
//         </div>
//         {/* ----------------------------------- 5 ----------------------------------- */}
//         <div className="flex justify-center">
//           <button
//             onClick={handleonSubmit}
//             className="text-white bg-green-600 rounded-lg mt-5 mb-[2%] w-[171px] h-[32.5px]"
//           >
//             <div className="flex items-center justify-center">
//               <Image src={Icon} width={20} height={20} />
//               <span>Publish</span>
//             </div>
//           </button>
//         </div>
//       </div>
//   )
// }

// export default test