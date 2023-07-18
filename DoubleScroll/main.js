const mainList = document.getElementById('main')
const btnfr = document.getElementById('fr')
const btnba = document.getElementById('ba')
const btnResize = document.getElementById('resizeOnLeave')

let iurl = './1.jpg'
let horizontalOffset = 10
let resizeOnLeave = true

let mainData = [
    {
        title: "something",
        imgUrl: "./1.jpg",
        bio: "lorem",
        paragrap: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem"
    },
    {
        title: "other",
        imgUrl: "./2.jpg",
        bio: "lorem",
        paragrap: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem."
    },
    {
        title: "else",
        imgUrl: "./3.jpg",
        bio: "lorem",
        paragrap: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem."
    }

]

let pageIdex = 1

const createProject = (imgUrl,title,bio,paragrap) => {
    const project = document.createElement('section')
    const headerImg = document.createElement('img')
    headerImg.src = imgUrl
    const projectTitle = document.createElement('h2')
    projectTitle.innerText = title
    const projectDescription = document.createElement('p')
    projectDescription.innerText = bio
    const projectParagrap = document.createElement('h5')
    projectParagrap.innerText = paragrap

    project.appendChild(headerImg)
    project.appendChild(projectTitle)
    project.appendChild(projectDescription)
    project.appendChild(projectParagrap)
    mainList.appendChild(project)
}

mainData.map((el)=>{
    createProject(el.imgUrl,el.title,el.bio,el.paragrap)
})

const moveForward = () => {
    if(pageIdex != mainData.length){
        horizontalOffset -= 86
        mainList.style.left = `${horizontalOffset}vw`
        pageIdex++
        if(resizeOnLeave){
            var children = mainList.children
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                child.classList.remove('active')
                child.scrollTo(top)
            }
        }
    }
}
const moveBack = ()=> {
    if(pageIdex != 1){
        horizontalOffset += 86
        mainList.style.left = `${horizontalOffset}vw`
        pageIdex--
        if(resizeOnLeave){
            var children = mainList.children
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                child.classList.remove('active')
            }
        }
    }
}

btnfr.addEventListener('click', moveForward)
btnba.addEventListener('click', moveBack)

btnResize.addEventListener('click',()=>{
    resizeOnLeave = !resizeOnLeave
})

mainList.addEventListener('click',e=>{ 
    e.srcElement.localName == 'img' 
    && e.srcElement.parentElement.classList.add('active') 
})


// TOUCH Handler
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            console.log("swipe right")
            moveForward()
        } else {
            /* left swipe */
            console.log("swipe left")
            moveBack()
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
            console.log("swipe down")

        } else { 
            /* up swipe */
            console.log("swipe up")
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
