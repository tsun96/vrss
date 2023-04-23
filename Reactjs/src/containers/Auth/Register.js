import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUserService, getAllUser } from '../../services/userService';
import { push } from "connected-react-router";
import { handleLoginApi } from '../../services/userService';
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { userLoginSuccess } from '../../store/actions';
import { emitter } from '../../utils/emitter';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleChangInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value

        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter: ' + arrInput[i])
                break
            }
        }
        return isValid
    }

    handleAddNew = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            this.createNewUser(this.state)
        }
    }

    createNewUser = async (data) => {
        console.log('check data: ', data)
        try {
            let responese = await createNewUserService(data)
            if (responese && responese.errCode !== 0) {
                alert(responese.errMessage)
            }
            alert('Registed success!')
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        } catch (e) {
            console.log(e)
        }
    }

    handleShowHidenPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {

        return (
            <div className='login-background'>
                <div className='login-container register-container'>
                    <div className='login-content row'>
                        <div className='col-12 login-text'>Register</div>
                        <div className='col-12 form-group login-input'>
                            <label>Email</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your email'
                                value={this.state.email}
                                onChange={(event) => { this.handleChangInput(event, "email") }} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Passwword</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    className='form-control'
                                    onChange={(event) => { this.handleChangInput(event, 'password') }} />
                                <span onClick={() => { this.handleShowHidenPassword() }}>
                                    <i className={this.state.isShowPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>First Name</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your first name'
                                value={this.state.firstName}
                                onChange={(event) => { this.handleChangInput(event, 'firstName') }} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Last Name</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your last name'
                                value={this.state.lastName}
                                onChange={(event) => { this.handleChangInput(event, 'lastName') }} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Address</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your address'
                                value={this.state.address}
                                onChange={(event) => { this.handleChangInput(event, 'address') }} />
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handleAddNew() }}>Register</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Do you already have an account?</span>
                            <a href='/login'>Sign In</a>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-orther-login'>Or Login with</span>
                        </div>
                        <div>
                            <div className='col-12 social-login'>
                                <i className="fab fa-google google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

//hàm redux
const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
