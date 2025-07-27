import autosData from "./autos.json";

export const TIPOS = ["Todos", ...new Set(autosData.map((auto) => auto.tipo))]