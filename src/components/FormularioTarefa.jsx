// useState permite transformar os campos em "campos controlados": o valor exibido
// pelo input sempre vem do estado do React.
import { useState } from "react";

// Componente responsável por coletar os dados e solicitar o cadastro de uma tarefa.
export default function FormularioTarefa({ adicionarTarefa }) {
    // titulo é o valor atual do campo; setTitulo é a função para atualizá-lo.
    const [titulo, setTitulo] = useState("");
    // O mesmo padrão é usado para controlar o campo de descrição.
    const [descricao, setDescricao] = useState("");

    // Esta função é executada pelo evento onSubmit do formulário.
    function handleSubmit(event) {
        // O comportamento padrão de um form é recarregar a página. Em uma SPA,
        // impedimos isso para continuar no React.
        event.preventDefault();

        // Criamos um objeto com o mesmo formato usado em toda a aplicação.
        const novaTarefa = {
            // O id identifica esta tarefa quando ela é alterada, excluída ou listada.
            id: Date.now(),
            // A forma abreviada titulo: titulo poderia ser apenas titulo.
            titulo,
            descricao,
            // Uma tarefa recém-criada ainda não foi concluída.
            concluida: false
        };

        // adicionarTarefa veio do App por props. O formulário não altera diretamente
        // o estado principal: ele envia a nova tarefa para o componente pai.
        adicionarTarefa(novaTarefa);

        // Como os campos são controlados, limpar o estado também limpa os campos.
        setTitulo("");
        setDescricao("");
    }

    return (
        <div>
            <h1>Adicionar tarefa</h1>

            {/* onSubmit liga o envio do HTML à função handleSubmit do React. */}
            <form onSubmit={handleSubmit}>
                {/* htmlFor conecta o texto do label ao input que possui id="nome". */}
                <label htmlFor="nome">
                    Nome da tarefa:
                </label>
                <br />

                {/* value mostra o estado atual e onChange atualiza esse estado. */}
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

                {/* textarea funciona como o input, mas aceita várias linhas. */}
                <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <br /><br />

                {/* type="submit" faz o form disparar o evento onSubmit. */}
                <button type="submit">
                    Adicionar tarefa
                </button>
            </form>
        </div>
    );
}
