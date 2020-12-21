import React from 'react'

const RestaurantCard = ({data}) => {
  console.log('@@@@@@@@@@@',data)
  const { description, image_url, res_count, title } = data

  return (
    <div className="card-body">
      <img className="img-hotel" src={image_url} alt="" />
      <div>
        <p className="title">{title}</p>
        <p className="mb-2 text-muted">{res_count} Items available</p>
        <p className="desc">{description}</p>
      </div>
    </div>
  )
}

export default RestaurantCard;