// Componente de apresentação que recebe os totais por props.
export default function Resumo({
    // Quantidade de todas as tarefas.
    total,
    // Quantidade de tarefas marcadas como concluídas.
    concluidas,
    // Quantidade de tarefas que ainda estão pendentes.
    pendentes
}) {
    return (
        // Exibe os três valores calculados no componente App.
        <p>
            Total: {total} | Concluídas: {concluidas} | Pendentes: {pendentes}
        </p>
    );
}
