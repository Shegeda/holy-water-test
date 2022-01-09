import { Link } from 'react-router-dom';


function TimingGoal() {
  return (
    <div className="wrapper">
      <header>
        <hr className="line" />
        <div className="title-cont d-flex justify-between">
          <Link to="/fulfillingLife" style={{ textDecoration: 'none' }}>
            <div className="previous-step d-flex">
              <img width={20} height={20} src="../img/arrow.png" alt="Arrow" />
              <p>Previous step</p>
            </div>
          </Link>
          <span>7/30</span>
        </div>
      </header>

      <main>
        <h1>What is your timing goal?</h1>
        <p>How much time do you want to spend on self-development every day?</p>
      </main>

      <div className="d-flex justify-center">
        <Link to="/landing" style={{ textDecoration: 'none' }}>
          <button className="card-item d-flex align-center">
            <p className="time-p"><span className="time-span">5 min / </span>day</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TimingGoal;