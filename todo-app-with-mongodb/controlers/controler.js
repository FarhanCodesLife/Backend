import User from "../module/module.js";


const addUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const allemail = await User.findOne({ email });
  if (!firstname || !lastname || !email || !password) {
    res.status(500).json({
      massage: "farhna pagl ha",
    });
    return;
  }
  if (allemail) {
    res.status(500).json({
      massage: "email is alredy asses",
    });
    return;
  }
  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
    res.status(201).json({
      massage: "User add Succsesfuly",
      user,
    });
  } catch (error) {
    res.status(500).json({
      massage: "user not added",
    });
  }
};




const AllUser = async (req, res) => {
  try {
    const Users = await User.find({});
    res.status(200).json({
      Users,
    });
  } catch (error) {
    res.status(500).json({
      massage: "users not Found",
    });
  }
};




const DeleteTodo = async (req, res) => {
    const {id} = req.params
    if(!mangoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            massage:"invalid id"
        })
    
    }

    try {
      const deleteUser  = await User.findByIdAndDelete(id);
      
      if(!deleteUser){
        res.status(400).json({
            massage:"User Not Found"
        })
        return
      }
      res.status(200).json({
        massage:"User Deleted Successfuly",
        deleteUser
      })




    } catch (error) {
      res.status(500).json({
        massage: "Faild to delete users ",
      });
    }
  };
  
  export { AllUser, addUser, DeleteTodo };
  