import express from "express";
import { addUser, deleteUser, getAllUser, getSingleUser, updateUser } from "../controller/userController.js";

const userRouter = express.Router();


userRouter.post("/add", addUser);
userRouter.get("/all", getAllUser);
userRouter.get("/:id", getSingleUser);
userRouter.put("/update/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);






export default userRouter;







