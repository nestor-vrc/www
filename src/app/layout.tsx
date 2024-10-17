import type { Metadata } from 'next';

import { commonMetaData } from '@/lib/meta';
import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';
import { Provider } from 'react-wrap-balancer';

export const metadata: Metadata = commonMetaData({
    description:
        'Join Nestor VRC to access advanced tools and resources designed for VRChat enthusiasts. Enhance your virtual experiences and connect with a community of creators dedicated to innovation and collaboration.',
    title: 'Nestor VRC – Empowering VRChat Creators with Innovative Tools',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html className="dark" lang="en" suppressHydrationWarning>
            <body className={cn(fontSans.variable, fontHeading.variable, fontMono.variable)}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
};

export default RootLayout;

export const revalidate = 300; // 5 minutes
