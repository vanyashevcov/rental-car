import { Field, Form, Formik } from 'formik';
import s from './BookingForm.module.css';
import Calendar from '../Calendar/Calendar';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const formInitialValues = {
  customerName: '',
  customerEmail: '',
  rentalDate: null,
  additionalNotes: '',
};

const formValidationRules = Yup.object({
  customerName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  customerEmail: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

function BookingForm() {
  const handleFormSubmission = (values, { resetForm }) => {
    if (!values) return;
    console.log('Booking request submitted:', values);
    resetForm();
    toast.success('Car booked successfully!');
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formHeading}>Book your car now</h2>
      <p className={s.formDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik 
        initialValues={formInitialValues} 
        validationSchema={formValidationRules}
        onSubmit={handleFormSubmission}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className={s.bookingForm}>
            <div className={s.inputGroup}>
              <Field
                type="text"
                name="customerName"
                placeholder="Name*"
                className={`${s.inputField} ${errors.customerName && touched.customerName ? s.inputError : ''}`}
              />
              {errors.customerName && touched.customerName && (
                <div className={s.errorMessage}>{errors.customerName}</div>
              )}
            </div>
            
            <div className={s.inputGroup}>
              <Field
                type="email"
                name="customerEmail"
                placeholder="Email*"
                className={`${s.inputField} ${errors.customerEmail && touched.customerEmail ? s.inputError : ''}`}
              />
              {errors.customerEmail && touched.customerEmail && (
                <div className={s.errorMessage}>{errors.customerEmail}</div>
              )}
            </div>
            
            <div className={s.inputGroup}>
              <Calendar
                value={values.rentalDate}
                onChange={date => setFieldValue('rentalDate', date)}
              />
            </div>
            
            <Field
              as="textarea"
              name="additionalNotes"
              placeholder="Comment"
              className={s.textareaField}
            />
            
            <button className={s.submitButton} type="submit" >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;