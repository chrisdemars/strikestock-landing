
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-Time Analytics",
      description: "Get instant market data and advanced charting tools to make informed trading decisions.",
      icon: "📊"
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage machine learning algorithms to identify profitable trading opportunities.",
      icon: "🤖"
    },
    {
      title: "Risk Management",
      description: "Built-in risk assessment tools to protect your portfolio from market volatility.",
      icon: "🛡️"
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-titillium text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Trading Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed in the stock market, all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
