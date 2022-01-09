import styles from './Landing.module.scss';


function Landing() {
  return (
    <div>

      <div className={styles.wrapper_bg}>
        <div className={styles.wrapper_indent}>

          {/* Хеадер */}
          <div className={styles.center_container}>
            <div className={styles.header}>
              <div className={styles.left_section}>
                <p className={styles.header_text}>Special offer expires in</p>
                <div className={styles.timer}>00:24</div>
              </div>
              <button className={styles.btn}>Get My Plan</button>
            </div>
          </div>

          <div className={styles.title_cont}>
            <div className={styles.title}>Forecast based on your answers</div>
          </div>

          <div className={styles.center_container}>
            <div className={styles.box_habits}>
              <div className={styles.center_cont}>
                <div className={styles.month_box}>
                  <img width={29} height={44} src="../../../img/day_1.png" alt="Day_1" />
                  <img width={29} height={44} src="../../../img/day_2.png" alt="Day_2" />
                  <img width={29} height={44} src="../../../img/day_3.png" alt="Day_3" />
                  <img width={29} height={44} src="../../../img/day_4.png" alt="Day_4" />
                  <img width={29} height={44} src="../../../img/day_5.png" alt="Day_5" />
                  <img width={29} height={44} src="../../../img/day_6.png" alt="Day_6" />
                  <img width={29} height={44} src="../../../img/day_7.png" alt="Day_7" />
                </div>
              </div>
              <div className={styles.center_cont}>
                <hr className={styles.line} />
              </div>
              <p className={styles.count}>2</p>
              <p className={styles.habits_text}>Super powerful habits <br /> <span className={styles.blue_span}>In 7 days</span>, you will already get</p>
            </div>
          </div>

          <div className={styles.center_container}>
            <div className={styles.box_habits_2}>
              <div className={styles.box_habits_2_small}>
                <p className={styles.descr}>Old bad habits</p>
                <p className={styles.descr_left}>-4 habits</p>
              </div>
              <div className={styles.box_habits_2_small}>
                <p className={styles.descr}>Timing goal</p>
                <p className={styles.descr_right}>10 min / <span className={styles.blue_span}>day</span></p>
              </div>
            </div>
          </div>

          <h1 className={styles.title}><span className={styles.another_color}>In 28 days</span> your results <br /> will reach...</h1>

          <div className={styles.center_container}>
            <div style={{ marginBottom: '60px' }}>
              <div className={styles.skill_box}>
                <div className={styles.top_unit}>
                  <img width={50} height={50} style={{ marginRight: '13px' }} src="../../../img/biceps_icon.png" alt="biceps" />
                  <h3 className={styles.skill_title}>Multi-tasking skill</h3>
                </div>
                <img className={styles.green_chart} width={300} height={184} src="../../../img/top_chart.png" alt="green_chart" />
              </div>

              <div className={styles.procrastination_box}>
                <div className={styles.top_unit}>
                  <img width={50} height={50} style={{ marginRight: '13px' }} src="../../../img/happy_icon.png" alt="biceps" />
                  <h3 className={styles.skill_title}>Procrastination level</h3>
                </div>
                <img className={styles.blue_chart} sty width={284} height={119} src="../../../img/bottom_chart.png" alt="blue_chart" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1></h1> */}
      <p></p>
      <div className={styles.animation_container}>

      </div>



    </div>
  )
}

export default Landing;