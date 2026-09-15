// Cada elemento da lista será desenhado pelo componente Tarefa.
import Tarefa from "./Tarefa";

// Recebe dados e funções do App por props e decide como a lista será exibida.
export default function ListaTarefas({
    // Este array já chega filtrado pelo componente App.
    tarefas,
    // Estas funções serão repassadas para cada Tarefa.
    alternarTarefa,
    excluirTarefa
}) {
    return (
        <div>
            {/* Renderização condicional com operador ternário:
                condição ? resultado se verdadeiro : resultado se falso. */}
            {tarefas.length === 0 ? (
                <p>Nenhuma tarefa cadastrada.</p>
            ) : (
                /* O Fragmento agrupa o contador e os itens sem adicionar outra div. */
                <>
                    <p>Tarefas cadastradas: {tarefas.length}</p>

                    {/* map percorre o array e retorna um componente para cada tarefa. */}
                    {tarefas.map((tarefa) => (
                        <Tarefa
                            // key é obrigatória em listas React e deve ser única e estável.
                            // Ela ajuda o React a saber qual item mudou.
                            key={tarefa.id}
                            // Dados e funções são enviados como props para Tarefa.
                            tarefa={tarefa}
                            alternarTarefa={alternarTarefa}
                            excluirTarefa={excluirTarefa}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
