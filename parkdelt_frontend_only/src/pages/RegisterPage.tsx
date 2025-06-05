import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Mail, Lock, User, CheckCircle, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('driver');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Adgangskoderne stemmer ikke overens');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await register(name, email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Der opstod en fejl ved oprettelsen af din konto. Prøv igen senere.');
      }
    } catch (err) {
      setError('Der opstod en fejl. Prøv igen senere.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Opret din konto</h1>
              <p className="text-gray-600">
                Bliv en del af ParkDelt-fællesskabet og få adgang til parkering på en ny måde.
              </p>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Navn
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Dit fulde navn"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Din email"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Adgangskode
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Vælg en sikker adgangskode"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Bekræft adgangskode
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Gentag adgangskode"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kontotype
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    accountType === 'driver' 
                      ? 'border-blue-500 bg-blue-50 text-blue-800' 
                      : 'border-gray-300 text-gray-700'
                  }`}>
                    <input 
                      type="radio" 
                      name="accountType" 
                      value="driver" 
                      checked={accountType === 'driver'} 
                      onChange={() => setAccountType('driver')} 
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      {accountType === 'driver' && (
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      )}
                      <span className={accountType === 'driver' ? 'font-medium' : ''}>Bilist</span>
                    </div>
                  </label>
                  
                  <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    accountType === 'owner' 
                      ? 'border-blue-500 bg-blue-50 text-blue-800' 
                      : 'border-gray-300 text-gray-700'
                  }`}>
                    <input 
                      type="radio" 
                      name="accountType" 
                      value="owner" 
                      checked={accountType === 'owner'} 
                      onChange={() => setAccountType('owner')} 
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      {accountType === 'owner' && (
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      )}
                      <span className={accountType === 'owner' ? 'font-medium' : ''}>Pladsejer</span>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-800 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Jeg accepterer <a href="#" className="text-blue-800 hover:underline">vilkår og betingelser</a> og <a href="#" className="text-blue-800 hover:underline">privatlivspolitik</a>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center py-2.5 px-4 rounded-lg ${
                    isLoading
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-800 hover:bg-blue-700 text-white'
                  } transition-colors font-medium`}
                >
                  {isLoading ? 'Opretter konto...' : 'Opret konto'}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Har du allerede en konto?{' '}
                <Link to="/login" className="text-blue-800 hover:underline font-medium">
                  Log ind
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;