import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import Row from '../../ui/Row';

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateCabinForm></CreateCabinForm>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
