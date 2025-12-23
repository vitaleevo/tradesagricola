
export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  icon: string;
  label: string;
  value: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  application: string;
  differentiator: string;
  image: string;
  description: string;
}

export interface ProjectReference {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  image: string;
}
