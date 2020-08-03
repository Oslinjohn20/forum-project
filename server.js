const express = require("express");
const connectDB = require("./config/db");
const path = require("path")
const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

//Serve static assests in production
if (process.env.NODE_ENV === "production") {
    // Static folder
    app.use(express.static("client/build"));

    app.get("*", (req,res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
} else {

    app.get("/", (req, res) => res.json({ msg: "Welcome to the wrench forum..." }));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
