import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import {getEntityTypeQuery, addInstitutionMutation, getInstitutionQuery, getVoivodeshipQuery} from "../query/query";

class AddInstitution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nip: '',
            idEntityType: '',
            city: '',
            street: '',
            number: ''
        }
    };


    displayEntityType() {
        let data = this.props.getEntityTypeQuery;
        if (data.loading) {
            return (<option disabled>Loading Entity types</option>);
        } else {
            return data.findAllEntityTypes.map(entityType => {
                return (<option key={entityType.idEntityType}
                                value={entityType.idEntityType}>{entityType.entityType}</option>);
            })
        }
    };

    displayVoivodeship() {
        let data = this.props.getVoivodeshipQuery;
        if (data.loading) {
            return (<option disabled>Loading Voivodeships</option>);
        } else {
            return data.findAllVoivodeships.map(voivodeship => {
                return (<option key={voivodeship.idVoivodeship}
                                value={voivodeship.idVoivodeship}>{voivodeship.name}</option>);
            })
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.props.addInstitutionMutation({
            variables: {
                name: this.state.name,
                nip: this.state.nip,
                idEntityType: this.state.idEntityType,
                city: this.state.city,
                street: this.state.street,
                number: this.state.number,
                idVoivodeship: this.state.idVoivodeship
            },
            refetchQueries: [{query: getInstitutionQuery}]
        });
    }

    render() {
        return (
            <form id="add-institution" onSubmit={this.submitForm.bind(this)}>

                <div className="field">
                    <label>Institution name:</label>
                    <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
                </div>

                <div className="field">
                    <label>NIP:</label>
                    <input type="text" onChange={(e) => this.setState({nip: e.target.value})}/>
                </div>

                <div className="field">
                    <label>Institution type:</label>
                    <select onChange={(e) => this.setState({idEntityType: e.target.value})}>
                        <option>Select entity type:</option>
                        {this.displayEntityType()}
                    </select>
                </div>

                <div className="field">
                    <label>City:</label>
                    <input type="text" onChange={(e) => this.setState({city: e.target.value})}/>
                </div>

                <div className="field">
                    <label>Street:</label>
                    <input type="text" onChange={(e) => this.setState({street: e.target.value})}/>
                </div>

                <div className="field">
                    <label>Number:</label>
                    <input type="text" onChange={(e) => this.setState({number: e.target.value})}/>
                </div>

                <div className="field">
                    <label>Voivodeship:</label>
                    <select onChange={(e) => this.setState({idVoivodeship: e.target.value})}>
                        <option>Select voivodeship:</option>
                        {this.displayVoivodeship()}
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    }
}

export default compose(
    graphql(getEntityTypeQuery, {name: "getEntityTypeQuery"}),
    graphql(getVoivodeshipQuery, {name: "getVoivodeshipQuery"}),
    graphql(addInstitutionMutation, {name: "addInstitutionMutation"})
)(AddInstitution);