import {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import {AxiosContext} from '../context/AxiosProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);
  const {publicAxios} = useContext(AxiosContext);
};
