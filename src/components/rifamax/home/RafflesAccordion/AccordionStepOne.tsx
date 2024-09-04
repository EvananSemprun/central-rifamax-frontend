import ModalSendToApp from '../ModalSendToApp';
import { IAccordionSteps } from '@interfaces/index';
import ModalPrintTickets from '../ModalPrintTickets';

export function AccordionStepOne({ raffle_id }: IAccordionSteps) {
  return (
    <>
      <ModalSendToApp raffle_id={raffle_id} />
      {/* <ModalPrintTickets /> */}
    </>
  );
}
