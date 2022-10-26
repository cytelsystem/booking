import MainCenterLayout from '../../shared/Layouts/MainCenterLayout/MainCenterLayout';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Spinner from '../../shared/Spinner/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { getValidationErrors, passwordConfirmValidation } from '../../utils/validationErrors';
import { registerUser } from '../../core/services/login';
import { formStateValidation } from '../../utils/formStateMapper';
import { useState } from 'react';

const Login = () => {
   let browserNavigate = useNavigate();

   const [isLoading, setIsLoading] = useState(false);

   const registerForm = {
      email: { state: useState(), isValid: useState(false) },
      password: { state: useState(), isValid: useState(false) },
   };

   const registerNewUser = () => {
      setIsLoading(true);
      registerUser(registerForm).then(user => {
         setTimeout(() => {
            browserNavigate('/');
            setIsLoading(false);
         }, 2000);
      });
   };

   return (
      <MainCenterLayout>
         <div className="db-login">
            <h1 className="db-form-title">Iniciar sesión</h1>
            <Input
               id={'email'}
               placeholder={''}
               type={'email'}
               label={'Correo Electronico'}
               errors={getValidationErrors('email', true)}
               setValue={registerForm.email.state[1]}
               name={'email'}
               setInputValidation={registerForm.email.isValid[1]}
            />
            <Input
               id={'password'}
               placeholder={''}
               type={'password'}
               label={'Contraseña'}
               errors={getValidationErrors('password', true)}
               setValue={registerForm.password.state[1]}
               name={'password'}
               setInputValidation={registerForm.password.isValid[1]}
            />
            <Button
               classList={'db-button-primary db-button-small'}
               action={registerNewUser}
               isDisabled={!formStateValidation(registerForm)}>
               {isLoading ? <Spinner /> : null}
               Iniciar sesión
            </Button>
            <div className="db-form-footer">
               <span>¿No tienes una cuenta? </span>
               <Link to={'/register'}>
                  <span>Registrarse</span>
               </Link>
            </div>
         </div>
      </MainCenterLayout>
   );
};

export default Login;
