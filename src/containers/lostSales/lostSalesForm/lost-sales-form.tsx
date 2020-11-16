import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { stringify } from 'querystring'
import { FormInputs } from '../../../models/formInputs-model'
import { EnumMember } from 'typescript'
// import * as utility from '../../../shared/Utility'

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: '#FAFAFF',
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const LostSalesForm: React.FC = () => {
  const styles = useStyles()
  const [formInputs, setFormInputs] = useState<FormInputs>({
    viewingDate: '',
    location: '',
    flatNumber: '',
    applicantName: '',
    reason: '',
    notes: '',
  })

  const [error, setError] = useState('')

  function clearFields() {
    setFormInputs({
      viewingDate: '',
      location: '',
      flatNumber: '',
      applicantName: '',
      reason: '',
      notes: '',
    })
  }

  const locations: { [name: string]: string } = {
    'Canning Town': 'CANNINGTOWN',
    Epsom: 'EPSOM',
    Hayes: 'HAYES',
    Lewisham: 'LEWISHAM',
    Poplar: 'POPLAR',
    'Stepney Green': 'STEPNEYGREEN',
    Walthamstow: 'WALTHAMSTOW',
  }
  const reasons: { [name: string]: string } = {
    Cost: 'COST',
    Commute: 'COMMUTE',
    'Travel Links': 'TRAVELLINKS',
  }

  const locationMenuItems = Object.keys(locations).map(loc => (
    <MenuItem key={loc} value={locations[loc]}>{`${loc}`}</MenuItem>
  ))
  const reasonMenuItems = Object.keys(reasons).map(reason => (
    <MenuItem key={reason} value={reasons[reason]}>{`${reason}`}</MenuItem>
  ))

  function submitHandler() {
    let isFormValid = true
    for (let input in formInputs) {
      if (!(input === 'notes'))
        isFormValid = formInputs[input].trim() && isFormValid ? true : false
    }
    if (!isFormValid) {
      setError('Please fill out form')
    } else {
      console.log(formInputs)
    }
  }

  return (
    <form className={styles.wrapper}>
      <Button>Force new FB entry</Button>
      <TextField
        className={styles.formControl}
        label="Viewing Date"
        type="date"
        value={formInputs.viewingDate}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={event =>
          setFormInputs({ ...formInputs, viewingDate: event.target.value })
        }
      />
      <FormControl className={styles.formControl}>
        <InputLabel>Location</InputLabel>
        <Select
          value={formInputs.location}
          onChange={event => {
            console.log(event.target.value)
            setFormInputs({
              ...formInputs,
              location: event.target.value as string,
            })
          }}
        >
          {locationMenuItems}
        </Select>
      </FormControl>
      <FormControl className={styles.formControl}>
        <InputLabel>Flat number</InputLabel>
        <Input
          value={formInputs.flatNumber}
          onChange={event =>
            setFormInputs({
              ...formInputs,
              flatNumber: event.target.value as string,
            })
          }
        />
      </FormControl>
      <FormControl className={styles.formControl}>
        <InputLabel>Applicant name</InputLabel>
        <Input
          value={formInputs.applicantName}
          onChange={event =>
            setFormInputs({
              ...formInputs,
              applicantName: event.target.value,
            })
          }
        />
      </FormControl>
      <FormControl className={styles.formControl}>
        <InputLabel>Reason</InputLabel>
        <Select
          value={formInputs.reason}
          onChange={event =>
            setFormInputs({
              ...formInputs,
              reason: event.target.value as string,
            })
          }
        >
          {reasonMenuItems}
        </Select>
      </FormControl>

      <TextField
        className={styles.formControl}
        label="Notes"
        value={formInputs.notes}
        onChange={event =>
          setFormInputs({ ...formInputs, notes: event.target.value })
        }
      />

      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        onClick={submitHandler}
      >
        Submit
      </Button>
      <Button className={styles.button} variant="contained" color="secondary">
        Clear
      </Button>

      {error ? <h1>{error}</h1> : null}
    </form>
  )
}

export default LostSalesForm
