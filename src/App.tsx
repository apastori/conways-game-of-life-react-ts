import React from 'react'
import './App.css'
import GameLife from './GameLife'
import { GridConfig } from './GridConfig'

const App = (): JSX.Element => {

  return (
    <React.Fragment>
      <div className='h-screen w-screen flex justify-center p-4 bg-blue-500 flex-col gap-4'>
        <GameLife gridConfig={GridConfig} />
      </div>
    </React.Fragment>
  )
}

export default App
