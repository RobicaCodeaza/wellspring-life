import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm.jsx';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm.jsx';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Account() {
  return (
    <>
      <Heading as='h1'>Update your account</Heading>

      <Row>
        <Heading as='h3'>Update user data</Heading>
        <UpdateUserDataForm></UpdateUserDataForm>
      </Row>

      <Row>
        <Heading as='h3'>Update password</Heading>
        <UpdatePasswordForm></UpdatePasswordForm>
      </Row>
    </>
  );
}

export default Account;
