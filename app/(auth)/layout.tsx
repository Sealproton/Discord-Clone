const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-gray-200'>
      {children}
    </div>
  );
};

export default AuthLayout;
