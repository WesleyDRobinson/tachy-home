class CodingProject extends HyperHTMLElement {}

CodingProject.define('coding-project')

class CodingBox extends HyperHTMLElement {
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
        <div class="ma3">
        <h1 class="courier">
            coding
            <a class="f4 fw2 link light-blue hover-orange"
               href="https://github.com/wesleydrobinson">on github</a>
        </h1>
        <p class="ml2 f4 fw2 lh-copy measure measure-wide-ns">
            interested in all things HTML, JavaScript, CSS, browsers, DOM, Web APIs
            I believe <a class="link light-blue hover-orange" href="https://www.webcomponents.org/introduction">Web
            Components</a> are the future and am currently writing them with <a class="link light-blue hover-orange"
                                                                                href="https://viperhtml.js.org/hyper.html">hyperHTML</a>
        </p>
        <p class="ml4 lh-copy measure measure-wide-ns">
            Most recent position, Success Engineer at
            <a class="ph1 fw4 link green hover-dark-gray hover-bg-green" href="https://www.segment.com">Segment</a>
            debugging issues in JavaScript environments (web + node.js), iOS (C++ & Swift), Android (Java), Go, .NET,
            PHP
            Monitoring, improving and repairing SQL Data Warehouses
            Zendesk, Github, Slack, JIRA, and a personalized suite of developer tools is how I functioned
        </p>
        <h3 class="courier">tools i like</h3>
        <ul class="list f5 fw2 lh-copy measure measure-wide-ns">
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">javascript</span>:
                node.js,
                Express, ES6 modules, and lodash
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">css</span>: tachyons.io,
                bootstrap, material
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">libs/frameworks</span>:
                hyperHTML, Polymer, React, Vue.js
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">build tools</span>:
                Webpack,
                Gulp + Browserify, Rollup, Babel
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">deploying</span>: zeit.co,
                Heroku, AWS s3, Google Cloud/ Firebase
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">packaged</span>: next.js,
                create-react-app, polymer-starter-kit
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">Analytics tools</span>:
                Segment, Google Analytics, Mixpanel, Intercom
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">databases</span>:
                <br><span class="ml4 underline">SQL</span> Redshift, Postgres, BigQuery
                <br><span class="ml4 underline">noSQL</span> AWS s3, Firebase, mongoDB
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">Professional</span>:
                Slack,
                Zendesk, Forums
            </li>
            <li class="lh-copy pv2 ba bl-0 br-0 bt-0 b--dotted b--white-30"><span class="fw4">Misc</span>: WebStorm,
                git&nbsp+&nbspgitHub, CloudUp, Dropbox Paper, Alfred 3, .zsh&nbsp+&nbsp.oh-my-zsh, markdown
            </li>
        </ul>

        <h2 class=" courier">projects</h2>
        <article class="mw8 pa4 mh4 mb3">
            <a class="link" href="https://photos.wesley.tech">
                <h3 class="f4 tracked ttu orange">
                    photo vision
                </h3>
            </a>
            <p class="lh-copy measure">In Spring 2017, successfully leveraged the the Google Vision API to obtain facial
                sentiment. In Fall 2017, added a simple UI, OCR functionality, and deployed</p>
            <p class="lh-copy measure">Next steps are to put it behind a pay wall as Google Vision is a pay per submission
                API</p>
            <a class="dib mb2 pa2 ttu link near-black bg-near-white hover-near-white hover-bg-near-black"
               href="https://github.com/wesleydrobinson/photoAnalysis">github</a>
            <!-- <div class="aspect-ratio aspect-ratio--16x9">
                <iframe class="aspect-ratio--object cover" title="photoVision"
                        src="https://photos.wesley.tech/"></iframe> 
            </div> -->
        </article>

        <article class="mw8 pa4 mh4">
            <a class="link" href="https://segment-amp.firebaseapp.com/">
                <h3 class="f4 tracked ttu blue">
                    Segment AMP Example
                </h3>
            </a>
            <p class="lh-copy measure">In early 2017, Segment Success team was notified AMP Analytics library examples
                were "not working."
                I implemented and deployed both native and AMP sites (each static pages using Firebase Hosting).</p>
            <p class="lh-copy measure">After completion, all examples are functional and example is live!</p>
            <a class="dib mb2 pa2 ttu link near-black bg-near-white hover-near-white hover-bg-near-black"
               href="https://github.com/wesleydrobinson/segment-amp">github</a>
            <!-- <div class="mw6">
                <div class="aspect-ratio aspect-ratio--9x16">
                    <iframe class="aspect-ratio--object cover" title="Segment AMP"
                            src="https://segment-amp.firebaseapp.com/?amp=1"></iframe>
                </div>
            </div> -->
        </article>

        <article class="mw8 pa4 mh4">
            <a class="link" href="https://dice.wesley.tech">
                <h3 class="tracked ttu orange">
                    dice for you
                </h3>
            </a>
            <p class="lh-copy measure">In Fall 2016, a few friends started playing Call of Cthulu,
                a story-telling/ role-playing game in the worlds of HP Lovecraft.
                We quickly found some venues for web toys and I made a simple vanilla JS dice roller.
            </p>
            <p class="lh-copy measure">I discovered <a class="link dark-gray hover-gray bg-near-white hover-bg-white-90"
                                                     href="http://tachyons.io">tachyons.io</a>
                in this project. The simplicity of the project gives me space to play with tachyons.io design concepts
                and also to experiment with code patterns.
            </p>
            <a class="dib mb2 pa2 ttu link near-black bg-near-white hover-near-white hover-bg-near-black"
               href="https://github.com/wesleydrobinson/dice">github</a>
            <!-- <div class="aspect-ratio aspect-ratio--4x3 mb3">
                <iframe class="aspect-ratio--object cover" title="dice for you"
                        src="https://dice.wesley.tech/"></iframe>
            </div> -->
        </article>
    </div>`
    }
}

CodingBox.define('coding-box')
