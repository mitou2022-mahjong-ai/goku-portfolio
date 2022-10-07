import { AppClient } from '../gen'

export const appClient = new AppClient({
  BASE: process.env["NEXT_PUBLIC_BACKEND_API"],
})