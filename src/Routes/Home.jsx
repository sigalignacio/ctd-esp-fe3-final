import React, { useEffect, useState, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context'; // Asegúrate de que la ruta de importación es correcta

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // URL de ejemplo funcional
      .then(response => response.json())
      .then(data => {
        setDentists(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dentists:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading dentists: {error.message}</div>;
  }

  return (
    <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
