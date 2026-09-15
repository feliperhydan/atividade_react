// Importa o Hook que permite criar e atualizar estados dentro de um componente funcional.
import { useState } from "react";
// Importa o formulário responsável por cadastrar novas tarefas.
import FormularioTarefa from "./components/FormularioTarefa";
// Importa o componente que exibe a coleção de tarefas.
import ListaTarefas from "./components/ListaTarefas";
// Importa o componente que mostra as quantidades totalizadas.
import Resumo from "./components/Resumo";

// Componente principal: concentra o estado e as regras da aplicação.
export default function App() {
    // Guarda todas as tarefas cadastradas; a lista começa vazia.
    const [tarefas, setTarefas] = useState([]);
    // Guarda o filtro ativo e começa mostrando todas as tarefas.
    const [filtro, setFiltro] = useState("todas");

    // Recebe uma nova tarefa criada pelo formulário.
    function adicionarTarefa(tarefa) {
        // Cria um novo array com as tarefas antigas e acrescenta a nova no final.
        setTarefas([...tarefas, tarefa]);
    }

    // Alterna o status de conclusão da tarefa identificada pelo id recebido.
    function alternarTarefa(id) {
        // Percorre as tarefas para produzir uma nova lista sem alterar a original.
        setTarefas(
            tarefas.map((tarefa) =>
                // Se o id corresponder, cria uma cópia invertendo concluida.
                tarefa.id === id
                    ? {
                        ...tarefa,
                        concluida: !tarefa.concluida
                    }
                    // Se não corresponder, mantém a tarefa como está.
                    : tarefa
            )
        );
    }

    // Exclui da lista a tarefa cujo id foi recebido.
    function excluirTarefa(id) {
        // filter mantém somente as tarefas com id diferente do id selecionado.
        setTarefas(
            tarefas.filter((tarefa) => tarefa.id !== id)
        );
    }

    // Calcula o número total de tarefas cadastradas.
    const total = tarefas.length;

    // Filtra as tarefas concluídas e conta quantas existem.
    const concluidas = tarefas.filter(
        (tarefa) => tarefa.concluida
    ).length;

    // Filtra as tarefas ainda pendentes e conta quantas existem.
    const pendentes = tarefas.filter(
        (tarefa) => !tarefa.concluida
    ).length;

    // Seleciona somente as tarefas que devem aparecer conforme o filtro atual.
    const tarefasFiltradas = tarefas.filter((tarefa) => {
        // No filtro pendentes, retorna apenas tarefas não concluídas.
        if (filtro === "pendentes") {
            return !tarefa.concluida;
        }

        // No filtro concluidas, retorna apenas tarefas concluídas.
        if (filtro === "concluidas") {
            return tarefa.concluida;
        }

        // No filtro todas, retorna qualquer tarefa.
        return true;
    });

    // Retorna a interface que será renderizada dentro do elemento root.
    return (
        <div>
            {/* Envia a função de cadastro para o componente filho por props. */}
            <FormularioTarefa
                adicionarTarefa={adicionarTarefa}
            />

            {/* Envia os três números calculados para o componente de resumo. */}
            <Resumo
                total={total}
                concluidas={concluidas}
                pendentes={pendentes}
            />

            {/* Agrupa os botões que alteram o filtro armazenado no estado. */}
            <div>
                {/* Mostra todas as tarefas quando clicado. */}
                <button onClick={() => setFiltro("todas")}>
                    Todas
                </button>

                {/* Mostra somente tarefas pendentes quando clicado. */}
                <button onClick={() => setFiltro("pendentes")}>
                    Pendentes
                </button>

                {/* Mostra somente tarefas concluídas quando clicado. */}
                <button onClick={() => setFiltro("concluidas")}>
                    Concluídas
                </button>
            </div>

            {/* Passa a lista filtrada e as ações para o componente de listagem. */}
            <ListaTarefas
                tarefas={tarefasFiltradas}
                alternarTarefa={alternarTarefa}
                excluirTarefa={excluirTarefa}
            />
        </div>
    );
}
