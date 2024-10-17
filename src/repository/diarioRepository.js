import con from "./connection.js";

export async function inserir(anotacao) {
    const comando = `
    insert into tb_anotacao_diario (txt_anotacao, dt_anotacao, id_autor)
                                values (?,?,?)
    `

    let [info] = await con.query(comando, [anotacao.texto, anotacao.data, anotacao.idAutor])

    return info.insertId;
}


export async function consultar() {
    const comando = `
    SELECT
        anotacao.id_anotacao AS idAnotacao,
        anotacao.txt_anotacao AS textoAnotacao,
        anotacao.dt_anotacao AS dataAnotacao,
        autor.nm_autor AS autor
    FROM 
        tb_anotacao_diario anotacao
    JOIN 
        tb_autor autor ON anotacao.id_autor = autor.id_autor;
    `

    let [registros] = await con.query(comando);
    return registros;
}

export async function alterarPorId(idParaAlterar, corpoParaAlterar) {
    const comando = `
    UPDATE tb_anotacao_diario  
    SET
        txt_anotacao = ?, 
        dt_anotacao = ?, 
        id_autor = ?
    WHERE id_anotacao = ?
    `

    let [registros] = await con.query(comando, 
        [corpoParaAlterar.texto,
        corpoParaAlterar.data,
        corpoParaAlterar.idAutor,
        idParaAlterar]);
    return registros[0];
}

export async function deletarPorId(idParaDeletar) {
    const comando = `
    delete from tb_anotacao_diario WHERE id_anotacao = ?
    `

    let [info] = await con.query(comando, [idParaDeletar])

    return info.affectedRows;
}