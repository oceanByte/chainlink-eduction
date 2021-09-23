import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { InputSpacer } from 'app/App.components/Input/Input.style'
//prettier-ignore
import { FormInputs, getErrorMessage, getInputStatus, updateFormFromBlur, updateFormFromChange, updateFormFromSubmit } from 'helpers/form'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginInputs } from 'shared/user/Login'
import Wave from '../../assets/wave.png'

import { LoginCard, LoginSignUp, LoginStyled, LoginTitle } from './Login.style'

type LoginViewProps = {
  loginCallback: (values: any) => void
  loading: boolean
}

export const LoginView = ({ loginCallback, loading }: LoginViewProps) => {
  const [form, setForm] = useState<FormInputs>({
    usernameOrEmail: { value: '' },
    password: { value: '' },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromChange(e, form, LoginInputs)
    setForm(updatedForm)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedForm = updateFormFromBlur(e, form)
    setForm(updatedForm)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    const updatedForm = updateFormFromSubmit(event, form, LoginInputs)

    if (!updatedForm.usernameOrEmail.error && !updatedForm.password.error)
      loginCallback({
        usernameOrEmail: updatedForm.usernameOrEmail.value,
        password: updatedForm.password.value,
      })
    else setForm(updatedForm)
  }

  return (
    <>
      {/* <form>
        <div>
          <svg></svg>
          <input
            onChange={handleChange}
            value={form.usernameOrEmail.value}
            onBlur={handleBlur}
            name="usernameOrEmail"
          />
          <div>{getErrorMessage(form.usernameOrEmail)}</div>
        </div>
      </form> */}
      {/* <div>Petro</div> */}
      <form className="login-form">
        <p className="login-form-title">Sign in</p>
        <button className="login-form-google">
          Continue with <span>Google</span>
        </button>
        <button className="login-form-facebook">
          Continue with <span>Facebook</span>
        </button>
        <div className="login-form-wave">
          <div className="login-form-wave-or">or</div>
          <img src={Wave} alt="wave" />
        </div>
        <div className="login-form-email">
          <label htmlFor="login-form-email">Email address</label>
          <input type="text" id="login-form-email" />
        </div>
        <div className="login-form-password">
          <label htmlFor="login-form-password">Password</label>
          <input type="text" id="login-form-password" />
        </div>
      </form>
      {/* <LoginStyled>
        <LoginTitle>
          <h1>Login</h1>
        </LoginTitle>
        <LoginCard>
          <form onSubmit={handleSubmit}>
            <div>
              <svg></svg>
              <input
                onChange={handleChange}
                value={form.usernameOrEmail.value}
                onBlur={handleBlur}
                name="usernameOrEmail"
              />
              <div>{getErrorMessage(form.usernameOrEmail)}</div>
            </div>

            <Input
              icon="user"
              name="usernameOrEmail"
              placeholder="Username or Email"
              type="text"
              onChange={handleChange}
              value={form.usernameOrEmail.value}
              onBlur={handleBlur}
              inputStatus={getInputStatus(form.usernameOrEmail)}
              errorMessage={getErrorMessage(form.usernameOrEmail)}
            />
            <Input
              icon="password"
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              value={form.password.value}
              onBlur={handleBlur}
              inputStatus={getInputStatus(form.password)}
              errorMessage={getErrorMessage(form.password)}
            />
            <InputSpacer />
            <Button type="submit" text="Login" icon="login" loading={loading} />
            <Link to="/forgot-password">Forgot Password?</Link>
          </form>
        </LoginCard>
        <LoginSignUp>
          <Link to="/sign-up">Or sign up now!</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </LoginSignUp>
      </LoginStyled> */}
    </>
  )
}

LoginView.propTypes = {
  loginCallback: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

LoginView.defaultProps = {
  loading: false,
}
