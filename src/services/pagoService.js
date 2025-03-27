import axios from 'axios';

const API_BASE_URL = 'https://ecicredit-pagos.azurewebsites.net/api/pagos';

export const procesarPago = async (pagoData) => {
    try {
        const response = await axios.post(API_BASE_URL, pagoData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const obtenerPagosPorUsuario = async (usuarioId) => {
    const response = await axios.get(`${API_BASE_URL}/usuario/${usuarioId}`);
    return response.data;
};

export const obtenerPagoPorTransaccion = async (transaccionId) => {
    const response = await axios.get(`${API_BASE_URL}/${transaccionId}`);
    return response.data;
};
