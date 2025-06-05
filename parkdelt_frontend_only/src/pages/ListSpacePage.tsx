import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Calendar, Clock, CreditCard, CheckCircle, Upload } from 'lucide-react';

const ListSpacePage = () => {
  const [step, setStep] = useState(1);
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real application, this would handle file uploads
    // For this demo, we'll just pretend we uploaded some images
    if (e.target.files) {
      // Simulate image uploads with placeholder URLs
      const newImages = [
        'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/69396/pexels-photo-69396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ];
      setImages(newImages);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Udlej din parkeringsplads</h1>
            <p className="text-xl text-gray-600">
              Tjen penge ved at leje din ubrugte parkeringsplads ud til andre bilister.
            </p>
          </div>
          
          {/* Progress steps */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 1 ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="mt-2 text-sm font-medium">Placering</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 2 ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="mt-2 text-sm font-medium">Detaljer</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 3 ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className="mt-2 text-sm font-medium">Billeder</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 4 ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                4
              </div>
              <span className="mt-2 text-sm font-medium">Betaling</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 5 ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                5
              </div>
              <span className="mt-2 text-sm font-medium">Offentliggør</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hvor er din parkeringsplads?</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="address"
                        type="text"
                        placeholder="Indtast adressen for din parkeringsplads"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="parking-type" className="block text-sm font-medium text-gray-700 mb-1">Type af parkering</label>
                    <select
                      id="parking-type"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>Vælg type</option>
                      <option>Privat indkørsel</option>
                      <option>Garage</option>
                      <option>Carport</option>
                      <option>Udendørs mærket plads</option>
                      <option>Andet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hvordan finder man pladsen?</label>
                    <textarea
                      rows={4}
                      placeholder="Giv en kort beskrivelse af, hvordan man finder din parkeringsplads..."
                      className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    onClick={() => setStep(2)}
                  >
                    Næste
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fortæl os om din parkeringsplads</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
                    <input
                      id="title"
                      type="text"
                      placeholder="F.eks. 'Sikker parkeringsplads i centrum'"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Beskrivelse</label>
                    <textarea
                      id="description"
                      rows={4}
                      placeholder="Fortæl potentielle lejere om din parkeringsplads..."
                      className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Egenskaber</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-gray-700">Overdækket</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-gray-700">EV-oplader</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-gray-700">Sikkerhedskamera</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-gray-700">Belysning</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-gray-700">Let adgang</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-gray-700">Aflåst område</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Pris per time (DKK)</label>
                    <div className="relative">
                      <input
                        id="price"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="25"
                        className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">kr</span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Gennemsnitspris i dit område er 20-30 kr/time
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    className="text-blue-800 hover:text-blue-700 transition-colors"
                    onClick={() => setStep(1)}
                  >
                    Tilbage
                  </button>
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    onClick={() => setStep(3)}
                  >
                    Næste
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tilføj billeder af din parkeringsplads</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="max-w-lg mx-auto">
                      {images.length === 0 ? (
                        <>
                          <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload billeder</h3>
                          <p className="text-gray-500 mb-4">
                            Gode billeder øger chancerne for at leje din parkeringsplads ud. Vis pladsen fra forskellige vinkler.
                          </p>
                          <input 
                            type="file" 
                            multiple 
                            accept="image/*" 
                            className="hidden" 
                            id="image-upload"
                            onChange={handleImageUpload}
                          />
                          <label
                            htmlFor="image-upload"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-800 hover:bg-blue-700 cursor-pointer transition-colors"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Vælg billeder
                          </label>
                        </>
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          {images.map((image, index) => (
                            <div key={index} className="relative group">
                              <img 
                                src={image} 
                                alt={`Parkeringsplads billede ${index + 1}`} 
                                className="h-40 w-full object-cover rounded-lg"
                              />
                              <button className="absolute top-2 right-2 h-8 w-8 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span>×</span>
                              </button>
                            </div>
                          ))}
                          <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-40">
                            <label
                              htmlFor="image-upload"
                              className="flex flex-col items-center cursor-pointer"
                            >
                              <Upload className="h-8 w-8 text-gray-400 mb-1" />
                              <span className="text-sm text-gray-500">Tilføj mere</span>
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Tips til gode billeder</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Tag billeder i dagslys for at vise alle detaljer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Vis, hvordan man kommer til og fra parkeringspladsen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Inkluder billeder af eventuelle særlige egenskaber (EV-oplader, sikkerhed osv.)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    className="text-blue-800 hover:text-blue-700 transition-colors"
                    onClick={() => setStep(2)}
                  >
                    Tilbage
                  </button>
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    onClick={() => setStep(4)}
                  >
                    Næste
                  </button>
                </div>
              </div>
            )}
            
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Indstil din tilgængelighed</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hvornår er din parkeringsplads tilgængelig?</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg">
                        <input type="radio" name="availability" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-2 text-gray-700">Altid tilgængelig</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg">
                        <input type="radio" name="availability" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-2 text-gray-700">Hverdage</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg">
                        <input type="radio" name="availability" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300" />
                        <span className="ml-2 text-gray-700">Weekender</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Specifik tidsplan</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-4">
                        {['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'].map((day, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <label className="flex items-center">
                              <input type="checkbox" className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded" />
                              <span className="ml-2 text-gray-700 w-24">{day}</span>
                            </label>
                            <div className="flex items-center space-x-2">
                              <select className="py-1 px-2 border border-gray-300 rounded">
                                {[...Array(24)].map((_, i) => (
                                  <option key={i} value={i}>{i}:00</option>
                                ))}
                              </select>
                              <span>til</span>
                              <select className="py-1 px-2 border border-gray-300 rounded">
                                {[...Array(24)].map((_, i) => (
                                  <option key={i} value={i}>{i}:00</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Betalingsoplysninger</h3>
                    <p className="text-gray-600 mb-4">
                      For at kunne modtage betalinger for din parkeringsplads, skal du tilføje dine bankoplysninger.
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start">
                        <CreditCard className="h-5 w-5 text-blue-800 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-blue-800 font-medium">Sådan fungerer betalinger:</p>
                          <ul className="text-blue-700 text-sm mt-1 space-y-1">
                            <li>Vi tager 15% i servicegebyr af hver booking</li>
                            <li>Udbetalinger sker automatisk hver 14. dag til din bankkonto</li>
                            <li>Du kan følge dine indtægter i realtid på din profil</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="account-name" className="block text-sm font-medium text-gray-700 mb-1">Kontoindehaver</label>
                        <input
                          id="account-name"
                          type="text"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="account-number" className="block text-sm font-medium text-gray-700 mb-1">Kontonummer</label>
                        <input
                          id="account-number"
                          type="text"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="reg-number" className="block text-sm font-medium text-gray-700 mb-1">Registreringsnummer</label>
                        <input
                          id="reg-number"
                          type="text"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    className="text-blue-800 hover:text-blue-700 transition-colors"
                    onClick={() => setStep(3)}
                  >
                    Tilbage
                  </button>
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    onClick={() => setStep(5)}
                  >
                    Næste
                  </button>
                </div>
              </div>
            )}
            
            {step === 5 && (
              <div className="text-center">
                <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Din parkeringsplads er klar til godkendelse!</h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Vi gennemgår din plads inden for 24 timer for at sikre, at den opfylder vores retningslinjer. 
                  Du får besked, så snart den er godkendt og synlig for andre brugere.
                </p>
                
                <Link
                  to="/"
                  className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
                >
                  Gå til forsiden
                </Link>
              </div>
            )}
          </div>

          {step < 5 && (
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Har du brug for hjælp?</h3>
              <p className="text-blue-700 mb-4">
                Hvis du har spørgsmål eller støder på problemer, er du velkommen til at kontakte vores support.
              </p>
              <button className="text-blue-800 font-medium hover:underline">
                Kontakt support
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListSpacePage;