import Tarefa from "./Tarefa";

export default function ListaTarefas({ tarefas }) {
    return (
        <div>
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                />
            ))}
        </div>
    );
}