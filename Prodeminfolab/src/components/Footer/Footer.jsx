import { useState } from 'react'
import styles from '../Footer/Footer.module.css'
import bgImage from '../../assets/images/bgImage.png'
import newspaper from '../../assets/images/newspaper.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png'

function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.hero}>
                <div className={styles.image}>
                    <img src={bgImage} />
                    Your browser does not support the video tag.
                </div>

                <div className={styles.content}>
                    <h2 className={styles.spread}>Spread the Truth</h2>
                    <p className={styles.subscribe}>SUBSCRIBE TO</p>
                    <div className={styles.newsmain}>
                        <img src={newspaper} alt="newspaper" className={styles.newspaper} />
                        <p className={styles.reportcontent}>REPORTING <span>RIGHT</span></p>
                    </div>
                    <Link to='/' className={styles.btn}>
                        <FaArrowRightLong className={styles.arrowIcon} size={90} color="#00005B" />
                    </Link>
                </div>

                <div className={styles.support}>
                    <h2 className={styles.supportcontent}>Support pro-democracy news</h2>
                    <Link className={styles.supportbtn}>Donate</Link>
                </div>

            </div>

            <div className={styles.lower}>
                <div className={styles.lowerhead}>
                    <div>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </div>
                    <div className={styles.footconmain}>
                        <h5 className={styles.footheadings}>Our work</h5>
                        <p className={styles.footcontent}>MISSION</p>
                        <p className={styles.footcontent}>IMPACT</p>
                    </div>
                    <div className={styles.footconmain}>
                        <h5 className={styles.footheadings}>Our People</h5>
                        <p className={styles.footcontent}>FOUNDER</p>
                        <p className={styles.footcontent}>BORADS</p>
                        <p className={styles.footcontent}>FUNDERS</p>
                    </div>
                    <div className={styles.footconmain}>
                        <h5 className={styles.footheadings}>Our Project</h5>
                    </div>
                    <div className={styles.footconmain}>
                        <h5 className={styles.footheadings}>Reporting Right</h5>
                        <p className={styles.footcontent}>ABOUT</p>
                        <p className={styles.footcontent}>WEEKLY ISSUES</p>
                        <p className={styles.footcontent}>SUBSCRIBE</p>
                    </div>
                    <div className={styles.footmain5}>
                        <h5 className={styles.footheadings}>Donate</h5>
                    </div>
                </div>
                <p className={styles.democracy}>2025 The pro-Democracy Information Lab | Site Design by Sadie kramer</p>
            </div>

        </div>

    )
}

export default Footer;
