import React from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Marketing Head, Real Leasing India",
    image: "client1.png",
    quote:
      "Zenny has redefined our digital presence. The layout is intuitive and the design is simply inspired!",
  },
  {
    name: "Sneha Verma",
    role: "Creative Lead, Luxe Spaces",
    image: "girl.png",
    quote:
      "The attention to detail and responsiveness helped us attract premium clients seamlessly.",
  },
  {
    name: "Rahul Mehra",
    role: "Realty Advisor, Nova Spaces",
    image: "client3.png",
    quote:
      "Zenny’s execution was flawless — clear communication and top-notch design execution.",
  },
];

const StarRating = () => (
  <div className="flex justify-center gap-1 mt-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    ))}
  </div>
);

const Testimonial = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((client, index) => (
           <div
  key={index}
  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
>
  {/* Profile Image + Name + Role */}
  <div className="flex flex-col items-center mb-4">
    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#3b3b9c]">
      <img
        src={client.image}
        alt={client.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://ui-avatars.com/api/?name=" +
            encodeURIComponent(client.name) +
            "&background=3b3b9c&color=fff&rounded=true";
        }}
      />
    </div>
    <h4 className="font-semibold text-lg mt-2 text-[#3b3b9c]">{client.name}</h4>
    <p className="text-sm text-gray-500">{client.role}</p>
    <StarRating />
  </div>

  {/* Quote */}
  <p className="text-gray-700 text-sm italic mt-2">“{client.quote}”</p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;