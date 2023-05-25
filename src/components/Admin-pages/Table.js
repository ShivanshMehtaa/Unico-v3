import React, { useState } from "react";
import "./UserTable.css";
import axios from "axios";

const Table = ({ users }) => {
  const [Id, setId] = useState();

  const clickHander = async (_id) => {
    console.log(_id);
    const data = {
      _id: _id,
    };
    try {
      axios
        .delete("http://localhost:8080/api/v1/applicant/Deleteapplicant-ID", {
          data: {
            data,
          },
        })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message === "applicant has been deleted") {
            alert(res.data.message);
            window.location.reload(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const HandelApproved = (_id) => {
    const data = {
      _id: _id,
    };
    try {
      axios
        .update("http://localhost:8080/api/v1/admin/Update-ById", {
          data: data,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {}
  };
  return (
    <div className="Table">
      {users.map((curUser) => {
        const { _id, firstName, lastName, Email, phoneNumber } = curUser;

        return (
          <tr>
            <td>{_id}</td>
            <td>{firstName + " " + lastName}</td>
            <td>{phoneNumber}</td>
            <td>{Email}</td>

            <td>
              <button onClick={() => clickHander(_id)}>Delete Applicant</button>
              <button onClick={() => HandelApproved(_id)}>Approved</button>
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default Table;
