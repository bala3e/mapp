import React, { useState } from "react";
import axios from "axios";

const ProfileFilter = () => {
    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };


  


    const forms = document.querySelector(".forms"),
        pwShowHide = document.querySelectorAll(".eye-icon"),
        links = document.querySelectorAll(".link");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

            pwFields.forEach(password => {
                if (password.type === "password") {
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            })

        })
    })

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); //preventing form submit
            forms.classList.toggle("show-signup");
        })
    })

    const [postSearch, setPostSearch] = useState({
        gender:"",
        sdob:"",
        tdob:"",
        caste:"",
        natchathiram:""
        
        
    });
    const natchathiramArray = ["Ashwini",
    "Bharani",
    "Krittika",
    "Rohini",
    "Mirugaseeridam",
    "Thiruvathirai",
    "Punarpoosam",
    "Pusham",
    "Ayilyam",
    "Magham",
    "Puram",
    "Uthiram",
    "Hastam",
    "Chitra",
    "Swati",
    "Vishakham",
    "Anusham",
    "Kettai",
    "Mulam",
    "Pooradam",
    "Uthradam",
    "Thiruvonam",
    "Avittam",
    "Sathayam",
    "Poorattathi",
    "Uthiratathi",
    "Revati"]

        const url = "http://localhost:5000/profile/list";
    const createSearch = (newSearch) => axios.get(url+"?"+newSearch);
    const [data, setData] = useState([]);
    const createPost = async (get) => {
        try {
            console.log("get.natchathiram "+get.natchathiram);
            console.log("--------------------"+natchathiramArray.indexOf(get.natchathiram));
            get.natchathiram=natchathiramArray.indexOf(get.natchathiram)+1;
            let params = new URLSearchParams(get).toString();
            console.log(params);
            let responseData = await createSearch(params);

            console.log("Calling here handle submit ",responseData.data.data);
            setData(responseData.data.data);
            console.log("responseData ",data);

        } catch (error) {
            console.log(error.message);
        }
    };






    const handleSubmit =  (e) => {
        e.preventDefault();
        const responseData=createPost(postSearch);
    };

    

    const inputsHandler = (e) => {
        setPostSearch((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };

    function downloadBase64File(base64Data, fileName) {
        const linkSource = base64Data;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      }
   
    return (
        <div>
            <section className="container forms" style={{ width:"100%"}}>
                <div className="form login">
                    <div className="form-content">
                        <header>Search Profile</header>
                        <form>

                            <div style={{display:"flex", justifyContent:"left", gap:"10px"}}>
                          
                            <div className="field input-field" style={{width:"30%"}}>
                            <label for="exampleDataList" class="form-label">Gender</label>
                                <select   select id="gender" name="gender" className="input form-select aria-label=Default" onChange={(e) => inputsHandler(e)}>
                                    <option selected>Open this Gender</option>
                                    <option value="1">Female</option>
                                    <option value="2">Male</option>
                                </select>
                                <i className='bx bx-hide eye-icon'></i>
                            </div>
                            <div className="field input-field" style={{width:"30%"}}>
                            <label for="exampleDataList" class="form-label">Start Date</label>
                                <input type="date" placeholder="From Date" className="date form-control" name="sdob" id="dob" onChange={(e) => inputsHandler(e)} />
                            </div>
                            <div className="field input-field" style={{width:"30%"}}>
                            <label for="exampleDataList" class="form-label">End Date</label>
                                <input type="date" placeholder="To Date" className="date form-control" name="tdob" id="dob" onChange={(e) => inputsHandler(e)} />
                            </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"left", gap:"10px", marginTop:"20px"} }>
                            <div className="field input-field" style={{width:"30%"}}>
                            <label for="exampleDataList" class="form-label">Caste</label>
                                <select   class="form-select aria-label=Default" select  id="caste" name="caste" onChange={(e) => inputsHandler(e)}>
                                    <option selected>Open this Caste</option>
                                    <option value="1">Kallar</option>
                                    <option value="2">Agamudayar</option>
                                    <option value="3">Other</option>
                                </select>
                                <i className='bx bx-hide eye-icon'></i>
                           
                                </div>
                           
                           

                                

                            <div className="field input-field" style={{marginBottom:"40px",width:"30%"}} >
                                <label for="exampleDataList" class="form-label">Natchathiram</label>
                                <input class="form-control" autocomplete="off" list="datalistOptions" id="natchathiram" name="natchathiram" placeholder="Type to search..." onChange={(e) => inputsHandler(e)}/>
                                <datalist id="datalistOptions"  >
                                    <option value="Ashwini">Ashwini</option>
                                    <option value="Bharani">Bharani</option>
                                    <option value="Krittika">Krittika</option>
                                    <option value="Rohini">Rohini</option>
                                    <option value="Mirugaseeridam">Mirugaseeridam</option>
                                    <option value="Thiruvathirai">Thiruvathirai</option>
                                    <option value="Punarpoosam">Punarpoosam</option>
                                    <option value="Pusham">Pusham</option>
                                    <option value="Ayilyam">Ayilyam</option>
                                    <option value="Magham">Magham</option>
                                    <option value="Puram">Puram</option>
                                    <option value="Uthiram">Uthiram</option>
                                    <option value="Hastam">Hastam</option>
                                    <option value="Chitra">Chitra</option>
                                    <option value="Swati">Swati</option>
                                    <option value="Vishakham">Vishakham</option>
                                    <option value="Anusham">Anusham</option>
                                    <option value="Kettai">Kettai</option>
                                    <option value="Mulam">Mulam</option>
                                    <option value="Pooradam">Pooradam</option>
                                    <option value="Uthradam">Uthradam</option>
                                    <option value="Thiruvonam">Thiruvonam</option>
                                    <option value="Avittam">Avittam</option>
                                    <option value="Sathayam">Sathayam</option>
                                    <option value="Poorattathi">Poorattathi</option>
                                    <option value="Uthiratathi">Uthiratathi</option>
                                    <option value="Revati">Revati</option>
                                </datalist>
                            </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <div className="field button-field" style={{marginTop:"15px", width:"30%"}}>
                                <button type="button"  onClick={handleSubmit} className="btn btn-primary">Search Profile</button>
                            </div>
                            </div>
                           
                        </form>

                    </div>



                </div>


            </section>
            <div>
                <table>
                {data.map((user) => (
         <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    {user.education}
                </td>
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                {user.pnumber}
               </td>
               <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                {user.natchathiram}
               </td>
               <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                {user.name}
               </td>
               <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                {user.dob}
               </td>
               <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                   <a download="FILENAME.jpeg" href={user.myFile}>Download</a>
</td>
               
        </tr>


        ))}
            
        </table>
      </div>
        </div>
    )
}

export default ProfileFilter
