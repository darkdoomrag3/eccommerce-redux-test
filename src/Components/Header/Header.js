import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assest/logo.svg';
import './header.scss';
import { auth } from '../../firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
    return (

        <div className='header'>

            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>

            <div className='options'>

                <Link className='option' to='/shop'> Shop</Link>
                <Link className='option' to="/contact"> Contact</Link>


                {

                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>  Sign Out </div>
                        :
                        <Link className="option" to="/signin"> Sign In </Link>
                }

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);


