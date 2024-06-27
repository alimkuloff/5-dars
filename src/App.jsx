import c from './App.module.css';
import { data1 } from './db/data';
import g1 from './images/1.png';
import g2 from './images/2.png';
import g3 from './images/3.png';
import g4 from './images/4.png';
import g5 from './images/5.png';
import g7 from './images/7.png';
import g8 from './images/8.png';


function App() {

  return (
    <>
      <div className={c.container}>
       <div className={c.game}>
        <nav>
          <button className={c.navBtn}>
            Game
          </button>
          <ul>
            <li>Live score</li>
            <li>Statistics</li>
            <li>Analitics</li>
            <li>Forecasts</li>
          </ul>
        </nav>
        <div className={c.hero}>
          <h1>The Forbidden Kingdom Adventure War</h1>
          <button>More Details</button>
        </div>

        <div className={c.games}>
          <b>Most popular Game</b>
          <div className={c.gameCards}>
          {
            data1.map(cardGame => 
              <div style={{ backgroundImage: `url(${cardGame.image})` }} key={cardGame.id} className={c.gameCard}>
                <p>{cardGame.name}</p>
                <small><i class="bi bi-star-fill"></i>{cardGame.desc}</small>
              </div>
            )
          }
          </div>

        </div>
        <div className={c.new}>
          <b>New Released Games</b>
          <div className={c.newCards}>
            <div className={c.newCard}>
              <img src={g1} alt="" />
              <div>
              <p>Ghost of Tsushima</p>
              <small>war Battle</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>
            <div className={c.newCard}>
              <img src={g2} alt="" />
              <div>
              <p>Need for Speed</p>
              <small>Racing</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>
            <div className={c.newCard}>
              <img src={g3} alt="" />
              <div>
              <p>The Witcher Hunt</p>
              <small>war Battle</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>
            <div className={c.newCard}>
              <img src={g4} alt="" />
              <div>
              <p>Free Fire</p>
              <small>war Battle</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>
            <div className={c.newCard}>
              <img src={g5} alt="" />
              <div>
              <p>Need for Speed</p>
              <small>Racing</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>
            <div className={c.newCard}>
              <img src={g1} alt="" />
              <div>
              <p>Ghost of Tsushima</p>
              <small>war Battle</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>
            <div className={c.newCard}>
              <img src={g7} alt="" />
              <div>
              <p>Ghost of Tsushima</p>
              <small>war Battle</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>
            <div className={c.newCard}>
              <img src={g8} alt="" />
              <div>
              <p>Ghost of Tsushima</p>
              <small>war Battle</small>
              <div className={c.reyting}>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              </div>
              </div>
            </div>

          </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default App
