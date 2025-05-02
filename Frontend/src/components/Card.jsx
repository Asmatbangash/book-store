import React from 'react'

function Card({img, title, desc, price}) {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">$0</div>
    </div>
  </div>
</div>
  )
}

export default Card