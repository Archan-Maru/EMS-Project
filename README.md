# 🧑‍💼 Employee Management System (EMS)

A fully functional Employee Management System built using **React + Vite**. It supports admin and employee login, task assignment, status tracking, and persistent storage via LocalStorage.

---

## 🚀 Features

### 👤 Authentication
- **Admin** login (`admin@example.com / 123`)
- **Employee** login (dummy accounts stored in `localStorage.js`)

### 📋 Task Management
- Admin can assign tasks to employees
- Tasks include title, description, date, and category
- Task states: `new`, `active`, `completed`, `failed`
- Dynamic task count updates per employee

### 🧠 State Handling
- Real-time task counts (active, new, completed, failed)
- LocalStorage persists data across page refreshes
- Components automatically re‐render on changes

---

## 🛠️ Tech Stack

| Tool         | Description                         |
| ------------ | ----------------------------------- |
| **React**    | Frontend UI library                 |
| **Vite**     | Lightning-fast development server   |
| **Tailwind** | Utility‑first CSS framework         |
| **LocalStorage** | Browser-based persistence      |
