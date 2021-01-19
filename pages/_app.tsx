import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700"></link>

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700"></link>

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1.500;1,700;"></link>

        <style global={true}>{`
              html,
              body {
                  padding: 0;
                  margin: 0;
                  font-family: 'Source Sans Pro', 'sans-serif';
                  font-weight: 300;
                  height: 100%;
              }

              body > div:first-child,
                div#__next {
                  height: 100%;
              }
            

              * {
                  box-sizing: border-box;
              }
              `}
          </style>
          
        </Head>
        <Component {...pageProps} />
      </div>
  ) 
}

export default MyApp
