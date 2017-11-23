import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import { Table, Button, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox} from 'react-bootstrap';

class AddUser extends React.Component {
    addNewUser(item) {
        let items = {};
        items={
            id: 25,
            first: "Roy",
            last: "Solera",
            age: 28,
            description: "React developer",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg",
            email: "asdasdasd@asdasdad"
        };
        return items;
        console.log(items)
    }

    render(){
        return(
            <Form horizontal>
                <FormGroup controlId="formHorizontalName">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Name" value=""/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalLast">
                    <Col componentClass={ControlLabel} sm={2}>
                        Last
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Last" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalAge">
                    <Col componentClass={ControlLabel} sm={2}>
                        Age
                    </Col>
                    <Col sm={10}>
                        <FormControl type="number" placeholder="Age" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalDescription">
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="description" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalThumbnail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Thumbnail
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="thumbnail" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button bsStyle="primary" onClick={() => this.props.addUser(this.addNewUser("as"))}>
                        Add User
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
// Get apps state and pass it as props to AddUser
//      > whenever state changes, the AddUser will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to AddUser
//      > now AddUser has this.props.AddUser
function matchDispatchToProps(dispatch, ownProps){
    return {
        addUser: (user) =>  { dispatch(actions.addUser(user)) },
    };
}

// We don't want to return the plain AddUser (component) anymore, we want to return the smart Container
//      > AddUser is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(AddUser);