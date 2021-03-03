const express =require('express');
const app = express();
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
const port = process.env.PORT || 3000;

var user_details = {
    userFirstName : "John",
    userLastName : "Doe",
    userDob : 30031985
}
app.get('/userInfo',(req,res,next)=>{
    res.status(200).json(user_details);
})
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port);
module.exports = app;