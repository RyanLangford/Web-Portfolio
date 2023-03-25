import Link from "next/link";
import Head from 'next/head';

export default function Creative_Pieces() {
  return (
    <div className="container">
      <Head>
        <title>Ryan Langford's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title"> My Creative Pieces </h1>
        <Link href="/">
            <a className="homebtn btn">Home</a>
        </Link>
        <div className="d+d">
          <h2>Dungeons and Dragons</h2>
          <p>
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
            <iframe className="file" src="../files/DD/Fableism.pdf"></iframe>
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
          <p className="text">
            Magic the Gathering is my favorite card game. I have built numerous decks, most of which are for the Elder Dragons Highlander format. These decks showcase my skills in game balancing and synergistic design.
          </p>
          <a className="btn" href="https://archidekt.com/user/109530" target="_blank">View my decks on Archidekt.com!</a>
        </div>
      </main>

      {/* Card skeleton
        <div className="card">
          <img className="" src="../files/Projects/"></img>
          <div className="container">
            <h3></h3>
            <p className="text">

            </p>
          </div>
        </div>
      */}

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          justify-content: center;
          align-items: center;
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
          text-align: center;
          width: 80%;
        }

        .map {
          width: 60%;
          height: fit-content;
          margin-right: 1rem;
        }

        .homebtn {
          position: fixed;
          top: 0;
          left: 0;
          font-size: 1rem;
        }

        .link {
          color: #0070f3;
        }

        .link:hover {
          text-decoration: underline;
        }

        .card {
          display: flex;
          flex-direction: row;
          width: 80%;
          margin: auto; 
          outline: 2px solid #eaeaea;
          margin-top: 1rem;
        }

        .file {
          width: 100%;
          height: auto;
          margin-right: 1rem;
        }

        .btn {
          margin: 1rem;
          border-radius: 5px;
          padding: 0.25em 1em;
          border: 5px solid #eaeaea;
          color: #0070f3;
          text-decoration: none;
        }

        p, a {
          font-size: 1.25rem;
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

        .description {
          width: 80%;
          line-height: 1.5;
          font-size: 1.25rem;
        }

        .text {
          margin-bottom: 2rem;
        }

        .left {
          text-align: left;
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