# TechCurve AI Tasks - Backend Intern Test

This repository contains the implementation of the Technical Test for Backend Interns at TechCurve, focusing on a No Code/Low Code Platform. The project demonstrates proficiency in creating RESTful APIs, handling authentication, and performing data aggregation using Node.js.

## Overview

This project showcases a set of backend tasks implemented using Node.js, demonstrating skills in API development, data handling, and security practices. The tasks are designed to assess problem-solving abilities, coding skills, and attention to detail.

## Tasks

### 1. Simple REST API for Form Data (60 minutes)

Create a REST API with endpoints to save and retrieve form structures. The API should include:
- POST /form: Save a form structure (JSON) to a file.
- GET /form: Retrieve the saved form structure.

The form structure should include an ID and an array of fields with types and labels.

Assessment criteria include proper use of NodeJS and Express, file handling using the fs module, and correct use of HTTP status codes and error handling.

### 2. Basic Authentication System (45 minutes)

Implement an authentication system with the following features:
- POST /register: Accept username and password, hash the password, and save to a JSON file.
- POST /login: Validate username and password against saved data, returning success or failure.

Assessment criteria focus on the use of password hashing libraries like bcrypt, secure handling of user credentials, and proper error handling and validation.

### 3. Data Aggregation API (45 minutes)

Create an endpoint GET /tasks/stats that aggregates data from a list of tasks stored in a JSON file. The API should return:
- Total number of tasks
- Number of tasks per status
- Number of tasks per user

Assessment criteria include data aggregation logic, efficient handling of JSON data, and clarity and structure of the response.

## Installation

1. Clone the repository: `git clone https://github.com/DeveshAwadhiya/TechCurve-Ai-Tasks.git`
2. Navigate to the project directory: `cd TechCurve-Ai-Tasks`
3. Install dependencies: `npm install`

## Usage

Start the server by running: `npm start`

The server will run on `http://localhost:3000` or the specified port in your environment.

## API Endpoints

- POST /form: Save a form structure
- GET /form: Retrieve the saved form structure
- POST /register: Register a new user
- POST /login: Authenticate a user
- GET /tasks/stats: Get aggregated task statistics

## Technologies Used

- Node.js
- Express.js
- bcrypt (for password hashing)
- fs module (for file operations)

## Contributing

Contributions are welcome. Please fork the repository, create a new branch, make your changes, and open a Pull Request.

## License

This project is licensed under the MIT License.

---

© 2023 TechCurve. All rights reserved.
