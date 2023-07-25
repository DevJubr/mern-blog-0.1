import React from "react";

const AdTable = ({ user }) => {
  return (
    <div className="tbl__subA">
      <table className="subAd">
        <thead>
          <tr>
            <th>no.</th>
            <th>name</th>
            <th>email</th>
            <th>img</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>habulla</td>
            <td>habulla@gmla.com</td>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3PEI8nlCz7C5x0OS1ylMuw-ycvzyuwaXYg&usqp=CAU"
                alt="name"
              />
            </td>
            <td>
              <div className="tblBtn">
                <button className="block">{user ? "unblock" : "block"}</button>
                <button className="profile">profile</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdTable;
