const Task = require("../schema/task-schema");

// Get all tasks
exports.getTasks = async (req, res) => {
  // Exception Handling = Runtime Error Handling.
  try {
    // .find() -> IT Takes the schema , all the objects on that schema it will return the array of that.
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new task
exports.addTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a task (Mark as completed)
exports.updateTask = async (req, res) => {
  try {
    // findByIdAndUpdate = this is a function of MongoDB to implmenet update
    const {title} = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: true, title },
      { new: true }
    );
    if(updatedTask === null)
    {
      res.status(400).json({error:"Provided ID does not exist"});
    }
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    // findByIdAndDelete = This will search from ID and simply delete the entry = This will be hard delete
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
