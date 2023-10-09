const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable]

  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ${environmentVariable}`)
  } else {
    return unvalidatedEnvironmentVariable
  }
}

/* Client */
export const API_BASE_URL = getEnvironmentVariable("NEXT_PUBLIC_API_BASE_URL")
export const NEXT_PUBLIC_OPENAI_API = getEnvironmentVariable("NEXT_PUBLIC_OPENAI_API")

/* Server */
export const DISCORD_CLIENT_ID = getEnvironmentVariable("DISCORD_CLIENT_ID")
export const DISCORD_CLIENT_SECRET = getEnvironmentVariable("DISCORD_CLIENT_SECRET")
export const GOOGLE_CLIENT_ID = getEnvironmentVariable("GOOGLE_CLIENT_ID")
export const GOOGLE_CLIENT_SECRET = getEnvironmentVariable("GOOGLE_CLIENT_SECRET")
