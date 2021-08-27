import FormField from "components/FormField";
import { useForm } from "react-hook-form";
import Login from "models/Login";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAction } from "store/user/actions";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { handleSubmit, register, formState: { errors } } = useForm<Login>({
    defaultValues: { username: '' },
    mode: 'onChange',
  });

  const onSubmit = (login: Login) => {
    dispatch(loginAction({ username: login.username }));
  };

  return (
    <div className='h-100'>
      <Card className='mx-auto'>
        <Card.Body>
          <h2 className='mb-5'>Sign in</h2>
          <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
            <FormField
              label='E-mail'
              id='username'
              errors={errors.username}
              {...register('username')}
            />
            <Button block className='mt-5' variant='success' type='submit'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
  ;

export default LoginForm;
