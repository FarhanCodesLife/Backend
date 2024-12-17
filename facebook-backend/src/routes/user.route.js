 import express from "express";
 import  {registerUser,loginuserUser,} from "../controllers/user.controllers.js";
import { createPost } from "../controllers/post.controllers.js";
 
 const router = express.Router();
 
 router.post("/registeruser", registerUser);
 router.post("/loginuser", loginuserUser);
 router.post("/createpost", createPost);
 
 export default router;