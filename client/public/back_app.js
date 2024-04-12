import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Profile from "./Profile";
export default function App() {
  const [postImage, setPostImage] = useState({
    myFile: "",
  });


const url = "http://localhost:5001/uploads";
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
  
  const inputsHandler = (e) => {
    setPostImage((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
    <Profile></Profile>
     <div className="col-md-4 form-container">
     <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">ID</label>
                    <input type="text" className="form-control" id="ID" name="ID" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>inputsHandler(e)}/>
                       
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={(e)=>inputsHandler(e)}/>
                </div>
                
                <div className="form-group">
                    <label for="exampleInputEmail1">DOB</label>
                    <input type="date" className="form-control" id="dob" name="dob" onChange={(e)=>inputsHandler(e)}/>
                </div>
               
                <div className="form-group">
                    <label for="exampleInputEmail1">Education</label>
                    <input type="text" className="form-control" id="education" name="education" onChange={(e)=>inputsHandler(e)}/>
                </div>


                <div className="form-group">
                    <label for="exampleInputEmail1">Profile</label>
                    <input type="file" label="Image" name="myFile" accept=".jpeg, .png, .jpg" onChange={(e)=>
        handleFileUpload(e)} />
                </div>
               
                
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
    </>
  );
}

