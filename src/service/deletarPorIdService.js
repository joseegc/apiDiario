import { deletarPorId } from "../repository/diarioRepository.js";

export default async function deletarPorIdService(idParaDeletar){

    let id = await deletarPorId(idParaDeletar);
    return id;
}