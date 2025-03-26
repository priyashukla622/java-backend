import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  }, 
  teacher: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Teacher", 
    required: true 
  }, 
  teacherName: {
    type: String,
    required: true 
  },
  duration: { 
    type: Number, 
    required: true 
  }, 
  studentsEnrolled: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Student" 
  }], 
  status: { 
    type: String, 
    enum: ["Pending", "Completed"], 
    default: "Pending" 
  },
  logo: { 
    type: String,  
    required: true 
  },
  authorImg: { 
    type: String, 
    required: true 
  }
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
