import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    { name: "Full Cost Transparency", us: true, others: false },
    { name: "100% Natural Ingredients", us: true, others: false },
    { name: "No Artificial Sweeteners", us: true, others: false },
    { name: "Third-Party Lab Tested", us: true, others: true },
    { name: "24g Protein Per Serving", us: true, others: true },
    { name: "Real Cocoa Flavor", us: true, others: false },
    { name: "AI Fitness Coach", us: true, others: false },
    { name: "Low Profit Margin (<10%)", us: true, others: false },
  ]

  return (
    <section id="compare" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">Honest Comparison</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">How we stack up</h2>
          <p className="text-muted-foreground">A transparent look at how Protein Pilot compares to other brands.</p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/50">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="text-sm font-medium text-muted-foreground">Feature</div>
              <div className="text-sm font-semibold text-primary">Protein Pilot</div>
              <div className="text-sm font-medium text-muted-foreground">Other Brands</div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-4 text-center items-center ${
                  index !== features.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm text-foreground text-left">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.us ? (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.others ? (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
