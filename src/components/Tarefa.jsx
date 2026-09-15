// Componente visual de uma tarefa individual.
export default function Tarefa({
    // Objeto com id, título, descrição e status da tarefa.
    tarefa,
    // Função recebida do App para alternar o status.
    alternarTarefa,
    // Função recebida do App para excluir a tarefa.
    excluirTarefa
}) {
    return (
        // Aplica uma classe diferente conforme a tarefa esteja concluída ou pendente.
        <div
            className={
                tarefa.concluida
                    // Tarefa concluída recebe as classes tarefa e concluida.
                    ? "tarefa concluida"
                    // Tarefa pendente recebe as classes tarefa e pendente.
                    : "tarefa pendente"
            }
        >
            {/* Renderiza o título armazenado no objeto da tarefa. */}
            <h2>{tarefa.titulo}</h2>

            {/* Renderiza a descrição armazenada no objeto da tarefa. */}
            <p>{tarefa.descricao}</p>

            {/* Exibe um texto de status conforme o valor booleano concluida. */}
            <p>
                {tarefa.concluida
                    ? "Concluída"
                    : "Pendente"}
            </p>

            {/* Envia o id da tarefa para o App alternar o status correto. */}
            <button onClick={() => alternarTarefa(tarefa.id)}>
                {/* O texto muda para indicar a próxima ação possível. */}
                {tarefa.concluida
                    ? "Reabrir"
                    : "Concluir"}
            </button>

            {/* Envia o id da tarefa para o App removê-la da lista. */}
            <button onClick={() => excluirTarefa(tarefa.id)}>
                Excluir
            </button>
        </div>
    );
}
