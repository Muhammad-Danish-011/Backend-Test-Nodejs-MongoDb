all api's are working perfectly and i provide json data for test.

kindly first npm install and then check according to json data.

i test it and also ensure that the data is post and get from database.

lastly i use thunder client for api hit and these are the api's according to the requirement of test from you. kindly acknowleged.
==============================================
post api  for signup

http://localhost:5000/api/auth/signup


//mock data for hit 


{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}




post api  for login

URL: http://localhost:5000/api/auth/login


//mock data for hit 

{
  "email": "john.doe@example.com",
  "password": "password123"
}



-----------------------------------------
1. User Authentication API Routes

URL: http://localhost:5000/api/auth/signup
Method: POST
Mock Data:

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}


POST /api/auth/login — User Login
URL: http://localhost:5000/api/auth/login
Method: POST
Mock Data:

{
  "email": "john.doe@example.com",
  "password": "password123"
}


POST /api/auth/forgot-password — Forgot Password
URL: http://localhost:5000/api/auth/forgot-password
Method: POST
Mock Data:
{
  "email": "john.doe@example.com"
}


POST /api/auth/reset-password — Reset Password
URL: http://localhost:5000/api/auth/reset-password
Method: POST
Mock Data:

{
  "email": "john.doe@example.com",
  "newPassword": "newpassword123"
}



2. Quiz API Routes
GET /api/quizzes — Get All Quizzes
URL: http://localhost:5000/api/quizzes
Method: GET
Mock Data: No body needed for a GET request.
GET /api/quizzes/:quizId — Get a Specific Quiz by ID
URL: http://localhost:5000/api/quizzes/:quizId
Method: GET
Mock Data: No body needed. Replace :quizId with a valid quiz ID.
POST /api/quizzes — Add New Quiz
URL: http://localhost:5000/api/quizzes
Method: POST
Mock Data:

{
  "title": "Math Quiz",
  "categoryName": "Mathematics",  // You are passing the category name here
  "questions": [
    {
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5"],
      "answer": "4"
    },
    {
      "question": "What is 5 * 3?",
      "options": ["15", "10", "5"],
      "answer": "15"
    }
  ]
}

PUT /api/quizzes/:quizId — Update a Quiz
URL: http://localhost:5000/api/quizzes/:quizId
Method: PUT
Mock Data:

{
  "title": "Updated Math Quiz",
  "category": "Mathematics",
  "questions": [
    {
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5"],
      "answer": "4"
    }
  ]
}
DELETE /api/quizzes/:quizId — Delete a Quiz
URL: http://localhost:5000/api/quizzes/:quizId
Method: DELETE
Mock Data: No body needed. Just make a DELETE request with the :quizId in the URL.



3. Admin API Routes
GET /api/admin/users — Get All Users (Admin only)
URL: http://localhost:5000/api/admin/users
Method: GET
Mock Data: No body needed for a GET request.
POST /api/admin/users — Add New User (Admin only)
URL: http://localhost:5000/api/admin/users
Method: POST
Mock Data:

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "password": "password123",
  "role": "user"
}
PUT /api/admin/users/:userId — Update User (Admin only)
URL: http://localhost:5000/api/admin/users/:userId
Method: PUT
Mock Data:
json
Copy code
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "role": "admin"
}
DELETE /api/admin/users/:userId — Delete User (Admin only)
URL: http://localhost:5000/api/admin/users/:userId
Method: DELETE
Mock Data: No body needed. Just make a DELETE request with the :userId in the URL.



4. User Quiz History and Results


GET /api/user/history — Get User's Quiz History
URL: http://localhost:5000/api/user/history
Method: GET
Mock Data: No body needed for GET request.



POST /api/user/result — Save User's Quiz Result
URL: http://localhost:5000/api/user/result
Method: POST
Mock Data:

{
  "quizId": "60a7db5f3b4e7e2b6f3bb82b",
  "score": 8,
  "totalQuestions": 10
}


==========================================================================

all api's are working perfectly and i provide json data for test.

kindly first npm install and then check according to json data.

i test it and also ensure that the data is post and get from database.

lastly i use thunder client for api hit and these are the api's according to the requirement of test from you. kindly acknowleged.