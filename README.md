# Animal Matching Card Game

## Description
This is an animal matching card game where there are twelve cards lined out 4x3 (4 across and 3 down).  The aim
is to click on a card which will flip over, then click on another card to see if it will match.  Once the user has
matched all of the cards there will be a pop up saying 'Congratulations'.  There is a button above the game container
which allows the user to restart the game.

This game is also browser cross compatible.


## User Stories

- Users should be able to click a card.
- Users should be able to select two cards at a time.
- Users should not be allowed to click another card when two are currently displaying.
- Users should get a **Congratulations** pop up when all cards are matched.


## Framework

I have chosen to use Bootstrap 4 for the design and layout of my game.  Bootstrap is simple and very efficient to use.


## Wireframes

I have used a software called JustInMind Prototyper to create 2D Models of my game.  
As not everybody will not be able to access this software, I have made screenshots and put them into Word documents attached to my GitHub.


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


### Running Respnsive Designs on Google Chrome:

Here is a link how to run the application on a live server by configuring and exposing ports:
https://www.gitpod.io/docs/43_config_ports/

**To view responsive applications:**
1. Right click then go to **Inspect Element**
2. Click on the **Toggle Device Toolbar** (Icons showing two devices).
![image](https://user-images.githubusercontent.com/48124466/68051275-f2ebf500-fcde-11e9-8b3a-adc7abc16c5f.png)

3. Click on any device, for example, iPhone 5/SE selected:
![image](https://user-images.githubusercontent.com/48124466/68051467-5aa24000-fcdf-11e9-8666-d29f1afa8955.png)


### Code Validation Checks

##### HTML : https://validator.w3.org/

- index.html: Warnings: 
![image](https://user-images.githubusercontent.com/48124466/68872903-ae0c8900-06f6-11ea-8a3c-324b4484295a.png)

- jasmine-testing.html: Warnings: 
![image](https://user-images.githubusercontent.com/48124466/68873041-e2804500-06f6-11ea-9df4-851d0fbd7c72.png)
![image](https://user-images.githubusercontent.com/48124466/68872903-ae0c8900-06f6-11ea-8a3c-324b4484295a.png)


##### CSS : https://jigsaw.w3.org/css-validator/

- style.css: 
![image](https://user-images.githubusercontent.com/48124466/68873314-59b5d900-06f7-11ea-9397-7a4309ec32f5.png)

##### JavaScript : https://codebeautify.org/jsvalidate

- main.js: Warnings: 
![image](https://user-images.githubusercontent.com/48124466/68873669-df398900-06f7-11ea-8168-a8d348ac034d.png)

- cardSpec.js: Warnings:
![image](https://user-images.githubusercontent.com/48124466/68873857-2b84c900-06f8-11ea-9943-1794ba79afdb.png)

- card.js: Warnings:
![image](https://user-images.githubusercontent.com/48124466/68874034-730b5500-06f8-11ea-9fcf-21cce0bfc226.png)


### Responsive Design Testing and Visuals
- Laptop View:

![image](https://user-images.githubusercontent.com/48124466/68049030-c84b6d80-fcd9-11e9-88e8-02c18e927c2d.png)


- iPad View (Landscape):

![image](https://user-images.githubusercontent.com/48124466/68049149-12ccea00-fcda-11e9-93bc-20ff74342e57.png)


- Phone View (Landscape):

![image](https://user-images.githubusercontent.com/48124466/68049209-37c15d00-fcda-11e9-94b1-944f4650e341.png)


## Technologies Used
- Bootstrap 4
- jQuery v3.4.1
- HTML
- CSS
- JavaScript
- Jasmine


## Images Source 
I got my animal images from a free open sourced website: https://www.pexels.com/


## Support
To contact GitHub, follow this link: https://support.github.com/


## RoadMap
Plans I have to implement in this game in the future:
- To add a timer counting down from 1 minute or
- To create a timer counting up.
- To show to number of moves the user has made.
- To add more photos of animals to create a bigger and enjoyable user experience.
- To create a nicer layout and smoother transactions.
- To add sound effects or music relevant to the theme.


## Deployed Site
To access my GitHub repository, click this link: 

Live site can be accessed by clicking the link:
https://terencecistudent.github.io/matching-cards-project/


## Authors and Acknowledgment
- **Autor**: Terence Logue
- **Acknowledgment**: Code Institute Slack, Code Institute Tutor Support


### Project Status
Not entirely finished but very close.