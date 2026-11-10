// Script Umami chargé dans BaseLayout (absent en local) : toujours appeler window.umami?.track(...)
interface Window {
  umami?: {
    track: (event: string, data?: Record<string, string | number>) => void
  }
}
