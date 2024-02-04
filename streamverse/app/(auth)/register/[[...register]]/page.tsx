import { SignUp } from '@clerk/nextjs'

export default function Page (): React.ReactNode {
  return (
    <>
      <SignUp appearance={{
        elements: {
          card: 'h-[440px]'
        }
      }}/>
    </>
  )
}
