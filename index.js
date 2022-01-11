const express = require("express");
const cors = require("cors");

const app = express(); 

// var corsOptions= {
//     origin="http://localhost:8081"
// };

// app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

//database connect
const db=require("./app/models");
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //  useCreateIndex:true,
    // useFindAndModify:true
})
.then(()=>{
    console.log("Connected to the database");
})
.catch(err=>{
    console.log("Cannot connect to the database",err);
    process.exit();
});


app.get("/",(req,res)=>{
    res.send("welcome to application")
});

require("./app/routes/tutorial.routes")(app);

const PORT =process.env.PORT|| 8082;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}.`);
});