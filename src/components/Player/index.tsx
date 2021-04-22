import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import styles from "./styles.module.scss";

export function Player() {

  const {episodeList, currentEpisodeIndex} = useContext(PlayerContext);
  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.container}>
      <header>
        <img className={styles.headphone} src="/headphone.png" alt="Tocando agora" />
        <strong>Tocando agora {episode?.title}</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider}></div>
          </div>          
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type='button'>
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type='button'>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button type='button' className={styles.playButton}>
            <img src="/play.svg" alt="Tocar"/>
          </button>
          <button type='button'>
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>
          <button type='button'>
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  );
}
