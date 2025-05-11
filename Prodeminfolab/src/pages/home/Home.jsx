import { useState } from 'react';
// import Navbar from './components/Navbar';
import styles from '../home/Home.module.css';
import bgVideo from '../../assets/images/bgVideo.mp4'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import section3img from '../../assets/images/section3.jpg'
import Footer from '../..//components/Footer/Footer';

function Home() {

  return (
    <div>

      {/* video section */}
    <div className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <h1>We inform journalists,</h1>
        <p>so they can inform their communities.</p>
      </div>
    </div>

    {/* section 2 */}
    <div className={styles.section2}>
      <div className={styles.section2Content}>
        <p className={styles.section2head}>What We Do</p>
        <img src={img1} alt="image1" className={styles.section2image}/>
      </div>
      <div className={styles.section2Content}>
        <p className={styles.section2head}>Who We Are</p>
        <img src={img2} alt="image2" className={styles.section2image}/>
      </div>
      <div className={styles.section2Content}>
        <p className={styles.section2head}>Where We’re Going</p>
        <img src={img3} alt="image3" className={styles.section2image}/>
      </div>
    </div>

    {/* section 3 */}
    <div className={styles.section3}>
      <p className={styles.read}>Read Our Newsletter</p>
      <div className={styles.main}>
        <div className={styles.imgred}>
          <img src={section3img} className={styles.section3image} alt="section3" />
        </div>

        <div className={styles.content}>
          <p className={styles.section3heading}>A weekly guide <br />For journalists who cover the Truth</p>
        </div>
      </div>
    </div>


    <Footer />
    </div>
  );
}

export default Home;
