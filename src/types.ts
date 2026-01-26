
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
