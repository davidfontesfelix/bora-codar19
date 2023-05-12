import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Car from '../public/images/car.png'
import Perfil from "../public/images/perfil.png"
import Star from "../public/star.svg"
import Phone from "../public/phone.svg"
import Options from "../public/options.svg"

export default function Home() {

  const driverName = 'Boris Colber'
  const fistName: string  = driverName.split(" ")[0]
  const lastName: any = driverName.split(" ").pop();
  const firstLetter = lastName[0]

  let distaciaInicial: number = 1200

  
  function minutes() {
    if(distaciaInicial <= 900){
      let distanceToString = distaciaInicial.toString()
      let fistNumber = distanceToString[0]
      let fistNumberToNumber = parseInt(fistNumber)
      let seconds = fistNumberToNumber * 12
      let minutes = Math.floor(seconds / 60);
      return minutes
    } else {
      let distanceToString = distaciaInicial.toString()
      let fistNumber = distanceToString[0]
      let lastNumber = distanceToString[1]
      let fusion = fistNumber + lastNumber
      let fistNumberToNumber = parseInt(fusion)
      let seconds = fistNumberToNumber * 12
      let minutes = Math.floor(seconds / 60);
      return minutes
    }
  }
  

  return (
   <>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bar}></div>
        <div className={styles.driverInformation}>
          <h1 className={styles.widgetH1}>Encontre <span className={styles.widgetSpan}>{fistName}</span> no local de partida</h1>
          <p className={styles.widgetP}>Chega em {minutes()} minutos ({`${distaciaInicial} metros`})</p>
        </div>
        <section className={styles.section}>
          <div className="pilot-and-car-pictures">
            <div className={styles.assessment}>
              <Image src={Star} alt='estrelas'/>
              <h5 className={styles.stars}>5.0</h5>
            </div>
            <Image className={styles.perfil} src={Perfil} alt='perfil do piloto'/>
            <Image className={styles.car} src={Car} alt='foto do carro'/>
            <h3 className={styles.name}>{fistName} {firstLetter}.</h3>
          </div>
          <div className="Infos">
            <h3 className={styles.carPlate}>BCD0D19</h3>
            <h4 className={styles.carModel}>Honda Civic Roxo</h4>
          </div>
        </section>
        <footer className={styles.footer}>
          <input type="text" placeholder='Enviar mensagem para Boris...' />
          <button><Image src={Phone} alt='ligar'/></button>
          <button><Image src={Options} alt='opções'/></button>
        </footer>
      </div>
    </div>
   </>
  )
}
