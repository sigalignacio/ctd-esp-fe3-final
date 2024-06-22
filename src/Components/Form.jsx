import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.fullName.length <= 5) {
      newErrors.fullName = 'El nombre completo debe tener más de 5 caracteres';
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El formato de email es incorrecto';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`);
      console.log('Form data:', formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Nombre Completo:</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button type="submit" >Enviar</button>
      </form>
      {submitted && !Object.keys(errors).length && (
        <p>{successMessage}</p>
      )}
      {submitted && Object.keys(errors).length > 0 && (
        <p>Por favor verifique su información nuevamente</p>
      )}
    </div>
  );
};


export default Form;
