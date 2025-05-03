import React from 'react';
import { emojiImg } from '../../public';

function About() {
  return (
    <div className="min-h-screen my-20 bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-left mb-10">
      That's the corner for discovering great books, supporting local authors, and diving into <span className='text-pink-500'>
      new worlds :) </span> 
      </h1>

      {/* Our Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-base leading-relaxed">
          Founded in 2015, BookNest began as a small independent bookstore with a big dream – to create a space where book lovers of all ages could connect. Over the years, we've grown into a beloved community hub, hosting book clubs, author events, and more.
        </p>
      </section>

      {/* What Makes Us Special */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">What Makes Us Unique</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Handpicked collections curated by passionate readers</li>
          <li>Support for local and indie authors</li>
          <li>Inviting spaces for reading, relaxing, and gathering</li>
          <li>Community-driven events, readings, and workshops</li>
        </ul>
      </section>

      {/* Meet the Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Sarah Johnson", role: "Founder & Curator" },
            { name: "Mark Lee", role: "Community Manager" },
            { name: "Emily Clark", role: "Events Coordinator" },
          ].map((member, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-3">
                <img src={emojiImg} alt="" className='rounded-full'/>
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">What Our Readers Say</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
            "BookNest is more than a bookstore — it's a sanctuary for readers!"
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
            "The team always knows just the right book to recommend."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;
