import { useEffect, useState } from "react"
import { firestore } from '../../config'
import Card from '../../components/card/card'
import { Item } from "../../types/types"

export default function CardList(){
    const [comercios, setComercios] = useState<Array<any>>([])
    
    useEffect(() => {
        //@ts-ignore
        // setComercios(getComerciosFromFirestore())
        console.log(comercios)
      }, [])
    
    const getComerciosFromFirestore = async () => {
        await firestore
        .collection("restaurants")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                comercios.push(data);
            });
        }); 
    }

    return (
        <div>
            <Card url={'https://firebasestorage.googleapis.com/v0/b/pedidosnow-276a6.appspot.com/o/Captura.JPG?alt=media&token=f067190a-b0e1-4378-a6f4-a1e0eb907537'} titulo={'Paella con camarones'} descripcion={'Comida española con arroz y calamares'}/>
        </div>
    )

}