import express from "express";
import { registerUser, deleteUser, updateUser, loginUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;