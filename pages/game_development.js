import Link from "next/link";
import Head from 'next/head';

export default function Game_Development() {
  return (
    <div className="">
      <Head>
        <title>Ryan Langford's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h1 className="title">Development/Design Projects</h1>
          <Link href="/">
              <a className="homebtn">Home</a>
          </Link>
          <p className="text">
            Working on games has been a passion of mine since early on in primary school. I have worked on a variety of games, from small modifications to creating a full Unity game with a group of 4 student developers. I enjoy tinkering with the mechanics of games and creating new characters, items, classes, etc. to try and design and balance them to fit seemlessly into the game.
          </p>
          <h2>Game Design</h2>
          <p className="text">
            Designing new concepts for games I am interested in is one of my favorite hobbies. I love creating new mechanics and lore to fit whatever myself or other players are trying to acomplish in-game. I have designed for a few games, the most notable being Dungeons and Dragons. You can find these designs on my <a className="link" href="../creative_pieces">Creative Pieces</a> page.
          </p>
          <h2 className="">Web Design</h2>
          <p className="text">
            I am also passionate about web design both within the gaming world and in the larger online world. Specifically, I am interested in UI/UX design and web development. I have worked on a few projects including my most recent web project called <a className="link" href="/groupify">Groupify</a>.
          </p>
          <h3 className="center">Web Projects</h3>
          <div className="container">
            <div className="card">
              <img className="winfo" src="../files/Projects/winfo.png"></img>
              <div className="container">
                <h4>ECOLYFE</h4>
                <p className="text left">This project was the final deliverable for the 2022 Women in Engineering Hackathon at the Universiy of Washington. Myself and two partners were given 24 hours to ideate, design, and justify a prototype for an app that solves a problem related to or created by the pandemic. Our group decided on an at-home carbon footprint app that allows the user to track their resourse usage and take steps toward living a more green life using the various tools and infomation available in the app. Click <a className="link" href="https://www.figma.com/proto/Yzyp6HPe3GzX2BgGDqxf6K/Carbon-Circle?node-id=2%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3" target="_blank">here</a> to view the Figma design.</p>
              </div>
            </div>
            <div className="card">
              <img className="winfo" src="../files/Projects/dubHacks.png"></img>
              <div className="container">
                <h4>ZOOM Rework</h4>
                <p className="text left">This project was the final deliverable for the 2021 DubHacks Hackathon at the Universiy of Washington. I created this website as a informational page on the plan for improving ZOOM's usability by making the UI simpler and improving customizability for closed captions.</p>
              </div>
            </div>
          </div>
          <h2>Game Development</h2>
          <p className="text">
            Although my game development experience is less extensive then my design experience, I have taken serveral coding and game development courses and have experience with a few projects.
          </p>
          <h3 className="center">Unity Project</h3>
          <p className="text center">
            During a summer camp at the University of Washington, I worked on a Unity game with a group of 4 students. The game we chose was a 3D zombie survial game in a small arena with waves of zombies and a timer/score system. I was responsible for the design and development of the player character and zombie entities. Using my knowledge of C# and familiarity with Unities premade assets, I was able to create my part of the game and have it playable in a week.
          </p>
      </main>

      {/*  CARD SKELETON
      <div className="card">
        <img></img>
        <div className="container">
          <h4></h4>
          <p></p>
        </div>
      </div>
      */}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 80%;
          margin: auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main div {
          justify-content: center;
          align-items: center;
        }

        .center {
          text-align: center;
          justify-content: center;
          align-items: center;
        }

        .homebtn {
          position: fixed;
          top: 0;
          left: 0;
          margin: 1rem;
          border-radius: 5px;
          padding: 0.25em 1em;
          border: 5px solid #eaeaea;
          color: #0070f3;
          text-decoration: none;
        }

        .title em {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid black;
        }

        .title,
        .description {
          text-align: center;
        }

        h2 {
          text-decoration: underline;
          text-align: center;
          padding: .5rem;
        }

        .winfo {
          width: 60%;
          height: auto;
        }


        .link {
          color: #0070f3;
        }

        .link:hover {
          text-decoration: underline;
        }

        .text {
          text-align: center;
          width: 80%;
          font-size: 1.25rem;
        }

        .left {
          text-align: left;
        }

        .card {
          display: flex;
          flex-direction: row;
          outline: 2px solid #eaeaea;
          margin-top: 1rem;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  );
}