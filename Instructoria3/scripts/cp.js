"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// importa la libreria filesystem
const fs = __importStar(require("fs"));
// se declara una variable que guardara la ruta de origen
let origen = process.argv[2];
// se declara una variable que guardara la ruta de destino
let destino = process.argv[3];
// asignamos las rutas a otras variables para operar con ellas
let ArchivoOrigen = origen;
let ArchivoDestino = destino;
let argu = '';
// mediante el modulo readfilesync leemos el archivo
const data = fs.readFileSync(ArchivoOrigen, 'utf-8');
// guardamos el contenido del archivo original
argu = data;
// copiamos ese contenido en el archivo de destino
fs.writeFileSync(ArchivoDestino, data);
