import ModalPayRaffle from '../ModalPayRaffle';
import ModalUnpayRaffle from '../ModalUnpayRaffle';
import ModalRefundRaffle from '../ModalRefundRaffle';
import { IAccordionSteps, IRefetchRaffle } from '@interfaces/index';

export function AccordionStepTwo({ raffle_id, wildcard, refetchRaffles }: IAccordionSteps & IRefetchRaffle) {
  return (
    <>
      <ModalPayRaffle raffle_id={raffle_id} refetchRaffles={refetchRaffles}/>
      <ModalUnpayRaffle raffle_id={raffle_id} refetchRaffles={refetchRaffles}/>
      <ModalRefundRaffle raffle_id={raffle_id} wildcard={wildcard} refetchRaffles={refetchRaffles}/>
    </>
  );
}