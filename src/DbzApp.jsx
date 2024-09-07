import { AuthProvider } from "../auth/context/AuthProvider"
import { AppRoute } from "../routers/AppRoute"

export const DbzApp = () => {
  return (
    <AuthProvider>
      <AppRoute /> 
    </AuthProvider>
  )
}
