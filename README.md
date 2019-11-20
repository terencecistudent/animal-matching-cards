# Animal Matching Card Game

## Description
This is an animal matching card game where there are twelve cards lined out 4x3 (4 across and 3 down).  The aim
is to click on a card which will flip over, then click on another card to see if it will match.  The user should click the 
**Start Game** button to start the timer and game.  Once the user has matched all of the cards there will be a pop up saying 
'Congratulations' containing a **New Game** button and a **Close** button.  There is also a pop up if the user runs out of time
which contains the same buttons.  The timer will stop when all of the cards are selected.  When the user runs out of time, the
cards will become disabled for clicking on.

This game is also browser cross compatible.


## UX

### User Stories

- As a user, I would like to click the **Start Game** button which will start the timer and game.
- As a user, I would like to click on a card which I want to select.
- As a user, I want to click on two cards to see if I got a match.
- As a user, I would like the two cards I selected which are not a match to turn back around, as this would mean there is an error in the game.
- As a user, I do not want to click on three cards which will all turn around at the same time as this will cause a problem.
- As a user, I would like to play this game on a laptop, iPad or mobile phone as it means that the game can be played in different devices.
- As a user, I would like the timer to stop counting down when all the cards are matched as I would like to see how much I had left to complete the game.
- As a user, I would like a pop up message shown when I complete the game with a vistory message so I know that I have completed the game.
- As a user, I would like a pop up message shown which then I can either close or play a game, as I would like to play again.
- As a user, I would like to play a new game to find reshuffled cards.


### Framework

I have chosen to use Bootstrap 4 for the design and layout of my game.  Bootstrap is simple, effective and very efficient to use.

In terms of my font, I have changed it to Roboto using Google Fonts.
The reason why I chose this font is because the text is clear and easy to read for the users.

https://fonts.google.com/


### Wireframes

I have used a software called JustInMind Prototyper to create 2D Models of my game.  
As not everybody will not be able to access this software, I have made screenshots and put them into Word documents attached to my GitHub.
- A link to my wireframes can be found here:
https://github.com/terencecistudent/matching-cards-project/blob/master/2D-Model-Responsive.pdf


## Requirements
- Access to desktop, laptop, table or mobile devices.
- Internet connection.


## Installing
Software used to complete this game: **GitPod**

