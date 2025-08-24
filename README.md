# SutraX - Blogging Application

SutraX is a **Blogging Application** built using **Node.js, Express, MongoDB, and EJS**.  
It allows users to **sign up, log in, create blogs, comment, and upload profile/blog images**.  
This project follows a **MVC (Model-View-Controller)** pattern with proper folder structuring.

## Why the name - SutraX 😅?
The name “SutraX” is inspired by the word “Sutra”, which in Sanskrit means a thread or guiding rule—something that connects ideas and knowledge together. Since this application is about blogging and sharing thoughts, it acts like a digital thread that ties together stories, experiences, and perspectives.

## AWS DEPLOYMENT:

This website is also uploaded on AWS servers with link : http://sutrax-bloggingplatoform-env.eba-66xrevjb.ap-south-1.elasticbeanstalk.com/

<img width="1919" height="958" alt="image" src="https://github.com/user-attachments/assets/d0cd4a64-6cd8-4bda-96ab-bb624030b2d8" />

#### This link may not work in the future due to certain restrictions from AWS servers and MOngo DB (online server) 
#### This might not work because the application maybe in (terminate-environment) mode, one has to restore environment for application to work.
#### There may be some difficulty loading this link on a mobile device due to the absence of SSL certificates, which can cause browsers to show security warnings or block certain features, preventing the site from functioning properly, until a valid SSL certificate is installed and the site is served over HTTPS.(SSL certification service is currently unavailable for free version of AWS)

## AWS dashboard of this application:

<img width="1900" height="895" alt="image" src="https://github.com/user-attachments/assets/85867f65-23dd-4b03-b1b8-49492b70cc82" />


### AWS service used : Elastic Beanstalk



---

## Features

#### -  **Authentication** (Signup, Login, Logout)
#### -  **Profile Management** (Profile Pictures)
#### -  **Blog Management** (Add Blogs, Show Blogs, Upload Blog Images)
#### -  **Comments** on Blogs
#### -  **Static Assets** handling (Profile Pics, Blog Images, SutraX Logo)
#### -  Middleware-based **User Authentication**
#### -  EJS **templating engine** for dynamic views
#### -  Proper **404 - Not Found** handling
#### - Password encryption using cryptography - for enhanced security

## ⚙️ Installation & Setup
#### 1️⃣ Clone the repository

#### 2️⃣ Install dependencies
npm install

#### 3️⃣ Start MongoDB

Make sure MongoDB is running locally on port 27017.
mongod

#### 4️⃣ Run the application
node index.js


Server will run at:
👉 http://localhost:8000

## ScreenShots:
### Login Page
<img width="1911" height="973" alt="image" src="https://github.com/user-attachments/assets/3fdfb8cc-404a-4d76-89bf-85f7c7e55900" />

### SignUp Page
<img width="1912" height="966" alt="image" src="https://github.com/user-attachments/assets/a8334c0d-2f98-406b-ac24-72e339ea7037" />

### HomePage
<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/e0d62d0d-5b36-44d9-8686-274c2f93e67b" />

### Blogs Page
<img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/1c535f50-d06d-4389-8e35-fedefa5f3a7b" />

### About Page
<img width="1919" height="976" alt="image" src="https://github.com/user-attachments/assets/8cc771bc-6344-4bb6-b954-02c06ce43d24" />

### Profile Page
<img width="1919" height="974" alt="image" src="https://github.com/user-attachments/assets/1e87cc17-cf16-43bf-b656-550f64355cfa" />

### UI settings Page
<img width="1905" height="962" alt="image" src="https://github.com/user-attachments/assets/49bf02ff-399e-477b-a6c4-6409401b9d73" />

### Add new Blog(Sutra)
<img width="1915" height="962" alt="image" src="https://github.com/user-attachments/assets/8134298f-e957-46f0-92bd-f51d7aeb98cc" />

### Blog by Blog_Id
<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/de2d3ad5-22ee-4485-b04d-c8baf327ac01" />

### Comment section
<img width="1913" height="970" alt="image" src="https://github.com/user-attachments/assets/16dca3d7-e6b4-43a7-983e-e5e7b72c099f" />





