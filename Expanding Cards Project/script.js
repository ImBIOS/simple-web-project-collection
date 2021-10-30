const panel = document.querySelectorAll('.panel')

panel.forEach((panel) =>{
   panel.addEventListener('click',() => {
      removeEventClasses()
      panel.classList.add('active')
   })
})

function removeEventClasses(){
   panel.forEach(panel => {
      panel.classList.remove('active')
   })
}