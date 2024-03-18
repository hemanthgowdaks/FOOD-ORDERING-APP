const Footer = () => {
  return(
    <div className="bg-orange-500 py-10">
        <div className="flex flex-col container mx-auto md:flex-row justify-between items-center ">
            <span className="text-3xl font-bold text-white tracking-tight">QuickBite.com</span>
        
            <span className="text-white font-bold flex tracking-tight gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>    
    </div>

  );
}

export default Footer;