let express = require("express");
//let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

let profile = require("./models/profile")
let profileRoutes=require("./routes/profile.routes")
const app = express();

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
app.use(cors());


app.use('/profile', profileRoutes);

app.use("/uploads", async (req, res, next) => {
  const body = req.body;
  try {
    const newImage = await profile.create(body);
    newImage.save();
    res.status(201).json({message: "new image uploaded", createdPost: newImage});
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
});

app.get("/hi", async (req, res) => {
  await Post
          .find()
          .then((result) => {
            res.json({
              data: result,
              message: "All items successfully fetched.",
              status: 200,
            });
          })
          .catch((err) => {
            return next(err);
          });
  });





const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening at port " + PORT);
});

