import ModalPayRaffle from '../ModalPayRaffle';
import ModalUnpayRaffle from '../ModalUnpayRaffle';
import ModalRefundRaffle from '../ModalRefundRaffle';
import { IAccordionSteps } from '@interfaces/index';

export function AccordionStepTwo({ raffle_id, wildcard }: IAccordionSteps) {
  return (
    <>
      <ModalPayRaffle raffle_id={raffle_id} />
      <ModalUnpayRaffle raffle_id={raffle_id} />
      <ModalRefundRaffle raffle_id={raffle_id} wildcard={wildcard} />
    </>
  );
}
