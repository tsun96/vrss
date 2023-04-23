import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';

import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions/appActions';


class Header extends Component {

    changelanguage = (language) => {
        //fire redux event : actions
        this.props.changeLanguageAppRedux(language)
    }


    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút chuyển đổi ngôn ngữ */}
                <div className='language'>
                    <span className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} onClick={() => this.changelanguage(LANGUAGES.VI)}>VN</span>
                    <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => this.changelanguage(LANGUAGES.EN)}>EN</span>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
