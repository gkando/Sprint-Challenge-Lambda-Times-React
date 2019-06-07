import React, { useState, useEffect } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const LoginBtn = styled.div`
 color: #fff;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
//   margin-right: 25%;
  font-weight: bold;
`;

const Login= () => {
    const [popoverOpen, setPopoverOpen] = useState(false)
    const [username, setUsername] = useState(localStorage.getItem('user_name') || '');

    const handleUser = e => {
        e.preventDefault();
        setUsername(e.target.value);
    }

      const handleSubmit = e => {
        // e.preventDefault();
        console.log(username)
        localStorage.setItem('user_name', username);
        updatePage()
      }

    const updatePage = () => {
        let x = localStorage.getItem('user_name');
        // alert(x)
    }

    useEffect(() => {
        return () => console.log('unmounting...');
    })


    const toggle = () => {setPopoverOpen(!popoverOpen)}

    return (
        <div>
            
            <LoginBtn id="Popover1" onClick={toggle} >
                Log In
            </LoginBtn>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Lambda Times</PopoverHeader>
                <PopoverBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="inputUsername" hidden>Username</Label>
                            <Input type="username" bsSize="sm" name="username" id="inputUsername" placeholder="Username" onChange={handleUser}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="inputPassword" hidden>Password</Label>
                            <Input type="password" bsSize="sm" name="password" id="inputPassword" placeholder="Password" />
                        </FormGroup>
                        <Button type='submit'>Sign in</Button>
                    </Form>
                </PopoverBody>
            </Popover>
      </div>
    )
  
}

export default Login;