
import Course from "../models/courseModel.js";
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params; 
    const updateData = req.body; 
    console.log("Update Data:", updateData);
    const existingCourse = await Course.findById(id);
    if (!existingCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    const updatedCourse = await Course.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "Course updated successfully", updatedCourse });
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Error updating course", error: error.message });
  }
};
export default updateCourse;