import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="Main page" content="MRHS Programming Club" />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      />
      <meta name="theme-color" content="#000000" />
      <title>MRHS Programming Club</title>
    </Head>

    <div>
      <div style={{ height: '70px' }} />

      {children}
    </div>

    <style jsx global>{`
      body {
        background-color: black;
        font-family: Inconsolata, monospace;
        color: #05ff00;
        margin: 0;
        overflow-x: hidden;
      }

      img {
        max-width: 100%;
      }

      h1 {
        margin-top: 25px;
        margin-bottom: 0px;
        font-weight: normal;
        font-size: 3em;
      }

      a {
        font-family: Inconsolata, monospace;
        color: #05ff00;
        text-decoration: none;
        margin: 0px 10px;
        transition: 300ms;
        position: relative;
      }

      a:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #05ff00;
        visibility: hidden;
        transform: scaleX(0);
        transition: 200ms;
      }

      a:hover:after {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }

      p {
        margin-top: 8px;
      }

      ::selection {
        background: #05ff00;
        color: white;
      }
    `}</style>
  </div>
)
