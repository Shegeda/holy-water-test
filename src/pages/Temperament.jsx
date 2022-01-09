import { Link } from 'react-router-dom';


function Temperament() {
  return (
    <div className="wrapper">
      <header>
        <hr className="line" />
        <div className="title-cont d-flex justify-between">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="previous-step d-flex">
              <img width={20} height={20} src="../img/arrow.png" alt="Arrow" />
              <p>Previous step</p>
            </div>
          </Link>
          <span>7/30</span>
        </div>
      </header>

      <main>
        <h1>What is your <br /> temperament type?</h1>
        <p>This information will help us to give <br /> you the best result</p>
      </main>

      <div className="d-flex justify-center">
        <Link to="/fulfillingLife">
          <button className="card-item">
            Sanguine
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Temperament;