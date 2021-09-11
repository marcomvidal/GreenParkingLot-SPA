import FormField from 'components/FormField';
import { useForm } from 'react-hook-form';
import Login from 'models/Login';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signInAction } from 'store/user/actions';
import { signIn } from 'services/UsersService';
import { object, string, SchemaOf } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import EMPTY_LOGIN from './constants/emptyLogin';
import AppBrand from 'components/AppBrand';

const LoginForm = () => {
  const dispatch = useDispatch();

  const schema: SchemaOf<Login> = object({
    email: string().label('E-mail').min(5).email().required(),
    password: string().label('Password').min(6).required(),
  }).defined();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Login>({
    defaultValues: EMPTY_LOGIN,
    resolver: yupResolver(schema),
  });

  const onSubmit = (login: Login) => {
    const user = signIn(login);

    if (user) {
      dispatch(signInAction({ user }));
    }
  };

  return (
    <div className='h-100 d-flex align-items-center'>
      <Col md={6} className='mx-auto'>
        <Card>
          <Card.Body>
            <AppBrand />
            <h2 className='mb-5'>Sign in</h2>
            <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
              <FormField
                id='email'
                label='E-mail'
                errors={errors.email}
                {...register('email')}
              />
              <FormField
                id='password'
                label='Password'
                type='password'
                errors={errors.password}
                {...register('password')}
              />
              <Button block className='mt-5' variant='success' type='submit'>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default LoginForm;
