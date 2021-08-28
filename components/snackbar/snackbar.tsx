import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import AlertType from '../../enums/AlertType'

const Alert = (props: any) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
)

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export const handleSnackbarTimer = (setOpenSnackbar: Function) => {
  setOpenSnackbar(true)
  const timer = setTimeout(() => setOpenSnackbar(false), 3000)
  return () => clearTimeout(timer)
}

export default function CustomSnackbar(props: {
  type: AlertType
  message: string
}) {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={props.type.toString()}>{props.message}</Alert>
      </Snackbar>
    </div>
  )
}
