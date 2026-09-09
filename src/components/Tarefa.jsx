export default function Tarefa({ tarefa }) {
    return (
        <div>
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.descricao}</p>

            <p>
                {tarefa.concluida
                    ? "Concluída"
                    : "Pendente"}
            </p>
            <button >Concluir</button>
        </div>
    );
}