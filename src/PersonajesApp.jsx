import { Button } from "bold-ui"
import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"

export const PersonajesApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}
