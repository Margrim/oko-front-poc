import {gql} from 'apollo-boost';

const getInstitutionQuery = gql`
{
    findAllInstitutions{
        idInstitution
        name
        nip
        address{
            city
            street
            number
        }       
        entityType {
            entityType
        }
    }
}
`;

const getEntityTypeQuery = gql`
{
    findAllEntityTypes{
        idEntityType
        entityType
    }
}
`;

const getVoivodeshipQuery = gql`
{
    findAllVoivodeships{
        idVoivodeship
        name
    }
}
`;

const addInstitutionMutation = gql`
mutation($name: String!, $nip: String!, $idEntityType: ID!, $city: String!, $street: String!, $number: String! $idVoivodeship: ID!){
    addInstitution(name: $name, nip: $nip, idEntityType: $idEntityType, city: $city, street: $street, number: $number, idVoivodeship: $idVoivodeship){
            idInstitution
            name
        }
    }
`;


export {getInstitutionQuery, getEntityTypeQuery, addInstitutionMutation, getVoivodeshipQuery};