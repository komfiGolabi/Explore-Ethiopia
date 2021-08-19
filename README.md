# Explore Ethiopia
##  Code created by Kamila Golebiowska for Code Institute
## Languages used: HMTL, CSS with Bootstrap Framework and Javascript.


[Explore Ethiopia Live Page](https://komfigolabi.github.io/Explore-Ethiopia/)


![project on different devices](assets/images/ee-page.jpg)




## Project description and goals:

Explore Ethiopia is a website for all types of users, users curious about the world, travelers that want to find their next destination and users that are going to Ethiopia and need to find the top places to go to.


### Navigation Bar
 Navigation Bar is simple, containing a page title as well, as two links, to homepage  and contact page.


###  Footer
Footer will be pretty basic, containing the copyright only. It will have colors matching the navigation bar.


### Home Page:

Homepage will include basic navbar and a footer in the same color. It will have a cover image that shows the beauty of Ethiopia. Underneath would like to attach another photo and a statement with a page introduction.
 It will have a simple quiz with questions about Ethiopia as a form of entartaining the user and broadening the knowledge about the country.
![quiz](assets/images/quiz.jpg)

 A map using Google Map API will be added with markers showing the top places that are worthy of a visit.Once marker is clicked it will offer more information about the chosen place.

 Map before clicked marker:

 ![Map before clicking the marker](assets/images/map.jpg)

 Map with the marker content:

 ![Map after clicking a marker](assets/images/map-content.jpg)


### Contact Us

This section will provide a contact form where user will be able to get in touch about any issues or in case of any questions regarding Ethiopia or the places marked on the map.Apart from the form it will have a set of attractive photos of the country.

 ![Form](assets/images/form.jpg)

 Form is connected through email.js to my personal e-mail, so I will get a message sent online and a user will receive one as well, as a confirmation.
 [Email JS](https://www.emailjs.com/)



 ### Features to add in future

 * more locations/markers to be added to the map
 * expand a page to the planned tours
 * more info about the places will be added, places to visit, hotels to stay
 * sections for history of Ethiopia and another page about its culture
 * having the news updates on the page and a current wheather
 



 ## User Goals

 ### First Time User:
 * how the colors make me feel
 * if the pictures are attractive enough, so I stay on the site
 * if info is interesting, entertaining, but concised enough
 * if it's easy to manouvre through it
 * if I can contact the company/authors easily

 ### Returning User
* if there are new updates about the places , current info and news
* if I can easily send a message with my queries


## Wireframes
 [Wireframes](https://docs.google.com/document/d/1_amy2gH7-QwgXN2QkiMYYarJNrZ2PKePnoOQfVxEdhQ/edit?usp=sharing)




## Credits

### Content
All text content was written by me-Kamila Golebiowska. For some of the content about places I used wikipedia and lonely planet page to confirm my knowledge and doubts.

### Images 

Hompage:

* [Cover picture with the hills and the sunset from Unsplash.com](https://unsplash.com/photos/umW41izr5BI)
* [Entoto hill with a minibus taken from Unsplash.com](https://unsplash.com/photos/RBop1DFEDUs)
* [Addis marker photo](https://usercontent.one/wp/www.diamondhoteladdisababa.com/wp-content/uploads/2017/08/cityview.jpg)
* [Bahir-Dar marker photo](https://www.timbuktutravel.com/region/bahir-dar)
* [Aksum marker photo](https://5-five-5.blogspot.com/2020/07/aksum-ethiopia.html)
* [Harar marker photo](https://farandwild.travel/africa/ethiopia/harar)
* [Lalibela marker photo](https://www.vogue.com/article/three-days-in-lalibela-ethiopia)
* [Gondar marker photo](https://www.greendreamacademy.com/citymarketing-gondar-ethiopia/)

Contact:

* [Church from Lalibela taken from Unsplash.com](https://unsplash.com/photos/6SgfEwkA02Y)
* [Boy and the mountains taken from Unsplash.com ](https://unsplash.com/photos/thUSm2Ib96E)
* [Addis Ababa at night taken from Unsplash](https://unsplash.com/photos/MUcM3GCCQPk)


### Icons and Fonts

Font I used was Oswald taken from [Google Fonts](https://fonts.google.com/) 

Logo and Icons used free icons from [Font Awesome](https://fontawesome.com/?from=io)



### Code

 * Navbar Menu was taken from Whiskey Drop Project from Code Institute with Bootstrap, but I simplified it and added my own styling with CSS.
 * Used Bootstrap for the responsive structure in whole project.
 * [footer taken from Bootstrap](https://getbootstrap.com/docs/4.6/examples/sticky-footer/)
 * [quiz](https://code-boxx.com/simple-javascript-quiz/), the code seemed overly complicated in the website, so with help of my mentor Antonio Rodriguez, I rewrote the code, so the effect would be the same, but with my understanding of Javascript and with simplified code.
 * Booking form was taken from the Bootstrap component section and modified for the project.
 [Form- form control](https://getbootstrap.com/docs/4.6/components/forms/)

 I used various sources to help me to understand few concepts, like function, how to make quiz and markers
* [Stack Overflow](https://stackoverflow.com/)
* [Free Code Camp](https://www.freecodecamp.org/)
* [W3 schools](https://www.w3schools.com/html/default.asp)
* [Codecademy](https://www.codecademy.com/learn)
* [You Tube Quiz Tutorials](https://www.youtube.com/results?search_query=how+to+create+a+multiple+choice+quiz+in+javascript+)
* [Google Maps Documentation](https://developers.google.com/maps/documentation/javascript/markers)
* [Locations for markers](https://latitudelongitude.org/et/)


## Handling Bugs and what is remaining
### My struggles
* Javascript, especially quiz section, was rewriting the previously used code, so it would be easier for me to understand and find all the connections.
* watched many tutorials about quizes in Javascript , as well as the Google API, so I could fully understand the concept.
* Google Maps APIS , had to add an API key everytime I was starting my repository from Github.
### Existing Bugs

* quiz buttons still show default color they are pressed
* right padding on the map section in mobile device should be smaller, didn't manage to fix it
* refresh button of the quiz doesn't display nicely on devices under 280px



 




## Testing

[Check responsiveness](http://ami.responsivedesign.is/?url=https%3A%2F%2Fkomfigolabi.github.io%2FExplore-Ethiopia%2F)

[HTML Validator Page](https://validator.w3.org/)

* After testing Homepage in direct input, there were no errors or warnings
* contact page showed no errors, but had few warnings regarding the type for assingment to javascript.


![image of passed html validator page](assets/images/html-validation.jpg)

[CSS Validator Page](https://jigsaw.w3.org/css-validator/)
* Code from style.css was copied as a direct input into the CSS validator page and no errors were found.

Both pages were regularly going through the validation pages and above information is based on the final stage of testing.

* Javascript code was tested in JShint and underneath are the result of the final code passed through the validation.

Map markers:

![Map markers validation page](assets/images/map-jshint.jpg)

Quiz:

![Quiz validation page](assets/images/quiz-jshint.jpg)

Form:

![Form validation page](assets/images/form-jshint.jpg)




Google Dev Tool: Lighthouse 

![Desktop Lighthouse Testing](assets/images/desktop-lighthouse.jpg)
![Mobile Lighthouse Testing](assets/images/mobile-desktop.jpg)

Lighthouse testing was fluctuating slightly due to the course of the project and the photos are showing the final results.


* Website was tested on various browsers: Chrome, Microsoft Edge and Mozzila Firefox and on all of those performed well.
 

 ### First Time User:
 * I enjoyed the colors and images on the page, it made feel interested in exploring more and wanted me to visit Ethiopia from the start
 * information is basic, but gives me a lot of interested facts about Ethiopia I wasn't aware of due to the quiz and showed me places where I should go for my first time travelling to Ethiopia
 * I found it easy to move around the page and had no problem to find what I was looking for.
 * I could easily contact the company with my queries and I had a confirmation email once I had my query send.
 * The quiz was very enetrtaining and made me realize I don't know much about Ethiopia at all, repeated the quiz few times and it made me learn even more.


 ### Returning User
 * it was easy for me to find information about the places I wanted to visit
 * I had no problems with sending the messages to the company.
 * I enjoyed playing the little quiz game, to see if I remembered all the information well, always worth cementing the knowledge with a bit of fun. 
 * still finding new things to explore and visit.



## Deployment

1. Created repository with the title of the page "Explore-Ethiopia".
2. I worked on my site and in the cdr terminal was adding the changes, then commiting them with the information about the changes, once I was happy with everything I worked with I was pushing it,so it is stored in Git Hub.
3. To make a shareable link of my project, once in the repository, I went into Settings, then in the Git Hub Pages sections in the source window I put master branch and /root file. I saved it and it created the link within the repository.
 

 ## Steps to get into the project and how to clone the repository

 * Click on the provided link to my Github repository.
 [Click here for the project](https://github.com/komfiGolabi/Explore-Ethiopia)
 * Once inside click on the Code button and press either clone or download.
 * Under the option HTTP, press the clipboard, that has the link inside  and copy it.
 * open the terminal you are using for your computer
 * choose the location where you would like to store the repo, locally
 * in the terminal now you can use the command git clone and the link.

 
