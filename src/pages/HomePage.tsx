import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Car, Clock, CreditCard, Award } from 'lucide-react';
import HeroSearch from '../components/home/HeroSearch';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Find parkering nemt, eller tjen penge på din tomme parkeringsplads
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ParkDelt forbinder bilister med ledige private parkeringspladser i byerne. 
              Spar penge som bilist og tjen penge som pladsejer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/find-space" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
              >
                <Search className="h-5 w-5 mr-2" />
                Find parkering
              </Link>
              <Link 
                to="/list-space" 
                className="bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
              >
                <Car className="h-5 w-5 mr-2" />
                Udlej din plads
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <HeroSearch />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-wave-pattern bg-repeat-x bg-contain opacity-20"></div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Sådan virker det</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ParkDelt gør parkering nemt og billigt for alle, og hjælper samtidig med at udnytte eksisterende parkeringspladser bedre.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Search className="h-12 w-12 text-teal-500" />}
              title="Find og book parkering"
              description="Søg efter ledige pladser i nærheden af din destination og book nemt på forhånd."
            />
            <FeatureCard 
              icon={<Car className="h-12 w-12 text-teal-500" />}
              title="Parker uden besvær"
              description="Følg vejledningen til pladsen, tag et billede når du ankommer og forlader stedet."
            />
            <FeatureCard 
              icon={<CreditCard className="h-12 w-12 text-teal-500" />}
              title="Betal kun for det, du bruger"
              description="Sikker betaling og du betaler kun for den tid, du faktisk bruger pladsen."
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/how-it-works" 
              className="text-blue-800 font-medium border-b-2 border-blue-800 hover:text-blue-700 hover:border-blue-700 transition-colors"
            >
              Lær mere om hvordan ParkDelt fungerer
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Udlej din parkeringsplads og tjen penge</h2>
              <p className="text-lg text-gray-700 mb-6">
                Har du en parkeringsplads, som du ikke bruger hele tiden? Måske er du på arbejde i dagtimerne, rejser ofte eller har en ekstra plads?
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Med ParkDelt kan du nemt tjene penge på din tomme parkeringsplads og hjælpe andre med at finde parkering.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    Du bestemmer selv hvornår din plads er tilgængelig
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    Sikker betaling direkte til din bankkonto
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 text-teal-500 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">
                    Verificerede brugere og fotodokumentation
                  </span>
                </li>
              </ul>
              <Link 
                to="/list-space" 
                className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center transition-colors"
              >
                Udlej din parkeringsplads
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-blue-100 rounded-lg p-8 relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3408344/pexels-photo-3408344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Parkeringsplads" 
                  className="rounded-lg shadow-lg object-cover w-full h-96"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-lg shadow-xl z-20">
                <div className="text-3xl font-bold">1.200 kr</div>
                <div className="text-sm opacity-75">Gennemsnitlig indtjening pr. måned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Hvad vores brugere siger</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hør fra vores tilfredse parkeringspladsejere og bilister, der bruger ParkDelt hver dag.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Jeg tjener omkring 1.500 kr ekstra om måneden på min parkeringsplads, når jeg er på arbejde. Det er super nemt!"
              author="Mette K."
              location="Aarhus C"
              rating={5}
              type="Pladsejer"
            />
            <TestimonialCard 
              quote="Jeg finder altid parkering tæt på mit mål og sparer både tid og penge i forhold til parkeringshuse."
              author="Lars J."
              location="København K"
              rating={4}
              type="Bilist"
            />
            <TestimonialCard 
              quote="Verifikation med billeder giver mig ro i sindet - jeg ved præcis hvem der bruger min plads og hvornår."
              author="Søren P."
              location="Odense M"
              rating={5}
              type="Pladsejer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Klar til at starte?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/find-space" 
              className="bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Find parkering
            </Link>
            <Link 
              to="/list-space" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
            >
              <Car className="h-5 w-5 mr-2" />
              Udlej din plads
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;