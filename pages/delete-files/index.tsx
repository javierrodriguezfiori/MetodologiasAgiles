import React, { useState } from 'react'
import Head from 'next/head'
import styles from './styles/files.module.css'
import { firestore } from '../../config'
import CustomDrawer from '../../components/drawer/drawer'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { sortFiles } from '../../functions/crud/get'
import { deleteSelectedFiles } from '../../functions/crud/delete'
import CustomDialog from '../../components/dialog/dialog'
import { FileOnDelete } from '../../types/types'
import AlertType from '../../enums/AlertType'
import CustomSnackbar, {
  handleSnackbarTimer,
} from '../../components/snackbar/snackbar'
import { getMenu } from '../../functions/getMenu'
import Typography from '@material-ui/core/Typography'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'

export default function DeleteFiles() {
  const [files, setFiles] = useState<Array<FileOnDelete>>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [alertType, setAlertType] = useState(AlertType.Warning)
  const [subject, setSubject] = useState(null)

  const getFromFirestore = () => {
    setFiles([])

    firestore
      .collection('files')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          data.subject === subject &&
            //@ts-ignore
            setFiles((files) => [
              ...files,
              {
                id: doc.id,
                title: data.title,
                url: data.url,
                checked: false,
                timestamp: data.timestamp.nanoseconds,
              },
            ])
        })
      })
  }

  const handleOnChange = (index: number) => {
    const shallowCopy = [...files]
    shallowCopy[index].cheked = !shallowCopy[index].cheked
    setFiles(shallowCopy)
  }

  const onAccept = async () => {
    try {
      const filesCheked: Array<FileOnDelete> = files.filter(
        (file) => file.cheked === true,
      )
      if (filesCheked.length > 0) {
        await deleteSelectedFiles(filesCheked)
        setFiles([])
        getFromFirestore()
        setAlertType(AlertType.Success)
      } else setAlertType(AlertType.Info)
    } catch (error) {
      setAlertType(AlertType.Error)
    } finally {
      setOpenDialog(false)
      handleSnackbarTimer(setOpenSnackbar)
    }
  }

  const drawSnackbar = () => {
    let message: string
    switch (alertType) {
      case AlertType.Success:
        message = 'Los archivos seleccionados se han borrado correctamente'
        break
      case AlertType.Info:
        message = 'Debe seleccionar como minimo un archivo para eliminar'
        break
      case AlertType.Error:
        message = 'Ocurri?? un error, intente nuevamente'
        break
      case AlertType.Warning:
        message =
          'Se le est?? realizando mantenimiento a la p??gina, reintente nuevamente en unas horas'
        break
    }

    return <CustomSnackbar type={alertType} message={message} />
  }

  return (
    <CustomDrawer
      content={
        <>
          <Head children={<title>Eliminar Archivos</title>} />
          <Typography variant="h4" noWrap>
            Eliminar Archivos
          </Typography>
          <Typography variant="h6" noWrap>
            Seleccione una materia
          </Typography>
          <br />
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="Universidad Nacional de Lanus">
              <TreeItem nodeId="2" label="Licenciatura en Sistemas">
                <TreeItem nodeId="3" label="1er a??o">
                  <TreeItem
                    nodeId="4"
                    label="Programaci??n de Computadoras"
                    onClick={() => setSubject('Programaci??n de Computadoras')}
                  />
                  <TreeItem
                    nodeId="5"
                    label="Organizaci??n de Computadoras"
                    onClick={() => setSubject('Organizaci??n de Computadoras')}
                  />
                  <TreeItem
                    nodeId="6"
                    label="Arquitectura de Computadoras"
                    onClick={() => setSubject('Arquitectura de Computadoras')}
                  />
                  <TreeItem
                    nodeId="7"
                    label="Matem??tica 1"
                    onClick={() => setSubject('Matem??tica 1')}
                  />
                  <TreeItem
                    nodeId="8"
                    label="Matem??tica 2"
                    onClick={() => setSubject('Matem??tica 2')}
                  />
                  <TreeItem
                    nodeId="9"
                    label="Expresi??n de Problemas y Algoritmos"
                    onClick={() => setSubject('Expresi??n de Problemas y Algoritmos')}
                  />
                  <TreeItem
                    nodeId="10"
                    label="Introducci??n al Pensamiento Cient??fico"
                    onClick={() => setSubject('Introducci??n al Pensamiento Cient??fico')}
                  />
                </TreeItem>

                <TreeItem nodeId="11" label="2do a??o">
                  <TreeItem
                    nodeId="12"
                    label="Ingenier??a de Software 1"
                    onClick={() => setSubject('Ingenier??a de Software 1')}
                  />
                  <TreeItem
                    nodeId="13"
                    label="Introducci??n a las Bases de Datos"
                    onClick={() => setSubject('Introducci??n a las Bases de Datos')}
                  />
                  <TreeItem
                    nodeId="14"
                    label="Algoritmos y Estructuras de Datos"
                    onClick={() => setSubject('Algoritmos y Estructuras de Datos')}
                  />
                  <TreeItem
                    nodeId="15"
                    label="Orientaci??n a Objetos 1"
                    onClick={() => setSubject('Orientaci??n a Objetos 1')}
                  />
                  <TreeItem
                    nodeId="16"
                    label="Seminario de Lenguajes"
                    onClick={() => setSubject('Seminario de Lenguajes')}
                  />
                  <TreeItem
                    nodeId="17"
                    label="Introducci??n a los Sistemas Operativos"
                    onClick={() => setSubject('Introducci??n a los Sistemas Operativos')}
                  />
                  <TreeItem
                    nodeId="18"
                    label="Matem??tica 3"
                    onClick={() => setSubject('Matem??tica 3')}
                  />
                  <TreeItem
                    nodeId="19"
                    label="Probabilidad y Estad??stica"
                    onClick={() => setSubject('Probabilidad y Estad??stica')}
                  />
                </TreeItem>
                
                <TreeItem nodeId="20" label="3er a??o">
                  <TreeItem
                    nodeId="21"
                    label="Programaci??n Concurrente"
                    onClick={() => setSubject('Programaci??n Concurrente')}
                  />
                  <TreeItem
                    nodeId="22"
                    label="Ingenier??a de Software 2"
                    onClick={() => setSubject('Ingenier??a de Software 2')}
                  />
                  <TreeItem
                    nodeId="23"
                    label="Orientaci??n a Objetos 2"
                    onClick={() => setSubject('Orientaci??n a Objetos 2')}
                  />
                  <TreeItem
                    nodeId="24"
                    label="Sistemas y organizaciones"
                    onClick={() => setSubject('Sistemas y organizaciones')}
                  />
                  <TreeItem
                    nodeId="25"
                    label="Bases de Datos 1"
                    onClick={() => setSubject('Bases de Datos 1')}
                  />
                  <TreeItem
                    nodeId="26"
                    label="Proyecto de Software"
                    onClick={() => setSubject('Proyecto de Software')}
                  />
                  <TreeItem
                    nodeId="27"
                    label="Conceptos y Paradigmas de Lenguajes de Programaci??n"
                    onClick={() => setSubject('Conceptos y Paradigmas de Lenguajes de Programaci??n')}
                  />
                  <TreeItem
                    nodeId="28"
                    label="Redes y comunicaciones"
                    onClick={() => setSubject('Redes y comunicaciones')}
                  />
                </TreeItem>

                <TreeItem nodeId="29" label="4to a??o">
                  <TreeItem
                    nodeId="30"
                    label="Ingenier??a de Software 3"
                    onClick={() => setSubject('Ingenier??a de Software 3')}
                  />
                  <TreeItem
                    nodeId="31"
                    label="Bases de Datos 2"
                    onClick={() => setSubject('Bases de Datos 2')}
                  />
                  <TreeItem
                    nodeId="32"
                    label="Fundamentos de Teor??a de la Computaci??n"
                    onClick={() => setSubject('Fundamentos de Teor??a de la Computaci??n')}
                  />
                  <TreeItem
                    nodeId="33"
                    label="Sistemas Operativos"
                    onClick={() => setSubject('Sistemas Operativos')}
                  />
                  <TreeItem
                    nodeId="34"
                    label="Desarrollo de software en Sistemas Distribuidos"
                    onClick={() => setSubject('Desarrollo de software en Sistemas Distribuidos')}
                  />
                  <TreeItem
                    nodeId="35"
                    label="Matem??tica Discreta"
                    onClick={() => setSubject('Matem??tica Discreta')}
                  />
                  <TreeItem
                    nodeId="36"
                    label="Optativa ??rea Arquitectura, Sistemas Operativos y Redes"
                    onClick={() => setSubject('Optativa ??rea Arquitectura, Sistemas Operativos y Redes')}
                  />
                  <TreeItem
                    nodeId="37"
                    label="Optativa ??rea Algoritmos y Lenguajes"
                    onClick={() => setSubject('Optativa ??rea Algoritmos y Lenguajes')}
                  />
                </TreeItem>

                <TreeItem nodeId="38" label="5to a??o">
                  <TreeItem
                    nodeId="39"
                    label="Pol??tica y Gesti??n Tecnol??gicas"
                    onClick={() => setSubject('Pol??tica y Gesti??n Tecnol??gicas')}
                  />
                  <TreeItem
                    nodeId="40"
                    label="Aspectos Legales y Profesionales de la Inform??tica"
                    onClick={() => setSubject('Aspectos Legales y Profesionales de la Inform??tica')}
                  />
                  <TreeItem
                    nodeId="41"
                    label="Nuevos Escenarios"
                    onClick={() => setSubject('Nuevos Escenarios')}
                  />
                  <TreeItem
                    nodeId="42"
                    label="Optativa ??rea Ingenier??a de Software y Bases de Datos"
                    onClick={() => setSubject('Optativa ??rea Ingenier??a de Software y Bases de Datos')}
                  />
                  <TreeItem
                    nodeId="43"
                    label="Seminario de Trabajo Final"
                    onClick={() => setSubject('Seminario de Trabajo Final')}
                  />
                </TreeItem>

                <TreeItem nodeId="44" label="Ingles">
                  <TreeItem
                    nodeId="45"
                    label="Ingles 1"
                    onClick={() => setSubject('Ingles 1')}
                  />
                  <TreeItem
                    nodeId="46"
                    label="Ingles 2"
                    onClick={() => setSubject('Ingles 2')}
                  />
                  <TreeItem
                    nodeId="47"
                    label="Ingles 3"
                    onClick={() => setSubject('Ingles 3')}
                  />
                </TreeItem>

                <TreeItem nodeId="48" label="Seminarios">
                  <TreeItem
                    nodeId="49"
                    label="Seminario de Pensamiento Nacional y Latinoamericano"
                    onClick={() => setSubject('Seminario de Pensamiento Nacional y Latinoamericano')}
                  />
                  <TreeItem
                    nodeId="50"
                    label="Seminario de Justicia y Derechos Humanos"
                    onClick={() => setSubject('Seminario de Justicia y Derechos Humanos')}
                  />
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeView>




          <br />
          <Button
            className={styles.button}
            variant="contained"
            startIcon={<SearchRoundedIcon />}
            onClick={getFromFirestore}
          >
            Buscar
          </Button>
          {files.length > 0 && (
            <div className={styles.files}>
              <Button
                className={styles.button}
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => setOpenDialog(true)}
              >
                Borrar
              </Button>
              <FormControl>
                <FormGroup aria-label="position">
                  {sortFiles(files).map((file, index) => {
                    return (
                      <FormControlLabel
                        checked={file.cheked}
                        control={<Checkbox color="primary" />}
                        label={file.title}
                        labelPlacement="end"
                        key={file.id}
                        onChange={() => handleOnChange(index)}
                      />
                    )
                  })}
                </FormGroup>
              </FormControl>
            </div>
          )}
          {openDialog && (
            <CustomDialog
              title="Esta seguro de borrar los archivos seleccionados?"
              setOpenDialog={setOpenDialog}
              onAccept={onAccept}
            />
          )}
          {openSnackbar && drawSnackbar()}
        </>
      }
      //@ts-ignore
      menu={getMenu()}
    />
  )
}
