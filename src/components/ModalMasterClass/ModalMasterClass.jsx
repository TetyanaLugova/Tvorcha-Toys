import DetaliesMasterClass from '../DetaliesMasterClass/DetaliesMasterClass';
import Modal from '../Modal/Modal';
import css from './ModalMasterClass.module.css';

export default function SettingModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} contentLabel="Modal">
      <div className={css.setting_modal_main_container}>
        <DetaliesMasterClass onClose={onClose} />
      </div>
    </Modal>
  );
}
