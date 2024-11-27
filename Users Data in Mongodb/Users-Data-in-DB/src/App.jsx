import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const firstname =  useRef()
  const lastname =  useRef()
  const email =  useRef()
  const password =  useRef()
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/users");
        setUsers(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getData();
  }, []);



const DeletUser = async (id)=>{
  try {
    const deleteuser = await axios.delete(`http://localhost:5000/api/v1/user/${id}`)

    console.log(deleteuser.data);    
    const response = await axios.get("http://localhost:5000/api/v1/users");
    setUsers(response.data.users);
    
  } catch (error) {
    console.log(error);
  }

}

const EditUser = async (item,id)=>{
const newfirstname = prompt("update first name",item.firstname)
const newlastname = prompt("update last name",item.lastname)
const newemail = prompt("update email",item.email)
const newpassword = prompt("update password",item.password)
const updateuserinfo = {
  firstname:newfirstname,
  lastname:newlastname,
  email:newemail,
  password:newpassword,
}
try{

  const edituser = await axios.put(`http://localhost:5000/api/v1/user/${id}`,updateuserinfo)

  console.log(edituser.data); 
  alert("user successfuly edit")   
  const response = await axios.get("http://localhost:5000/api/v1/users");
  setUsers(response.data.users);
  
}catch(error){
  console.log(error);
}

}

const addUser = async (event) => {
  event.preventDefault(); // Prevent form submission

  // Get values from the refs
  const newUser = {
    firstname: firstname.current.value,
    lastname: lastname.current.value,
    email: email.current.value,
    password: password.current.value,
  };

  try {
    const response = await axios.post("http://localhost:5000/api/v1/user", newUser);
    console.log("User added:", response.data);
    const updatedUsers = await axios.get("http://localhost:5000/api/v1/users");
    setUsers(updatedUsers.data.users);
    alert("user Add to DB successfuly")
    firstname.current.value = ""
    lastname.current.value = ""
  email.current.value =""
  password.current.value =""
  } catch (error) {
    alert('email is alredy registered ')
    console.log("error in db");
    email.current.value =""

  }

  
};


  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Classroom Users</h1>

      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        margin:"20px"

      }}>
        


        <form style={{
    width: "200px",
    border: "2px solid black",
    padding: "20px",
    
}} onSubmit={addUser}>
  <div>
    <input
      type="text"
      style={{ margin: "10px", height: "30px" ,borderRadius:"5px",padding:"0 5px"}}
      placeholder="Enter first name"
      required
      ref={firstname}
    />
    <input
      type="text"
      style={{ margin: "10px", height: "30px" }}
      placeholder="Enter last name"
      required
      ref={lastname}
    />
    <input
      type="email"
      style={{ margin: "10px", height: "30px" }}
      placeholder="Enter email"
      required
      ref={email}
    />
    <input
      type="password"
      style={{ margin: "10px", height: "30px" }}
      placeholder="Enter password"
      required
      ref={password}
    />
    <button type="submit" style={{ margin: "10px", height: "30px" }}>
      Add User
    </button>
  </div>
</form>


      </div>


      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {users && users.length > 0 ? (
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
              <div style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center",
                alignItems:"center",
                gap:"10px"
              }}>

              <button style={{
                border:"1px solid green",
                padding:"5px 30px",
                borderRadius:"20px",
                cursor:"pointer"
              }} onClick={()=>{EditUser(item,item._id)}}>Edit</button>
              <button style={{
                border:"1px solid red",
                padding:"5px 30px",
                borderRadius:"20px",
                cursor:"pointer",
                
              }} onClick={()=>{DeletUser(item._id)}}>Delet</button>
              </div>
            </div>
          ))
        ) : (
          <h2 style={{ color: "red" }}>Users not found MongoDB is eamty</h2>
        )}
      </div>
    </div>
  );
};

export default App;
