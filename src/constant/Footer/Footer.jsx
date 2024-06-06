
const Footer = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-200 to-green-400">
          <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Form Section */}
              <div className="flex flex-col items-start lg:items-center bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
                <h2 className="text-2xl font-bold mb-4">Start your journey now.</h2>
                <form className="w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border rounded-md"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
                  >
                    Start your trial for free
                  </button>
                </form>
                <p className="mt-4 text-sm">
                  You are accepting our{' '}
                  <a href="#" className="underline">
                    terms
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline">
                    privacy statement
                  </a>{' '}
                  with subscribing our mail.
                </p>
              </div>
    
              {/* Links Section */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold mb-2">Links</h3>
                <ul>
                  <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Features</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Contact us</a></li>
                </ul>
              </div>
    
              {/* Contact Section */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold mb-2">Offices</h3>
                <div className="mb-4">
                  <p className="font-semibold">Netherlands</p>
                  <p>123 Kattegatstraat, Suite 456</p>
                  <p>Amsterdam, 1016 CW</p>
                </div>
                <div className="mb-4">
                  <p className="font-semibold">USA</p>
                  <p>456 Park Avenue, 12th Floor</p>
                  <p>New York, NY 10001</p>
                </div>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a href="#" aria-label="Youtube">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          <footer className="text-center p-4">
            <p>&copy; All rights reserved.</p>
          </footer>
        </div>
      );
}

export default Footer;