import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

//Components
import InstitutionList from "./components/InstitutionList";
import AddInstitution from "./components/AddInstitution";

//Apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:9050/graphql'
    // uri: 'http://192.168.53.161:9050/graphql'
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="main">
                    <h1>GraphQL front demo</h1>
                    <InstitutionList/>
                    <AddInstitution/>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
