import React from 'react'

function Card({data, className=""}) {
  return (
    <div className={`card bg-base-100 w-92 shadow-sm mb-4 ${className} `}>
  <figure>
    <img
      src={data.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {data.title}
      <div className="badge badge-outline">{data.catogory}</div>
    </h2>
    <p>{data.desc}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${data.price}</div>
      <div className="badge badge-outline">Buy now</div>
    </div>
  </div>
</div>
  )
}

export default Card