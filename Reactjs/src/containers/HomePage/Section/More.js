import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils'
import { changeLanguageApp } from '../../../store/actions/appActions';

//thư viện làm cái chuyển động 
import Slider from "react-slick";


class More extends Component {

    changelanguage = (language) => {
        //fire redux event : actions
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let language = this.props.language
        return (
            <div className='section-share section-more'>
                <div className='section-more-header'>
                    <FormattedMessage id="more.more-title" />
                </div>
                <div className='section-more-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/nH1TQRHnBbc" title="Cục Đăng Kiểm Chỉ Đạo Nóng Vụ Các Trung Tâm Đăng Kiểm Chỉ Nhận Xe Chính Chủ | SKĐS"
                            frameborder="0"
                            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                    <div className='content-right'>
                        <p><FormattedMessage id="more.paragrap" /></p>
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

//const này có tác dụng là thay cho this.props để redux map đc với react
const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(More);
