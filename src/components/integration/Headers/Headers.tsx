import classes from './Headers.module.css'
import IntegratorPicker from '../IntegratorPicker/IntegratorPicker'
import { ReactNode, useState } from 'react'
import { IIntegratorHeaders } from '@interfaces/index'

function Headers({ integrator }: IIntegratorHeaders) {
  const [importPromise, setImportPromise] = useState<ReactNode | null>(null)

  const classSelector = {
    'CDA': classes.CDAHeader,
    'BetFM4': classes.BetFM4Header
  }

  return (
    <>
      <IntegratorPicker 
        onSelect={(selection) => console.log(selection)}
      />
      <nav className={classSelector[integrator]}>
        { importPromise }
      </nav>
    </>
  )
}

export default Headers