import { useState, useEffect, useRef, useCallback } from 'react'

import classes from './App.module.scss'

function App() {
  const [prevNumbers, setPrevNumbers] = useState<number | null>()
  const [currentOperator, setCurrentOperator] = useState<string | null>(null)

  const display = useRef<HTMLSpanElement | null>(null)

  const handleErase = useCallback(() => {
    setPrevNumbers(null)
    setCurrentOperator(null)
    if (display.current) display.current.innerHTML = ''
  }, [])

  const handleDelete = useCallback(() => {
    const value = display.current?.innerHTML || ''
    display.current && (display.current.innerHTML = value.slice(0, -1))
  }, [])

  const handleNumber = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.innerHTML
    display.current && (display.current.innerHTML += value)
  }

  const handleOperator = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.innerHTML
    setPrevNumbers(parseFloat(display.current?.innerHTML || '0'))
    setCurrentOperator(value)
    display.current && (display.current.innerHTML = '')
  }, [])

  const handleEqual = useCallback(() => {
    const currentNumber = parseFloat(display.current!.innerHTML)
    const prevNumber = prevNumbers
    const operator = currentOperator
    let result = 0
    if (prevNumber) {
      switch (operator) {
        case '+':
          result = prevNumber + currentNumber
          break
        case '-':
          result = prevNumber - currentNumber
          break
        case '*':
          result = prevNumber * currentNumber
          break
        case '/':
          result = prevNumber / currentNumber
          break
        default:
          break
      }
      display.current!.innerHTML = result.toString()
    }
  }, [currentOperator, display, prevNumbers])

  useEffect(() => {
    const handleEvent = (event: KeyboardEvent) => {
      const key = event.key
      if (key === 'Enter') {
        handleEqual()
      } else if (key === 'Backspace') {
        handleDelete()
      } else if (key === 'Escape') {
        handleErase()
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleOperator({ currentTarget: { innerHTML: key } } as React.MouseEvent<HTMLButtonElement>)
      } else if (key === '.') {
        display.current!.innerHTML += key
      } else if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
        display.current!.innerHTML += key
      }
    }
    window.addEventListener('keydown', handleEvent)
    return () => { window.removeEventListener('keydown', handleEvent) }
  }, [handleEqual, handleDelete, handleErase, handleOperator])

  return (
    <>
      <section className={classes.container}>
        <div className={classes.calculator}>
          <div className={classes.screen}>
            <span ref={display} className={classes.display}></span>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.row}>
              <button onClick={handleErase} className={classes.delete}>AC</button>
              <button onClick={handleDelete} className={classes.delete}>C</button>
            </div>
            <div className={classes.row}>
              <button onClick={handleNumber} className={classes.btn}>7</button>
              <button onClick={handleNumber} className={classes.btn}>8</button>
              <button onClick={handleNumber} className={classes.btn}>9</button>
              <button onClick={handleOperator} className={classes.symbol}>*</button>
            </div>
            <div className={classes.row}>
              <button onClick={handleNumber} className={classes.btn}>4</button>
              <button onClick={handleNumber} className={classes.btn}>5</button>
              <button onClick={handleNumber} className={classes.btn}>6</button>
              <button onClick={handleOperator} className={classes.symbol}>-</button>
            </div>
            <div className={classes.row}>
              <button onClick={handleNumber} className={classes.btn}>1</button>
              <button onClick={handleNumber} className={classes.btn}>2</button>
              <button onClick={handleNumber} className={classes.btn}>3</button>
              <button onClick={handleOperator} className={classes.symbol}>+</button>
            </div>
            <div className={classes.row}>
              <button onClick={handleNumber} className={classes.btn}>0</button>
              <button onClick={handleNumber} className={classes.point}>.</button>
              <button onClick={handleEqual} className={classes.equal}>=</button>
              <button onClick={handleOperator} className={classes.symbol}>/</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
