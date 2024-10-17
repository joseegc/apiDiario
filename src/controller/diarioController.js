import inserirService from "../service/inserirService.js";
import consultarService from "../service/consultarService.js";
import alterarPorIdService from "../service/alterarPorIdService.js";


import { Router } from "express";
import deletarPorIdService from "../service/deletarPorIdService.js";
const endpoints = Router();


// CREATE
endpoints.post('/diario', async(req, resp) =>{
    try{
        let anotacao = req.body

        let id = await inserirService(anotacao);

        resp.send({
            novoId:id
        })
    }catch(err){
        resp.status(400).send({
                erro:err.message
        })
    }


} )

// READ

endpoints.get('/diario', async(req, resp) =>{
    try{
        let registros = await consultarService();
        resp.send(registros);
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }


} )

// UPDATE
endpoints.put('/diario/:id', async (req, resp) => {
    try {
        let corpoParaAlterar = req.body;

        let idParaAlterar = Number(req.params.id);

        let registros = await alterarPorIdService(idParaAlterar, corpoParaAlterar);
        resp.send({
            idAlterar: idParaAlterar
        })    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// DELETE
endpoints.delete('/diario/:id', async(req, resp) => {
    try {
        let idParaDeletar = Number(req.params.id);
        await deletarPorIdService(idParaDeletar);
        resp.send({
            idDeletado: idParaDeletar
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
}})


export default endpoints;