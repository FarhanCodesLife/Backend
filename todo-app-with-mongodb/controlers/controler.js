import User from "../module/module.js"

const addUser = async (req,res)=>{
     const {firstname, lastname, email, password} = req.body
     const allemail = await User.findOne({email})
     if(!firstname || !lastname||!email||!password){
         res.status(500).json({
             
             massage : "all is required"
            })
            return
        }
        if(allemail){
            res.status(500).json({
                massage:"email is alredy asses"
            })
            return
    
        }
     try {
     
            
            const user = await User.create({
            firstname,
            lastname,
            email,
            password
        })
        res.status(201).json({
            massage: "User add Succsesfuly",
            user
        })
    } catch (error) {
        res.status(500).json({
            massage: "user not added"
        })
    }



}



const AllUser = async (req,res)=>{
    
    try {
        const AllUsers = await User.find({})
       
       res.status(200).json({
           AllUsers
       })
   } catch (error) {
       res.status(500).json({
           massage: "users not Found"
       })
   }



}

export  { addUser,AllUser };
