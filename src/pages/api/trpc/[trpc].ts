import { appRouter } from "@/server/root/config"
import { createTRPCContext } from "@/server/trpc/config"
import { env } from "@/utils/constants/env.mjs"
import { createNextApiHandler } from "@trpc/server/adapters/next"

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? () => {
          console.error(`❌ tRPC failed`)
        }
      : undefined,
})
