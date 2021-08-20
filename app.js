const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});
app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/register.html"));
});
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/login.html"));
});
const port = process.env.PORT || '3000';
app.listen(port,()=>{
console.log(`Server is runnig in the Port : ${port}`);
})