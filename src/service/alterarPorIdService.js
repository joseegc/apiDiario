import { alterarPorId } from "../repository/diarioRepository.js";

export default async function alterarPorIdService(idParaAlterar, corpoParaAlterar){
    let registros = await alterarPorId(idParaAlterar, corpoParaAlterar);
    return registros;

}