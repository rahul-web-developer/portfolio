import React from 'react'

const PortFolio = () => {

  const projects = [
    {
      title: 'Ecom',
      image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1'
    },
    {
      title: 'Ecom',
      image: 'https://island.lk/wp-content/uploads/2022/08/shop1.png'
    },
    {
      title: 'Ecom',
      image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1'
    },
    {
      title: 'Ecom',
      image: 'https://island.lk/wp-content/uploads/2022/08/shop1.png'
    },
    {
      title: 'Ecom',
      image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1'
    },
    {
      title: 'Ecom',
      image: 'https://island.lk/wp-content/uploads/2022/08/shop1.png'
    },
    {
      title: 'Ecom',
      image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1'
    },
    {
      title: 'Ecom',
      image: 'https://island.lk/wp-content/uploads/2022/08/shop1.png'
    },
    {
      title: 'Ecom',
      image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1'
    },
    {
      title: 'Ecom',
      image: 'https://island.lk/wp-content/uploads/2022/08/shop1.png'
    },
    {
      title: 'Ecom',
      image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2024/05/22da9-malls-in-mumbai.jpg?fit=1000%2C678&ssl=1'
    },
    {
      title: 'Ecom',
      image: 'https://island.lk/wp-content/uploads/2022/08/shop1.png'
    },
  ]

  return (
    <div className='w-full h-full'>
      
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center'
     
      >
        {
          projects.map((item, index) => (
            <div 
            className='flex flex-col p-4 rounded-lg justify-center'
            style={{
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}>
             <img 
             className=''
             src={item.image}/>
             <h1>{item.title}</h1>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default PortFolio