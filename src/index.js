// todo -- move to css.html or individual web components :)
import './css/gradients.css'

// todo -- move to ap-box
const apb = document.querySelector('ap-box')
const handleImageGallery = (e) => {
    const t = e.target
    const key = document.getElementById('colorful-key')
    const img = t.style.backgroundImage
    if (img) {
        key.style.backgroundImage = img
        ga('send', 'event', 'Image', 'viewed', `${img}`)
    }
}
apb.addEventListener('click', handleImageGallery)
