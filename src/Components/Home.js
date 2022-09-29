import React, {useContext} from 'react'
import { Store } from './signIn';

const HomeT =() => {

    const {data, setData} = useContext(Store);
    Store.Provider.displayName = "Store.Provider";


    console.log(data);


    
    
  return (
    <div>
            
            {data.map(item=><li key={item.id}>{item.name}</li>)}
       
        
    </div>
  )
}

export default HomeT;