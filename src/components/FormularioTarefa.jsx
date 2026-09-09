import { useState } from "react";

export default function FormularioTarefa({ adicionarTarefa }) {

    //cria titulo e desc vazios
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        //instancia o objeto novaTarefa
        const novaTarefa = {
            id: Date.now(),
            titulo: titulo,
            descricao: descricao,
            concluida: false
        };

        //aciona a função de adicionar à array de tarefas
        adicionarTarefa(novaTarefa);

        //esvazia novamente o titulo e desc
        setTitulo("");
        setDescricao("");
    }

    return (
        //div para criação de tarefas
        <div>
            <h1>Adicionar tarefa</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="nome">
                    Nome da tarefa:
                </label>
                <br />
                <input
                    type="text"
                    id="nome"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />

                <br /><br />

                <label htmlFor="descricao">
                    Descrição:
                </label>
                <br />
                <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Adicionar tarefa
                </button>

            </form>
        </div>
    );
}