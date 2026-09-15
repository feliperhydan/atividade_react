// Representa visualmente uma única tarefa recebida pela lista.
export default function Tarefa({
    // Objeto com os dados da tarefa.
    tarefa,
    // Funções recebidas do App para solicitar alterações.
    alternarTarefa,
    excluirTarefa
}) {
    return (
        <div
            // className usa uma expressão condicional para mudar a aparência do item.
            className={
                tarefa.concluida
                    ? "tarefa concluida"
                    : "tarefa pendente"
            }
        >
            {/* As chaves inserem no JSX os valores vindos do objeto tarefa. */}
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.descricao}</p>

            {/* O ternário mostra um texto diferente para cada estado. */}
            <p>
                {tarefa.concluida
                    ? "Concluída"
                    : "Pendente"}
            </p>

            {/* A arrow function espera o clique para chamar a função. Sem ela,
                alternarTarefa(tarefa.id) seria executada durante a renderização. */}
            <button onClick={() => alternarTarefa(tarefa.id)}>
                {tarefa.concluida
                    ? "Reabrir"
                    : "Concluir"}
            </button>

            {/* O id identifica exatamente qual tarefa deve ser removida. */}
            <button onClick={() => excluirTarefa(tarefa.id)}>
                Excluir
            </button>
        </div>
    );
}
