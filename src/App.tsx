import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
            Website Coming Soon
          </h1>
          <p className="text-center text-gray-600 mb-8">
            We're working hard to bring you a great online experience. In the meantime, feel free to contact us for all your plumbing needs!
          </p>
          
          {/* Services Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Professional Plumbing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Coverage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Serving Massachusetts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Serving Rhode Island
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Licensed & Insured
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Residential and Commercial
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Install and Remodels
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Heating
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Service and Repairs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Gas Work
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;