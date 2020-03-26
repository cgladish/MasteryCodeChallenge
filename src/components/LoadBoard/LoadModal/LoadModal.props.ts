import { Load, LoadStatus } from 'store/resources/loads';

export type Props = {
    isModifying: boolean;
    load: Load;
    onClose: () => void;
    changeLoadStatus: (loadId: string, loadStatus: LoadStatus) => void;
};
