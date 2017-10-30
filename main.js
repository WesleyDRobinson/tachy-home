// contributions modal
const contButton = document.getElementById('contributions-button')
const modal = document.getElementById('contributions-modal')
const toggleContributionsBox = () => {
    modal.classList.toggle('dn')
    ga('send', 'event', 'Contribution modal', 'toggled')
}
modal.addEventListener('click', toggleContributionsBox)
contButton.addEventListener('click', toggleContributionsBox)

// create boxes
const lb = document.getElementById('learning-box')
const apb = document.getElementById('ap-box')
const mb = document.getElementById('music-box')
const cb = document.getElementById('coding-box')

// for main page openBoxes action
const openBox = (e) => {
    close.classList.remove('dn')
    let test = e.target.innerText.toLowerCase().trim()
    if (!test && e.target.alt === 'power icon') {
        test = 'learning'
    }
    ga('send', 'event', `${test}-box`, 'opened')

    switch (test) {
        case 'learning':
            lb.style.left = 0
            lb.style.top = 0
            break
        case 'art & photography':
            apb.style.right = 0
            apb.style.top = 0
            break
        case 'music':
            mb.style.left = 0
            mb.style.bottom = 0
            break
        case 'code':
            cb.style.right = 0
            cb.style.bottom = 0
            break
        default:
            return e
    }
}

// box setup
const main = document.getElementById('main-page')
main.addEventListener('click', openBox)

// close button for all boxes
const close = document.getElementById('close-X')
const closeFunc = (e) => {
    close.classList.add('dn')
    lb.style.left = '-100%'
    lb.style.top = '-100%'
    apb.style.right = '-100%'
    apb.style.top = '-100%'
    mb.style.left = '-100%'
    mb.style.bottom = '-100%'
    cb.style.right = '-100%'
    cb.style.bottom = '-100%'

    ga('send', 'event', `${e.target.id}`, 'closed')
}
close.addEventListener('click', closeFunc)

// todo - move to learning-box web component
// resume link
const resumeButton = document.getElementById('resume-link')
resumeButton.addEventListener('click', () => {
    const frame = document.getElementById('resume-img')
    frame.classList.toggle('dn')
    frame.classList.toggle('db')

    ga('send', 'event', 'Resume link', 'toggled')
})

// todo - move to ap-box web component
// image gallery
apb.addEventListener('click', (e) => {
    const t = e.target
    const key = document.getElementById('colorful-key')
    const img = t.style.backgroundImage
    if (img) {
        key.style.backgroundImage = img
        ga('send', 'event', 'Image', 'viewed', `${img}`)
    }
})
