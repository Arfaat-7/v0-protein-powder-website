import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Eye, Beaker, Heart, Sparkles, ShieldCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Only real ingredients. No artificial flavors, sweeteners, colors, or fillers.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "See exactly where every rupee goes with our complete cost breakdown.",
    },
    {
      icon: Beaker,
      title: "Lab Tested",
      description: "Third-party tested for purity and potency. Quality you can trust.",
    },
    {
      icon: Heart,
      title: "Real Cocoa Taste",
      description: "Delicious chocolate flavor from real cocoa — not synthetic flavoring.",
    },
    {
      icon: Sparkles,
      title: "AI Coach Integration",
      description: "Get personalized workout tips and nutrition advice from our AI assistant.",
    },
    {
      icon: ShieldCheck,
      title: "No Hidden Ingredients",
      description: "What you see is what you get. Complete ingredient disclosure.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Built different. Built better.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe you deserve to know exactly what you're putting in your body and paying for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
