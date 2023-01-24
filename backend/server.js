import { Express } from "express";
import { cors } from "cors";
import resturants from ".api/resturants.route.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants",resturants)
app.use('*',(res,req) => {
    res.status(404).json({eror : " page not fond "})
})

export default app