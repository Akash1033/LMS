import React from 'react'
import { useEffect } from 'react';

function PreviewLesson(props) {
  useEffect(()=>{
    console.log(props);
  })
  return (
    // <div>{JSON.stringify(state)}</div>
    <div>Hey There!</div>
  )
}

export default PreviewLesson