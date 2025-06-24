import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Outlet() {
  const [todos, setTodos] = useState([]);
  const [des, setDes] = useState("");

  const API_URL = "http://localhost:4001/api/user";
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username"); // must be set on login

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const res = await axios.get(`${API_URL}/gettodo/${username}`, {
        headers: { token },
      });

      const userTodos = res.data.todo.map((doc) => ({
        title: doc.todo.title,
        completed: doc.todo.completed,
      }));

      setTodos(userTodos);
    } catch (e) {
      console.error("Failed to load todos:", e);
    }
  }

  async function addTodo() {
    if (des.trim() === "") return;

    try {
      await axios.post(
        `${API_URL}/addtodo`,
        { title: des, done: false }, // username not needed here (middleware gives it)
        { headers: { token } }
      );

      setDes("");
      fetchTodos();
    } catch (e) {
      console.error("Failed to add todo:", e);
    }
  }

  async function toggleTodo(index) {
    const todo = todos[index];
    try {
      await axios.post(
        `${API_URL}/uptodo`,
        {
          title: todo.title,
          uptitle: todo.title,
          updone: !todo.completed,
          username, // ✅ required by backend
        },
        { headers: { token } }
      );

      fetchTodos();
    } catch (e) {
      console.error("Failed to update todo:", e);
    }
  }

  async function removeTodo(index) {
    const todo = todos[index];
    try {
      await axios.delete(`${API_URL}/deletetodo`, {
        headers: { token },
        data: {
          title: todo.title,
          done: todo.completed,
          username, // ✅ required by backend
        },
      });

      fetchTodos();
    } catch (e) {
      console.error("Failed to delete todo:", e);
    }
  }

  const name = "WELCOME TO TODO APP";

  return (
    <div className="text-center text-black flex justify-center items-center h-screen bg-gray-50">
      <div className="absolute my-14 h-1/2 w-3/4">
        {name.split("").map((char, index) => (
          <motion.span
            className="relative text-4xl font-serif font-bold"
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
          >
            {char}
          </motion.span>
        ))}

        <div className="flex justify-center m-6">
          <input
            className="text-xl border rounded-lg p-2 mx-6 w-1/2"
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="Enter a new task"
          />

          <button
            className="border text-xl hover:text-white rounded-lg bg-blue-200 hover:bg-blue-600 px-4 py-2"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>

        <Card todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

function Card({ todos, toggleTodo, removeTodo }) {
  return (
    <ul className="mt-8">
      {todos.length === 0 ? (
        <p className="text-xl text-gray-500">No todos yet!</p>
      ) : (
        todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-6 py-4 "
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
                className="w-5 h-5 mr-4"
              />
              <span
                className={`text-xl ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.title}
              </span>
            </div>
            <button
              className="border rounded-md hover:bg-red-400 bg-red-200 text-xl hover:text-white px-4 py-2"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
