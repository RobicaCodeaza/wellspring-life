import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function CreateCabinForm({ cabin }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('Cabin successfully created');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    // mutate({ ...data, image: data.image[0] });
    console.log(data);
  }
  function onError(errors) {
    // console.log(errors);
    toast.error('Check your form inputs');
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          disabled={isCreating}
          type='text'
          id='name'
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          disabled={isCreating}
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          disabled={isCreating}
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.maxCapacity?.message}>
        <Input
          disabled={isCreating}
          type='number'
          id='discount'
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) => {
              return (
                Number(value) <= Number(getValues().regularPrice) ||
                'Discount should be less than regular price'
              );
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isCreating}
          type='number'
          id='description'
          defaultValue=''
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
          id='image'
          accept='image/*'
          {...register('image', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isCreating} variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
