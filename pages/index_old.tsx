import React, { useState, useEffect } from 'react'
import CustomDrawer from '../components/drawer/drawer'
import Head from 'next/head'
import { auth } from '../config'
import Typography from '@material-ui/core/Typography'
import styles from './login.module.css'
import { ItemMenu } from '../types/types'
import { getMenu } from '../functions/getMenu'
import Button from '@material-ui/core/Button'
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { firestore } from '../config'

export default function Login() {
  const [user, setUser] = useState(null)
  const [menu, setMenu] = useState<[ItemMenu]>()
  const [logged, setLogged] = useState(false)
  const provider = new auth.GoogleAuthProvider()

  useEffect(() => {
    //@ts-ignore
    setMenu(getMenu())
  }, [])

  useEffect(() => {
    user && getUsersFromFirestore()
  }, [user])

  // Logueo con Google
  // const signIn = () => {
  //   auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       //@ts-ignore
  //       const user = result.user
  //       setUser({ userId: user.uid, userName: user.displayName })
  //     })
  //     .catch()
  // }

  // Logueo con mail y contraseña
  const signIn = async () => {
    const result =  await auth().signInWithEmailAndPassword('javier.rodriguez@hotmail.com.ar', '123456');
    const user = result.user
    setUser({ userId: user.uid, userName: user.displayName });
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        //@ts-ignore
        setUser(null)
        setLogged(false)
        sessionStorage.clear()
        //@ts-ignore
        setMenu(getMenu())
      })
      .catch()
  }

  const getUsersFromFirestore = async () => {
    if (user) {
      await firestore
        .collection('users')
        .where('uid', '==', user.userId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc) {
              sessionStorage.setItem('tipo', doc.data().type)
              setLogged(true)
              //@ts-ignore
              setMenu(getMenu())
            } 
          })
        })
        .catch()
        .finally(() =>
          !sessionStorage.getItem('tipo') && alert('Usted no esta dado de alta en el sistema')
        )
    }
  }

  return (
    <CustomDrawer
      content={
        <>
          <Head children={<title>Login</title>} />
          {user && logged ? (
            <Typography variant="h6" noWrap>
              Bienvenido {user.userName}
            </Typography>
          ) : (
            <div className={styles.form}>
              <Button
                className={styles.button}
                variant="contained"
                startIcon={<VpnKeyRoundedIcon />}
                onClick={signIn}
              >
                Ingresar
              </Button>
            </div>
          )}
          <br />
          <div className={styles.form}>
            <Button
              className={styles.button}
              variant="contained"
              startIcon={<ExitToAppRoundedIcon />}
              onClick={signOut}
            >
              Cerrar sesion
            </Button>
          </div>
        </>
      }
      menu={menu}
    />
  )
}