interface ContainerProps{
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className='max-w-[1440px] mx-auto flex flex-col min-h-[100vh]'>
    {children}
  </div>
}
