import React,{useState,useEffect} from 'react'
import GetScrolling from './GetScrolling';
import { Fragment } from 'react';

const getRandomNumber = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function NumberScrolling() {
  const [numberRandom, setNumberRandom] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNumberRandom(getRandomNumber(0, 9));
    }, 1000);
  }, []);

  return (
    <Fragment >
      <GetScrolling  numberRandom = {numberRandom}/>
    </Fragment >
  )
}