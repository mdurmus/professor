# Professor - General Culture Quiz

**Welcome to Professor - Question Bank!**

Join an exciting trivia journey and experience the interactive quiz on Professor. Professor offers an interactive quiz platform where learning meets fun. Whether you're a knowledge enthusiast or looking to test your general knowledge, Professor is tailored just for you.

🔒 **Secure Entry:**
Start your adventure by entering your name and email into the secure entry form. Your information is securely stored for a personalized experience.

🏆 **Earn Points:**
Answer questions correctly to earn points and track your progress. Compete against yourself or challenge your friends to see who can achieve the highest score.

🌐 **Share Your Success:**
Showcase your scores on social media to share your achievements. Invite your friends to surpass your score and join the Professor community.

🚀 Experience the Randomized Challenge:
Professor ensures a fresh and exciting experience every time you play. The app's intelligent randomization feature selects questions dynamically, keeping the game dynamic and enjoyable.


You can acess live application here: [Professor](https://mdurmus.github.io/professor)

<img src='assets/docs/readme_files/mobileResult.webp' alt="Mobile devices view">

## Site Owner Goals:

- **Increase User Engagement:**
  - Encourage regular participation in quizzes.
  - Ensure users spend more time within the application.

- **Foster Community Interaction:**
  - Build a sense of community among users.
  - Strengthen the user base through increased interaction.

- **Expand User Base:**
  - Broaden visibility to reach a wider audience.
  - Implement marketing and promotional activities.
  - Establish a presence on various platforms.

- **Merge Education and Entertainment:**
  - Create an environment where users can learn while having fun.

## User Stories

### First-time users

- Professor ensures your safety with a secure login feature. With the assurance that your personal information is protected, you can focus on exploring the app.

- Explore carefully selected questions in different categories to enhance your general knowledge. Engage with questions from history, science, art, and more.

- Learn correct answers with each question and receive valuable hints for incorrect answers, allowing you to track your progress.

- Only 30 seconds per question! Race against time, push your limits, and enhance your quick-thinking skills.

- Share your earned points with pride! Professor provides an opportunity to compete with friends on social platforms and share your achievements.

### Returning user:

- Experience the excitement of learning new information every time with the updated question bank. 

- To be honoured as I increase my knowledge and to invite my friends by sharing it on social media

## Design

### Colors

The color palette of the application primarily revolves around shades of blue and white. Various tones of blue are employed to create a cohesive visual experience. The use of a dark grey font ensures excellent legibility, offering a strong contrast against the light blue and white backgrounds. This thoughtful color combination enhances the overall readability and aesthetics of the interface.

### Fonts
Inter is a modern, clean, and readable sans-serif font family. It offers a broad range of characters and style variations, providing versatility in usage. Designed specifically for web applications and other digital platforms, Inter is commonly preferred in such projects. Offering good readability and aesthetics, Inter can assist in achieving a professional and contemporary appearance.

## Wireframes

I used the [balsamiq](https://www.balsamiq.com) tool for my sketches.

<details>
<summary>Mobile Version</summary>
<img src='assets/docs/wireFrame_files/mobile.webp'>
</details>

<details>
<summary>Tablet Version</summary>
<img src='assets/docs/wireFrame_files/tablet.webp'>
</details>

<details>
<summary>Desktop Version</summary>
<img src='assets/docs/wireFrame_files/desktop.webp'>
</details>

## Features

The application is a complete single page application. It allows you to use every function on a single screen. It has been tested on all screen resolutions. You can find the list of devices below.

## Login Screen

<img src='assets/docs/readme_files/login.webp' alt='Login page'>

Users are required to provide a name. They must also provide an email address. 

## Users's Panel

<img src='assets/docs/readme_files/user.webp' alt='user panel'>

With a simple design and functional use, Professor provides its users with an enjoyable learning experience.

### User's Info

<img src='assets/docs/readme_files/userInfo.webp' alt='User Info'>
Users can view their login information on this screen or log out if they wish. 

### Leaderboard
<img src='assets/docs/readme_files/leaderboard.webp' alt='Leaderboard'>
On this screen, users can view users who have reached peaks of knowledge, or they can reach that peak themselves.

## Question Section

<img src='assets/docs/readme_files/question.webp' alt='Question area'>

On this screen the user can see which category the problem is in. They can also see how many seconds they have left with a timer. If there are less than 20 seconds left, the timer is shown in orange and if there are less than 10 seconds left, it is shown in red.

Also, when the user gives an answer (i.e. clicks on one of the option buttons), the background color is green if the answer is correct and red if the answer is incorrect. And if the answer is incorrect, a hint for this answer is also given in the question field.

## Scoreboard

<img src='assets/docs/readme_files/score.webp' alt='Scoreboard section'>

On this screen, users can see their correct answer on the left side of the screen in green and their incorrect answer on the right side of the screen in red. They can also see the number of questions they have solved in a total of 10 questions in the middle of the screen in blue.

## Result Section

<img src='assets/docs/readme_files/result.webp' alt='Result section'>

On this screen, users can view their total points earned during an exam, as well as how many correct answers and how many incorrect answers they gave during that session. If they wish, they can share their achievements on social media platforms.

They can start a new game, view the leaderboard or log out of the system with the buttons at the bottom.

**How to Play:**
- Log in with your name and email.
- Answer each question within the allotted time.
- Earn points and climb the leaderboard.

### Features Left to Implement
Features such as the ability to add questions, send points to your e-mail address or invite other friends could have been added.

## Testing

### Validator Testing

<details>
<summary>HTML Validation</summary>
 [Html Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmdurmus.github.io%2Fprofessor%2F)
<img src='assets/docs/readme_files/htmlValidation.webp' alt='Html Validation'>
 No errors were returned when passing through the official W3C Markup Validator.
</details>

<details>
<summary>CSS Validation</summary>
[CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmdurmus.github.io%2Fprofessor%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
<img src='assets/docs/readme_files/cssValidation.webp' alt='CSS Validation'>
</details>


<details>
<summary>Javascript Validation</summary>
<img src='assets/docs/readme_files/jsValidation.webp' alt='JShint.com'>
No errors were returned when passing through the Jshint.com
</details>

<details>
<summary>Lighthouse Mobile Testing</summary>
<img src='assets/docs/readme_files/mobile.webp' alt='Lighthouse Mobile'>
</details>

<details>
<summary>Lighthouse Desktop Testing</summary>
<img src='assets/docs/readme_files/desktop.webp' alt='Lighthouse Desktop'>
</details>

### Browser Testing

- The Website was tested on Google Chrome, Firefox, Microsoft Edge, Safari browsers with no issues noted.

### Device Testing

- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 8, iPhoneX, iPhone 14, iPhone 6,7,8, Samsung Galaxy S20, Galaxy Fold and iPad, iPad Pro to ensure responsiveness on various screen sizes. The website performed as intended. The responsive design was also checked using Chrome developer tools across multiple devices with structural integrity holding for the various sizes.

- I also used the following websites to test responsiveness:

     [Responsinator](http://www.responsinator.com/?url=mdurmus.github.io%2Fprofessor)

     [Am I responsive](https://ui.dev/amiresponsive?url=https://mdurmus.github.io/professor)

### Bugs Identified

 - A problem encountered by some iPhone, iPad users is that, after answering a question, when the next question is displayed, an answer is highlighted as if the user clicked on it without taking any action. However, this issue does not disrupt the game; the highlighted answer seems to mimic the position of the previously selected answer and does not correspond to the correct answer. 

 - Android users do not experience such a problem. Addressing and resolving this issue requires the intervention of developers. Possible causes may include browser incompatibility, platform-specific issues, or an internal state of the application. To rectify the problem, the development team needs to analyze the situation in detail and find an appropriate solution.


### Fixed Bug

**Timer not stopping**

The questions must stop with 0 in the countdown with the timer. However, if you do not use the clearInterval method, the timer object will not stop. As mentioned in https://developer.mozilla.org/en-US/docs/Web/API/clearInterval, you need to clear the timer using the clearInterval method.

**Store User Information**

HTML and CSS cannot store data within pages due to their structure. However, I was able to store user information using Javascript's Sessionstorage feature. You can access the related document here. https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

**CSS and variable**

With CSS, instead of writing our color choices every time, we can set them once in the variables and then use this value over and over again wherever we want. You can access the related document from the link: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

## Deployment

The project was deployed using GitHub pages. The steps to deploy using GitHub pages are:

 - Go to the repository on GitHub.com
 - Select 'Settings' near the top of the page.
 - Select 'Pages' from the menu bar on the left of the page.
 - Under 'Source' select the 'Branch' dropdown menu and select the main branch.
 - Once selected, click the 'Save'.
 - Deployment should be confirmed by a message on a green background saying "Your site is published at" followed by the web address.

The live link can be found here - [Professor](https://mdurmus.github.io/professor)

## Technologies Used

### Languages

- HTML
- CSS
- Javascript

### Framework - Libraries - Programs Used

[W3C](https://www.w3.org/) - Used for HTML & CSS Validation.<br>
[TinyPNG](https://tinypng.com/) - Used to compress images to reduce file size without a reduction in quality.<br>
[Balsamiq](https://balsamiq.com/) - Used to generate Wireframe images.<br>
[Font Awesome](https://fontawesome.com/) - I used Fontawesome's icons in many parts of the app.<br>
[Google Fonts](https://fonts.google.com/) - Used to import and alter fonts on the page.<br>
[Chrome Dev Tools](https://developer.chrome.com/docs/devtools?hl=en) - Used for overall development and tweaking, including testing responsiveness and performance.<br>
[Responsinator](http://www.responsinator.com/) - Used to verify responsiveness of website on different devices.<br>
[Am I Responsive](https://ui.dev/amiresponsive) - Used to verify responsiveness of website on different devices.<br>
[GitHub](https://github.com/) - Used for version control and hosting.<br>
[Favicons](https://realfavicongenerator.net/) - I used Favicon generator for favicons.<br>

### Resources Used

- Fisher-Yates Sorting Algorithm
https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/

- I used for question generation and Javascript serialization. 
[ChatGTP](https://www.chatgpt.com)


- While preparing this document, I benefited from the guidance of the user
[AliOKeeffe](https://github.com/AliOKeeffe/mindyoga/tree/main?tab=readme-ov-file).

- While preparing this document, I benefited from the guidance of the user
[HGlass07](https://github.com/HGlass07/History-Quiz?tab=readme-ov-file)

## Acknowledgments

I thank Mentor for his valuable contributions to Mr. Antonio.