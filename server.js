const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to the wrench forum..." }));

const PORT = process.env.PORT || 5000;

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

// Getting the data from the database 
app.get("/api/posts", (req, res) => {
    const posts = data.posts
    res.send(posts)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
