import React, { useState } from 'react';
import "./TripForm.css";

const TripForm = () => {
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [season, setSeason] = useState('');
    const [budget, setBudget] = useState('');
    const [passengers, setPassengers] = useState([{ gender: '', age: '' }]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', { destination, duration, season, budget, passengers });
    };

    const handlePassengerChange = (index, field, value) => {
        const updatedPassengers = [...passengers];
        updatedPassengers[index][field] = value;
        setPassengers(updatedPassengers);
    };

    const addPassenger = () => {
        setPassengers([...passengers, { gender: '', age: '' }]);
    };

    const removePassenger = (index) => {
        const updatedPassengers = passengers.filter((_, i) => i !== index);
        setPassengers(updatedPassengers);
    };

    return (
        <section className="section-form">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Crie Seu Roteiro</h1>
                <p>Preencha o Formulário abaixo para criarmos seu roteiro.</p>

                <label className="label">
                    Destino:
                    <input
                        className="input"
                        type="text"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                    />
                </label>

                <label className="label">
                    Duração da Viagem (Dias):
                    <input
                        className="input"
                        type="number"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                    />
                </label>

                <label className="label">
                    Estação do Ano:
                    <select
                        className="input"
                        value={season}
                        onChange={e => setSeason(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="Verão">Verão</option>
                        <option value="Outono">Outono</option>
                        <option value="Inverno">Inverno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </label>

                <label className="label">
                    Orçamento:
                    <select
                        className="input"
                        value={budget}
                        onChange={e => setBudget(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="Baixo">Baixo</option>
                        <option value="Médio">Médio</option>
                        <option value="Alto">Alto</option>
                    </select>
                </label>

                <h2>Passageiros</h2>
                {passengers.map((passenger, index) => (
                    <div key={index} className="passenger">
                        <label className="label">
                            Gênero:
                            <select
                                className="input"
                                value={passenger.gender}
                                onChange={e => handlePassengerChange(index, 'gender', e.target.value)}
                            >
                                <option value="">Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </label>

                        <label className="label">
                            Idade:
                            <input
                                className="input"
                                type="number"
                                value={passenger.age}
                                onChange={e => handlePassengerChange(index, 'age', e.target.value)}
                            />
                        </label>

                        <button
                            type="button"
                            className="remove-button"
                            onClick={() => removePassenger(index)}
                        >
                            &#x2715;
                        </button>
                    </div>
                ))}

                <button className="button" type="button" onClick={addPassenger}>Adicionar Passageiro</button>
                <br />
                <button className="button" type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default TripForm;