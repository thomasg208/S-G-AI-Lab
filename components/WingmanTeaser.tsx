"use client"



export default function WingmanTeaser() {
  return (
    <section className="py-16 md:py-24 relative bg-gray-950">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
          
          <div className="relative w-full aspect-video bg-gray-900">
             <iframe 
               className="absolute inset-0 w-full h-full"
               src="https://www.youtube.com/embed/Lm6EIjSqarE?rel=0&modestbranding=1"
               title="Wingman Demonstration"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
             ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  )
}
