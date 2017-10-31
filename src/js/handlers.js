const lb = document.getElementById('learning-box')
const mb = document.getElementById('music-box')
const cb = document.getElementById('coding-box')
const apb = document.getElementById('ap-box')
const handleImageGallery = (e) => {
    const t = e.target
    const key = document.getElementById('colorful-key')
    const img = t.style.backgroundImage
    if (img) {
        key.style.backgroundImage = img
        ga('send', 'event', 'Image', 'viewed', `${img}`)
    }
}
const openBox = (e) => {
    const close = document.getElementById('close-X')
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
const showResume = () => {
    const frame = document.getElementById('resume-img')
    frame.classList.toggle('dn')
    frame.classList.toggle('db')

    ga('send', 'event', 'Resume link', 'toggled')
}
const toggleContributionsBox = () => {
    const modal = document.getElementById('contributions-modal')
    modal.classList.toggle('dn')
    ga('send', 'event', 'Contribution modal', 'toggled')
    modal.addEventListener('click', toggleContributionsBox)
}
module.exports = {
    handleImageGallery,
    openBox,
    showResume,
    toggleContributionsBox
}
