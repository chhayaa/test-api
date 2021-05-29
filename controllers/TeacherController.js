import teacher from "../mongooseModel/Teacher"

const router = Router()

router.post("/create", async (req, res) => {
    console.log("abba", req, res)
    try {
        var response = await teacher(req.body).save()
        console.log("hhhh", response)
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})
router.put("/update", async (req, res) => {
    try {
        var response = await teacher.findOneAndUpdate(
            { _id: req.body._id },
            req.body
        )
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})
router.get("/getTeacher", async (req, res) => {
    try {
        var response = await teacher.findById({ _id: req.body._id })
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})

router.post("/search", async (req, res) => {
    try {
        var response = await teacher.find({ name: req.body.name })
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})

router.delete("/delete", async (req, res) => {
    try {
        var response = await teacher.deleteOne({ _id: req.body._id })
        res.json(response)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
})
export default router
