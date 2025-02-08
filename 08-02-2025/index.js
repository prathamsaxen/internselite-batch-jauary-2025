const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// CRUD -> Create | Read | Update | Delete
// POST     GET     PUT PATCH   DELETE
// We create different sets of endpoint.
// API + Endpoint = Complete API
// URL
// api.internselite.in === URL
// /contacts === Endpoint
// https://api.interselite.in/contacts = Complete API

app.use(bodyParser());

app.get("/", (request, response) => {
  console.log("Request Recieved");
  response.send("Req Completed");
});

app.get("/:id", (request, response) => {
  if (request.params.id === "prathamsaxen") {
    response.send("User is Pratham");
  } else if (request.params.id === "aniket") {
    response.send("User is Aniket");
  }
  response.send("Error 404 : User Not Found");
});

app.post("/", (request, response) => {
  console.log(request.body);
  const { Name, Profile } = request.body;
  console.log(Name);
  console.log(Profile);
  response.send("Data Recieved");
});

// prathamsaxen === username
app.put("/:id", (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  response.send("Update Request Recieved.");
});

app.delete("/:id",(req,res)=>{
    console.log(req.params.id);
    res.send(`Object with this ID ===> ${req.params.id} has been deleted.`);
})


// Update and Delete
// Update => Data is already there you just need to update the existing data.
// Delete => To remove data delete or mark data deleted.
// Soft Delete and Hard Delete
// Soft Delete = Always on the DB
// Hard Delete = Also data will be removed.

// POST REQUEST => Data DB Append => Frontend;

app.listen(8000, () => {
  console.log("Server is running at 8000");
});

// Thunder Client is for test your API endpoints without any frontend.
