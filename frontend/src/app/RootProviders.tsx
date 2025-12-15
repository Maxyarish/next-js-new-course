import { Providers } from "./providers";


export default function RootProviders({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
