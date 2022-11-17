import React from 'react'

export const colorModeContext = React.createContext({
  mode: '',
  setMode: () => {
    alert('você precisa me configurar primeiro')
  },
  toggleMode: () => {
    alert('você precisa me configurar primeiro')
  },
})
export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode)

  function toggleMode() {
    if (mode === "dark") setMode("light")
    if (mode === "light") setMode("dark")
  }
  return (
    <colorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </colorModeContext.Provider>
  )
}
