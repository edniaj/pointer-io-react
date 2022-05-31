# TGC-16 Project 2
![image](https://user-images.githubusercontent.com/26456566/162624829-b9c2e031-1901-4ded-b3b6-cf3b6d80f4b0.png)


# Title: Pointer.io
#Website
https://tiny-hamster-468f0e.netlify.app/
## Summary

Pointer.io is a social media plus job finding website, designed to be a Linkedin competitor, whilst improving everything that Linkedin is bad at. It is meant to be occupation specific, for tech roles and techies only instead of catering to a broad based crowd. The vision is for the site to be technically focused. Pointer.io strives to be lightweight and simple to use. 

## User Stories

### Technical hobbyists

Tan Ah Kow is a Computer Science undergraduate, 25 years old. He would like to discuss more about binary tress about fellow peers, but in his school, he couldn't find any like minded friends. He goes onto Pointer.io, looks up a tag called Binary Tree, and inside the tag he could find company that specialises in binary tree and talk to them.

Acceptance Criteria
1. Company must be able to tag their job description.
2. User must be able to find the job post thru a filter option
3. There must be a private messaging function.



### Job Seekers
Tan Ah Lian just finished her bootcamp and would like to find a job. However, there is a lot of spam and lowball offers on traditional job seekers website. It is an employer's market, and there doesn't seem to be a lot of places where employees can advertise that they are looking for a job. She goes on Pointer.io to post her job request and gets matched within a few days.

Acceptance Criteria
1. It is a P2P experience for job seekers and employers. No middle man involved. 
2. Job seekers must be able to post their expectations, location preference, job requirement. 

### Employers
Linkedlol has just finished their series A and need to hire 1000 employees to spend all the VC money they recieved. The issues with traditional job seeking websites is that it is one-way - they post their job scope and wait for resumes to flood in. However, Linkedlol thinks that missing out on a lot of talent who simply weren't fortunate to come across their job listing - they would prefer to search through a database of job seekers themselves and decide.

Acceptance Criteria
1. Employer must be able to Create, Read, Update and Delete their job offer
2. Employee must be able to apply for join thru the chat system
3. Clear communication system
4. Strict validation in the registration field to prevent duplicate accounts

## Features

1. There must be a user authentication system.
2. There must be a chat system. 
3. There must be a job portal
4. Employer must be contactable through job portal
5. Workplace must be clear and concise


## Website Structure
There will be 8 pages.

### Register
Users register with an email, password as login credentials. Allows users to add personal information such as contact number, education background etc... Redirects user to login page

### Login
User login with email and password.
After loggin in, it redirects user to homepage

### Home page
Homepage will brief users on what the web structure of the page and what kind of functions they can use. 

### Chat
Allow job seekers to chat with employers.

### Job
Allow users to check all job posting. There is a filter option for users to search, users can filter job posting based on : frameworks, programming language, field of study, salary range, job title and organization.

### Edit jobs
Allow job creators to edit posting.

### Create Posting
Allow users to create job posting.

### Logout
Clear users cookie and log out user.



## Database structure
![erd](https://user-images.githubusercontent.com/26456566/162623718-81b6e508-be51-4fb4-a2e0-f5f86f90fdb2.png)

## Colour palette
![colorpallete](https://user-images.githubusercontent.com/26456566/171202174-7ebbd64f-2249-4034-a1fa-304dcadb49a1.png)
link: https://coolors.co/edf4fc-649eff-7bb9ff-d9e3ff
The choice of color was primarily based on other job portal. Blue, white and grayish tone is appropriate for a professional website (job portal).

##Font family
Majority of the font was in Helvetica as it is apt for a professional website.
Slogan uses Segoe Script

## Technologies Used

HTML5
CSS3
JavaScript
React
Material UI
Leaflet
MongoDB
Axios
Express
Cors
Visual Studio Code
Git
GitHub
Netlify
Heroku

# TEST CASES
| #  | Description | Steps | Expected|
| ------------- | ------------- | ------------- | ------------- |
| 1 | Login page must have validation| Incorect user information entered | The login page should prompt an error message |
| 2 | Register page must have server side validation | Go to registration page and edit component value, post it with the submit button | it should not be able to register user. |
| 3 | Homepage mobile responsiveness | Adjust page to check for mobile responsiveness | Div should not overlap with other div |
| 4 | Job webpage should display all job offers| Go to the /job route | check if it has many job offer (including self-created ones) |
| 5 | Create job offers has validation | Leave the fields empty and ke submit | It should not be able to Post. Error message should flash below submit button |
| 6 | Edit job offers | Go to edit job offer routes | It should display all job offers that you have personally created. You should be able to edit and delete job listing |
| 7 | Chat | Apply for job under job route. When you apply, it will automatically send message to employer.  | You should be able to continue the conversation with employer after applying |
| 8 | Chat should be mobile responsive | Use web tools to check for mobile responsiveness | When screen is small, it should only display the message that you are currently chating with |




## Deployment



Base directory: Not set

Build command: CI=false npm run build

Publish directory: build

Hosted on Netlify free plan. To deploy, fork this code, and link your Github account with Netlify. Use the above settings. 

## Credits and Acknowledgement
https://mui.com/
https://mui-treasury.com/
https://codesandbox.io/
