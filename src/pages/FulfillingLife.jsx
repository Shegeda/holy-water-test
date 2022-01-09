import { Link } from 'react-router-dom';

function FulfillingLife() {
  return (
    <div className="wrapper">
      <header>
        <hr className="line" />
        <div className="title-cont d-flex justify-between">
          <Link to="/temperament" style={{ textDecoration: 'none' }}>
            <div className="previous-step d-flex">
              <img width={20} height={20} src="../img/arrow.png" alt="Arrow" />
              <p>Previous step</p>
            </div>
          </Link>
          <span>7/30</span>
        </div>
      </header>

      <main>
        <h1>What would you like <br /> to have?</h1>
        <p>What are you missing for a fulfilling life?</p>
      </main>

      <div className="d-flex justify-center">
        <Link to="/timingGoal" style={{ textDecoration: 'none' }}>
          <button className="card-item d-flex align-center">
            <img width={30} height={30} src="../img/focus_icon.png" alt="Focus" />
            <p className="text">More focus</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FulfillingLife;