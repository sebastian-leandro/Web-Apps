'use client'
import { useEffect, useMemo, useState } from 'react'

import classes from './index.module.scss'

export const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 3)
    return date
  }, [])

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // Manejar finalización aquí
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        setTime({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [targetDate])
  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Ofertas del mes</h3>
        <p className={classes.paragraph}>
          Prepárate para una experiencia como nunca antes con nuestras ofertas del mes. Cada compra
          viene con ventajas y ofertas exclusivas. No te lo pierdas 🎁
        </p>
        <ul className={classes.stats}>
          <StatBox label="Dias" value={time.days} />
          <StatBox label="Horas" value={time.hours} />
          <StatBox label="Minutos" value={time.minutes} />
          <StatBox label="Segundos" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <li className={classes.statBox}>
      <h4>{value}</h4>
      <p>{label}</p>
    </li>
  )
}

export default Promotion
