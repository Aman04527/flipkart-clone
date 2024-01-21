import React from 'react'
import ItemsPage from './ItemsPage'

const ProductsPage = () => {
  return (
    <section>
      <h1 className='flex items-center justify-center text-3xl italic text-green-700 my-6'>Grocery</h1>
      <p className='text-base/loose text-gray-400'>Whether you work from home or office or other workplaces, daily grocery items are a requisite for everybody. Regardless of the size of the family or where you live, one can easily browse for the required food or other daily use products and have them brought to your home. Explore the variety of products, whether oils or foodgrains, from the online stock and choose the quantity required. You can save the time otherwise lost in waiting in lengthy queues for billing and payments by easily adding the chosen items to your cart online. Select the required date for delivery and pay with a suitable payment option. This will help you receive the items whenever you need them and in the available quantity. Essentials needed every day, like spices, daals, sugar, coffee powder, salt, etc., can be easily shopped online and delivered to your home. Other items like cleaning liquids, shower gels, fabric softeners, toothpaste, etc., can also be bought online. Buy grocery and more from brands such as Kellogg’s, Tata Gold, Parle G, Lays, etc. Order the online grocery comfortably from home for timely doorstep delivery. You may also place an order for the comfort and convenience of your loved ones who cannot move out of the house and shop. The information you are reading has been last updated on 18-Jan-24.</p>
      <section className='w-full my-6 bg-white relative'>
        <ItemsPage />
      </section>
    </section>
  )
}

export default ProductsPage