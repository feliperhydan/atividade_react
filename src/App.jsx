// useState permite que o componente guarde valores que mudam durante o uso da aplicação.
import { useState } from "react";
// Estes componentes são partes menores da tela principal.
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefas from "./components/ListaTarefas";
import Resumo from "./components/Resumo";

// App é o componente pai. Ele concentra os dados e as regras para que os filhos
// apenas exibam informações ou avisem quando o usuário realiza alguma ação.
export default function App() {
    // O primeiro item retornado é o valor atual; o segundo é a função que o altera.
    // O estado começa como um array vazio porque ainda não há tarefas cadastradas.
    const [tarefas, setTarefas] = useState([]);
    // Guarda qual filtro está selecionado. Alterar este estado faz o React renderizar
    // novamente o componente e atualizar a lista exibida.
    const [filtro, setFiltro] = useState("todas");

    // Esta função é enviada ao formulário por props. Assim, o formulário consegue
    // comunicar ao App que uma nova tarefa foi criada.
    function adicionarTarefa(tarefa) {
        // Não alteramos diretamente o array antigo. Criamos um novo array com o
        // operador spread (...) e adicionamos a nova tarefa no final.
        setTarefas([...tarefas, tarefa]);
    }

    // Recebe o id da tarefa clicada e alterna entre pendente e concluída.
    function alternarTarefa(id) {
        // map cria um novo array mantendo a mesma quantidade de itens.
        setTarefas(
            tarefas.map((tarefa) =>
                // Para a tarefa clicada, criamos uma cópia com ...tarefa e trocamos
                // apenas o campo concluida. As outras tarefas continuam iguais.
                tarefa.id === id
                    ? {
                        ...tarefa,
                        concluida: !tarefa.concluida
                    }
                    : tarefa
            )
        );
    }

    // Recebe o id da tarefa que deve ser removida da lista.
    function excluirTarefa(id) {
        // filter cria outro array contendo somente as tarefas que não possuem
        // o id clicado. O item com esse id deixa de aparecer na tela.
        setTarefas(
            tarefas.filter((tarefa) => tarefa.id !== id)
        );
    }

    // Estes valores são derivados do estado: não precisam de outro useState,
    // pois podem ser calculados sempre que o componente for renderizado.
    const total = tarefas.length;
    // filter seleciona as concluídas; length informa quantas foram encontradas.
    const concluidas = tarefas.filter(
        (tarefa) => tarefa.concluida
    ).length;
    // O sinal ! significa "não": aqui contamos as tarefas não concluídas.
    const pendentes = tarefas.filter(
        (tarefa) => !tarefa.concluida
    ).length;

    // Cria a versão da lista que será enviada para ListaTarefas.
    const tarefasFiltradas = tarefas.filter((tarefa) => {
        // A função passada ao filter precisa retornar true para manter o item.
        if (filtro === "pendentes") {
            return !tarefa.concluida;
        }

        if (filtro === "concluidas") {
            return tarefa.concluida;
        }

        // No filtro "todas", true mantém todas as tarefas.
        return true;
    });

    // JSX descreve a interface. Os valores e funções entre chaves são JavaScript.
    return (
        <div>
            {/* Props são informações passadas do componente pai para o filho. */}
            <FormularioTarefa
                adicionarTarefa={adicionarTarefa}
            />

            {/* O Resumo recebe números prontos e apenas os apresenta. */}
            <Resumo
                total={total}
                concluidas={concluidas}
                pendentes={pendentes}
            />

            {/* Cada botão chama setFiltro e, com isso, muda a lista filtrada. */}
            <div>
                <button onClick={() => setFiltro("todas")}>
                    Todas
                </button>

                <button onClick={() => setFiltro("pendentes")}>
                    Pendentes
                </button>

                <button onClick={() => setFiltro("concluidas")}>
                    Concluídas
                </button>
            </div>

            {/* ListaTarefas recebe os dados e também as funções que os itens poderão
                executar. Isso é elevação de estado: o estado fica no pai, mas os
                filhos recebem o que precisam através de props. */}
            <ListaTarefas
                tarefas={tarefasFiltradas}
                alternarTarefa={alternarTarefa}
                excluirTarefa={excluirTarefa}
            />
        </div>
    );
}
