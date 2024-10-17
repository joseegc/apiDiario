import { consultar } from "../repository/diarioRepository.js";

export default async function consultarService(){

    let id = await consultar(consultar);
    return id;
}