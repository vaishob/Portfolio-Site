import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <body className={styles.body}>
      <p className={styles.header_text_1}>Hello I'm</p>
      <p className={styles.header_text_2}>Vaishob Anand</p>
      <p className={styles.header_text_3}>CS Student at NTU</p>
      <div className={styles.buttonContainer}>
        <a className={styles.cv} href="https://www.linkedin.com/in/vaishob-anand-254135205/">Download CV</a>
        <a className={styles.contact} href="https://api.whatsapp.com/send/?phone=6598802284&text=Hi">Let's Talk!</a>
      </div>
      <img src='/icons/line.svg' className={styles.line}/>
      <div className={styles.photo_container}>
        <img src='/images/manas.png' className={styles.photo}/>
      </div>
      <p className={styles.about_me}>Hello world! As you might have guessed from the name of this website, I'm Vaishob, a CS student and AI enthusiast.
This website was a fun way for me to showcase some of the really interesting projects I was a part of. I hope you enjoy your time on this website as much as I did creating it:)</p>
      <img src='/icons/line.svg' className={styles.line}/>
      <p className={styles.footer}>created with ♡ in NTU</p>
    </body>
  )
}
