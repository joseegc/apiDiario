import { consultarPorId } from "../repository/diarioRepository.js";

export default async function consultarPorIdService(idParaConsultar){

    let id = await consultarPorId(idParaConsultar);
    return id;
}