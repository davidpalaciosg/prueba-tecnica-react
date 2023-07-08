import { SingleTramo, SingleCliente } from "./backendResponses";

//Transform a JSON tramo response into a SingleTramo object
export const transformTramo = (tramoData:any) => {
    const tramo: SingleTramo = {
        Linea: tramoData.Linea,
        consumo: tramoData.consumo,
        perdidas: tramoData.perdidas,
        costo: tramoData.costo
    }
    return tramo;
}

//Transform a JSON cliente response into a SingleCliente object
export const transformCliente = (clienteData:any) => {
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
