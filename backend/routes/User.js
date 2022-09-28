import express   from "express";
import {login , logout,getUser, myProfile, contact, updateUser, addTimeline, addHomeProjets, addProjects, deleteTimeline, deleteHomeProjets, deleteProjets} from "../controller/User.js"
import { isAuthenticated } from "../middleware/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated,myProfile);
userRouter.route("/admin/update").put(isAuthenticated,updateUser);
userRouter.route("/admin/timeline/add").post(isAuthenticated,addTimeline);
userRouter.route("/admin/homeproject/add").post(isAuthenticated,addHomeProjets);
userRouter.route("/admin/project/add").post(isAuthenticated,addProjects);
userRouter.route("/admin/timeline/:id").delete(isAuthenticated,deleteTimeline)
userRouter.route("/admin/homeproject/:id").delete(isAuthenticated,deleteHomeProjets)
userRouter.route("/admin/project/:id").delete(isAuthenticated,deleteProjets)
userRouter.route("/contact").post(contact );