const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>  
    <div className="w-full h-[10vh] px-8 flex justify-center items-center text-black ">
        ©{' '}
        <a href="#1" className="hover:underline">
            Solutya {currentYear}
        </a>
        . All Rights Reserved.
    </div>
</div>
  )
}

export default Footer