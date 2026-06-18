import React from 'react'
import GameLife from './GameLife'
import { GridConfig } from './GridConfig'
import { BackgroundFX } from './components/BackgroundFX'

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <BackgroundFX />
      <div className="relative min-h-screen w-full flex flex-col items-center p-4 md:p-6 lg:p-8">
        <GameLife gridConfig={GridConfig} />
      </div>
    </React.Fragment>
  )
}

export default App
