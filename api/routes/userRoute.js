import express from "express";
import {
  deleteUser,
  updateUser,
  getUserListing,
  getUser,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListing);
router.get("/:id", verifyToken, getUser);

export default router;
