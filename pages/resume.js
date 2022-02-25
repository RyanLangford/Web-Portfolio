import Link from "next/link";
import Head from 'next/head';

export default function Resume() {
  return (
    <div className="container">
      <Head>
        <title>Ryan Langford's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h1 className="title"> My Resume </h1>
          <Link href="/">
              <a className="homebtn">Home</a>
          </Link>
          <p className="description">If you are having trouble viewing the framed version of my resume below, <a href="../files/resume.pdf" download>click here</a> to download it.</p>
          <iframe className="file" src="../files/resume.pdf" width="80%" height="100%"></iframe>
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

        .description {
          width: 85%;
          line-height: 1.5;
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .description a {
          color: #0070f3;
        }

        .description a:hover {
          text-decoration: underline;
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

        .logo {
          height: 1em;
        }

        @media (min-width: 900px) {
          .file {
            margin: 1em;
            height: 250px;
          }
        }

        @media (min-width: 1200px) {
          .file {
            margin: 1em;
            height: 400px;
          }
        }

        @media (min-width: 1600px) {
          .file {
            margin: 1em;
            height: 500px;
          }
        }
        
        @media (min-width: 1900px) {
          .file {
            margin: 1em;
            height: 700px;
          }
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