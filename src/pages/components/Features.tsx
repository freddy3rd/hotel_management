// Features Section
import { FEATURES } from '@/constants/Data';

const FeaturesSection: React.FC = () => (
  <section className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
      {FEATURES.map((feature, idx) => (
        <div key={idx} className="text-center group cursor-pointer">
          <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
            {feature.icon}
          </div>
          <h3 className="font-serif font-semibold text-brand-800 mb-1">{feature.title}</h3>
          <p className="text-brand-500 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default FeaturesSection