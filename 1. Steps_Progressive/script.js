const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let active = 1

next.addEventListener('click', () => {
    active++

    if(active > circles.length) {
        active = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    active--

    if(active < 1) {
        active = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < active) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(active === 1) {
        prev.disabled = true
    } else if(active === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}