import React, { useEffect, useState } from "react";
import "./UserTable.css";
import Table from "./Table";
const API = "https://jsonplaceholder.typicode.com/users";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div>
      <div className="head">
        <h1>All Users</h1>
      </div>
      <table>
        <div className="thead">
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </div>
        <tbody>
          <Table users={users} />
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
