// import css
import './css/gradients.css'
import './css/orig_positions.css'

import {
    handleImageGallery,
    openBox,
    showResume,
    toggleContributionsBox
} from './js/handlers.js'

const contButton = document.getElementById('contributions-button')
contButton.addEventListener('click', toggleContributionsBox)

// create boxes
const lb = document.getElementById('learning-box')
const mb = document.getElementById('music-box')
const cb = document.getElementById('coding-box')
const apb = document.getElementById('ap-box')
apb.addEventListener('click', handleImageGallery)

const main = document.getElementById('main-page')
main.addEventListener('click', openBox)

const resumeButton = document.getElementById('resume-link')
resumeButton.addEventListener('click', showResume)

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
const close = document.getElementById('close-X')
close.addEventListener('click', closeFunc)
