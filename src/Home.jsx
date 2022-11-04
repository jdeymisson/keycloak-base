import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
    const { keycloak, initialized } = useKeycloak();
    console.log(keycloak.logout, "****")
    return(
        <div>
            <button onClick={() => keycloak.logout()}>sair</button>
        {/* <div>{`User is ${
          !keycloak.authenticated ? 'NOT ' : ''
        }authenticated`}</div>
  
        {!!keycloak.authenticated && (
          <button type="button" onClick={() => keycloak.logout()}>
            Logout
          </button>
        )} */}
      </div>
    )
}

export default Home;
