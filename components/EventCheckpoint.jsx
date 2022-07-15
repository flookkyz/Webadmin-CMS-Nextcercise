import React, { useEffect, useState } from "react";
import Icon from "/public/carbon_network-public.svg";
// import Image from "next/image";
import { RiArrowDownSFill, RiVidicon2Fill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs"
import Menudrop from "./Menudrop";
import Swal from "sweetalert2";

function EventCheckpoint() {
  const apiUrl = "https://mxrdem.xyz/api/v1"
  const [start1, setStart1] = useState();
  const [result1, setResult1] = useState();

  const [isRandom, setIsRandom] = useState('n');
  const [locationName1, setLocationName1] = useState("");
  const [checkPoint1, setCheckPoint1] = useState("");
  const [Descrption1, setDescrption1] = useState("");
  const [latitude1, setLatitude1] = useState("");
  const [longitude1, setLongitude1] = useState("");
  const [length1, setLength1] = useState("");
  const [startfile1, setStartfile1] = useState("");
  const [resultfile1, setResultfile1] = useState("");

  const [locationName2, setLocationName2] = useState("");
  const [checkPoint2, setCheckPoint2] = useState("");
  const [Descrption2, setDescrption2] = useState("");
  const [latitude2, setLatitude2] = useState("");
  const [longitude2, setLongitude2] = useState("");
  const [length2, setLength2] = useState("");
  const [startfile2, setStartfile2] = useState("");
  const [resultfile2, setResultfile2] = useState("");

  const [locationName3, setLocationName3] = useState("");
  const [checkPoint3, setCheckPoint3] = useState("");
  const [Descrption3, setDescrption3] = useState("");
  const [latitude3, setLatitude3] = useState("");
  const [longitude3, setLongitude3] = useState("");
  const [length3, setLength3] = useState("");
  const [startfile3, setStartfile3] = useState("");
  const [resultfile3, setResultfile3] = useState("");

  const [locationName4, setLocationName4] = useState("");
  const [checkPoint4, setCheckPoint4] = useState("");
  const [Descrption4, setDescrption4] = useState("");
  const [latitude4, setLatitude4] = useState("");
  const [longitude4, setLongitude4] = useState("");
  const [length4, setLength4] = useState("");
  const [startfile4, setStartfile4] = useState("");
  const [resultfile4, setResultfile4] = useState("");

  const [locationName5, setLocationName5] = useState("");
  const [checkPoint5, setCheckPoint5] = useState("");
  const [Descrption5, setDescrption5] = useState("");
  const [latitude5, setLatitude5] = useState("");
  const [longitude5, setLongitude5] = useState("");
  const [length5, setLength5] = useState("");
  const [startfile5, setStartfile5] = useState("");
  const [resultfile5, setResultfile5] = useState("");

  const [urlWeb, setUrlWeb] = useState("");
  const [showDrop, setShowDrop] = useState(false);

  const [fetchData, setFetchData] = useState([]);

  const handleClickpublish = () => {
    setShowDrop(!showDrop);
  };

  useEffect(() => {
    if (localStorage.getItem("cpId")) {
      fetch(`${apiUrl}/checkpoint/draft/${localStorage.getItem("cpId")}`, {
        method: "GET",
      }).then(async response => {
        const res = await response.json()
        if (res.cpId != localStorage.getItem("cpId")) {
          localStorage.clear();
          window.location.assign("")
        } else {
          setFetchData(res)
        }
      })
    } else {
      fetch(`${apiUrl}/checkpoint/cp/type/d/draft`, {
        method: "GET",
      }).then(async response => {
        const res = await response.json()
        if(res.length > 0) {
          console.log(res[0].cpId);
          setFetchData(res[0])
          localStorage.setItem("cpId", res[0].cpId)
        }
      })
    }
  }, []);

  const handleOnSubmitRemove = () => {
    fetch(`${apiUrl}/checkpoint/${localStorage.getItem("cpId")}`, {
      method: "DELETE"
    }).then(async response => {
      const res = await response.json()
      if (res.statusCode == 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Bad Request: ${res.message}`,
        })
      } else {
        localStorage.clear()
        window.location.assign("")
      }
    });
  }

  const handleOnSubmit = (status) => {
    // e.preventDefault();

    const formData = new FormData();
    formData.append("isPublish", status);

    if (urlWeb != "") { formData.append("url", urlWeb); }
    if (isRandom != "") { formData.append("isRandom", isRandom); }

    if (locationName1 != "") { formData.append("locationName1", locationName1); }
    if (checkPoint1 != "") { formData.append("summary1", checkPoint1); }
    if (Descrption1 != "") { formData.append("description1", Descrption1); }
    if (latitude1 != "") { formData.append("latitude1", latitude1); }
    if (longitude1 != "") { formData.append("longitude1", longitude1); }
    if (length1 != "") { formData.append("length1", length1); }
    if (startfile1 != "") { formData.append("startFile1", startfile1.target.files[0]); }
    if (resultfile1 != "") { formData.append("resultFile1", resultfile1.target.files[0]); }

    if (locationName2 != "") { formData.append("locationName2", locationName2); }
    if (checkPoint2 != "") { formData.append("summary2", checkPoint2); }
    if (Descrption2 != "") { formData.append("description2", Descrption2); }
    if (latitude2 != "") { formData.append("latitude2", latitude2); }
    if (longitude2 != "") { formData.append("longitude2", longitude2); }
    if (length2 != "") { formData.append("length2", length2); }
    if (startfile2 != "") { formData.append("startFile2", startfile2.target.files[0]); }
    if (resultfile2 != "") { formData.append("resultFile2", resultfile2.target.files[0]); }

    if (locationName3 != "") { formData.append("locationName3", locationName3); }
    if (checkPoint3 != "") { formData.append("summary3", checkPoint3); }
    if (Descrption3 != "") { formData.append("description3", Descrption3); }
    if (latitude3 != "") { formData.append("latitude3", latitude3); }
    if (longitude3 != "") { formData.append("longitude3", longitude3); }
    if (length3 != "") { formData.append("length3", length3); }
    if (startfile3 != "") { formData.append("startFile3", startfile3.target.files[0]); }
    if (resultfile3 != "") { formData.append("resultFile3", resultfile3.target.files[0]); }

    if (locationName4 != "") { formData.append("locationName4", locationName4); }
    if (checkPoint4 != "") { formData.append("summary4", checkPoint4); }
    if (Descrption4 != "") { formData.append("description4", Descrption4); }
    if (latitude4 != "") { formData.append("latitude4", latitude4); }
    if (longitude4 != "") { formData.append("longitude4", longitude4); }
    if (length4 != "") { formData.append("length4", length4); }
    if (startfile4 != "") { formData.append("startFile4", startfile4.target.files[0]); }
    if (resultfile4 != "") { formData.append("resultFile4", resultfile4.target.files[0]); }

    if (locationName5 != "") { formData.append("locationName5", locationName5); }
    if (checkPoint5 != "") { formData.append("summary5", checkPoint5); }
    if (Descrption5 != "") { formData.append("description5", Descrption5); }
    if (latitude5 != "") { formData.append("latitude5", latitude5); }
    if (longitude5 != "") { formData.append("longitude5", longitude5); }
    if (length5 != "") { formData.append("length5", length5); }
    if (startfile5 != "") { formData.append("startFile5", startfile5.target.files[0]); }
    if (resultfile5 != "") { formData.append("resultFile5", resultfile5.target.files[0]); }

    let api = `${apiUrl}/checkpoint`;
    let method = "POST";
    if (localStorage.getItem("cpId")) {
      api = `${apiUrl}/checkpoint/${localStorage.getItem("cpId")}`
      method = "PATCH"
    }
    fetch(api, {
      method: method,
      body: formData,
    }).then(async response => {
      const res = await response.json()
      if (res.statusCode == 400) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Bad Request: ${res.message}`,
        })
      } else {
        if (!localStorage.getItem("cpId")) {
          localStorage.setItem("cpId", res.result[0].cpId)
          Swal.fire({
            icon: 'success',
            title: 'Yep!',
            text: 'Create New Event Chackpoint Successfully',
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Yep!',
            text: 'Update Event Chackpoint Successfully',
          })
        }
      }
    });
  };

  return (
    <>
      <div className="w-full px-[5%] pt-[1.2%] h-full overflow-hidden-y">
        <h1 className="text-[34px] font-semibold">Event Checkpoint</h1>
        <div className="flex flex-row mt-[1.5vh] mb-[2vh]">
          <div className="flex items-center mr-[50px]">
            <input
              onChange={(e) => setIsRandom(e.target.value)}
              type="radio"
              value="n"
              name="default-radio"
              className="w-4 h-4"
              // checked={(fetchData.isRandom === 'n') ? true : false}
              defaultChecked={(fetchData.isRandom === 'n') ? true : false}
            />
            <label className="ml-2 text-sm font-medium">No path</label>
          </div>
          <div className="flex items-center">
            <input
              onChange={(e) => setIsRandom(e.target.value)}
              type="radio"
              value="y"
              name="default-radio"
              className="w-4 h-4"
              // checked={(fetchData.isRandom === 'y') ? true : false}
              defaultChecked={(fetchData.isRandom === 'y') ? true : false}
            />
            <label className="ml-2 text-sm font-medium ">Random path</label>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th
                  className="p-3 font-bold text-black border-y-2 border-gray-300 hidden lg:table-cell"
                  width="76px"
                >
                  No.
                </th>
                <th className="p-3 font-bold text-gray-600 border-y-2 border-gray-300 hidden lg:table-cell">
                  Name
                </th>
                <th className="p-3 font-bold text-gray-600 border-y-2 border-gray-300 hidden lg:table-cell">
                  Detail
                </th>
                <th className="p-3 font-bold text-gray-600 border-y-2 border-gray-300 hidden lg:table-cell">
                  Location
                </th>
                <th className="p-3 font-bold text-gray-600 border-y-2 border-gray-300 hidden lg:table-cell">
                  File
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#EBEBEB] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-white bg-black text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    No.
                  </span>
                  <h1>1</h1>
                </td>
                <td className="w-full lg:w-auto  p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Name
                  </span>
                  <input
                    defaultValue={fetchData.locationName1}
                    className="shadow-md bg-[#FAF9F9] border border-gray-300 shadow-inner-xl rounded-lg w-[120px] mt-1 px-4"
                    type="text"
                    onChange={(e) => setLocationName1(e.target.value)}
                    maxLength={151}
                  />
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Detail
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[15px]">
                        Check point <br />
                        summary
                      </h2>
                      <input
                        defaultValue={fetchData.summary1}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[200px]"
                        type="text"
                        onChange={(e) => setCheckPoint1(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px] ml-2">
                      <h2 className="mr-[15px]">Desciption</h2>
                      <textarea
                        defaultValue={fetchData.description1}
                        rows="2"
                        className="w-[200px] shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border "
                        onChange={(e) => setDescrption1(e.target.value)}
                        maxLength={301}
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Location
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[35px]">Latitude</h2>
                      <input
                        defaultValue={fetchData.latitude1}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLatitude1(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Longtitude</h2>
                      <input
                        defaultValue={fetchData.longitude1}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLongitude1(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[45px]">length</h2>
                      <input
                        defaultValue={fetchData.length1}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[50px]"
                        onChange={(e) => setLength1(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    File
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[25px]">Start file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".mind"
                        onChange={(e) => setStartfile1(e)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Result file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".glb"
                        onChange={(e) => setResultfile1(e)}
                      />
                    </div>
                  </div>
                </td>
              </tr>

              {/* ===============================================================Row 2 =============================================================*/}
              <tr className="bg-white flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-white bg-black text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    No.
                  </span>
                  <h1>2</h1>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Name
                  </span>
                  <input
                    defaultValue={fetchData.locationName2}
                    className="shadow-md bg-[#FAF9F9] border border-gray-300 shadow-inner-xl rounded-lg w-[120px] mt-1 px-4"
                    type="text"
                    onChange={(e) => setLocationName2(e.target.value)}
                    maxLength={151}
                  />
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Detail
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[15px]">
                        Check point <br />
                        summary
                      </h2>
                      <input
                        defaultValue={fetchData.summary2}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[200px]"
                        type="text"
                        onChange={(e) => setCheckPoint2(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px] ml-2">
                      <h2 className="mr-[15px]">Desciption</h2>
                      <textarea
                        defaultValue={fetchData.description2}
                        rows="2"
                        className="w-[200px] shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border "
                        onChange={(e) => setDescrption2(e.target.value)}
                        maxLength={301}
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Location
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[35px]">Latitude</h2>
                      <input
                        defaultValue={fetchData.latitude2}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLatitude2(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Longtitude</h2>
                      <input
                        defaultValue={fetchData.longitude2}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLongitude2(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[45px]">length</h2>
                      <input
                        defaultValue={fetchData.length2}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[50px]"
                        onChange={(e) => setLength2(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    File
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[25px]">Start file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".mind"
                        onChange={(e) => setStartfile2(e)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Result file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".glb"
                        onChange={(e) => setResultfile2(e)}
                      />
                    </div>
                  </div>
                </td>
              </tr>

              {/* ===============================================================Row 3 =============================================================*/}
              <tr className="bg-[#EBEBEB] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-white bg-black text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    No.
                  </span>
                  <h1>3</h1>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Name
                  </span>
                  <input
                    defaultValue={fetchData.locationName3}
                    className="shadow-md bg-[#FAF9F9] border border-gray-300 shadow-inner-xl rounded-lg w-[120px] mt-1 px-4"
                    type="text"
                    onChange={(e) => setLocationName3(e.target.value)}
                    maxLength={151}
                  />
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Detail
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[15px]">
                        Check point <br />
                        summary
                      </h2>
                      <input
                        defaultValue={fetchData.summary3}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[200px]"
                        type="text"
                        onChange={(e) => setCheckPoint3(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px] ml-2">
                      <h2 className="mr-[15px]">Desciption</h2>
                      <textarea
                        defaultValue={fetchData.description3}
                        rows="2"
                        className="w-[200px] shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border "
                        onChange={(e) => setDescrption3(e.target.value)}
                        maxLength={301}
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Location
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[35px]">Latitude</h2>
                      <input
                        defaultValue={fetchData.latitude3}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLatitude3(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Longtitude</h2>
                      <input
                        defaultValue={fetchData.longitude3}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLongitude3(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[45px]">length</h2>
                      <input
                        defaultValue={fetchData.length3}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[50px]"
                        onChange={(e) => setLength3(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    File
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[25px]">Start file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".mind"
                        onChange={(e) => setStartfile3(e)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Result file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".glb"
                        onChange={(e) => setResultfile3(e)}
                      />
                    </div>
                  </div>
                </td>
              </tr>

              {/* ===============================================================Row 4 =============================================================*/}
              <tr className="bg-white flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-white bg-black text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    No.
                  </span>
                  <h1>4</h1>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Name
                  </span>
                  <input
                    defaultValue={fetchData.locationName4}
                    className="shadow-md bg-[#FAF9F9] border border-gray-300 shadow-inner-xl rounded-lg w-[120px] mt-1 px-4"
                    type="text"
                    onChange={(e) => setLocationName4(e.target.value)}
                    maxLength={151}
                  />
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Detail
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[15px]">
                        Check point <br />
                        summary
                      </h2>
                      <input
                        defaultValue={fetchData.summary4}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[200px]"
                        type="text"
                        onChange={(e) => setCheckPoint4(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px] ml-2">
                      <h2 className="mr-[15px]">Desciption</h2>
                      <textarea
                        defaultValue={fetchData.description4}
                        rows="2"
                        className="w-[200px] shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border "
                        onChange={(e) => setDescrption4(e.target.value)}
                        maxLength={301}
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Location
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[35px]">Latitude</h2>
                      <input
                        defaultValue={fetchData.latitude4}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLatitude4(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Longtitude</h2>
                      <input
                        defaultValue={fetchData.longitude4}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLongitude4(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[45px]">length</h2>
                      <input
                        defaultValue={fetchData.length4}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[50px]"
                        onChange={(e) => setLength4(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    File
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[25px]">Start file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".mind"
                        onChange={(e) => setStartfile4(e)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Result file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".glb"
                        onChange={(e) => setResultfile4(e)}
                      />
                    </div>
                  </div>
                </td>
              </tr>

              {/* ===============================================================Row 5 =============================================================*/}
              <tr className="bg-[#EBEBEB] flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-white bg-black text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    No.
                  </span>
                  <h1>5</h1>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Name
                  </span>
                  <input
                    defaultValue={fetchData.locationName5}
                    className="shadow-md bg-[#FAF9F9] border border-gray-300 shadow-inner-xl rounded-lg w-[120px] mt-1 px-4"
                    type="text"
                    onChange={(e) => setLocationName5(e.target.value)}
                    maxLength={151}
                  />
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Detail
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[15px]">
                        Check point <br />
                        summary
                      </h2>
                      <input
                        defaultValue={fetchData.summary5}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[200px]"
                        type="text"
                        onChange={(e) => setCheckPoint5(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px] ml-2">
                      <h2 className="mr-[15px]">Desciption</h2>
                      <textarea
                        defaultValue={fetchData.description5}
                        rows="2"
                        className="w-[200px] shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border "
                        onChange={(e) => setDescrption5(e.target.value)}
                        maxLength={301}
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    Location
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[35px]">Latitude</h2>
                      <input
                        defaultValue={fetchData.latitude5}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLatitude5(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Longtitude</h2>
                      <input
                        defaultValue={fetchData.longitude5}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[150px]"
                        onChange={(e) => setLongitude5(e.target.value)}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[45px]">length</h2>
                      <input
                        defaultValue={fetchData.length5}
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 px-1 border w-[50px]"
                        onChange={(e) => setLength5(e.target.value)}
                        type="text"
                      />
                    </div>
                  </div>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    File
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                      <h2 className="mr-[25px]">Start file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".mind"
                        onChange={(e) => setStartfile5(e)}
                      />
                    </div>
                    <div className="flex flex-row justify-center mt-[10px]">
                      <h2 className="mr-[15px]">Result file</h2>
                      <input
                        className="shadow-md bg-[#FAF9F9] shadow-inner-xl rounded-lg mr-2 border block w-[200px] file:bg-gray-500 file:text-white file:py-[7px] file:px-[2px] file:rounded file:border-0 file:text-sm"
                        type="file"
                        accept=".glb"
                        onChange={(e) => setResultfile5(e)}
                      />
                    </div>
                  </div>
                </td>
              </tr>

              {/* ===============================================================Row NULL =============================================================*/}
              <tr className="bg-white flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                </td>
              </tr>

              {/* ===============================================================Row URL =============================================================*/}
              <tr className="bg-[#EBEBEB] mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-white bg-black text-center border border-b block lg:table-cell relative lg:static">
                </td>
                <td colSpan={4} className="flex w-full lg:w-auto p-3 text-gray-800 lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold">
                    URL
                  </span>
                  <label htmlFor="" className="mr-5 font-bold">URL</label>
                  <input
                  type="url"
                    defaultValue={fetchData.url}
                    className="shadow-md bg-[#FAF9F9] border border-gray-300 shadow-inner-xl w-11/12 rounded-lg px-5 py-1"
                    onChange={(e) => setUrlWeb(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center pt-[1%] mb-5">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <button
                className="w-[134px] h-[37px] bg-[#41882E] text-white flex flex-row justify-center rounded-l-lg"
                onClick={() => handleOnSubmit("yes")}
              >
                {/* <Image
                  src="/carbon_network-public.svg"
                  width={20}
                  height={40}
                /> */}
                <div className="h-[35px] ml-[5px] flex items-center">
                  Publish
                </div>
              </button>
              <span>
                <button
                  onClick={handleClickpublish}
                  className="w-[37px] h-[37px] bg-[#2E691E] flex justify-center items-center rounded-r-lg"
                >
                  <RiArrowDownSFill className="w-[20px] h-[30px] text-white" />
                </button>
              </span>
              <button
                className="w-[171px] h-[37px] bg-red-600 rounded-lg ml-[30px] text-white"
                onClick={handleOnSubmitRemove}
              >
                <div className="flex flex-row justify-center">
                  <div className="h-[35px] ml-[5px] flex items-center justify-center">Trash</div>
                  <div className="h-[35px] ml-[5px] flex items-center justify-center"><BsTrash className="w-[20px] h-[30px]" /></div>
                </div>
              </button>
            </div>
            {showDrop && (
              <div className="z-10 w-[171px] h-[60px] bg-white rounded  drop-shadow-lg">
                <ul className=" text-sm">
                  <li
                    className="flex justify-center hover:bg-gray-200 hover:cursor-pointer"
                    onClick={() => handleOnSubmit("draft")}
                  >
                    <div className="flex flex-row block px-4 py-1">
                      Save Draft
                    </div>
                  </li>
                  <li
                    className="flex justify-center hover:bg-gray-200 hover:cursor-pointer"
                    onClick={() => handleOnSubmit("no")}
                  >
                    <div className="flex flex-row block px-4 py-1">
                      Unpublish
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCheckpoint;