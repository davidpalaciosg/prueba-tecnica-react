import { SingleTramo, SingleCliente } from "./backendTypes";

//Transform a JSON tramo response into a SingleTramo object
const transformTramo = (tramoData: any) => {
    const tramo: SingleTramo = {
        Linea: tramoData.Linea,
        consumo: tramoData.consumo,
        perdidas: tramoData.perdidas,
        costo: tramoData.costo
    }
    return tramo;
}

//Transform a JSON cliente response into a SingleCliente object
const transformCliente = (clienteData: any) => {
    const cliente: SingleCliente = {
        Linea: clienteData.Linea,
        consumo_residencial: clienteData.consumo_residencial,
        consumo_comercial: clienteData.consumo_comercial,
        consumo_industrial: clienteData.consumo_industrial,
        perdidas_residencial: clienteData.perdidas_residencial,
        perdidas_comercial: clienteData.perdidas_comercial,
        perdidas_industrial: clienteData.perdidas_industrial,
        costo_residencial: clienteData.costo_residencial,
        costo_comercial: clienteData.costo_comercial,
        costo_industrial: clienteData.costo_industrial
    }
    return cliente;
}

//Transform a list of JSON tramo responses into a list of SingleTramo objects
export const transformTramos = (completeTramosData: []) => {
    return completeTramosData.map((tramoData: any) => {
        return transformTramo(tramoData);
    });
}

//Transform a list of JSON cliente responses into a list of SingleCliente objects
export const transformClientes = (completeClientesData: []) => {
    return completeClientesData.map((clienteData: any) => {
        return transformCliente(clienteData);
    });
}


