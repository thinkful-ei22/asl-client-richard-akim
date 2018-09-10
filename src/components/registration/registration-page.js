import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';

export default function RegistrationPage(props) {
  return (
    <div>
      <h2>Register for uh<strong>sign</strong>ment</h2>
      <RegistrationForm />
    </div>
  );
}