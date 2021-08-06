# Explore Ethiopia
##  Code created by Kamila Golebiowska for Code Institute
## Languages used: HMTL, CSS with Bootstrap Framework and Javascript.

[Explore Ethiopia Live Page](https://komfigolabi.github.io/Explore-Ethiopia/)



## Project description and goals:

Explore Ethiopia is a website for all types of users, users curious about the world, travelers that want to find their next destination and users that are going to Ethiopia and need to find the top places to go to.


### Navigation Bar
 Navigation Bar is simple, containing a page title as well, as two liks, to homepage  and contact page.


###  Footer
Footer will be pretty basic, containing the copyright and a link to contact us page. It will have colors matching the navigation bar.

![Footer]

### Home Page:

Homepage will include basic navbar and a footer in the same color. It will have a cover image that shows the beauty of Ethiopia. Underneath would like to attach another photo and a statement with a page introduction. It will have a simple quiz with questions about Ethiopia as a form of entartaining the user and broadening the knowledge about the country.
 A map using Google Map API will be added with markers showing the top places that are worthy of a visit.Once marker is clicked it will offer more information about the chosen place.


### Contact Us

This section will provide a contact form where user will be able to get in touch about any issues or in case of any questions regarding Ethiopia or the places marked on the map.Apart from the form it will have a set of attractive photos of the country.
 ![Form]()



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
 [Wireframes]()




## Credits
### Content
All text content was written by me-Kamila Golebiowska. For some of the content about places I used wikipedia and lonely planet page to confirm my knowledge and doubts.


### Images 

Hompage:

* [Lady and the blue background from Pexels.com]()
* [Dumbell and Shoes](file:///C:/Users/komfa/Downloads/dumbbells-2465478_1920.jpg)
* [Welcome Image](https://www.theglobeandmail.com/life/health-and-fitness/health-advisor/strengthen-your-glutes-for-better-balance-and-less-pain/article36799024/)
* [Testimonial 1-taken from Unsplash.com](https://unsplash.com/photos/2EGNqazbAMk)
* [Testimonial 2- taken from Unsplash.com](https://unsplash.com/photos/tNCH0sKSZbA)
* [Testimonial 3- taken from Unsplash.com](https://unsplash.com/photos/SKFdd8JGU-0)



Contact:

* [Form Background image- taken from Unsplash.com](https://unsplash.com/photos/J154nEkpzlQ)


### Icons and Fonts

Font I used was Oswald taken from [Google Fonts](https://fonts.google.com/) 

Logo and Icons used free icons from [Font Awesome](https://fontawesome.com/?from=io)

### Code

I used certain parts of code from other sources and modified it for my needs
 * Navbar Menu was taken from Whiskey Drop Project from Code Institute, as it used Bootstrap and a navbar toggler button, then I modified the rest with my own styling in CSS.

 * The inspiration for my page was an example from Bootstrap, where I applied certain parts of it , inluding carousel, 
 testimonial parts, as well as the photos lay out which I used in the services section of my project.
 [Example from Bootstrap](https://getbootstrap.com/docs/5.0/examples/carousel/)

 * Carousel was taken from Carousel section of the Bootstrap components and modified.
 [Carousel-Slides Only](https://getbootstrap.com/docs/4.6/components/carousel/)
 * Idea behind the welcome section in homepage and services layout was taken from Bootstrap example mentioned above and modified.
 * Testimonials sections were taken from the above mentioned Bootstrap Example and Whiskey Drop project was checked for the images and modified for my own use.
 * Timetable format was taken from Bootstrap using striped table rows 
 [Striped row Table](https://getbootstrap.com/docs/4.6/content/tables/)
 * Booking form was taken from the Bootstrap component section and modified for the project.
 [Form- form control](https://getbootstrap.com/docs/4.6/components/forms/)
* Footer used Bootsrtap Card group, but removed the images from it.
[Bootstrap Card Group](https://getbootstrap.com/docs/4.6/components/card/#header-and-footer)


 I used various sources to help me when I was stuck, including:
* [Stack Overflow](https://stackoverflow.com/)
* [Free Code Camp](https://www.freecodecamp.org/)
* [W3 schools](https://www.w3schools.com/html/default.asp)


## Handling Bugs and what is remaining
### My struggles
* I had an issue with the default Bootstrap margin, even though I set margin and padding of the body to 0, used Chrome Dev Tool to find the way to remove it, my making a margin of the row class to -15px.
* issues with original footer, that even though it was enwrapped in Bootstrap columns it wasn't responsive. In result I changed the layout to Bootstrap cards, that sorted this issue out.
* Carousel Images, the height of it wasn't responsive and once the screen was changed it was leaving an empty space between the images and the welcome section. I used a lot of googling and after trying various ways changing height to auto did the work.
* Booking form was spilling into the next div on different devices. After some research,setting box-sizing into border-box made a difference.

* I had some issues with responsivenesss so I used media querys to fix the issues,for example in an 768px screen the navbar wasnt responsive, so I had to change the font size of the links.

 ### Existing Bugs

 * Background photos might sometimes load slower.
 * on some screens between the mobile and I pad the heading on the second carousel caption might not be that clear to see, overlay needed.
 




## Testing

[Check responsiveness](https://www.responsinator.com/?url=https%3A%2F%2Fkomfigolabi.github.io%2FFree-2-Be-Fit%2F)

[HTML Validator Page](https://validator.w3.org/)

* After testing Homepage in direct input, there were no errors or warnings.
* services page had no errors or warnings after putting the code as a direct input into the html validator page.
* Fees and timetable page showed no errors of warnings after putting the code as a direct input into the html validator page.
* contact page showed no errors or warnings after putting the code as a direct input into the html validator page.

![image of passed validator page](https://raw.githubusercontent.com/komfiGolabi/Free-2-Be-Fit/master/assets/images/validator.png)

[CSS Validator Page](https://jigsaw.w3.org/css-validator/)
* Code from style.css was copied as a direct input into the CSS validator page and no errors were found, only one warning, where I put button background color and a border in the same color.

Google Dev Tool: Lighthouse 

 * I made reports for each site on both desktop and mobile options.The score was fluctuating slightly at different points in time. The below photo shows the final raport.  

 ![Lighthouse Desktop](https://raw.githubusercontent.com/komfiGolabi/Free-2-Be-Fit/master/assets/images/lighthouse%20raport-desktop.png)

 ![Lighthouse Homepage Mobile](https://raw.githubusercontent.com/komfiGolabi/Free-2-Be-Fit/master/assets/images/lighthouse%20raport-mobile.png)


* Website was tested on various browsers: Chrome, Microsoft Edge and Mozzila Firefox and on all of those performed well.
 

 ### First Time User:

 * it is clearly stated what is the philosophy of the business in the welcome section of the homepage
 * it was important for me to feel that this business fitness is for everyone, any levels,any background and I totally feel it is. It has been few times mentioned that is inclusive and everyone can find services according to their needs. Testimonials give us perspective from every level of fitness, so it makes it feel trustworthy.
 * Layout is very mellow and positive. It is not aggressive and it makes me think that the approach of the business to fitness is more holistic, approaching its from the lifestyle change side and light hearted place, rather than paying attention only to the physique.
 * There are clearly stated the services it provides, for the future more of the videos of the particular classes would be helpful.
 * page is practical and functional, easy to manouvre
 * It is easy to find a booking page and buttons on the navbar are helpful to do so.

 ### Returning User

* As a regular customer it is important for me to find a timetable easy and that it is clear to see all the schedule. I think the page provides just that.
* The links to social media help to get an easy access to get in touch with business, e-mail is provided, would be nice to have a direct link to it as well.
* Booking system is working well, the only that would help for the future is to have, for every particular class the choice of time and date when they are in schedule, rather than all days and times.

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

 
