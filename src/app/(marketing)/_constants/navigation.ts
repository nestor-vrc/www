interface NavigationItem {
    external?: boolean;
    href: string;
    title: string;
}

export const navigation: NavigationItem[] = [
    {
        href: '#tools',
        title: 'Tools & Resources',
    },
    {
        external: true,
        href: '/discord',
        title: 'Community',
    },
];
