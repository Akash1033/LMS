import { Enrollment } from "../models/enrollment.model.js";
import { Course } from "../models/course.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

export const getCourseEnrollments = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  // Ownership check
  if (course.mentorId.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized to view enrollments");
  }

  const students = await Enrollment.find({
    courseId,
    status: "active",
  }).populate("studentId", "name email");

  return res.status(200).json(
    new ApiResponse(
      200,
      students,
      "Enrolled students fetched successfully"
    )
  );
});
