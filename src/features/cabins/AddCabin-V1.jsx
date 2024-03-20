import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CabinTable from './CabinTable';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add Cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm></CreateCabinForm>
      </Modal.Window>

      <Modal.Open opens='table'>
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name='table'>
        <CabinTable></CabinTable>
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setisOpenModal((open) => !open)}>
//         Add new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setisOpenModal(false)}>
//           <CreateCabinForm
//             onCloseModal={() => setisOpenModal(false)}
//           ></CreateCabinForm>
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
