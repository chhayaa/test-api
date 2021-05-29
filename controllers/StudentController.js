import Student from "../mongooseModel/Student"

const router = Router()

router.post("/create", async (req, res) => {
    try {
        var response = await Student(req.body).save()
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})

router.put("/update", async (req, res) => {
    try {
        var response = await Student.findOneAndUpdate(
            { _id: req.body._id },
            req.body
        )
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})

router.delete("/delete", async (req, res) => {
    try {
        var response = await Student.deleteOne({ _id: req.body._id })
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})

router.post("/search", async (req, res) => {
    try {
        var response = await Student.findOne({ _id: req.body._id })
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})

router.post("/students", async (req, res) => {
    try {
        const paginationSkip = (req.body.page - 1) * global.paginationLimit
        var findStudents = await Student.find()
            .limit(global.paginationLimit)
            .skip(paginationSkip)
        var count = await Student.countDocuments(findStudents)
        var maxpage = _.ceil(count / global.paginationLimit)
        res.json({ findStudents, count, maxpage })
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})

export default router
