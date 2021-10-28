import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "store/types";
import { Alert, Card, Form } from "react-bootstrap";
import { number, object, SchemaOf, string } from "yup";
import Configuration from "models/Configuration";
import FormField from "components/FormField";
import SaveButton from "components/SaveButton";
import CurrencyFormField from 'components/CurrencyFormField';
import WhiteCardFooter from "./components/WhiteCardFooter";
import { save } from "services/ConfigurationsService";
import { useState } from "react";
import { useEffect } from "react";

const Configurations = () => {
  const user = useSelector((state: RootState) => state.user);
  const [wasSuccessfullySubmited, setWasSuccessfullySubmited] = useState(false);

  const onSubmit = (configuration: Configuration) => {
    save(configuration);
    setWasSuccessfullySubmited(true);
    reset();
  };
  
  const schema: SchemaOf<Configuration> = object({
    name: string().label('Name').min(3).required(),
    email: string().label('E-mail').min(5).required(),
    password: string().label('Password').min(6).required(),
    baseTax: number().label('Base tax').min(0).required().typeError('Base tax must be a number'),
  }).defined();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<Configuration>({
    defaultValues: { name: user.name, email: user.email, baseTax: user.baseTax, password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (isDirty) setWasSuccessfullySubmited(false);
  }, [isDirty]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
      <Card>
        <Card.Body>
          <h3 className='mb-4'>Configurations</h3>
            {wasSuccessfullySubmited && 
              <Alert variant='success'>The configurations were successfully updated.</Alert>
            }
            <FormField
              id='name'
              label='Name'
              type='name'
              errors={errors.name}
              {...register('name')}
            />
            <FormField
              id='email'
              label='E-mail'
              type='email'
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
            <CurrencyFormField
              id='baseTax'
              label='Base tax'
              type='number'
              currency='R$'
              errors={errors.baseTax}
              {...register('baseTax')}
            />
        </Card.Body>
        <WhiteCardFooter>
          <SaveButton isDisabled={!isValid} className='float-right' />
        </WhiteCardFooter>
      </Card>
    </Form>
  );
};

export default Configurations;
