import ModalPayRaffle from '../ModalPayRaffle';
import ModalUnpayRaffle from '../ModalUnpayRaffle';
import ModalRefundRaffle from '../ModalRefundRaffle';
export function AccordionStepTwo() {
  return (
    <>
      <ModalPayRaffle/>
      <ModalUnpayRaffle/>
      <ModalRefundRaffle/>
    </>
  );
}
