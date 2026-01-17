import { MentorProfile } from "../models/mentorProfile.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateMentorProfile = asyncHandler(async (req, res) => {
  const { bio, expertise, experience } = req.body;

  // At least one field must be provided
  if (!bio && !expertise && experience === undefined) {
    throw new ApiError(400, "At least one field is required to update");
  }

  const mentorProfile = await MentorProfile.findOne({
    userId: req.user._id,
  });

  if (!mentorProfile) {
    throw new ApiError(404, "Mentor profile not found");
  }

  // Update allowed fields only
  if (bio !== undefined) mentorProfile.bio = bio;

  if (expertise !== undefined) {
    if (!Array.isArray(expertise) || expertise.length === 0) {
      throw new ApiError(400, "Expertise must be a non-empty array");
    }
    mentorProfile.expertise = expertise;
  }

  if (experience !== undefined) {
    if (experience < 0) {
      throw new ApiError(400, "Experience cannot be negative");
    }
    mentorProfile.experience = experience;
  }

  await mentorProfile.save();

  return res.status(200).json(
    new ApiResponse(
      200,
      mentorProfile,
      "Mentor profile updated successfully"
    )
  );
});

export  {updateMentorProfile}