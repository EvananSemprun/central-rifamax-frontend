import ModalSendToApp from '../ModalSendToApp';
import { IAccordionSteps } from '@interfaces/index';
import ModalPrintTickets from '../ModalPrintTickets';

export function AccordionStepOne({ raffle_id, refetchRaffles }: IAccordionSteps & { refetchRaffles: () => void }) {
  return (
    <>
      <ModalSendToApp raffle_id={raffle_id} refetchRaffles={refetchRaffles} />
      {/* <ModalPrintTickets /> */}
    </>
  );
}