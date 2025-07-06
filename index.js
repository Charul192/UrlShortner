const express = require("express");
const cookieParser = require("cookie-parser");

const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticroute')
const URL = require('./models/url');
const {restrictToLoggedinUserOnly, checkAuth} = require("./middlewares/auth");

const app = express();
const PORT = 8001;

// connectToMongoDB("<your-host>:<port>/<your-database-name>").then(() => console.log("MongoDB connected"));

const router = require("./routes/staticroute");
const userRoute = require('./routes/user');

//btane k liye ki kaha rkhi hain ejs files
const path = require("path");

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDB connected"));

//pehle hume btana hoga ki hum konsa engine use krr rhe hain
app.set("view engine", "ejs");

//ab ye btana hoga ki jo ejs files hain ye kaha rkhi hain
app.set("views", path.resolve("./views"));

app.use(express.json());
//form data ko parse krne k liye ek aur middleware chahiye hogaa
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

//ejs ki example
// app.get("/test", async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render("home", {
//         urls: allUrls,
//     });
// })

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth ,router);

//agar koi user route pe jaata h toh yahan divert krdo
app.use("/", router);


app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push : {
        visitHistory: {
            timestamp: Date.now(),
        }
    },
}
);
  if (!entry) {
        return res.status(404).send("Short URL not found");
    }
res.redirect(entry.redirectURL);
})

app.listen((PORT), () => console.log(`Server Started at port ${PORT}`));
