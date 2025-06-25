import { Zap, Shield, Smartphone, Cloud, Code, Rocket } from "lucide-react"

const features = [
  {
    name: "Lightning Fast",
    description: "Vite provides instant server start and lightning-fast HMR for the best development experience.",
    icon: Zap,
  },
  {
    name: "Production Ready",
    description: "Optimized builds with code splitting and tree shaking for maximum performance.",
    icon: Shield,
  },
  {
    name: "Mobile First",
    description: "Responsive design that works perfectly on all devices and screen sizes.",
    icon: Smartphone,
  },
  {
    name: "Cloud Deploy",
    description: "Easy deployment to AWS, Vercel, Netlify, and other cloud platforms.",
    icon: Cloud,
  },
  {
    name: "Modern Stack",
    description: "Built with the latest React features, ES6+, and modern JavaScript tooling.",
    icon: Code,
  },
  {
    name: "Scalable",
    description: "Architecture designed to scale from small projects to enterprise applications.",
    icon: Rocket,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build modern apps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our React Vite setup comes with all the tools and optimizations you need for professional web development.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="card-hover bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
