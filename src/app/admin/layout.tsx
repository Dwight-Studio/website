import "../global.css"

export const metadata = {
  title: {
    template: "%s - Dwight Studio",
    default: "Administration - Dwight Studio"
  },
  description: 'Dwight Studio administration panel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
