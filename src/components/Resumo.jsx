// Componente de apresentação: ele não possui estado nem regras de negócio.
// Apenas recebe valores do App e os mostra na tela.
export default function Resumo({
    // Desestruturar as props cria variáveis locais com estes nomes.
    total,
    concluidas,
    pendentes
}) {
    return (
        <p>
            {/* As chaves permitem inserir valores JavaScript dentro do JSX. */}
            Total: {total} | Concluídas: {concluidas} | Pendentes: {pendentes}
        </p>
    );
}
