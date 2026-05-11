// get me a list of all the sections
const myListOfSections = document.querySelectorAll('section')
//console.log(myListOfSections)

// a comma deliniated list of name/value pairs controlling how the observer works
let observerOptions = {
    //null is the default and references the viewport
    root: null,
    //alters the viewport. negative values decrease the size.
    rootMargin: '0px 0px -20px 0px',
    //0 is barely showing, 1 is fully showing. This must be a low number in short screens or the percentage showing never gets high enough to trigger.
    threshold: .1
  }

//AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
    //console.log(allItems)
    allItems.forEach(singleItem => {
        //console.log(singleItem.target)
        if (singleItem.isIntersecting){
            hiliteNav(singleItem.target)
        }
    })
}, observerOptions)

function hiliteNav(x) {
    const current = document.querySelector('.active');
    if (current) current.classList.remove('active');
  
    const id = x.id;
  
    const link = document.querySelector(`[href="#${id}"]`);
    link?.parentElement?.classList.add('active');
  }

//call the function for each image in the page
myListOfSections.forEach(photo => myObserver.observe(photo) );