import React, { useState } from "react";
import axios from "axios";

import './profile.css'
const Profile = () => {

    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };


    const mesham = ['Ashwini', 'Bharani', 'Krittika'];
    const rishabam = ['Rohini', 'Mirugaseeridam', 'Krittika'];
    const mithunam = ['Thiruvathirai', 'Punarpoosam', 'Mirugaseeridam'];
    const kadagam = ['Pusham', 'Ayilyam', 'Punarpoosam'];
    const simmam = ['Magham', 'Puram', 'Uthiram'];
    const kanni = ['Hastam', 'Chitra', 'Uthiram'];
    const thulam = ['Swati', 'Vishakham', 'Chitra'];
    const viruchigam = ['Anusham', 'Kettai', 'Vishakham'];
    const dhanushu = ['Mulam', 'Pooradam', 'Uthradam'];
    const magaram = ['Thiruvonam', 'Avittam', 'Uthradam'];
    const kumbam = ['Sathayam', 'Poorattathi', 'Avittam'];
    const meenam = ['Uthiratathi', 'Revati', 'Poorattathi'];

    let type = null;
    let options = null;

    if (selected === "1") {
        type = mesham;
    } else if (selected === "2") {
        type = rishabam;
    } else if (selected === "3") {
        type = mithunam;
    }
    else if (selected === "4") {
        type = kadagam;
    }
    else if (selected === "5") {
        type = simmam;
    }
    else if (selected === "6") {
        type = kanni;
    }
    else if (selected === "7") {
        type = thulam;
    }
    else if (selected === "8") {
        type = viruchigam;
    }
    else if (selected === "9") {
        type = dhanushu;
    }
    else if (selected === "10") {
        type = magaram;
    }
    else if (selected === "11") {
        type = kumbam;
    }
    else if (selected === "12") {
        type = meenam;
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

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

    const [postImage, setPostImage] = useState({
        myFile: "", horoscope: ""
    });


    const url = "http://localhost:5000/uploads";
    const createImage = (newImage) => axios.post(url, newImage);

    const createPost = async (post) => {
        try {
            await createImage(post);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(postImage);
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage({ ...postImage, myFile: base64 });
    };

    const handleFileUploadHoroscope = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage({ ...postImage, horoscope: base64 });
    };


    const inputsHandler = (e) => {
        setPostImage((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };

    const rowStyle = {

        display: "flex",
        marginBottom: "20px"

    }
    const formsControlls = {

        width: "30%",
        marginTop: "10px",
        marginRight: "10px",
        lineHeight:1.2
    }

    return (
        <div>
            <section className="container forms" style={{ width: "100%" }}>

                <div className="form-content">
                    <header>Create Profile</header>
                    <form onSubmit={handleSubmit}>
                        <div style={rowStyle}>

                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Name</label>
                                <input   type="text" placeholder="Name"  className="input" id="name" name="name" onChange={(e) => inputsHandler(e)} />
                            </div>

                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Gender</label>
                                <select  select id="gender" name="gender" className="input form-select " onChange={(e) => inputsHandler(e)}>
                                    <option value="1">Female</option>
                                    <option value="2">Male</option>
                                </select>
                            </div>
                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Date of Birth</label>
                                <input type="date" placeholder="DOB" className="input" name="dob" id="dob" onChange={(e) => inputsHandler(e)} />
                            </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Contact No</label>
                                <input type="number" placeholder="Phone" className="input" name="pnumber" id="pnumber" onChange={(e) => inputsHandler(e)} />
                                <i className='bx bx-hide eye-icon'></i>
                            </div>
                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Education</label>
                                <input type="text" placeholder="Education" className="input" name="education" id="education" onChange={(e) => inputsHandler(e)} />
                            </div>
                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Occupation</label>
                                <input type="text" placeholder="Job" className="input" name="job" id="job" onChange={(e) => inputsHandler(e)} />
                            </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Salary</label>
                                <input type="text" placeholder="salary" className="input" name="salary" id="salary" onChange={(e) => inputsHandler(e)} />
                            </div>


                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Caste</label>
                                <select  className="form-select aria-label=Default" select  id="caste" name="caste" onChange={(e) => inputsHandler(e)}>
                                    <option selected>Open this Caste</option>
                                    <option value="1">Kallar</option>
                                    <option value="2">Agamudayar</option>
                                    <option value="3">Other</option>
                                </select>
                                <i className='bx bx-hide eye-icon'></i>
                            </div>


                            <div className="field input-field" style={formsControlls}>
                                <label class="form-check-label" for="flexCheckDefault">Sub caste</label>
                                <input type="text" placeholder="subcaste" className="input" name="subcaste" id="subcaste" onChange={(e) => inputsHandler(e)} />
                            </div>
                        </div>
                        <div style={rowStyle}>
                            <div className="field input-field" style={formsControlls}>
                                <label className="form-check-label" for="flexCheckDefault">Rasi</label>
                                <select className="form-select aria-label=Default" select id="rasi" name="rasi" onChange={e => { changeSelectOptionHandler(e); inputsHandler(e) }}>
                                    <option selected>Open this Rasi</option>
                                    <option value="1">Mesha</option>
                                    <option value="2">Rishabam</option>
                                    <option value="3">Mithunam</option>
                                    <option value="4">Kadagam</option>
                                    <option value="5">Simmam</option>
                                    <option value="6">Kanni</option>
                                    <option value="7">Thulam</option>
                                    <option value="8">Viruchigam</option>
                                    <option value="9">Dhanushu</option>
                                    <option value="10">Magaram</option>
                                    <option value="11">Kumbam</option>
                                    <option value="12">Meenam</option>
                                </select>
                                <i className='bx bx-hide eye-icon'></i>
                            </div>
                            <div className="field input-field" style={formsControlls}>

                                <label className="form-check-label" for="flexCheckDefault">
                                    Natchathiram
                                </label>

                                <select name="natchathiram" id="natchathiram" onChange={(e) => inputsHandler(e)}>
                                    {
                                        /** This is where we have used our options variable */
                                        options
                                    }
                                </select>
                                <i className='bx bx-hide eye-icon'></i>
                            </div>

                            <div className="form-check" style={formsControlls}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault" name="isRM" id="isRM" onChange={(e) => inputsHandler(e)}>
                                    Is Remarriage
                                </label>
                            </div>

                        </div>
                        <div style={rowStyle}>
                            <div class="form-check" style={formsControlls}>
                                <label className="form-check-label" for="customFile">Details</label>
                                <textarea className="form-textarea" name="note" id="note" onChange={(e) => inputsHandler(e)} />

                            </div>
                            <div class="custom-file" style={formsControlls}>
                                <label className="form-check-label" for="customFile">Choose Photo</label>
                                <input type="file" class="custom-file-input" name="myFile" id="myFile" accept=".jpeg, .png, .jpg" onChange={(e) =>
                                    handleFileUpload(e)} />

                            </div>
                            <div>
                                <label className="form-check-label" for="customFile">Choose Horoscope</label>
                                <input type="file" class="custom-file-input" name="horoscope" id="horoscope" accept=".jpeg, .png, .jpg" onChange={(e) =>
                                    handleFileUploadHoroscope(e)} />

                            </div>
                        </div>
                        <div style={{display:"flex",justifyContent:"center" ,alignItems:"center"}}>
                        <div className="field button-field">
                            <button style={{width:"300px", padding:"12px"}} type="submit" className="btn btn-primary">Create Profile</button>
                        </div>
                        </div>
                    </form>

                </div>






            </section>
        </div>
    )
}

export default Profile
