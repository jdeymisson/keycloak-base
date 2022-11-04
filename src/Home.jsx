import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
    const { keycloak, initialized } = useKeycloak();

    console.log(keycloak.authenticated)
    //Sempre vem underfined
    //Estrutura ai abaixo foi feito em cima da doc, bem simples mesmo,
    return(
        <div>
            <div>{`Usuário está ${
                !keycloak.authenticated ? 'Não ' : ''
            } authenticated`}</div>

            {!!keycloak.authenticated && (
                <button type="button" onClick={() => keycloak.logout()}>
               Sair
                </button>
            )} 

            
      </div>
    )
}

export default Home;
