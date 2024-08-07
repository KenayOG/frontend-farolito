export interface VentasProductos {
    producto: string,
    numeroDeVentas: number,
    totalRecaudado: number
}

export interface VentasProductoPeriodos {
    anio: number,
    mes: number,
    producto: string,
    numeroDeVentas: number
}

export interface ExistenciasComponentes {
    componente: string,
    existencia: number
}

export interface ExistenciasLampara {
    productoTerminado: string,
    existencia: number
}

export interface VentasPeriodos {
    año: number,
    mes: number,
    cliente: string,
    numeroDeCompras: number
}

export interface LamparasCliente {
    cliente: string,
    producto: string,
    numeroDeVentas: number,
    totalGastado: number
}

export interface MejorCliente {
    cliente: string,
    totalGastado: number
}