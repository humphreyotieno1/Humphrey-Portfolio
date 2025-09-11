declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        page_title?: string
        page_location?: string
        page_path?: string
        send_page_view?: boolean
        custom_map?: Record<string, string>
        event_category?: string
        event_label?: string
        value?: number
        [key: string]: string | number | boolean | undefined
      }
    ) => void
    dataLayer: unknown[]
  }
}

export {}
