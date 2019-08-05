import React, {Component} from 'react';

import {graphql} from 'react-apollo';
import {getInstitutionQuery} from "../query/query";

class InstitutionList extends Component {
    displayInstitutions() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading institutions list</div>);
        } else {
            return data.findAllInstitutions.map(institution => {
                return (
                    <li key={institution.idInstitution}>
                        {institution.name}{' '}
                        {institution.nip}{' '}
                        {institution.address.city}{' '}
                        {institution.address.street}{' '}
                        {institution.address.number}{' '}
                        {institution.entityType.entityType}{' '}
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <div id="main">
                <ul id="institution-list">
                    {this.displayInstitutions()}
                </ul>
            </div>
        );
    }
}

export default graphql(getInstitutionQuery)(InstitutionList);