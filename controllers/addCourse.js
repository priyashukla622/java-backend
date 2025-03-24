import Course from "../Models/courseModel.js";
const addCourse=async(req,res)=>{
    try{
        const{title,subjects,teacher,description,duration,studentsEnrolled,topics,difficulty,price}=req.body;
        if(!title ||!subjects|| !teacher || !description ||!duration || !studentsEnrolled ||!topics ||!difficulty ||!price){
            return res.status(400).json({messase:"All field is require"})
        }
        const courseData=new Course({
            title,
            subjects,
            teacher,
            description,
            duration,
            studentsEnrolled,
            topics,
            difficulty,
            price
        });
        await courseData.save();
        res.status(201).json({message:"course added successfully"})
    }
    catch(error){
        console.log("Error is comming")
        res.status(500).json({message:"something went wrong"})
    }
};
export default addCourse;