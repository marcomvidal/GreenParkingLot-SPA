import { yupResolver } from "@hookform/resolvers/yup";
import FormField from "components/FormField";
import SaveButton from "components/SaveButton";
import Configuration from "models/Configuration";
import { Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "store/types";
import { number, object, SchemaOf, string } from "yup";
import WhiteCardFooter from "./components/WhiteCardFooter";

const Configurations = () => {
  const user = useSelector((state: RootState) => state.user);

  const onSubmit = (data: Configuration) => {
    alert(data);
  };
  
  const schema: SchemaOf<Configuration> = object({
    name: string().label('Name').required(),
    email: string().label('E-mail').min(5).required(),
    password: string().label('Password').min(6).required(),
    baseTax: number().label('Base tax').required(),
  }).defined();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<Configuration>({
    defaultValues: { name: user.name, email: user.email, baseTax: user.baseTax, password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <Card>
      <Card.Body>
        <h3 className='mb-4'>Configurations</h3>
        <Form onSubmit={handleSubmit(onSubmit)} method='POST'>
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
          <FormField
            id='baseTax'
            label='Base tax'
            type='number'
            errors={errors.baseTax}
            {...register('baseTax')}
          />
        </Form>
      </Card.Body>
      <WhiteCardFooter>
        <SaveButton isDisabled={!isValid} className='float-right' />
      </WhiteCardFooter>
    </Card>
  );
};

export default Configurations;
