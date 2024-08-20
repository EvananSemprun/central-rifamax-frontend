import ConfirmSeller from './ConfirmSeller';
import AddSeller from '@form/rifamax/Seller/AddSeller.form';
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

const SellersSteppers = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Datos del rifero" description="Llene los datos del rifero">
       <AddSeller/>
      </Stepper.Step>
      <Stepper.Step label="Verificación" description="Verifique que loa datos del rifero sean correcto">
        <ConfirmSeller/>
      </Stepper.Step>
     
      <Stepper.Completed>
        Su rifero ha sido creado con éxito, gracias por confiar en nosotros!
      </Stepper.Completed>
    </Stepper>

    <Group justify="center" mt="xl">
      <Button variant="default" onClick={prevStep}>Anterior</Button>
      <Button onClick={nextStep}>Siguiente</Button>
    </Group>
  </>
  )
}

export default SellersSteppers
