 import express from "express";
 import  {registerUser,loginuserUser,} from "../controllers/user.controllers.js";
import {   allPosts, createPost, likeandcommets } from "../controllers/post.controllers.js";
 
 const router = express.Router();
 
 router.post("/registeruser", registerUser);
 router.post("/loginuser", loginuserUser);
 router.post("/createpost", createPost);
 router.get("/posts", allPosts);
 router.put("/posts/:postId", likeandcommets );
 
 export default router;