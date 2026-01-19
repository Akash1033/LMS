import mongoose from "mongoose";
import { Enrollment } from "../models/enrollment.model.js";
import { Course } from "../models/course.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const enrollInCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    throw new ApiError(400, "Invalid course ID");
  }

  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  //  Only published courses
  if (course.status !== "published") {
    throw new ApiError(403, "You cannot enroll in this course");
  }

  //  Prevent mentor enrolling in own course
  if (course.mentorId.toString() === req.user._id.toString()) {
    throw new ApiError(403, "You cannot enroll in your own course");
  }

  const enrollment = await Enrollment.create({
    studentId: req.user._id,
    courseId,
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      enrollment,
      "Enrolled in course successfully"
    )
  );
});

const getMyEnrollments = asyncHandler(async (req, res) => {
  const enrollments = await Enrollment.find({
    studentId: req.user._id,
    status: "active",
  })
    .populate("courseId", "title description level category")
    .sort({ enrolledAt: -1 });

  return res.status(200).json(
    new ApiResponse(
      200,
      enrollments,
      "Enrolled courses fetched successfully"
    )
  );
});

export {enrollInCourse, getMyEnrollments}