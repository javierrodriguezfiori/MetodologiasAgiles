import { useEffect, useState } from "react"
import { firestore } from '../../config'
import Card from '../../components/card/card'
import { Item } from "../../types/types"

export default function CardList(){
    const [comercios, setComercios] = useState<Array<Item>>([])
    
    useEffect(() => {
        //@ts-ignore
        // setComercios(getComerciosFromFirestore())
        getComerciosFromFirestore()
    }, [])
    
    const getComerciosFromFirestore = async () => {
        setComercios([])

        await firestore
        .collection("restaurants")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                console.log(data);
                //@ts-ignore
                setComercios([...comercios, data])
            });
        }); 
    }

    return (
        <div>
            {JSON.stringify(comercios)}
            {comercios.map(rest=>
                <Card key={rest.url} url={rest.url} titulo={rest.titulo} descripcion={rest.descripcion}/>
            )}
        </div>
    )

}