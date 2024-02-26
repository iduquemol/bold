import { ThemeProvider } from "bold-ui"
import { purpleTheme } from "./"

export const AppTheme = ( { children } ) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
    </ThemeProvider>
  )
}
