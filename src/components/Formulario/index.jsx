import { useState , useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome , setNome] = useState ('');

    useEffect(() => {
        console.log('O estado do nome mudou');
    }, [nome])

    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        // setNme (evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            
            return evento.target.value;

        });

        
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome} foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome} foi reprovado</p>
            )
        }
    }
    
    return(
        <form >
            <ul>
            {[1,2,3,4,5].map(item =>(
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome"  onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )

}

export default Formulario;