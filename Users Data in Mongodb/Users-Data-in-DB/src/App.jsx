import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data.Users);
        console.log(response.data.Users);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Classroom Users</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {users ? (
          users.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "300px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h2 style={{ color: "#007BFF" }}>User ID: {item._id}</h2>
              <h3 style={{ margin: "10px 0", color: "#555" }}>
                {item.firstname} {item.lastname}
              </h3>
              <p style={{ fontSize: "14px", color: "#888" }}>
                Email: {item.email}
              </p>
            </div>
          ))
        ) : (
          <h2 style={{ color: "red" }}>Users not found</h2>
        )}
      </div>
    </div>
  );
};

export default App;
