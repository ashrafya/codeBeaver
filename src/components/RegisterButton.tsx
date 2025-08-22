const GoogleForm = "https://docs.google.com/forms/d/e/1FAIpQLSeS77QoZikBonqvUsDo2rv5MeXy-dkwFLRSv7iFJarxGXaDaQ/viewform?usp=header"

const RegisterButton = () => {
  return ( 
    <a
      href={GoogleForm}
      title=""
      className="rounded-xl bg-blue-700 px-6 py-2 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600 text-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      Register Now
    </a>
  );
}

export default RegisterButton;