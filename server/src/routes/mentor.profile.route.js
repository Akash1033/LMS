import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { updateMentorProfile } from "../controller/mentorProfile.controller.js";

const router = Router();



router.route("/profile").patch(verifyJWT,authorizeRoles("mentor"),updateMentorProfile)

export default router;
