const foot = document.querySelector('footer')

let x
window.addEventListener('scroll',e=>{
    console.log(foot.getBoundingClientRect().bottom / window.innerHeight)
    x = foot.getBoundingClientRect().bottom / window.innerHeight
    if(x < 1.27){
        if(!foot.classList.contains('active')){
            foot.classList.add('active')
        }
    }else{
        if(foot.classList.contains('active')){
            foot.classList.remove('active')
        }
    }
})