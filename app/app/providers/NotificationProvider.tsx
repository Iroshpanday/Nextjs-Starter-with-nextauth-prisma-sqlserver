import { SnackbarProvider } from "notistack";

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
}
