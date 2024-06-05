import { useState } from "react";

export default function Lista() {
    const items = [
        {
            id: 1, nome: "1"
        },
    ];
    
    const [listaDeItems, setLista] = useState(items);
    const [novoItem, setNovoItem] = useState('');

    function adicionarItem() {
        if (novoItem !== "") {
            const novaEntradaDeItem = {
                id: listaDeItems.length + 1,
                nome: novoItem
            };
            setLista([...listaDeItems, novaEntradaDeItem]);
            setNovoItem("");
        }
    }

    return (
        <>
            <ul>
                {listaDeItems.map((item) => (
                    <li key={item.id}>{item.nome}</li>
                ))}
            </ul>
            <input
                placeholder="Digite um novo item"
                type="text"
                value={novoItem}
                onChange={(e) => {
                    setNovoItem(e.target.value);
                }}
            />
            <button onClick={adicionarItem}>Adicionar</button>
        </>
    );
}