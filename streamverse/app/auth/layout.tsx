export default function Layout ({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
