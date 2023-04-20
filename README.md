# E-Commerce-Back-End
<<<<<<< HEAD

# Description
This application called E-Commerce-Back-End provides a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

# User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

# Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database


# Installation
To install and use the E-Commerce-Back-End, please follow these steps:

1.You can clone this repository to your local machine using Git:

Git clone https://github.com/harold-fv/E-Commerce-Back-End.git.

Next, run the following on the command line, npm i express sequelize mysql bcrypt dotenv.

After you install the package ,from the command line type node server.js to run the program.

# Usage

1. To demonstrate the acceptance criteria, go to the terminal inside the Visual Studio and run the following command.
     mysql -u root -p.

   ![image](https://user-images.githubusercontent.com/120603153/233273772-6bd0bf16-af67-4ef9-8b74-9f454647a647.png)

2. After this, the system will notify the user to input the password.

   ![image](https://user-images.githubusercontent.com/120603153/233274151-81ce8c05-0051-4446-955b-3526904d9582.png)

3. Then run the command source db/schema.sql to start creating the database.

   ![image](https://user-images.githubusercontent.com/120603153/233274709-8ebb1ab1-2b26-457f-9253-8a54885cbd9a.png)

4. After this, exit from mysql by typing exit.
 
![image](https://user-images.githubusercontent.com/120603153/233274866-54bd3a7f-122d-43c3-ad5b-4d1a55f4fe48.png)

5. To start the loading of data to the dabase, the user my run the command npm run seed.
   
 ![image](https://user-images.githubusercontent.com/120603153/233275348-d8e985ac-6914-4ba9-a41b-24d8bf5162c6.png)

6. Then to start the application, the user can run the command npm start.

 ![image](https://user-images.githubusercontent.com/120603153/233275662-ff8e691a-9132-454a-8495-05d1d6308925.png)

7. The user can start using the insomia application to check the API GET, POST, PUT and DELETE.
   
   ![image](https://user-images.githubusercontent.com/120603153/233276043-714056f3-4bc3-4f60-bd66-9ea22bea60f0.png)

# Walkthrough Video

https://github.com/harold-fv/E-Commerce-Back-End/blob/main/E-Commerce-Back-End-Video.gif

This is the Video walkthrough of the application.
  

Overall, the E-Commerce-Back-End application is useful tool to test the API POST,PUT,GET and Delete  using the insomia.
=======
E-Commerce Back End

https://github.com/harold-fv/E-Commerce-Back-End/blob/main/E-Commerce-Back-End-Video.gif

>>>>>>> ffb66e49e71dd9280ec3e8ff735e742aaf66d29a
