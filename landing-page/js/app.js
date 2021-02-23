/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


  


/**
 * Define Global Variables
 * 
*/
const myUlList=document.getElementById('navbar__list');
const mySections = document.querySelectorAll('section');
const myFragment=document.createDocumentFragment()

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
mySections.forEach(element=>{
    const myInfo=element.getAttribute('data-nav');
    const myAncor=document.createElement('a');
    const myli=document.createElement('li');
    myAncor.textContent=myInfo;
    myli.appendChild(myAncor);
    myFragment.appendChild(myli);
    const myAncorId='#'+element.getAttribute('id');
    myAncor.setAttribute('href',myAncorId);
    })
    myUlList.appendChild(myFragment);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Add class 'active' to section when near top of viewport

  
// Scroll to anchor ID using scrollTO event

function myActive() {mySections.forEach(alink=>
    {
    const secArea=alink.getBoundingClientRect()
    mySections.forEach(sectionA=>
        {
            sectionA.classList.remove('your-active-class');
        })
    setTimeout(() => {if(secArea.top>0 &&secArea.top<200){
        alink.classList.add('your-active-class');
            }
        
    }, 100);
}                
)}
/**
 * End Main Functions
 * Begin Events
 *
*/
document.addEventListener('scroll', myActive)
// Build menu 

// Scroll to section on link click

// Set sections as active


