import ModalSendToApp from '../ModalSendToApp';
import ModalPrintTickets from '../ModalPrintTickets';

export function AccordionStepOne() {
  return (
    <>
      <ModalSendToApp />
      <ModalPrintTickets />
    </>
  );
}
