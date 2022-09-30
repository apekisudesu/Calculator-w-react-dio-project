import React from 'react';
import Input from "./Components/Input/input";
import Button from "./Components/Button/button";
import "./styles/container.css";

export default function App() {
  const[number, setNumber] = React.useState('');
  const[secondNumber, setSecondNumber] = React.useState('')
  const[equals, setEquals] = React.useState('')


  function num(num) {
    setNumber(prev => {return `${prev}${num}`})
  }

  function clearEt(){
    return setSecondNumber(''), setNumber('')
  }

  function somar() {
    if(!secondNumber) {
      setSecondNumber(number)
      setNumber('')
      setEquals('+')
    } else {
      setNumber(Number(secondNumber) + Number(number))
      setSecondNumber('')
    }
  }

  function subtrair() {
    if(!secondNumber) {
      setSecondNumber(number)
      setNumber('')
      setEquals('-')
    } else {
      setNumber(Number(secondNumber) - Number(number))
      setSecondNumber('')
    }
  }

  function dividir() {
    if(!secondNumber) {
      setSecondNumber(number)
      setNumber('')
      setEquals('/')
    } else {
      setNumber(Number(secondNumber) / Number(number))
      setSecondNumber('')
    }
  }

  function multiplicar() {
    if(!secondNumber) {
      setSecondNumber(number)
      setNumber('')
      setEquals('x')
    } else {
      setNumber(Number(secondNumber) * Number(number))
      setSecondNumber('')
    }
  }

  function equal() {
    console.log('this works')
    
    if(secondNumber && equals) {
      switch(equals){
        case '+':
          somar()
          break

        case '-':
          subtrair()
          break

        case 'x':
          multiplicar()
          break

        case '/':
          dividir()
          break

        default:
          break
      }
    }
  }




  return (
    <div className='container'>
      <div className='container-two'>
        <Input number={number}/>
        <div className='button-wraper'>
            <div className="buttons-container">
                <Button className="button" exec={somar} bText={'+'}/>
                <Button className="button" exec={() => num(7)} bText={'7'}/>
                <Button className="button" exec={() => num(4)} bText={'4'}/>
                <Button className="button" exec={() => num(1)} bText={'1'}/>
            </div>

            <div className="buttons-container">
                <Button className="button" exec={subtrair} bText={'-'}/>
                <Button className="button" exec={() => num(8)} bText={'8'}/>
                <Button className="button" exec={() => num(5)} bText={'5'}/>
                <Button className="button" exec={() => num(2)} bText={'2'}/>
            </div>

            <div className="buttons-container">
                <Button className="button" exec={multiplicar} bText={'x'}/>
                <Button className="button" exec={() => num(9)} bText={'9'}/>
                <Button className="button" exec={() => num(6)} bText={'6'}/>
                <Button className="button" exec={() => num(3)} bText={'3'}/>
            </div>

            <div className="buttons-container">
                <Button className="button" exec={dividir} bText={'/'}/>
                <Button className="button" exec={() => num(0)} bText={'0'}/>
                <Button className="button" exec={equal} bText={'='}/>
                <Button className="button" exec={clearEt} bText={'CE'}/>
            </div>
        </div>
      </div>
    </div>
  )
}