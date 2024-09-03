import classes from './index.module.css';
import CloseDayModal from '../ModalCloseDay';
import AddRaffleModal from '../ModalAddRaffle';

function ActionButtons({ refetchRaffles }: { refetchRaffles: () => void }) {
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
