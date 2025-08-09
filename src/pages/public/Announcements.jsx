import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/announcements');
        setAnnouncements(res.data);
      } catch (err) {
        console.error('Failed to load announcements', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Public Announcements</h1>
      {announcements.length === 0 ? (
        <p>No announcements available.</p>
      ) : (
        announcements.map((a) => (
          <div key={a.id} className="border-b py-4">
            <h2 className="text-lg font-semibold">{a.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{new Date(a.createdAt).toLocaleString()}</p>
            <p>{a.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Announcements;
