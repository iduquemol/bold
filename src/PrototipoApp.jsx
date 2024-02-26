import { ThemeProvider } from "bold-ui";
import { AppRouter } from "./router/AppRouter";
import { AppTheme, purpleTheme } from './theme';

export const PrototipoApp = () => {
  return (
    <>
        <ThemeProvider theme={ purpleTheme }>
            <AppRouter />
        </ThemeProvider>
    </>
  )
}
