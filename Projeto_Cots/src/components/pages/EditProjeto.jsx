import styles from './EditProjeto.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import FormProjetos from '../project/FormProjetos'
import Message from '../layout/Message'

function EditProjeto(){
    const { id } = useParams()  //pra ele saber que eu quero o id q ta vindo pela url
    const [projeto, setProjeto] = useState([])
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [showProjeto, setShowProjeto] = useState(false) // inicia com um valor false para nao mostrar a pagina de ediçao do projeto
    const [mensagem, setMensagem] = useState()
    const [type, setType] = useState()


    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:3000/projetos/${id}`,
            {method: 'GET',
            headers:{
                'content-type': 'application/json'
            },
            }).then((resp) => resp.json())  //pega a resposta do projeto e transforma em json
            .then((data) => {
                setProjeto(data);
            })
            .catch((erro) => console.log(erro))
        }, 2000)    
    }, [id])

    function editPost(projeto){
        setMensagem('')
        if (projeto.budget < projeto.cost) {
            setMensagem('O Orçamento nao pode ser menor que o gasto!')
            setType('erro')
            return false
        }
        fetch(`http://localhost:3000/projetos/${projeto.id}`, {
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(projeto),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjeto(data)
            setShowProjeto(false)
            setMensagem('Projeto atualizado')
            setType('sucesso')
        })
        .catch((err) => console.log(err))
    }

    function toogleForm(){
        setShowProjeto(!showProjeto)  //essa função ta negando o showProjeto para exibir a tela de edição
    }

    function toogleServiceForm(){
        setShowServiceForm(!showServiceForm)  //essa função ta negando o showProjeto para exibir a tela de edição
    }
    
    return(
        <>
            {projeto.name ? (
                <div className={styles.DetalhesProjeto}>
                    <Container customClass="Column">
                    {mensagem && <Message type={type} msg={mensagem}/>}
                        <div className={styles.Detalhes_Container}>
                            <h1>Projeto: {projeto.name}</h1>
                            <button className={styles.btn} onClick={toogleForm}>
                            {!showProjeto ? (
                                'Editar Projeto'
                            ): (
                                'Fechar Projeto'
                            )}
                            </button>
                            {!showProjeto ? (
                                <div className={styles.projeto_info}>
                                    <p>
                                        <span>Categoria:</span>{projeto.categoria.name}
                                    </p>
                                    <p>
                                        <span>Orçamento:</span>R${projeto.budget}
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span>R${projeto.cost}
                                    </p>
                                </div>
                            ): (
                                <div className={styles.projeto_info}>
                                    <FormProjetos btnText="Concluir" handleSubmit={editPost} projectData={projeto}/>
                                </div>
                            )}
                        </div>
                        <div className={styles.service_Form_Container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick={toogleServiceForm}>
                            {!showServiceForm ? (
                                'Adicionar Serviço'
                            ): (
                                'Fechar'
                            )}
                            </button>
                            <div className={styles.projeto_info}>
                                {showServiceForm &&(
                                    <div>Formulario de Serviço</div>
                                )}
                            </div>
                    </div>    
                    <h2>Serviços:</h2>
                            <Container customClass="start">
                                    <p>itens de Serviços</p>
                            </Container>
                    </Container>
                </div>
            ): (
                <Loading />
            )
            }    {/* esse operador ternario e pra quando tiver projeto ele exibir, caso nao tenha nenhum ele retorne o loading */}
        </>
    )
}

export default EditProjeto;