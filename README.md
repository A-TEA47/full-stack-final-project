## Full Stack Employee Management System
This is a Full Stack Employee Management System built using React for the frontend and Spring Boot for the backend. The project allows users to manage employee records, including adding, updating, viewing, and deleting employees.

## Features
Add new employees
View a list of employees
Update employee details
Delete employees

## Technologies Used
# Frontend
React with Vite
Axios for HTTP requests
Bootstrap for styling
![image](https://github.com/user-attachments/assets/4b2af6a8-aa05-462e-906d-1e62a32dcbc0)

# Backend
Spring Boot
Spring Data JPA for database operations
Spring Web
MySQL Databse
Lombok
REST API for communication between frontend and backend
![image](https://github.com/user-attachments/assets/ec611864-a6eb-444d-8d43-1377e87acd2c)

## Deployment
Frontend: Hosted on Vercel
Backend: Hosted on Render or similar platforms
![image](https://github.com/user-attachments/assets/27ebdff1-c819-4e1c-8072-a87f8a126616)


## Installation and Setup
Clone the Repository
bash
Copy code
git clone https://github.com/A-TEA47/final-stack-full-project.git
cd final-stack-full-project
# Frontend Setup
Navigate to the frontend/ folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
# Backend Setup
Navigate to the backend/ folder:
bash
Copy code
cd backend
Run the Spring Boot application using your IDE or Maven:
bash
Copy code
./mvnw spring-boot:run
The backend will run at http://localhost:8080.

## Environment Variables
To connect the frontend with the backend, set up the following environment variables:

# Frontend (frontend/.env)
env
Copy code
REACT_APP_BACKEND_URL=http://localhost:8080
# Backend (application.properties)
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=Quebecat47@
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update

## How to Deploy
Frontend Deployment (Vercel)
Push the frontend folder to GitHub.
Connect your repository to Vercel.
Set the root directory to frontend/ and deploy.
Backend Deployment (Render/Heroku)
Push the backend folder to GitHub.
Deploy the backend on a platform like Render.
API Endpoints
Base URL
http://localhost:8080

# Endpoints
GET /employees: Fetch all employees
POST /employees: Add a new employee
PUT /employees/{id}: Update an existing employee
DELETE /employees/{id}: Delete an employee by ID
Usage
Open the application in your browser.
Perform CRUD operations (Add, View, Update, Delete) on employees.
Use the search or filter options to find employees easily.

## Folder Structure

final-stack-full-project/
├── ems - frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── vite.config.js
│   ├── public/
│   ├── package.json
│   └── README.md

# Contributing
Contributions are welcome! Please fork this repository and create a pull request with your changes.

# Contact
If you have any questions, feel free to contact me:

GitHub: A-TEA47

## Thank you!
