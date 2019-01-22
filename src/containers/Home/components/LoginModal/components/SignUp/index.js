import React, { Component } from 'react'
import CREATE_USER from './mutation.js'
import { Title, LineInput, SubmitButton, SecondaryOptionText } from './styles'
import { Mutation } from 'react-apollo'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'diego',
      email: '',
      password: ''
    }
  }

  onChange = (key, e) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    const { email, name, password } = this.state
    return (
      console.log(this.state),
      (
        <React.Fragment>
          <Title>Nice to meet you!</Title>
          <LineInput
            placeholder="Email"
            onChange={e => this.onChange('email', e)}
          />
          <LineInput
            placeholder="Password"
            onChange={e => this.onChange('password', e)}
            type="password"
          />
          <Mutation
            mutation={CREATE_USER}
            variables={{ input: { email, name, password } }}
          >
            {console.log(this.state)}
            {(createUser, { data }) => {
              return (
                <SubmitButton onClick={createUser}> Get Started</SubmitButton>
              )
              //console.log(data)
            }}
          </Mutation>
          <SecondaryOptionText onClick={this.props.changeMode}>
            Or Login
          </SecondaryOptionText>
        </React.Fragment>
      )
    )
  }
}

export default SignUp
