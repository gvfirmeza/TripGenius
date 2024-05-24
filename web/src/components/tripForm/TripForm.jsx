import React, { useState } from 'react';
import "./TripForm.css";

const TripForm = () => {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os dados do formulário, como enviar para um servidor ou atualizar o estado do componente pai.
        console.log('Dados do formulário:', { destination, startDate, endDate });
    };

    return (
        <section className="section-form">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form-title">Crie Seu Roteiro</h1>
          <p>Preencha o Formulário abaixo para criarmos seu roteiro.</p>
          <label className='label'>
            Destino:
            <input className='input' type="text" value={destination} onChange={e => setDestination(e.target.value)} />
          </label>
          <label className='label'>
            Data Inicial:
            <input className='input' type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
          </label>
          <label className='label'>
            Data Final:
            <input className='input' type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
          </label>
          <button className='button' type="submit">Enviar</button>
        </form>
        </section>
    );
};

export default TripForm;