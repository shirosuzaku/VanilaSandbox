const mainList = document.getElementById('main')
const btnfr = document.getElementById('fr')
const btnba = document.getElementById('ba')
const btnResize = document.getElementById('resizeOnLeave')

let iurl = './1.jpg'
let horizontalOffset = 10
let resizeOnLeave = false

let mainData = [
    {
        title: "something",
        imgUrl: "./1.jpg",
        bio: "O",
        paragraps: [
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem",
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem",
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem"
        ],
        subImgUrl: ['./4.jpg','./5.jpg','./7.jpg']
    },
    {
        title: "other",
        imgUrl: "./2.jpg",
        bio: "Q",
        paragraps: [
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem",
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem",
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem"
        ],
        subImgUrl: ['./8.jpg','./14.jpg','./15.jpg']
    },
    {
        title: "else",
        imgUrl: "./3.jpg",
        bio: "&",
        paragraps: [
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem",
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem",
            "uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem.uscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia suscipit corporis repellat, impedit vel dolor. Animi consequuntur aperiam architecto quisquam voluptatibus omnis quaerat. Repellendus unde laudantium eum aspernatur rem"
        ],
        subImgUrl: ['./16.jpg','./17.jpg','./18.jpg']
    }

]

let pageIdex = 1



const createProject = (imgUrl,title,icons,paragrap,subImage) => {
    const project = document.createElement('section')

    // const headerImg = document.createElement('div')
    // headerImg.classList.add('headerImg')
    // headerImg.style.backgroundImage = `url(${imgUrl})`

    const headerImg = document.createElement('img')
    headerImg.classList.add('headerImg')
    headerImg.src = `${imgUrl}`
    headerImg.loading = "lazy"

    const projectTitle = document.createElement('h2')
    projectTitle.innerText = title

    const projectDescription = document.createElement('p')
    projectDescription.classList.add('icon')
    projectDescription.innerText = icons

    const projectParagrap1 = document.createElement('h5')
    projectParagrap1.innerText = paragrap[0]

    const projectParagrap2 = document.createElement('h5')
    projectParagrap2.innerText = paragrap[1]

    const projectParagrap3 = document.createElement('h5')
    projectParagrap3.innerText = paragrap[2]

    const projectImg1 = document.createElement('img')
    projectImg1.classList.add('subImage')
    projectImg1.src = `${subImage[0]}`
    projectImg1.loading = "lazy"
    
    const projectImg2 = document.createElement('img')
    projectImg2.classList.add('subImage')
    projectImg2.src = `${subImage[1]}`
    projectImg2.loading = "lazy"
    
    const projectImg3 = document.createElement('img')
    projectImg3.classList.add('subImage')
    projectImg3.src = `${subImage[2]}`
    projectImg3.loading = "lazy"

    project.appendChild(headerImg)
    project.appendChild(projectTitle)
    project.appendChild(projectDescription)
    project.appendChild(projectParagrap1)
    project.appendChild(projectImg1)
    project.appendChild(projectParagrap2)
    project.appendChild(projectImg2)
    project.appendChild(projectParagrap3)
    project.appendChild(projectImg3)

    mainList.appendChild(project)
}

mainData.map((el)=>{
    createProject(el.imgUrl,el.title,el.bio,el.paragraps,el.subImgUrl)

})
/*
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
//         if ( xDiff > 0 ) {
//             /* right swipe */ 
//             console.log("swipe right")
//             moveForward()
//         } else {
//             /* left swipe */
//             console.log("swipe left")
//             moveBack()
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             /* down swipe */ 
//             console.log("swipe down")

//         } else { 
//             /* up swipe */
//             console.log("swipe up")
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };