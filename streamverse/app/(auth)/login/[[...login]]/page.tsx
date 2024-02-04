import { SignIn } from '@clerk/nextjs'

export default function Page (): React.ReactNode {
  return (
    <>
      <SignIn appearance={{
        elements: {
          card: 'h-[440px]'
        }
      }}/>
    </>
  )
}
