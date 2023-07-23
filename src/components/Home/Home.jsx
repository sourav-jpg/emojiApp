import React, { useState } from "react";
import "./Home.css";
import json from "../../emoji.json";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "../Edit/Edit";
import { MDBIcon } from "mdb-react-ui-kit";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [details, setDetails] =useState({
     name:"",
     email:"",
     phone:"",
     website:""
  })

  const handleLike = (id) => {
    console.log("id---",id);
    setToggle(!toggle);
    if(!toggle){
      let btn = document.getElementsByClassName('heart')
      // console.log(btn); 
      btn[id-1].style.color="red"
    }else{
      let btn = document.getElementsByClassName('heart');
      btn[id-1].style.color="#696969"
    }
      
  };

  // const handleDetails = (id) =>{ 
  //     setDetails({
  //       name:val.name[id-1].name
  //     })    

  //     console.log("dddd",details);

 

  // }
 
  const handleOpen = (id) => {
    console.log("popup button is clicked");
    console.log(id);
    // handleDetails(id)
    setOpen(!open);
  };

  return (
    <section className="homepage">
      <article className="homerow">
        {json.map((val, index) => {
          return (
            <div className="home-container">
              <div className="image-container">
                <img
                  className="image"
                  src={val.image}
                  alt="profile"
                  height={"200px"}
                  width={"100%"}
                />
              </div>
              <div className="details">
                <div className="details-info">
                  <h3 value={val.name} style={{ color: "black" }}>{val.name}</h3>
                </div>
                <div className="details-info">
                  <div className="detailsicon">
                    <MailOutlinedIcon sx={{ height: "25px", color: "grey" }} />
                  </div>
                  <h5
                    style={{
                      marginLeft: "10px",
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    {val.email}
                  </h5>
                </div>
                <div className="details-info">
                  <div className="detailsicon">
                    <PhoneEnabledOutlinedIcon
                      sx={{ height: "25px", color: "grey" }}
                    />
                  </div>

                  <h5
                    style={{
                      marginLeft: "10px",
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    {val.phone}
                  </h5>
                </div>
                <div className="details-info">
                  <div className="detailsicon">
                    <LanguageOutlinedIcon
                      sx={{ height: "25px", color: "grey" }}
                    />
                  </div>

                  <h5
                    style={{
                      marginLeft: "10px",
                      fontSize: "15px",
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    {val.website}
                  </h5>
                </div>
              </div>

              <div className="operations">
                <div className="operations-icons">
                  <button
                    className="btn"
                    value={index}
                    key={index}
                    onClick={() => {
                      handleLike(val.id);
                    }}
                  >
                   <MDBIcon fas icon="heart" className="heart" />
                    {/* {heart ? (
                      <FavoriteBorderOutlinedIcon className="btn2" sx={{ color: "green" }} />
                    ) : (
                      <FavoriteOutlinedIcon sx={{ color: "red" }} />
                    )} */}
                  </button>
                </div>
                <div className="operations-icons">
                  <button id="edit-btn" value={index} style={{width:"70%"}} onClick={() => handleOpen(val.id)}>
                    <BorderColorOutlinedIcon sx={{ color: "#696969"}} />
                  </button>
                </div>
                <div className="operations-icons">
                  <button>
                    <DeleteIcon sx={{ color: "#696969" }} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </article>
      {open && <Edit data={open} setOpen={setOpen} />}
    </section>
  );
};

export default Home;
