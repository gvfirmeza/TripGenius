import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import html2pdf from 'html2pdf.js';
import "./TripForm.css";

const TripForm = () => {
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [season, setSeason] = useState('');
    const [budget, setBudget] = useState('');
    const [passengers, setPassengers] = useState([{ gender: '', age: '' }]);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (response) {
            downloadFile();
            setLoading(false);
        }
    }, [response]);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const data = {
            prompt: `Gostaria de criar um roteiro de viagem, eu vou para ${destination}, ficarei ${duration} dias, a estação será ${season} e meu orçamento é ${budget}. Os passageiros serão: ${passengers.map(p => `${p.gender}, ${p.age} anos`).join(', ')}.`
        };

        try {
            const res = await fetch('https://vgt.pythonanywhere.com/generate_response', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error('Erro na requisição');
            }

            const result = await res.json();
            setResponse(result.text);
        } catch (err) {
            setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
            setLoading(false);
        }
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

    const downloadFile = () => {
        const md = new MarkdownIt();
        const htmlContent = md.render(response);

        const element = document.createElement("div");
        element.innerHTML = htmlContent;
        element.style.fontSize = '16px';
        element.style.margin = '18px';

        const options = {
            margin: 1,
            filename: 'roteiro_viagem.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <section className="section-form">
            {loading && <div className="popup">Loading...</div>}
            {error && <div className="popup">{error}</div>}
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
                        required
                    />
                </label>

                <label className="label">
                    Duração da Viagem (Dias):
                    <input
                        className="input"
                        type="number"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        required
                    />
                </label>

                <label className="label">
                    Estação do Ano:
                    <select
                        className="input"
                        value={season}
                        onChange={e => setSeason(e.target.value)}
                        required
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
                        required
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
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </label>

                        <div className='inputPassenger'>
                        <label className="label">
                            Idade:
                            <input
                                className="input"
                                type="number"
                                value={passenger.age}
                                onChange={e => handlePassengerChange(index, 'age', e.target.value)}
                                required
                            />
                        </label>
                        </div>

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
