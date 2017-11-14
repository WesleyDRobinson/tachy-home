class LearningBox extends HyperHTMLElement {
    static get observerdAtributes() {
        return ['name']
    }

    created() {
        this.classList = "dn fixed top-0 left-0 vh-100 w-100 near-white bg-dark-gray overflow-scroll"
        this.style = "transition: all 1s ease-out;"
        this.render()
    }

    render() {
        return this.html`
    <main class="avenir pa3 pa4-ns">
        <h1 class="athelas tracked fw7">What Powers Wesley?</h1>
        <p class="fw2 lh-copy measure">
            The pursuit of learning, playtime, exploring.<br>
            Music and nature and conversation.<br>
            Coffee and artistic expression.
        </p>
        <div class="pa3">
            <blockquote class="athelas ml0 mt0 pl4 light-gray bl bw2 b--blue">
                <p class="f5 f4-m f3-l lh-copy measure mt0">
                    "The effects of technology do not occur at the level of opinions or concepts, but alter sense ratios
                    or patterns of perception steadily and without any resistance."
                </p>
                <cite class="f6 ttu tracked fs-normal"><a class="link near-white hover-orange"
                                                          href="https://en.wikipedia.org/wiki/Marshall_McLuhan">―Marshall
                    McCluhan</a></cite>
            </blockquote>
        </div>
        <p class="fw2 lh-copy measure">
            <a class="db athelas mb2 f4 ttu link near-white hover-blue" href="https://platform.html5.org/">The Web
                Platform</a>
            pre Y@K through post-college, I hobbied in HTML.
            Around 2011, I started building websites with HTML5, CSS3, jQuery.
            In 2015, I <a class="link light-blue hover-orange" href="https://www.fullstackacademy.com">learned
            JavaScript</a>; now building and
            deploying fullstack web apps.
        </p>
        <p class="fw2 lh-copy measure">
            I'm interested in starting a team, joining in the construction of an existing product or offering support
            for an established platform or SDK,
            <a class="link light-blue hover-orange"
               href="mailto:robinsonwesleyd@gmail.com?subject=Web%20Development&body=Hi Wesley! Let's talk about the web.">
                let's chat
            </a>
        </p>
        <a id="resume-link" 
            class="db f4 fw2 ttu light-blue hover-orange" 
            href="#"
            onclick=${this}>see my one page resume</a>
        <img id="resume-img" class="dn w-100 w-two-thirds-m w-50-l pt2" src="images/assets/resume.png"
             alt="single page resume">
        <p class="fw2 lh-copy measure">
            Living in San Francisco since 2015
        </p>
    </main>`
    }

    onclick(e) {
        e.stopImmediatePropagation()

        const resume = document.getElementById('resume-img')
        resume.classList.toggle('dn')
    }
}

LearningBox.define('learning-box')
