import React from 'react'
import { PokemonProvider } from './context/PokemonProvider'
import { AppRouter } from './AppRouter'

export default function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}
