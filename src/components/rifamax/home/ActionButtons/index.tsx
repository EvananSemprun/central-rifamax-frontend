import classes from './index.module.css';
import CloseDayModal from '../ModalCloseDay';
import AddRaffleModal from '../ModalAddRaffle';
import { IRefetchRaffle } from '@interfaces/index';

function ActionButtons({ refetchRaffles }: IRefetchRaffle) {
  return (
    <div>
      <div className={classes.actionsButtons}>
        <AddRaffleModal refetchRaffles={refetchRaffles} /> 
        <CloseDayModal />
      </div>
    </div>
  );
}

export default ActionButtons;
