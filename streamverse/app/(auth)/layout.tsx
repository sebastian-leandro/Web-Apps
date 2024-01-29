import Logo from './_components/Logo'

function AuthLayout ({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <>
      <div className='h-full flex flex-col items-center justify-center space-y-6'>
        <Logo />
        {children}
      </div>
    </>
  )
}

export default AuthLayout
