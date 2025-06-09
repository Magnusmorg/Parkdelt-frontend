import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { User, Car, Clock, CreditCard, LogOut, Settings, Bell, Key, Shield } from 'lucide-react';

const ProfilePage = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  // Redirect if not logged in
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 h-14 w-14 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <button 
                    className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                      activeTab === 'profile' 
                        ? 'bg-blue-50 text-blue-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="h-5 w-5 mr-3" />
                    <span>Min profil</span>
                  </button>
                  
                  <button 
                    className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                      activeTab === 'bookings' 
                        ? 'bg-blue-50 text-blue-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('bookings')}
                  >
                    <Car className="h-5 w-5 mr-3" />
                    <span>Mine bookinger</span>
                  </button>
                  
                  <button 
                    className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                      activeTab === 'spaces' 
                        ? 'bg-blue-50 text-blue-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('spaces')}
                  >
                    <Clock className="h-5 w-5 mr-3" />
                    <span>Mine parkeringspladser</span>
                  </button>
                  
                  <button 
                    className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                      activeTab === 'payment' 
                        ? 'bg-blue-50 text-blue-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('payment')}
                  >
                    <CreditCard className="h-5 w-5 mr-3" />
                    <span>Betaling</span>
                  </button>
                  
                  <button 
                    className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                      activeTab === 'settings' 
                        ? 'bg-blue-50 text-blue-800 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Indstillinger</span>
                  </button>
                </nav>
              </div>
              
              <button 
                onClick={handleLogout}
                className="flex items-center px-3 py-2 w-full text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5 mr-3" />
                <span>Log ud</span>
              </button>
            </div>
            
            {/* Main content */}
            <div className="md:w-3/4">
              {activeTab === 'profile' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Min profil</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Navn
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={user.name}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        defaultValue={user.email}
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefonnummer
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+45 12 34 56 78"
                      />
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Profil verificering
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center">
                            <Shield className="h-6 w-6 text-green-500 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">Email verificeret</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Verificeret
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center">
                            <Shield className="h-6 w-6 text-gray-400 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">Telefonnummer</p>
                              <p className="text-sm text-gray-500">Ikke tilføjet endnu</p>
                            </div>
                          </div>
                          <button className="text-sm text-blue-800 px-3 py-1 border border-blue-800 rounded-full hover:bg-blue-50 transition-colors">
                            Verificer
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center">
                            <Shield className="h-6 w-6 text-gray-400 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">ID-verifikation</p>
                              <p className="text-sm text-gray-500">Øg tilliden til din profil</p>
                            </div>
                          </div>
                          <button className="text-sm text-blue-800 px-3 py-1 border border-blue-800 rounded-full hover:bg-blue-50 transition-colors">
                            Verificer ID
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Gem ændringer
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'bookings' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Mine bookinger</h2>
                  
                  <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                      <button className="border-b-2 border-blue-800 pb-4 px-1 text-blue-800 font-medium">
                        Kommende
                      </button>
                      <button className="border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700">
                        Tidligere
                      </button>
                      <button className="border-b-2 border-transparent pb-4 px-1 text-gray-500 hover:text-gray-700">
                        Annullerede
                      </button>
                    </nav>
                  </div>
                  
                  <div className="text-center py-8">
                    <Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Ingen kommende bookinger
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Du har ikke nogen kommende bookinger. Find en parkeringsplads nu!
                    </p>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Find parkering
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'spaces' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Mine parkeringspladser</h2>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Tilføj ny plads
                    </button>
                  </div>
                  
                  <div className="text-center py-8">
                    <Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Ingen parkeringspladser endnu
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Du har ikke oprettet nogen parkeringspladser. Begynd at tjene penge på din tomme parkeringsplads!
                    </p>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Opret parkeringsplads
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'payment' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Betalingsmetoder</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 mr-4">
                          <CreditCard className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Tilføj betalingskort</p>
                          <p className="text-sm text-gray-500">Betal nemt for dine bookinger</p>
                        </div>
                      </div>
                      <button className="text-blue-800 hover:text-blue-700">
                        Tilføj kort
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 pt-4">
                      Transaktionshistorik
                    </h3>
                    
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <p className="text-gray-500">
                        Ingen transaktioner endnu
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontoindstillinger</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Notifikationer
                      </h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center justify-between">
                          <span className="text-gray-700">Email-notifikationer</span>
                          <input 
                            type="checkbox" 
                            className="h-5 w-5 text-blue-800 focus:ring-blue-500 border-gray-300 rounded"
                            defaultChecked
                          />
                        </label>
                        
                        <label className="flex items-center justify-between">
                          <span className="text-gray-700">SMS-notifikationer</span>
                          <input 
                            type="checkbox" 
                            className="h-5 w-5 text-blue-800 focus:ring-blue-500 border-gray-300 rounded"
                          />
                        </label>
                        
                        <label className="flex items-center justify-between">
                          <span className="text-gray-700">Marketingmeddelelser</span>
                          <input 
                            type="checkbox" 
                            className="h-5 w-5 text-blue-800 focus:ring-blue-500 border-gray-300 rounded"
                          />
                        </label>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Sikkerhed
                      </h3>
                      
                      <div className="space-y-4">
                        <button className="flex items-center text-gray-700 hover:text-blue-800">
                          <Key className="h-5 w-5 mr-2" />
                          <span>Skift adgangskode</span>
                        </button>
                        
                        <button className="flex items-center text-gray-700 hover:text-blue-800">
                          <Shield className="h-5 w-5 mr-2" />
                          <span>Aktiver to-faktor-godkendelse</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-red-600 mb-4">
                        Farezone
                      </h3>
                      
                      <button className="text-red-600 hover:text-red-700">
                        Slet min konto
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;