export interface NavItem {
    label: string;
    href: string;
}

export interface StatItem {
    icon: string;
    label: string;
    value: string;
}

export interface ServiceItem {
    title: string;
    desc: string;
    icon: string;
    img: string;
}

export interface ProductItem {
    title: string;
    desc: string;
    img: string;
}

export interface ProjectReference {
    title: string;
    cat: string;
    loc: string;
    img: string;
}

export interface NewsArticle {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    img: string;
    content: React.ReactNode;
}

export interface JobOpening {
    title: string;
    type: string;
    location: string;
    dept: string;
}
