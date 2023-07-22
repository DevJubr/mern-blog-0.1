import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const AllSubAdmin = () => {
  return (
    <>
      <div className="table__con">
        <div className="table__innercon">
          <table className="dbsub">
            <thead>
              <tr>
                <th>no.</th>
                <th>name</th>
                <th>email</th>
                <th>img</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>hakim</td>
                <td>hakim@gmail.com</td>
                <td>
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                </td>
                <td>
                  <AiFillEdit />

                  <AiFillDelete />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllSubAdmin;
