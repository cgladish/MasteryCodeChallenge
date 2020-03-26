import * as React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
} from 'reactstrap';

import { LoadStatus } from 'store/resources/loads';
import { Props } from './LoadModal.props';

export const LoadModal = (props: Props) => {
    const [selectedStatus, setSelectedStatus] = React.useState<LoadStatus>(
        props.load.status
    );

    const onChangeSelectedStatus = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSelectedStatus(event.target.value as LoadStatus);
    };
    const onConfirm = () => {
        props.changeLoadStatus(props.load.id, selectedStatus);
    };

    const hasChanges = props.load.status !== selectedStatus;
    const disableConfirm = props.isModifying || !hasChanges;

    return (
        <Modal isOpen={true} toggle={props.onClose}>
            <ModalHeader>Load #{props.load.id}</ModalHeader>
            <ModalBody>
                {props.load.locked && (
                    <div className="text-danger mb-2">
                        This load is currently locked.
                    </div>
                )}
                <div>
                    Load Status:
                    <Input
                        type="select"
                        onChange={onChangeSelectedStatus}
                        value={selectedStatus}
                        disabled={props.isModifying || props.load.locked}
                    >
                        <option>booked</option>
                        <option>available</option>
                    </Input>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button outline color="primary" onClick={props.onClose}>
                    Cancel
                </Button>
                <Button
                    color={disableConfirm ? 'secondary' : 'primary'}
                    onClick={onConfirm}
                    disabled={disableConfirm}
                >
                    Confirm Changes
                </Button>
            </ModalFooter>
        </Modal>
    );
};
