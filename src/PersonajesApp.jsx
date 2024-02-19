import { Button } from "bold-ui"
import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"

export const PersonajesApp = () => {
  return (
    <AuthProvider>
        {/* <h1>PersonajesApp</h1>
        <Button kind='primary'>Hello World</Button> */}
        <AppRouter />
    </AuthProvider>
  )
}
