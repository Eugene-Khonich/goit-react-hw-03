import * as Yup from 'yup';

export const AddProfileSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at last 3 symbols')
    .max(50, 'Name must be less than 50 symbols')
    .required('Required'),
  phone: Yup.number().required('Required'),
});
