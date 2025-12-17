export function StatsSection() {
  const stats = [
    { value: "24g", label: "Protein per scoop", description: "High-quality whey" },
    { value: "100%", label: "Natural ingredients", description: "No artificial anything" },
    { value: "₹45", label: "Cost per serving", description: "Transparent pricing" },
    { value: "5★", label: "Customer rating", description: "Based on 2,000+ reviews" },
  ]

  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
