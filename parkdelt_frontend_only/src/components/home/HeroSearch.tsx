import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Clock } from 'lucide-react';

export default function HeroSearch() {
  const nav = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate]         = useState('');
  const [start, setStart]       = useState('');
  const [end, setEnd]           = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (location) p.set('location', location);
    if (date)     p.set('date',     date);
    if (start)    p.set('start',    start);
    if (end)      p.set('end',      end);
    nav(`/find-space?${p.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      {/* Lokation ------------------------------------------------ */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-black mb-1">Hvor?</label>
        <div className="relative">
          <Search className="h-5 w-5 text-black absolute inset-y-0 left-0 pl-3 pointer-events-none" />
          <input
            name="location"
            placeholder="Indtast adresse eller område"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
            className="block w-full pl-10 pr-3 py-2 rounded-lg border border-gray-500
                       text-black placeholder:text-black
                       focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Dato ---------------------------------------------------- */}
      <div>
        <label className="block text-sm font-medium text-black mb-1">Dato</label>
        <div className="relative">
          <Calendar className="h-5 w-5 text-black absolute inset-y-0 left-0 pl-3 pointer-events-none" />
          <input
            type="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            className="block w-full pl-10 pr-3 py-2 rounded-lg border border-gray-500
                       text-black placeholder:text-black
                       focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Fra ----------------------------------------------------- */}
      <div>
        <label className="block text-sm font-medium text-black mb-1">Fra</label>
        <div className="relative">
          <Clock className="h-5 w-5 text-black absolute inset-y-0 left-0 pl-3 pointer-events-none" />
          <input
            type="time"
            name="start"
            value={start}
            onChange={e => setStart(e.target.value)}
            required
            className="block w-full pl-10 pr-3 py-2 rounded-lg border border-gray-500
                       text-black placeholder:text-black
                       focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Til ----------------------------------------------------- */}
      <div>
        <label className="block text-sm font-medium text-black mb-1">Til</label>
        <div className="relative">
          <Clock className="h-5 w-5 text-black absolute inset-y-0 left-0 pl-3 pointer-events-none" />
          <input
            type="time"
            name="end"
            value={end}
            onChange={e => setEnd(e.target.value)}
            required
            className="block w-full pl-10 pr-3 py-2 rounded-lg border border-gray-500
                       text-black placeholder:text-black
                       focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* knap ---------------------------------------------------- */}
      <div className="md:self-end">
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Søg
        </button>
      </div>
    </form>
  );
}