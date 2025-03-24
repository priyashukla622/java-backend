import Course from "../Models/courseModel.js";
const deleteData=async(req,res)=>{
    try{
        const course=await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json({message:"delete successfully"})
        
    } catch (error) {
        res.status(500).json({ message: "Error fetching course by ID", error });
      }
}
export default deleteData;