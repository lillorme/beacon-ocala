import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';


const HeaderColumns = (props) =>{

    const { columnData, history, match, currentUser, hidden, signOutStart } = props;
    console.log();
    return(
        <>
            {
                Object.values(columnData).map((items, index) => (
                    Object.values(items.nav).map((item, index) => (
                        <li key={index}><Link to={items.nav[index].link}>{items.nav[index].title}</Link></li>
                    ))
                ))
            }
            {currentUser ? (
                <div className='option' onClick={signOutStart}>
                SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>
            )}
        </>
    )

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderColumns);