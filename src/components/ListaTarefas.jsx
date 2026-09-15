// Importa o componente que representa individualmente cada tarefa.
import Tarefa from "./Tarefa";

// Componente responsável por listar as tarefas recebidas do App.
export default function ListaTarefas({
    // Array de tarefas que deve ser exibido, já filtrado pelo componente pai.
    tarefas,
    // Função para alternar o status de uma tarefa.
    alternarTarefa,
    // Função para remover uma tarefa.
    excluirTarefa
}) {
    return (
        <div>
            {/* Renderização condicional: mensagem exibida quando a lista está vazia. */}
            {tarefas.length === 0 ? (
                <p>Nenhuma tarefa cadastrada.</p>
            ) : (
                // Fragmento agrupa vários elementos sem criar uma div adicional.
                <>
                    {/* Exibe a quantidade de tarefas presentes na lista atual. */}
                    <p>Tarefas cadastradas: {tarefas.length}</p>

                    {/* map cria um componente Tarefa para cada item do array. */}
                    {tarefas.map((tarefa) => (
                        <Tarefa
                            // key permite que o React identifique cada item da lista.
                            key={tarefa.id}
                            // Envia os dados da tarefa para o componente filho.
                            tarefa={tarefa}
                            // Repassa a função de conclusão para o item.
                            alternarTarefa={alternarTarefa}
                            // Repassa a função de exclusão para o item.
                            excluirTarefa={excluirTarefa}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
