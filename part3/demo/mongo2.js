const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env.local" });
const DB_PASSWORD = process.env.DB_PASSWORD;

const dbName = "noteApp";
const dbUrl = `mongodb+srv://Shrank9895:${DB_PASSWORD}@cluster0.vledjnd.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.set("strictQuery", false);
mongoose.connect(dbUrl);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];

const note = new Note({
  content: "GET and POST are the most important methods of HTTP protocol",
  important: true,
});

note.save().then((result) => {
  console.log(result);
  console.log("note saved!");
  mongoose.connection.close();
});
