import ModalSendToApp from '../ModalSendToApp';
import { IAccordionSteps, IRefetchRaffle } from '@interfaces/index';

export function AccordionStepOne({ raffle_id, refetchRaffles }: IAccordionSteps & IRefetchRaffle) {
  return (
    <>
      <ModalSendToApp raffle_id={raffle_id} refetchRaffles={refetchRaffles} />
    </>
  );
}