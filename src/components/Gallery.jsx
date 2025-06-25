const images = [
  {
    id: 1,
    title: "Modern Dashboard",
    description: "Clean and intuitive dashboard design",
    src: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Mobile Interface",
    description: "Responsive mobile-first design",
    src: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Data Visualization",
    description: "Beautiful charts and analytics",
    src: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "User Experience",
    description: "Seamless user interactions",
    src: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Performance",
    description: "Optimized for speed and efficiency",
    src: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Scalability",
    description: "Built to grow with your needs",
    src: "/placeholder.svg?height=300&width=400",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Gallery</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            See what you can build
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore examples of modern web applications built with React and Vite.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.id} className="card-hover group">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200">
                <img
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
