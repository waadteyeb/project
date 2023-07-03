import { Layout } from '@components'
import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <Layout>
      <Link className='bg-blue-900 text-white rounded-md py-1 px-2' href={'/products/new'}>Ajouter un nouveau produit</Link>
    </Layout>
  )
}
