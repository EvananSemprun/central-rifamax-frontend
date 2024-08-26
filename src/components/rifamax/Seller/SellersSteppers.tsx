import ConfirmSeller from './ConfirmSeller';
import AddSeller from '@form/rifamax/Seller/AddSeller.form';
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import { IAddSellerForm } from '@interfaces/index';

const SellersSteppers = () => {
  const [active, setActive] = useState(0);
  const [sellerData, setSellerData] = useState<IAddSellerForm | null>(null); 
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleSellerData = (data: IAddSellerForm) => { 
    setSellerData(data);
    nextStep();
  };

  return (
    <>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="Datos del rifero" description="Llene los datos del rifero">
          <AddSeller onSubmit={handleSellerData} />
        </Stepper.Step>
        <Stepper.Step label="Verificación" description="Verifique que los datos del rifero sean correctos">
          <ConfirmSeller data={sellerData} />
        </Stepper.Step>

        <Stepper.Completed>
          ¡Su rifero ha sido creado con éxito, gracias por confiar en nosotros!
        </Stepper.Completed>
      </Stepper>
    </>
  );
};

export default SellersSteppers;
