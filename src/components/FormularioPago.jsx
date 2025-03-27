import React, { useState } from 'react';
import { procesarPago } from '../services/pagoService';

function FormularioPago() {
    const [pago, setPago] = useState({
        usuarioId: '',
        fecha: '',
        total: 0,
        articulos: [{ nombre: '', precioUnitario: 0, cantidad: 1 }]
    });
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultado = await procesarPago(pago);
            setMensaje(`Pago procesado correctamente. ID de transacción: ${resultado.transaccionId}`);
            setError('');
        } catch (err) {
            setError(err.message || 'Error al procesar el pago');
            setMensaje('');
        }
    };
    
    return (
        <div className="pago-form">
            <h2>Procesar Pago</h2>
            {mensaje && <div className="alert alert-success">{mensaje}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            
            <form onSubmit={handleSubmit}>
                {}
                <button type="submit" className="btn btn-primary">Procesar Pago</button>
            </form>
        </div>
    );
}

export default FormularioPago;
