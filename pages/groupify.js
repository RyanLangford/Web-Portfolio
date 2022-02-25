import Link from "next/link";
import Head from 'next/head';

export default function Groupify() {
  return (
      <div className="container">
        <Head>
          <title>Ryan Langford's Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <h1 className="title"> Groupify </h1>
            <Link href="/">
              <a className="homebtn">Home</a>
            </Link>
            <p className="header description">If you have a Spotify premium account, click <a href="https://groupify-ae530.web.app/" target="_blank">here</a>  to check out the groupify app!</p>
            <img src="../files/Groupify/HomeScreen.png" width="80%" height="100%" alt="Home Screen"></img>
            <p className="description"> Groupify is a web-based Spotify extension that allows users more control when playing music in a group setting. My group and I designed this app with social events in mind. Before Groupify, we felt that equal control over the music was difficult to achieve in a large group. Groupify fixes this by allowing all users to join a party and control one music player using the host's Spotify account. This way, everyone in the Groupify party has remote access to the music to add, remove, or skip songs without having to track down the person playing the music.</p>
            <div className="images">
              <img src="../files/Groupify/LoginScreen.png" width="40%" height="100%" alt="Login Screen"></img>
              <img src="../files/Groupify/QueueHistory.png" width="40%" height="100%" alt="Queue History Screen"></img>
            </div>
            <div className="my_contribution">
              <p className="description">My role in this project was mainly a designer. I was in charge of displaying the elements of our project on the screen in a usable and pleasing way. I had to balance aesthetics with functionallity to create a layout that was easy to use, appealing, and worked on all screen sizes. I also helped create the elements of the web page and connect our server to Spotify using their API.</p>
              <div className="column">
                <img src="../files/Groupify/MobileView.png" width="70%" height="100%" alt="My Contribution"></img>
                <p>Mobile view of the Home Page</p>
              </div>
            </div>
            
            
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
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

          div .column {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          main div {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }

          main div img {
            margin: 1rem;
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
          .header {
            text-align: center;
          }

          .description {
            width: 85%;
            line-height: 1.5;
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }

          .description a {
            color: #0070f3;
          }

          .description a:hover {
            text-decoration: underline;
          }

          img {
            border: 1px solid black;
            margin-bottom: 2rem;
          }

          .my_contribution {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 85%;
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