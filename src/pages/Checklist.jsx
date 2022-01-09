import { Link } from 'react-router-dom';


function Checklist() {
  return (
    <div className="wrapper">
      <header>
        <hr className="line" />
        <span>7/30</span>
      </header>

      <main>
        <h1>The checklist you <br /> can't do without!</h1>
        <p>Let's make your checklist plan. <br /> Opt for your goals to get excited:</p>
      </main>

      <div className="content">
        <p className="d-flex">
          <input type="checkbox" name="plan" value="goal" />
          <img width={26} height={26} src="../img/sponge_icon.png" alt="Sponge" />
          Perform cleaning
        </p>
      </div>

      <div className="center d-flex justify-center">
        <Link to="/temperament">
          <button className="nextButton">Next</button>
        </Link>
      </div>
    </div>
  )
}

export default Checklist;