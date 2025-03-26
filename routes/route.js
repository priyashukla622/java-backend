import express from "express";
import addCourse from "../controllers/addCourse.js"; 
import  {getCourse,getAll} from "../controllers/getCourse.js";
import updateCourse from "../controllers/editCourse.js";
import deleteData from "../controllers/deleteCourse.js"

const router=express.Router()
router.post("/addCourse",addCourse)
router.get("/getCourse", getCourse)
router.get("/getData/:id",getAll)
router.put("/update/:id",updateCourse)
router.delete("/delete/:id",deleteData)

export default router;