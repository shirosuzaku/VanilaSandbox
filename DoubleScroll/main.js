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


btnfr.addEventListener('click',()=>{
    if(pageIdex != mainData.length){
        horizontalOffset -= 86
        mainList.style.left = `${horizontalOffset}vw`
        pageIdex++
        console.log(mainList.children)
        if(resizeOnLeave){
            var children = mainList.children
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                child.classList.remove('active')
                child.scrollTo(top)
            }
        }
    }
})
btnba.addEventListener('click',()=>{
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
})

btnResize.addEventListener('click',()=>{
    resizeOnLeave = !resizeOnLeave
})

mainList.addEventListener('click',e=>{ 
    e.srcElement.localName == 'img' 
    && e.srcElement.parentElement.classList.add('active') 
})

