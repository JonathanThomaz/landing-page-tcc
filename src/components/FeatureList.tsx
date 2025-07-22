import type { FeatureItem } from '../types';

interface FeatureListProps {
  features: FeatureItem[];
}

export const FeatureList = ({ features }: FeatureListProps) => (
  <ul className="list-unstyled text-start mt-3">
    {features.map((feature, index) => (
      <li key={index} className="mb-2">
        <i className={`${feature.icon} ${feature.colorClass} me-2`}></i>
        {feature.text}
      </li>
    ))}
  </ul>
);
