import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TransparencySection() {
  const costBreakdown = [
    { item: "Whey Protein Concentrate", cost: "₹25.00", percentage: 55 },
    { item: "Real Cocoa Powder", cost: "₹5.00", percentage: 11 },
    { item: "Natural Sweetener (Stevia)", cost: "₹2.50", percentage: 5.5 },
    { item: "Packaging", cost: "₹3.00", percentage: 6.7 },
    { item: "Quality Testing", cost: "₹2.00", percentage: 4.4 },
    { item: "Operations & Logistics", cost: "₹4.50", percentage: 10 },
    { item: "Our Margin", cost: "₹3.00", percentage: 6.7 },
  ]

  const totalCost = costBreakdown.reduce((acc, item) => acc + Number.parseFloat(item.cost.replace("₹", "")), 0)

  return (
    <section id="transparency" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Full Transparency
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            See where your money goes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're the first protein brand in India to show you the complete cost breakdown. No hidden margins, no
            mystery ingredients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Cost Breakdown Per Serving</span>
                <Badge className="bg-primary text-primary-foreground">₹{totalCost.toFixed(2)}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {costBreakdown.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{item.item}</span>
                    <span className="text-muted-foreground">{item.cost}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Only 6.7% Margin</h3>
                <p className="text-primary-foreground/80">
                  While other brands take 40-60% margins, we keep ours at just 6.7%. Because your gains shouldn't fund
                  our yachts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What this means for you</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Premium quality at fair prices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Know exactly what you're consuming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Support ethical business practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
