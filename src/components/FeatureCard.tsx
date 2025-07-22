import type { FeatureCard as FeatureCardType } from '../types';
import { FeatureList } from './FeatureList';

interface FeatureCardProps {
  card: FeatureCardType;
}

export const FeatureCard = ({ card }: FeatureCardProps) => (
  <div className="col-lg-4">
    <div className="card h-100 shadow-sm card-hover">
      <div className="card-body text-center p-4">
        <div className="mb-3">
          <i className={`${card.icon} ${card.iconColor}`} style={{ fontSize: '3rem' }}></i>
        </div>
        <h5 className="card-title fw-bold">{card.title}</h5>
        <FeatureList features={card.features} />
      </div>
    </div>
  </div>
);
