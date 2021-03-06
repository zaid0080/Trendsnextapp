import styles from '../styles/about.module.css';
import Image from 'next/image'

function AboutUs() {
  return (
    <div className={styles.about_page}>
      <h1 className={styles.title}>ABOUT alldaytrends.</h1>
      <Image src='/Trends.svg' rel="preload" alt='about' className={styles.about_img} width={600} height={300} />
      <p className={styles.tagLines}>
        When you are looking for ways to increase your social media exposure,
        you need to know and keep up with topics that are trending all around
        the world. All Day Trends is exactly what you need for this.
      </p>
      <p className={styles.tagLines}>
        All Day Trends is a website where you can find trending topics of
        twitter from all over the world. With our website you can search for
        topics that were trending in the last 24 hours.
      </p>
      <p className={styles.tagLines}>We provide trends for over 400+ countries and cities.</p>
      <p className={styles.tagLines}>Available to everyone, even if you don't have any twitter account.</p>
    </div>
  );
}

export default AboutUs;
