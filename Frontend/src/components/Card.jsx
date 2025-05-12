import React from "react";

function Card({ data, className = "" }) {
  return (
    <div
      className={`card bg-base-100 w-92 shadow-sm mb-4 hover:scale-105 duration-200 cursor-pointer ${className} `}
    >
      <figure>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?uid=R167837725&semt=ais_hybrid&w=740"
          alt="books"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.title}
          <div className="badge badge-outline">{data.catogory}</div>
        </h2>
        <p>{data.desc}</p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">$ {data.price}</div>
          <div className="badge badge-outline py-4 hover:bg-pink-500 hover:text-amber-50 cursor-pointer duration-500 ease-in-out">
            Read
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
