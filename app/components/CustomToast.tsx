import { Toaster } from "sonner"
import { useTheme } from "remix-themes"
import { Session } from "@remix-run/node";
import { toastMessageKey } from "~/constants";


export type ToastType = "success" | "info" | "warning" | "error"







export function setToastMessage(session: Session, message: string, variant?: ToastType) {
    session.flash(toastMessageKey, {message, variant});
  }



export default function CustomToast () {

  const [theme] = useTheme()

    return (
        <Toaster
          position="top-right"
          richColors
          theme={theme!}
          toastOptions={{
            cancelButtonStyle: {
              fontSize: '14px',
              background: 'none',
            }
          }}
        />
    )
}