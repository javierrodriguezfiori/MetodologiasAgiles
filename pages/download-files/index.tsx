import React, { useState } from 'react'
import Head from 'next/head'
import styles from './styles/files.module.css'
import { firestore } from '../../config'
import CustomDrawer from '../../components/drawer/drawer'
import { sortFiles } from '../../functions/crud/get'
import { FileOnDownload } from '../../types/types'
import { getMenu } from '../../functions/getMenu'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'

export default function DownloadFiles() {
  const [files, setFiles] = useState<Array<FileOnDownload>>([])
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
            setFiles((files) => [
              ...files,
              {
                id: doc.id,
                title: data.title,
                url: data.url,
                timestamp: data.timestamp.nanoseconds,
              },
            ])
        })
      })
  }

  return (
    <CustomDrawer
      content={
        <>
          <Head children={<title>Descargar Archivos</title>} />
          <Typography variant="h4" noWrap>
            Descargar Archivos
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
          {files && (
            <div className={styles.files}>
              {sortFiles(files).map((file) => {
                return (
                  <a href={file.url} target="_blank" key={file.id}>
                    {file.title}
                  </a>
                )
              })}
            </div>
          )}
        </>
      }
      //@ts-ignore
      menu={getMenu()}
    />
  )
}
