export type FileOnDelete = {
    id: string,
    title: string,
    url: string,
    cheked: boolean,
    timestamp: number
}

export type FileOnDownload = {
    id: string,
    title: string,
    url: string,
    timestamp: number
}

export type ItemMenu = {
    text: string,
    icon: any,
    url: string
}

export type  Item = {
    id:number;
    url: string;
    titulo: string;
    descripcion: string;
}