import React from "react"
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

import { UserProvider } from "./user-context"

interface ProviderProps {
  children: React.ReactNode
  session: Session
}

const Providers: React.FC<ProviderProps> = ({ children, session }) => {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <SessionProvider session={session}>
          <UserProvider>{children}</UserProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

export default Providers
