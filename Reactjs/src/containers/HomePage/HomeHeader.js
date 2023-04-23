import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faNotesMedical, faBell, faQuestion } from '@fortawesome/free-solid-svg-icons';


import './HomeHeader.scss'
import logo from '../../assets/images/logo.svg'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions/appActions';


class HomeHeader extends Component {

    changelanguage = (language) => {
        //fire redux event : actions
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let language = this.props.language
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <img className='header-logo' src={logo} />
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div className='subs-title'>
                                    <a href='/login'>
                                    <FormattedMessage id="homeheader.login" />
                                    </a>
                                </div>
                            </div>
                            <div className='child-content'>
                                <div className='subs-title'><FormattedMessage id="homeheader.registration-directory" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='subs-title'><FormattedMessage id="homeheader.news" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='subs-title'><FormattedMessage id="homeheader.notification" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} ><span onClick={() => this.changelanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} ><span onClick={() => this.changelanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><b><FormattedMessage id="banner.title2" /></b></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='options-child'>
                                <div className='icon-child'><i><FontAwesomeIcon icon={faNotesMedical} /></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i><FontAwesomeIcon icon={faCalendarCheck} /></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i><FontAwesomeIcon icon={faBell} /></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className='options-child'>
                                <div className='icon-child'><i><FontAwesomeIcon icon={faQuestion} /></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

//const này có tác dụng là thay cho this.props để redux map đc với react
const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
