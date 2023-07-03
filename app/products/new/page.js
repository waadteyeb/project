'use client'
import { Layout } from '@components'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'

export default function page() {
  const[title,setTitle]=useState('')
  const[description,setDescription]=useState('')
  const[price,setPrice]=useState('')
  const [goToProducts,setGoToProducts]=useState(false);
  const router=useRouter();
  async function createProduct(ev){
    ev.preventDefault();
    const axios = require('axios').default;
    const data={title,description,price}
    await axios.post('/products',data);
    setGoToProducts(true);

  }
  if(goToProducts){
    return router.push('/products')
  }
  return (
    
    <Layout> <form onSubmit={createProduct}><h1 ><b>Nouveau produit</b></h1>
    <label >Nom du produit</label>
    <input
     type="text" 
     placeholder="nom du produit" 
     value={title} 
     onChange={ev=>setTitle(ev.target.value)}/>
    <label >Description</label>
    <textarea 
    placeholder="description du produit"
     value={description} onChange={ev=>setDescription(ev.target.value)}/>
    <label >Prix (TND)</label>
    <input type="text" placeholder='prix' value={price} onChange={ev=>setPrice(ev.target.value)}/>
    <button type='submit' 
    className="btn-primary">Ajouter le produit</button></form>
    </Layout>
    
  )
}
