import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';

export function LoginPage(props) {
  
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h2>Learn Sign!!</h2>
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    loggedIn: state.auth.currentUser !== null
  });
};

export default connect(mapStateToProps)(LoginPage);
// import NavBar from '../navbar';

// export default function(props) {
//   return (
//     <div>
//       <NavBar links={[{ name: 'Home', href: 'http://localhost:3000/' }]} />
//       <main>
//         <form>
//           <label for="name">Name</label>
//           <input type="text" name="name" id="name" />
//           <br />

//           <label for="user">Username</label>
//           <input type="text" name="username" id="username" />
//           <br />

//           <label for="password">Password</label>
//           <input type="text" name="password" id="password" />
//           <br />

//           <label for="confirm-password">Confirm Your Password</label>
//           <input type="text" name="confirm-password" id="confirm-password" />
//           <br />

//           <button type="submit" name="login">
//             Login
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// }