First go to GitHub: https://github.com/
1. Sign In or Sign Up to GitHub.
2. Once signed in, go to the left side of the screen and you will see:
![image](https://user-images.githubusercontent.com/48124466/68049737-89b6b280-fcdb-11e9-9e41-e02d4dc6fa9a.png)

3. Click **New**.
4. Fill out new repository details.
5. Click **Create Repository** at the bottom.
6. At the top right click GitPod (if installed) or enter URL Prefix.
7. Follow instructions below.

**How to install GitPod:**
- URL Prefix:
- Browser Extension
- GitHub App

Here is the link for instructions: https://www.gitpod.io/


## Testing

### Jasmine Tests

Jasmine Testing Scripts and Specs can be found here: 
https://github.com/terencecistudent/matching-cards-project/tree/master/testing

1. Selected Front Faced Cards Equals Image From Local File, e.g. bee:

![image](https://user-images.githubusercontent.com/48124466/68870972-a4355680-06f3-11ea-9694-832e545c1ce3.png)

2. Back Faced Cards Should Be An Image Of An Airplane:

![image](https://user-images.githubusercontent.com/48124466/68871216-01c9a300-06f4-11ea-99f0-fee8ad0034ae.png)

3. If Cards Don't Match Then It Should Return Boolean **false**, e.g. bee and crab:

![image](https://user-images.githubusercontent.com/48124466/68871385-3ccbd680-06f4-11ea-9d64-4045bed181a9.png)

4. If Card Equals Correct Image, Then It Should Return Boolean **true**, e.g. bee:

![image](https://user-images.githubusercontent.com/48124466/68871613-a2b85e00-06f4-11ea-921e-6a8af9076bea.png)

5. If Cards Are A Match, Then It Should Return **Matched!**, e.g. bee and bee:

![image](https://user-images.githubusercontent.com/48124466/68871783-e3b07280-06f4-11ea-8380-db8369157d5b.png)

6. If **New Game** Button Contains Text, Return Boolean **true**:

![image](https://user-images.githubusercontent.com/48124466/68872020-46a20980-06f5-11ea-8312-7e5fbc633588.png)

7. If **New Game** Button Contains HTML, Return Boolean **true**:

![image](https://user-images.githubusercontent.com/48124466/68872095-61747e00-06f5-11ea-8c71-8de747efb062.png)


### Manual Tests

As well as Jasmine Testing, I have also completed manual tests regarding the Timer, Modal and Button's functionality:
Attached is a link to a Word document as to where I have printed screenshots which is contained in the **testing** folder:
https://github.com/terencecistudent/matching-cards-project/blob/master/testing/Modal-and-Button-Functionality.pdf


### Running Responsive Designs on Google Chrome:

Here is a link how to run the application on a live server by configuring and exposing ports with GitPod:
https://www.gitpod.io/docs/43_config_ports/

**To view responsive applications:**
1. Right click then go to **Inspect Element**
2. Click on the **Toggle Device Toolbar** (Icons showing two devices).
![image](https://user-images.githubusercontent.com/48124466/68051275-f2ebf500-fcde-11e9-8b3a-adc7abc16c5f.png)

3. Click on any device, for example, iPhone 5/SE selected:
![image](https://user-images.githubusercontent.com/48124466/68051467-5aa24000-fcdf-11e9-8666-d29f1afa8955.png)


### Code Validation Checks

##### HTML : https://validator.w3.org/

- index.html: No Errors

- jasmine-testing.html: No Errors


##### CSS : https://jigsaw.w3.org/css-validator/

- style.css: No Errors

##### JavaScript : https://codebeautify.org/jsvalidate
- main.js: Warnings: 

![image](https://user-images.githubusercontent.com/48124466/68873669-df398900-06f7-11ea-8168-a8d348ac034d.png)


### Responsive Design Testing and Visuals

- Laptop View:

![image](https://user-images.githubusercontent.com/48124466/69241778-66bf4600-0b97-11ea-95ba-fb5d0f9c8a1f.png)

- iPad View (Portrait):

![image](https://user-images.githubusercontent.com/48124466/69241843-89e9f580-0b97-11ea-9227-7039d774f0c9.png)

- iPad View (Landscape):

![image](https://user-images.githubusercontent.com/48124466/69241882-9b330200-0b97-11ea-9e00-8b949b149bab.png)

- Phone View (Portrait):

![image](https://user-images.githubusercontent.com/48124466/69241924-b6057680-0b97-11ea-892f-541d0a4dc99f.png)
![image](https://user-images.githubusercontent.com/48124466/69241968-cf0e2780-0b97-11ea-9e82-7522fe133644.png)
![image](https://user-images.githubusercontent.com/48124466/69242001-e220f780-0b97-11ea-8e0a-f3cdf3cb1325.png)

- Phone View (Landscape):

![image](https://user-images.githubusercontent.com/48124466/69242056-f82eb800-0b97-11ea-9240-3f82a3fca63f.png)
![image](https://user-images.githubusercontent.com/48124466/69242102-0c72b500-0b98-11ea-855e-e0cb7118e4e1.png)
![image](https://user-images.githubusercontent.com/48124466/69242134-1ac0d100-0b98-11ea-844f-52beeb2f452a.png)


## Technologies Used

- Bootstrap 4
- jQuery v3.4.1
- HTML
- CSS
- JavaScript
- Jasmine


## RoadMap

Plans I have to implement in this game in the future:
- To show to number of moves the user has made.
- To add more photos of animals to create a bigger and enjoyable user experience.
- To create a nicer layout and smoother transactions.
- To add sound effects or music relevant to the theme.


## Cloning and Pushing To The Respository

### Cloning 

- Here is a link how to clone a repository: 
https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository


### Pushing To The Respository
- To add, commit and push files to the repository, e.g. index.html, open a New Terminal and type:
1. git add index.html
2. git commit -m "Leave a message here"
3. git push origin master - (which is for the master branch).

- To create a new branch within your current application, open a New Terminal:
1. Create a branch: git checkout -b new-branch-name
2. Edit, add to your application and commit the files.
3. Push the branch to the remote repository: git push origin new-branch-name 


## Deployment

To deploy your website, go to your repository in GitHub:
1. Click **Settings** at the top right right.
2. Scroll down to a section called **GitHub Pages**.
3. Below **Source**, click on the dropdown menu and select **master branch**.
4. Refresh the page and click on the live link for your application to the live server.

To access my GitHub repository, click this link:
https://github.com/terencecistudent/matching-cards-project.git

Live site can be accessed by clicking this link:
https://terencecistudent.github.io/matching-cards-project/


## Support

To contact GitHub, follow this link: https://support.github.com/


## Credits 

### Media 

I got the animal images from a free open sourced website: https://www.pexels.com/


### Authors and Acknowledgment

- **Autor**: Terence Logue
- **Acknowledgment**: Code Institute Slack, Code Institute Tutor Support, Assigned Mentor: Maranatha Ilesanmi