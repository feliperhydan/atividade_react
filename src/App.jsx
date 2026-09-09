import { useState } from "react";
import ListaTarefas from "./components/ListaTarefas";
import FormularioTarefa from "./components/FormularioTarefa";

export default function App() {

    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa(tarefa) {
        setTarefas([...tarefas, tarefa]);
    }

    return (
        <div>
            <FormularioTarefa adicionarTarefa={adicionarTarefa} />

            <ListaTarefas tarefas={tarefas} />

            
        </div>
    );
}