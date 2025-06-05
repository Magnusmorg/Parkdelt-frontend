import React from 'react';
import { Clock, CreditCard, User, Camera, MapPin, AlertTriangle, Search, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Sådan fungerer ParkDelt</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            ParkDelt er en platform, der forbinder parkeringspladsejere med bilister, 
            der leder efter parkering. Lær hvordan det hele fungerer.
          </p>
        </div>
      </section>
      
      {/* For Drivers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For bilister</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find og book private parkeringspladser nemt og billigt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Find en parkeringsplads</h3>
              <p className="text-gray-600">
                Søg efter ledige parkeringspladser nær din destination. Filter efter dato, tid og specifikke egenskaber.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Book og betal</h3>
              <p className="text-gray-600">
                Vælg den ønskede parkeringsplads, book for den tid du har brug for og betal sikkert online.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Parker og dokumentér</h3>
              <p className="text-gray-600">
                Følg vejledningen til pladsen, tag et billede af din bil ved ankomst og afgang for at dokumentere anvendelsen.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/find-space" 
              className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full inline-flex items-center transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Find parkering nu
            </Link>
          </div>
        </div>
      </section>
      
      {/* For Space Owners */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For parkeringspladsejere</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tjen penge på din tomme parkeringsplads
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Opret din parkeringsplads</h3>
              <p className="text-gray-600">
                Registrer din parkeringsplads med billeder, beskrivelse og angivelse af hvornår den er tilgængelig.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Styr din kalender</h3>
              <p className="text-gray-600">
                Sæt dine egne tider og datoer for hvornår din plads er tilgængelig. Du har fuld kontrol.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Modtag betaling</h3>
              <p className="text-gray-600">
                Få betalinger direkte til din bankkonto for hver booking. Vi håndterer alt det administrative.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/list-space" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full inline-flex items-center transition-colors"
            >
              <Car className="h-5 w-5 mr-2" />
              Udlej din parkeringsplads
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofte stillede spørgsmål</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Her er svar på de mest almindelige spørgsmål om ParkDelt
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hvad sker der, hvis jeg holder længere end aftalt?</h3>
                <p className="text-gray-600">
                  Hvis du holder længere end den bookede tid, vil du blive opkrævet for den ekstra tid. 
                  Hvis pladsen er booket af en anden bilist efter dig, kan du risikere en ekstra afgift for overtrædelse.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hvordan håndteres kontrolafgifter?</h3>
                <p className="text-gray-600">
                  Hvis du har en gyldig booking, er du beskyttet mod kontrolafgifter. Skulle du alligevel få en afgift, skal 
                  du kontakte os inden for 48 timer, og vi vil hjælpe med at løse problemet, forudsat at din booking var aktiv.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hvor meget kan jeg tjene på min parkeringsplads?</h3>
                <p className="text-gray-600">
                  Indtjeningen varierer afhængigt af placeringen, sæsonen og hvor ofte din plads er tilgængelig. 
                  Parkeringspladser i bycentrum kan typisk indbringe mellem 1.000-2.000 kr. om måneden.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hvad med forsikring og sikkerhed?</h3>
                <p className="text-gray-600">
                  Alle bookinger er dækket af vores platform-forsikring, som beskytter både bilisten og pladsejeren. 
                  Vi har også et verifikationssystem med billeder før og efter parkering for at dokumentere alt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kan jeg annullere en booking?</h3>
                <p className="text-gray-600">
                  Ja, du kan annullere en booking op til 24 timer før starttidspunktet med fuld refundering. 
                  Ved senere annullering refunderes 50% af beløbet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust & Safety */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tillid og sikkerhed</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Din sikkerhed og tilfredshed er vores højeste prioritet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-teal-300 mr-3" />
                <h3 className="text-xl font-semibold">Verificerede brugere</h3>
              </div>
              <p className="text-blue-100">
                Alle brugere er verificerede med ID, email og telefonnummer for at sikre en tryg oplevelse.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-teal-300 mr-3" />
                <h3 className="text-xl font-semibold">Fotoverifikation</h3>
              </div>
              <p className="text-blue-100">
                Biler dokumenteres med billeder ved ankomst og afgang for at undgå misforståelser.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-teal-300 mr-3" />
                <h3 className="text-xl font-semibold">Kundesupport</h3>
              </div>
              <p className="text-blue-100">
                Vores supportteam er klar til at hjælpe dig 7 dage om ugen ved eventuelle problemer.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Klar til at komme i gang?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Slut dig til tusindvis af tilfredse brugere og få en bedre parkeringsoplevelse i dag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/find-space" 
              className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Find parkering
            </Link>
            <Link 
              to="/list-space" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
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

export default HowItWorksPage;