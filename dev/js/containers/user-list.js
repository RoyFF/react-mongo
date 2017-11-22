import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import { Table, Button} from 'react-bootstrap';


class UserList extends Component {

    renderList() {
        return this.props.users.map((user, i) => {
            return (
                <tr key={user.id}>
                    <td>{i}</td>
                    <td>{user.first} {user.last}</td>
                    <td>{user.email}</td>
                    <td><Button bsStyle="success" onClick={() => this.props.selectUser(user)}>Edit</Button></td>
                </tr>

            );
        });
    }

    render() {
        return (
            <Table responsive striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderList()}
                    </tbody>
            </Table>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
