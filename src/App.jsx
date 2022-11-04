import keycloak from './keycloak';

import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import Home from './Home';

function App() {

  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{onLoad: "login-required"}}>
      <div className="App">
        <h2>Componente App</h2>
        <Home />
      </div>
    </ReactKeycloakProvider>
  )
}

export default App
