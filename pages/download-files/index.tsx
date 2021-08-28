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
                <TreeItem nodeId="3" label="1er año">
                  <TreeItem
                    nodeId="4"
                    label="Programación de Computadoras"
                    onClick={() => setSubject('Programación de Computadoras')}
                  />
                  <TreeItem
                    nodeId="5"
                    label="Organización de Computadoras"
                    onClick={() => setSubject('Organización de Computadoras')}
                  />
                  <TreeItem
                    nodeId="6"
                    label="Arquitectura de Computadoras"
                    onClick={() => setSubject('Arquitectura de Computadoras')}
                  />
                  <TreeItem
                    nodeId="7"
                    label="Matemática 1"
                    onClick={() => setSubject('Matemática 1')}
                  />
                  <TreeItem
                    nodeId="8"
                    label="Matemática 2"
                    onClick={() => setSubject('Matemática 2')}
                  />
                  <TreeItem
                    nodeId="9"
                    label="Expresión de Problemas y Algoritmos"
                    onClick={() => setSubject('Expresión de Problemas y Algoritmos')}
                  />
                  <TreeItem
                    nodeId="10"
                    label="Introducción al Pensamiento Científico"
                    onClick={() => setSubject('Introducción al Pensamiento Científico')}
                  />
                </TreeItem>

                <TreeItem nodeId="11" label="2do año">
                  <TreeItem
                    nodeId="12"
                    label="Ingeniería de Software 1"
                    onClick={() => setSubject('Ingeniería de Software 1')}
                  />
                  <TreeItem
                    nodeId="13"
                    label="Introducción a las Bases de Datos"
                    onClick={() => setSubject('Introducción a las Bases de Datos')}
                  />
                  <TreeItem
                    nodeId="14"
                    label="Algoritmos y Estructuras de Datos"
                    onClick={() => setSubject('Algoritmos y Estructuras de Datos')}
                  />
                  <TreeItem
                    nodeId="15"
                    label="Orientación a Objetos 1"
                    onClick={() => setSubject('Orientación a Objetos 1')}
                  />
                  <TreeItem
                    nodeId="16"
                    label="Seminario de Lenguajes"
                    onClick={() => setSubject('Seminario de Lenguajes')}
                  />
                  <TreeItem
                    nodeId="17"
                    label="Introducción a los Sistemas Operativos"
                    onClick={() => setSubject('Introducción a los Sistemas Operativos')}
                  />
                  <TreeItem
                    nodeId="18"
                    label="Matemática 3"
                    onClick={() => setSubject('Matemática 3')}
                  />
                  <TreeItem
                    nodeId="19"
                    label="Probabilidad y Estadística"
                    onClick={() => setSubject('Probabilidad y Estadística')}
                  />
                </TreeItem>
                
                <TreeItem nodeId="20" label="3er año">
                  <TreeItem
                    nodeId="21"
                    label="Programación Concurrente"
                    onClick={() => setSubject('Programación Concurrente')}
                  />
                  <TreeItem
                    nodeId="22"
                    label="Ingeniería de Software 2"
                    onClick={() => setSubject('Ingeniería de Software 2')}
                  />
                  <TreeItem
                    nodeId="23"
                    label="Orientación a Objetos 2"
                    onClick={() => setSubject('Orientación a Objetos 2')}
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
                    label="Conceptos y Paradigmas de Lenguajes de Programación"
                    onClick={() => setSubject('Conceptos y Paradigmas de Lenguajes de Programación')}
                  />
                  <TreeItem
                    nodeId="28"
                    label="Redes y comunicaciones"
                    onClick={() => setSubject('Redes y comunicaciones')}
                  />
                </TreeItem>

                <TreeItem nodeId="29" label="4to año">
                  <TreeItem
                    nodeId="30"
                    label="Ingeniería de Software 3"
                    onClick={() => setSubject('Ingeniería de Software 3')}
                  />
                  <TreeItem
                    nodeId="31"
                    label="Bases de Datos 2"
                    onClick={() => setSubject('Bases de Datos 2')}
                  />
                  <TreeItem
                    nodeId="32"
                    label="Fundamentos de Teoría de la Computación"
                    onClick={() => setSubject('Fundamentos de Teoría de la Computación')}
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
                    label="Matemática Discreta"
                    onClick={() => setSubject('Matemática Discreta')}
                  />
                  <TreeItem
                    nodeId="36"
                    label="Optativa Área Arquitectura, Sistemas Operativos y Redes"
                    onClick={() => setSubject('Optativa Área Arquitectura, Sistemas Operativos y Redes')}
                  />
                  <TreeItem
                    nodeId="37"
                    label="Optativa Área Algoritmos y Lenguajes"
                    onClick={() => setSubject('Optativa Área Algoritmos y Lenguajes')}
                  />
                </TreeItem>

                <TreeItem nodeId="38" label="5to año">
                  <TreeItem
                    nodeId="39"
                    label="Política y Gestión Tecnológicas"
                    onClick={() => setSubject('Política y Gestión Tecnológicas')}
                  />
                  <TreeItem
                    nodeId="40"
                    label="Aspectos Legales y Profesionales de la Informática"
                    onClick={() => setSubject('Aspectos Legales y Profesionales de la Informática')}
                  />
                  <TreeItem
                    nodeId="41"
                    label="Nuevos Escenarios"
                    onClick={() => setSubject('Nuevos Escenarios')}
                  />
                  <TreeItem
                    nodeId="42"
                    label="Optativa Área Ingeniería de Software y Bases de Datos"
                    onClick={() => setSubject('Optativa Área Ingeniería de Software y Bases de Datos')}
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
