import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setDentist(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <h2>{dentist.name}</h2>
      <p>Email: {dentist.email}</p>
      <p>Telefono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
    </div>
  );

}

export default Detail