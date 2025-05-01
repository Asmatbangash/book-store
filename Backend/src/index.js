import app from "./app.js";
import { dbConnection } from "./db/db.connection.js";

const port = process.env.PORT || 5000

dbConnection()
.then(() => {
    app.listen(port, () =>{
        console.log(`server is listning on port ${port}`)
    })
})
.catch((error)=>{
    console.log(error)
})