import '../styles/global.scss';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';


function MyApp({ Component, pageProps }) {
     return (
     <PlayerContextProvider>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <div className ={styles.wrapper}>
          <main>
              <Header />
              <Component {...pageProps} />
          </main>
          <Player />
        </div>
     </PlayerContextProvider> 
     )
    }

export default MyApp
