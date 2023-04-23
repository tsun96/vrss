import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguageApp } from '../../store/actions/appActions';

//thư viện làm cái chuyển động 
import Slider from "react-slick";
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {

    changelanguage = (language) => {
        //fire redux event : actions
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let language = this.props.language
        return (
            <div className='home-footer'>
                <p>&copy; <FormattedMessage id="footer.copy-right" />
                    <a target='_blank' href='https://www.facebook.com/profile.php?id=100011778605728'><FormattedMessage id="footer.click-here" /></a>
                </p>
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

//const này có tác dụng là thay cho this.props để redux map đc với react
const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
