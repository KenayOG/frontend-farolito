export interface VentasPorProducto {
    año: number;
    mes: number;
    numeroDeVentas: number;
    nombrelampara: string;
    total: number;
}

export interface VentasPorLote {
    producto: string;
    numeroDeVentas: number;
    totalRecaudado: number;
}

export interface InventarioMateriasPrimas {
    componente: string;
    existencia: number;
}

export interface InventarioProductosTerminados {
    productoTerminado: string;
    existencia: number;
}

export interface ComprasPorPeriodo {
    año: number;
    mes: number;
    cliente: string;
    numeroDeCompras: number;
}

export interface ComprasProductos {
    cliente: string;
    producto: string;
    numeroDeVentas: number;
    totalGastado: number;
}

export interface MejorCliente {
    mejorCliente: string;
    totalGastado: number;
}
