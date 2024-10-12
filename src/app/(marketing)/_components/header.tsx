'use client';

import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

import { navigation } from '../_constants/navigation';

export function Header() {
    const scrolled = useScroll(50);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 transition-all duration-300',
                scrolled
                    ? 'border-b bg-background/50 backdrop-blur-xl'
                    : 'border-b border-transparent bg-transparent',
            )}
        >
            <Container reverse>
                <div className="container flex h-16 items-center justify-between px-6 py-4">
                    <Link className="text-xl font-bold" href="#main">
                        Nestor VRC
                    </Link>
                    <nav className="flex items-center space-x-4">
                        {navigation.map((item) => (
                            <Link
                                className="text-sm text-foreground/80 hover:text-foreground hover:underline"
                                href={item.href}
                                key={item.href}
                                {...(item.external && {
                                    rel: 'noopener noreferrer',
                                    target: '_blank',
                                })}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Separator className="h-6" orientation="vertical" />
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://github.com/nestor-vrc"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <GithubIcon className="size-5 text-foreground/80 hover:text-foreground" />
                                        <span className="sr-only">GitHub</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Find us on GitHub</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
