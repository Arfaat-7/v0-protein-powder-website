import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Fitness Coach, Mumbai",
      content:
        "Finally, a brand that doesn't hide behind fancy marketing. The transparency is refreshing, and the product actually delivers.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "CrossFit Athlete, Delhi",
      content:
        "I've tried dozens of protein powders. This is the first one where I know exactly what I'm putting in my body. Love the real cocoa taste!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Bodybuilder, Bangalore",
      content:
        "The AI coach feature is game-changing. It's like having a personal trainer in my pocket. Plus, the protein quality is top-notch.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Loved by athletes across India
          </h2>
          <p className="text-muted-foreground">Join thousands who've made the switch to transparent nutrition.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
