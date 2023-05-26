import React from "react";
import Manny from "../images/woman-58142.mp4";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex",
  };
  return loading ? (
    <div id="main" align="center">
      {/* <h2>WELCOME</h2> */}
      <video src={Manny} alt="Loaading.." className="loader" autoPlay></video>
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">Emali:{user.email}</p>
          <p>User ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
