import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils'
import { changeLanguageApp } from '../../../store/actions/appActions';

//thư viện làm cái chuyển động 
import Slider from "react-slick";


class Specialty extends Component {

    changelanguage = (language) => {
        //fire redux event : actions
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let language = this.props.language
        return (
            <div className='section-share section-news'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homeheader.news" /></span>
                        <button className='btn-section'><FormattedMessage id="section.more" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-news'></div>
                                <div>hình ảnh 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-news'></div>
                                <div>hình ảnh 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-news'></div>
                                <div>hình ảnh 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-news'></div>
                                <div>hình ảnh 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-news'></div>
                                <div>hình ảnh 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-news'></div>
                                <div>hình ảnh 1</div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
