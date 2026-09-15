// Importa o Hook usado para controlar o conteúdo dos campos do formulário.
import { useState } from "react";

// Componente que coleta os dados de uma nova tarefa.
export default function FormularioTarefa({ adicionarTarefa }) {

    // Cria o estado do título, iniciado como texto vazio.
    const [titulo, setTitulo] = useState("");
    // Cria o estado da descrição, também iniciado como texto vazio.
    const [descricao, setDescricao] = useState("");

    // Executa a lógica de cadastro quando o formulário é enviado.
    function handleSubmit(event) {
        // Impede o navegador de recarregar a página ao enviar o formulário.
        event.preventDefault();
        // Monta o objeto com o formato esperado pelo restante da aplicação.
        const novaTarefa = {
            // Usa o horário atual como identificador da tarefa.
            id: Date.now(),
            // Copia para o objeto o título digitado pelo usuário.
            titulo: titulo,
            // Copia para o objeto a descrição digitada pelo usuário.
            descricao: descricao,
            // Toda tarefa nova começa como pendente.
            concluida: false
        };

        // Chama a função recebida do App para adicionar a tarefa ao estado principal.
        adicionarTarefa(novaTarefa);

        // Limpa o campo de título depois do cadastro.
        setTitulo("");
        // Limpa o campo de descrição depois do cadastro.
        setDescricao("");
    }

    return (
        <div>
            {/* Título da seção de cadastro. */}
            <h1>Adicionar tarefa</h1>

            {/* Formulário que chama handleSubmit no envio. */}
            <form onSubmit={handleSubmit}>

                {/* Label associado ao input pelo mesmo id. */}
                <label htmlFor="nome">
                    Nome da tarefa:
                </label>
                {/* Quebra de linha visual após o label. */}
                <br />
                {/* Campo controlado: seu valor vem do estado titulo. */}
                <input
                    type="text"
                    id="nome"
                    value={titulo}
                    // Atualiza o estado a cada alteração feita no campo.
                    onChange={(event) => setTitulo(event.target.value)}
                />

                {/* Espaçamento visual entre os campos. */}
                <br /><br />

                {/* Label associado ao campo de descrição. */}
                <label htmlFor="descricao">
                    Descrição:
                </label>
                {/* Quebra de linha visual após o label. */}
                <br />
                {/* Campo controlado que recebe uma descrição com várias linhas. */}
                <textarea
                    id="descricao"
                    value={descricao}
                    // Atualiza o estado a cada alteração feita na descrição.
                    onChange={(event) => setDescricao(event.target.value)}
                />

                {/* Espaçamento visual antes do botão. */}
                <br /><br />

                {/* Botão submit, responsável por disparar o envio do formulário. */}
                <button type="submit">
                    Adicionar tarefa
                </button>

            </form>
        </div>
    );
}
