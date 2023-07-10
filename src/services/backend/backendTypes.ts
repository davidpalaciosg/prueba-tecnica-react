//Single tramo response: POST /tramos
export type SingleTramo = {
    Linea: string;
    consumo: number;
    perdidas: number;
    costo: number;
}

export type TramoResponse = {
    data: SingleTramo[];
}

//Single cliente response: POST /cliente
export type SingleCliente = {
    Linea: string;
    consumo_residencial: number;
    consumo_comercial: number;
    consumo_industrial: number;
    perdidas_residencial: number;
    perdidas_comercial: number;
    perdidas_industrial: number;
    costo_residencial: number;
    costo_comercial: number;
    costo_industrial: number;
}

export type ClienteResponse = {
    data: SingleCliente[];
}

export const businessTypes = ['residencial', 'comercial', 'industrial'];