import Course from "../models/courseModel.js";
const addCourse=async(req,res)=>{
    try{
        const{title,teacher,teacherName,duration,studentsEnrolled,status}=req.body;
        if(!title ||!teacher ||!teacherName||!duration || !studentsEnrolled||!status){
            return res.status(400).json({messase:"All field is require"})
        }
        const courseData=new Course({
            title,
            teacher,
            teacherName,
            duration,
            studentsEnrolled,
            status,
        });
        await courseData.save();
        res.status(201).json({message:"course added successfully"})
    }
    catch(error){
        console.log("Error is comming")
        res.status(500).json({message:"something went wrong", error:error.message})
    }
};
export default addCourse;