import Head from 'next/head';
import { slide as Menu } from 'react-burger-menu';

export default function Home() {
  if (typeof window === "object") {
    // code is running in a browser environment
    console.log("browser")
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    nextButton.addEventListener("click", () => {
      console.log("slide next");
      const slideWidth = (slide.clientWidth);
      console.log('scrolling ' + slideWidth + ' pixels right')
      slidesContainer.scrollLeft += slideWidth;
    });
    prevButton.addEventListener("click", () => {
      console.log("slide prev");
      const slideWidth = (slide.clientWidth);
      console.log('scrolling ' + slideWidth + ' pixels left')
      slidesContainer.scrollLeft -= slideWidth;
    });
  } else {
    // code is running in a non-browser environment
    console.log("non-browser")
  }

  return (
    <div className="page">
      <Head>
        <title>Ryan Langford&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="./files/Icons/github.svg" />
      </Head>

      <main>
        <Menu>
          <a id="overview_nav" className="menu-item" href="https://portfolio-tau-rose-14.vercel.app/#overview">Overview</a>
          <a id="resume_nav" className="menu-item" href="https://portfolio-tau-rose-14.vercel.app/#resume">Resume</a>
          <a id="ISAAC_nav" className="menu-item" href="https://portfolio-tau-rose-14.vercel.app/#ISAAC">ISAAC Capstone Project</a>
          <a id="groupify_nav" className="menu-item" href="#https://portfolio-tau-rose-14.vercel.app/#groupify">Groupify Webdev Project</a>
          <a id="UWSOM_nav" className="menu-item" href="https://portfolio-tau-rose-14.vercel.app/#UWSOM">UWSOM Web Developer</a>
          <a id="design_nav" className="menu-item" href="https://portfolio-tau-rose-14.vercel.app/#design">Design Projects</a>
          <a id="hobbies_nav" className="menu-item" href="https://portfolio-tau-rose-14.vercel.app/#hobbies">Hobbies & Creative Pieces</a>
        </Menu>
        <div className='scroll-container'>
          <section className='overview child' id='overview'>
            <h1 className="title">
              <em>Ryan Langford&apos;s</em> Portfolio
            </h1>
            <p className="description">
              Welcome to my portfolio. My name is Ryan Langford and I am passionate about design, games and storytelling. I am a student at the University of Washington studying Informatics with a focus on Web Development and Human-Computer Interaction.
            </p>
          </section>
          <section className='resume child' id='resume'>
            <div className="container">
              <h1 className="title"> My Resume </h1>
              <div className='resume_big'>
                <p className="description">If you are having trouble viewing the framed version of my resume below, <a href="../files/resume/resume.pdf" download>click here</a> to download it.</p>
                <iframe className="file" src="../files/resume/resume.pdf#toolbar=0" width="80%" height="100%"></iframe>
              </div>
              <div className='resume_small'>
                <a href="../files/resume/resume.pdf" download><img src="../files/resume/resume.png" width="80%" height="100%" alt="My Resume" aria-label='Click to view fullscreen' /></a>
              </div>
            </div>
          </section>
          <section className='ISAAC child' id='ISAAC' >
            <h1 className='title'> ISAAC </h1>
            <div className='ISAAC_section'>
              <h2 className='ISAAC_section_title'>About the Project</h2>
              <p className='ISAAC_about description'>As part of my Informatics degree, I am working on a large-scale capstone project with a team of other Informatics students. This project is taking place over my final two quarters at the University of Washington and is sponsored by the UW Informatics Advising Department. My team and I were tasked with identifying the blockers with the current advising solutions within the informatics department and creating a solution that is more efficient and scalable.</p>
            </div>
            <div className='ISAAC_section'>
              <h2 className='ISAAC_section_title'>Problem Space</h2>
              <p className='ISAAC_problem description'>The Informatics department is expanding rapidly, increasing from about 800 active students to around 1400 students in the near future. Currently, the average response rate for student questions is about two days. This is due to the high volume of repetitive questions that could be found online which make up the majority of the adviser&apos;s daily inboxes. These simple questions prevent the advisors from allocating more time to complex questions that require an advisor. The knowledge base used up to this point is a Canvas website with hundreds of pages, but no way to search or index the content. We hypothesized that a rework of how knowledge flows from advisers to students might alleviate the major pain points of both parties. This led our team to base our research on the question: How might we streamline the processing of simple advising questions for students and student services?</p>
            </div>
            <div className='ISAAC_section'>
              <h2 className='ISAAC_section_title'>Initial Project Research</h2>
              <p className='ISAAC_research description'>We started with some preliminary user research with the students. By sending out surveys to current and prospective informatics students, we quickly found out that many students seeking advising were not aware of the Canvas site that the advisors had made. Among those that had heard of it, most reported that they didn’t even try using it because of how difficult it was to navigate to useful information. As we suspected, the current solution did not meet the student’s needs. This caused the students to seek advisors for all of their questions, overloading them and causing long wait times.</p>
            </div>
            <div className='ISAAC_section'>
              <h2 className='ISAAC_section_title'>Project Proposal</h2>
              <p className='ISAAC_proposal description'>In order to fulfill both stakeholder’s needs, our solution needs a few key concepts. First, our solution has to be maintainable. Advisors must be able to keep the information up-to-date quickly and easily so that the solution remains valid and advisors still have time to answer complex questions. Next, our solution must be scalable to handle the growing informatics community reliably. Our solution must also be searchable. The problem exists partially because the Canvas page is too difficult to navigate. Our propososed solution will only be an improvement if it is easy and convenient for students to use. Finnally, our solution should provide meaningful data and analytics to the advisors so that knowledge discrepancies like the one that caused this problem are less likely to happen again in the future.</p>
              <div className='diagrams'>
                <img className='diagram' src="../files/ISAAC/Client-side.png" width="40%" height="100%" alt="Client Side Diagram"></img>
                <img className='diagram' src="../files/ISAAC/Server-side.png" width="40%" height="100%" alt="Server Side Diagram"></img>
              </div>
            </div>
            <div className='ISAAC_section'>
              <h2 className='ISAAC_section_title'>The First Code Sprint</h2>
              <p className='ISAAC_code description'>Now that we had a clearer picture of the problem space and what our solution needs to have, my group and I spent the last three weeks of the first half of capstone creating our MVP (Minimum Viable Product). My role in this stage of development was front-end functionality. We decided to make a web application in the style of a searchable wiki like wikepedia. We created the index and search pages, which organize pages of content into categories. Then, I added the ability to create new pages and edit existing ones using a rich text editor powered by markdown. Markdown was a simple and effective way of displaying content in a pleasing way without adding too much complexity on the advisers side. Additionally the rich text editor includes a toolbar that will automatically add the appropriate markdown syntax. Nearing the end of the first code sprint, we got news from our sponsors that we would no longer be able to use the universities authentication for our site. This was a problem because our site currently relied on university authentication to grant admin privileges to advisors and certain other faculty. After some deliberation, we ended up switching to google authentication for the time being and assigned admin privileges for testing manually.</p>
              <section className="slider-wrapper">
                <button className="slide-arrow" id="slide-arrow-prev">
                  &#8249;
                </button>
                <button className="slide-arrow" id="slide-arrow-next">
                  &#8250;
                </button>
                <ul className="slides-container" id="slides-container">
                  <li className="slide"><img className='web_img' src="../files/ISAAC/index.png" alt="index page" /></li>
                  <li className="slide"><img className='web_img' src="../files/ISAAC/search.png" alt="search page" /></li>
                  <li className="slide"><img className='web_img' src="../files/ISAAC/page.png" alt="page content" /></li>
                  <li className="slide"><img className='web_img' src="../files/ISAAC/edit.png" alt="edit page content" /></li>
                  <li className="slide"><img className='web_img' src="../files/ISAAC/analytics.png" alt="page analytics" /></li>
                </ul>
              </section>
            </div>
            <div className='ISAAC_section'>
              <h2 className='ISAAC_section_title'>Project Vision</h2>
              <p className='ISAAC_vision description'>With our MVP complete, we hope to started the second half of our project off with another round of user testing. Some features we are looking to improve are the search algorithm as well as the data gathering, aggregation, and serving. Eventually, we would like to reintegrate university authentication to help with assigning administrative privileges and gathering student data that the university already collects.</p>
            </div>
          </section>
          <section className='groupify child' id='groupify'>
            <h1 className="title"> Groupify </h1>
            <p className="header description">If you have a Spotify premium account, click <a href="https://groupify-ae530.web.app/" target="_blank" rel='noreferrer'>here</a>  to check out the groupify app!</p>
            <div className='images'>
              <img className='web_img' src="../files/Groupify/HomeScreen.png" width="80%" height="100%" alt="Home Screen"></img>
            </div>
            <p className="description"> Groupify is a web-based Spotify extension that allows users more control when playing music in a group setting. My group and I designed this app with social events in mind. Before Groupify, we felt that equal control over the music was difficult to achieve in a large group. Groupify fixes this by allowing all users to join a party and control one music player using the host&apos;s Spotify account. This way, everyone in the Groupify party has remote access to the music to add, remove, or skip songs without having to track down the person playing the music.</p>
            <div className="images">
              <img className='web_img' src="../files/Groupify/LoginScreen.png" width="40%" height="100%" alt="Login Screen"></img>
              <img className='web_img' src="../files/Groupify/QueueHistory.png" width="40%" height="100%" alt="Queue History Screen"></img>
            </div>
            <div className="my_contribution">
              <p className="description">My role in this project was mainly a designer. I was in charge of displaying the elements of our project on the screen in a usable and pleasing way. I had to balance aesthetics with functionallity to create a layout that was easy to use, appealing, and worked on all screen sizes. I also helped create the elements of the web page and connect our server to Spotify using their API.</p>
              <div className="column">
                <img className='web_img' src="../files/Groupify/MobileView.png" width="70%" height="100%" alt="Mobile Home Page"></img>
                <p>Mobile view of the Home Page</p>
              </div>
            </div>
          </section>
          <section className='UWSOM child' id='UWSOM'>
            <h1 className='title'>Web Developer for UW School of Medicine</h1>
            <p className='description'>During the Summer of 2022, I worked as a full-stack web developer for UWSOM (University of Washington School of Medicine) on their service learning and community engagement website (view actual website <a href='https://volunteer-site-gcer5r0rc-slweb.vercel.app/'>here</a>). Although it was only for a summer, I worked on a lot of different parts of the website. I focused mainly on UX and was often designing new wireframes in Figma or using css to beautify the website itself. The most valuable thing I gained from this position was the ability to work with other developers in a high commit frequency environment, as well as how to handle discrepancies, code conflicts, and other blockers when they arise.</p>
            <div className='images'>
              <img src='../files/UWSOM/home.png' width='80%' height='100%' alt='Service Learning and Community Engagement UWSOM home page' />
            </div>
          </section>
          <section className='design child' id='design'>
            <h1 className="title">Design Projects</h1>
            <h2 className="">Web Design</h2>
            <p className="text description">
              I am passionate about web design. Specifically, I am interested in UI/UX design and web development.
            </p>
            <h3 className="center">Web Projects</h3>
            <div className="container">
              <div className="card">
                <img className="winfo" src="../files/Projects/winfo.png"></img>
                <div className="container">
                  <h4>ECOLYFE</h4>
                  <p className="text left">This project was the final deliverable for the 2022 Women in Engineering Hackathon at the Universiy of Washington. Myself and two partners were given 24 hours to ideate, design, and justify a prototype for an app that solves a problem related to or created by the pandemic. Our group decided on an at-home carbon footprint app that allows the user to track their resourse usage and take steps toward living a more green life using the various tools and infomation available in the app. Click <a className="link" href="https://www.figma.com/proto/Yzyp6HPe3GzX2BgGDqxf6K/Carbon-Circle?node-id=2%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3" target="_blank" rel='noreferrer'>here</a> to view the Figma design.</p>
                </div>
              </div>
              <div className="card">
                <img className="winfo" src="../files/Projects/dubHacks.PNG"></img>
                <div className="container">
                  <h4>ZOOM Rework</h4>
                  <p className="text left">This project was the final deliverable for the 2021 DubHacks Hackathon at the Universiy of Washington. I created this website as a informational page on the plan for improving ZOOM&apos;s usability by making the UI simpler and improving customizability for closed captions.</p>
                </div>
              </div>
            </div>
            <h2>Game Development</h2>
            <p className="text description">
              Although my game development experience is less extensive then my design experience, I have taken serveral coding and game development courses and have experience with a few projects.
            </p>
            <h3 className="center description">Unity Project</h3>
            <p className="text center description">
              During a summer camp at the University of Washington, I worked on a Unity game with a group of 4 students. The game we chose was a 3D zombie survial game in a small arena with waves of zombies and a timer/score system. I was responsible for the design and development of the player character and zombie entities. Using my knowledge of C# and familiarity with Unities premade assets, I was able to create my part of the game and have it playable in a week.
            </p>
          </section>
          <section className='hobbies child' id='hobbies'>
            <h1 className="title"> Hobbies and Creative Pieces </h1>
            <div className="d+d">
              <h2>Dungeons and Dragons</h2>
              <p className='description'>
                I am a long-time Dungeons and Dragons player and seasoned Dungeon Master. Over the years, I have worked on a variety of homebrew rules, character customizations, settings and campaigns. These creations showcase my creativity in game design and interative storyelling.
              </p>
              <div className="card">
                <img className="map" src="../files/Projects/map.PNG"></img>
                <div className="container">
                  <h3>Erdrea</h3>
                  <p className="text left">
                    Erdrea is a fantasy world of my creation where almost all of the campaigns I have written have taken place. It is a multi-continental world with a diverse cultures, variable geography, and a rich history.
                  </p>
                </div>
              </div>
              <div className="card">
                <iframe className="doc" src="../files/DD/Fableism.pdf"></iframe>
                <div className="container">
                  <h3>Fableism</h3>
                  <p className="text left">
                    <a className="link" href="../files/DD/Fableism.pdf" target="_blank">Fableism</a> is a homebrew religion that I created for my world. It revolves around an omnicient being known as the Writer and its subclasses: <a className="link" href="../files/DD/Oath_of_Fable.pdf" target="_blank">The Oath of Fable Paladin</a> and <a className="link" href="../files/DD/Seer_warlock_Subclass.pdf" target="_blank">The Seer Warlock</a> draw inspiration from the divination Wizard class.
                  </p>
                </div>
              </div>
            </div>
            <div className="mtg">
              <h2>Magic: The Gathering</h2>
              <p className="text description">
                Magic the Gathering is my favorite card game. I have built numerous decks, most of which are for the Elder Dragons Highlander format. These decks showcase my skills in game balancing and synergistic design.
              </p>
              <a className="btn" href="https://archidekt.com/user/109530" target="_blank" rel='noreferrer'>View my decks on Archidekt.com!</a>
            </div>
          </section>
        </div>
      </main>

      <footer className='footer'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
        <a
          className='source'
          href="https://github.com/RyanLangford/Web-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on{' '}
          <img src="/github.png" alt="Github" className="logo" />
        </a>
      </footer>
    </div>
  )
}