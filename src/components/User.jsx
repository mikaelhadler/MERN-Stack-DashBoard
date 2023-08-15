import React from "react";
import "./User.css";

const User = () => {
  return (
    <>
      <div className="user-container">
        <i>
<<<<<<< HEAD
          <box-icon color="#fff" id="bell" type="solid" name="bell"></box-icon>
        </i>
        <div>
          <box-icon
            color="#fff"
            id="user"
            name="user-circle"
            type="solid"
          ></box-icon>
        </div>
        <div className="user-box">
          <h3>User.name</h3>
          <p className="paragraph">email@gmail.com</p>
        </div>
        <i>
          <box-icon id="arrow" name="chevron-down" color="#ffffff"></box-icon>
=======
          <box-icon color='#fff' id="bell" type="solid" name="bell"></box-icon>
        </i>
        <div>
          <box-icon color='#fff' id='user' name="user-circle" type="solid"></box-icon>
        </div>
          <div className="user-box">
            <h3>User.name</h3>
            <p className="paragraph">email@gmail.com</p>
          </div>
        <i>
        <box-icon name='chevron-down' color='#ffffff' ></box-icon>
>>>>>>> 0d03b6c243cf3d6c9d7507e10c6693e5993a03e5
        </i>
      </div>
    </>
  );
};

export default User;
