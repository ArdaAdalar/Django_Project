

Welcome to the Blog Application! This project is a fully functional blogging platform built using **Django** for the backend and **React** for the frontend. Users can register, create, edit, and delete blog posts, as well as leave comments on posts.

---

## Features

### 🌟 Core Features
- **User Authentication**: Register, login, and manage your account.
- **Blog Management**: Create, edit, and delete posts.
- **Comment System**: Users can add comments to blog posts.
- **Responsive Design**: Optimized for both desktop.


### 🛠️ Tech Stack
- **Frontend**: React (with modern hooks and context API)
- **Backend**: Django (with Django REST Framework for API)
- **Database**: SQLite


---

## Installation and Setup

### Prerequisites
- Python 3.10+
- Node.js 16+
- PostgreSQL
- Docker (optional, for containerization)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/ArdaAdalar/Django_Project.git
   cd Django_Project/backend
2. Create a virtual enviroment
   python3 -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt

3. Run migrations and start the server:
  python manage.py migrate
  python manage.py runserver


 ### Frontend Setup

 1. Navigate to the frontend directory:
    cd ../frontend
2. Install dependencies:
   npm install
3. Start the development server:
   npm start




