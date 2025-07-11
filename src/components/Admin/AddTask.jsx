import React, { useState } from "react";
import { assignTaskToEmployeeById, getEmployeesFromStorage } from "../utils/localstorage";

const AddTask = () => {
  const employees = getEmployeesFromStorage();
  const [employeeId, setEmployeeId] = useState(employees[0]?.id || 1);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("Development");

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate: new Date().toISOString().split("T")[0], // today
      category,
    };

    assignTaskToEmployeeById(employeeId, task);
    alert("Task assigned!");

    // Reset form
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Assign Task to Employee</h2>

      <label>Employee:</label>
      <select value={employeeId} onChange={(e) => setEmployeeId(Number(e.target.value))}>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.firstName}
          </option>
        ))}
      </select>

      <label>Title:</label>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        required
      />

      <label>Description:</label>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />

      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Development</option>
        <option>Design</option>
        <option>QA</option>
        <option>DevOps</option>
        <option>Support</option>
      </select>

      <button type="submit" className="mt-3 bg-blue-600 text-white p-2 rounded">
        Assign Task
      </button>
    </form>
  );
};

export default AddTask;
