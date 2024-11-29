import React from 'react'
import Color from '../Shared/Color'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../redux/actions'

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  // const [isLightTheme, setIsLightTheme] = React.useState(true)
  const isLightTheme = useSelector((state) => state.isLightTheme)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(setTheme())
    
  }

  const theme = isLightTheme ? Color.light : Color.dark

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLightTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
