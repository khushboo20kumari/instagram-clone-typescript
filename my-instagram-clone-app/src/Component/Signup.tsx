

import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControl, FormControlLabel, FormLabel, Checkbox, Radio, RadioGroup } from '@material-ui/core';
interface SignupProps {
    setEmail:React.Dispatch<React.SetStateAction <string>>,
    email:string,
    password:string,
    setPassord:React.Dispatch<React.SetStateAction<string>>,
    handleSignup:()=>void;
}
const Signup: React.FC <SignupProps> = ({email,setEmail,setPassord,handleSignup}) => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    return (
        <Grid container justify="center">
            <Paper elevation={20} style={paperStyle}>
                <Grid>
                    <center>
                        <Avatar style={avatarStyle}>
                        </Avatar>
                        <Typography variant='h5' style={headerStyle}>Sign Up</Typography>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                    </center>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth  label='Email' placeholder="Enter your email" />
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' type="password" placeholder="Enter your password" />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
                    <Typography>Do you have account</Typography>
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    );
}

export default Signup;
