import { XMarkIcon } from "@heroicons/react/24/solid";
import Modal from 'react-modal'
/*
ButtonModal
- click on a title, then it will show the description
*/
type Props = {
    showIsModalOpen: boolean;
    setShowIsModalOpen: (showIsModalOpen: boolean) => void;
}



const ButtonModal = ({ showIsModalOpen, setShowIsModalOpen}: Props) => {

    return (
            <Modal
                isOpen={showIsModalOpen}
            >
                <div className='bg-[#0E2F3F] z-100 rounded-t-md sticky top-0'>
                    {/* <XMarkIcon className='ml-auto w-3' onClick={() => setShowIsModalOpen(false)}/> */}
                    <div className='flex'>
                        <p className='mx-auto font-bold'>Modal</p>
                    </div>
                </div>
            </Modal>
    )
}

Modal.setAppElement('#root');

export default ButtonModal