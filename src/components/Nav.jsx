import n from './nav.module.css'

const Nav = () => {

    return (
        <div>
            <button className={c.navBtn}>
                Game
            </button>
            <ul>
              <li>Live score</li>
              <li>Statistics</li>
              <li>Analitics</li>
              <li>Forecasts</li>
            </ul>
        </div>
    )

}

export default Nav