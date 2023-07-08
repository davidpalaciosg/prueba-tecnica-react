import axios from "axios";
import { HOST } from "./host";

//Get all tramos ({"Linea": "Tramo 1","consumo": 3902293,"perdidas": 401.459754906,"costo": 883722.2850831196})
export const getTramo = async (fechaInicial: string, fechaFinal:String) => {
    const url = `${HOST}/tramo`;
    const body = {
        fechaInicial,
        fechaFinal
    }
    const response = await axios.post(url, body);
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return response.data;
}

//Get all Cliente
export const getCliente = async (fechaInicial: string, fechaFinal:String) => {
    const url = `${HOST}/cliente`;
    const body = {
        fechaInicial,
        fechaFinal
    }
    const response = await axios.post(url, body);
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return response.data;
}