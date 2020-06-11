import React from 'react';
import  CollectionPreview from  '../../components/colletion-preview/collection-preview.component';
import DATA_SHOP from './shop_data.js';

class ShopPage extends React.Component{
     constructor(){
        super();

        this.state = {
        collection:DATA_SHOP
        };
     }
    
     render(){
         const colletions = this.state.collection;
         return(
             <div>
              {
                colletions.map(({id, ...otherColletionProps})=>(
                    <CollectionPreview key={id} {...otherColletionProps} />
                 )) 
               }
              
            </div>);
     }
     
}

export default ShopPage;