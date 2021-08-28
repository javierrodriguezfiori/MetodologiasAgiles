import React from 'react'
import UnarchiveRoundedIcon from '@material-ui/icons/UnarchiveRounded'
import ArchiveRoundedIcon from '@material-ui/icons/ArchiveRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'

export const getMenu = () => {
  const notLoggedMenu = [
    {
      text: 'Login',
      icon: <AccountCircleRoundedIcon />,
      url: '/',
    },
  ]

  const studentMenu = [
    {
      text: 'Login',
      icon: <AccountCircleRoundedIcon />,
      url: '/',
    },
    {
      text: 'Descargar Archivos',
      icon: <ArchiveRoundedIcon />,
      url: '/download-files',
    },
  ]

  const teacherMenu = [
    {
      text: 'Login',
      icon: <AccountCircleRoundedIcon />,
      url: '/',
    },
    {
      text: 'Subir Archivos',
      icon: <UnarchiveRoundedIcon />,
      url: '/upload-file',
    },
    {
      text: 'Descargar Archivos',
      icon: <ArchiveRoundedIcon />,
      url: '/download-files',
    },
    {
      text: 'Modificar Archivos',
      icon: <EditRoundedIcon />,
      url: '/update-file',
    },
    {
      text: 'Eliminar Archivos',
      icon: <DeleteForeverRoundedIcon />,
      url: '/delete-files',
    },
  ]

  if (typeof window !== 'undefined') {
    const userTypeAux = sessionStorage.getItem('userType')

    return userTypeAux
      ? userTypeAux === 'docente'
        ? teacherMenu
        : studentMenu
      : notLoggedMenu
  }
}
