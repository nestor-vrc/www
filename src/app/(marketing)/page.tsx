import { BackgroundBeams } from '@/components/ui/background-beams';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
    ArrowRightIcon,
    ChevronRightIcon,
    GithubIcon,
    SparklesIcon,
    TargetIcon,
    UsersIcon,
} from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { TeamContainer } from './_components/team/team-container';
import { tools } from './_constants/tools';

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <section>
                <BackgroundBeams className="min-h-[calc(100vh-64px)] border-b">
                    <Container className="container relative flex flex-col items-center py-20 text-center">
                        <h1 className="max-w-3xl">
                            <Balancer>
                                Welcome to{' '}
                                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                    Nestor VRC
                                </span>
                            </Balancer>
                        </h1>
                        <p className="mt-4 max-w-3xl text-xl text-muted-foreground">
                            <Balancer>
                                Your Gateway to Exciting VRChat Tools and Community! Explore
                                innovative resources, connect with fellow VRChat enthusiasts, and
                                elevate your virtual experience.
                            </Balancer>
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <Link className={buttonVariants({ size: 'lg' })} href="#tools">
                                Explore Tools
                                <ChevronRightIcon className="ml-2 size-4" />
                            </Link>
                            <Link
                                className={buttonVariants({ size: 'lg', variant: 'outline' })}
                                href="/discord"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Join Our Community
                                <GithubIcon className="ml-2 size-4" />
                            </Link>
                        </div>
                    </Container>
                </BackgroundBeams>
            </section>

            {/* About Us */}
            <section className="bg-muted/50 py-20">
                <Container className="container">
                    <h2 className="mx-auto text-center">
                        <Balancer>About Nestor VRC</Balancer>
                    </h2>
                </Container>
                <Container className="container mt-12 grid gap-8 divide-x divide-border md:grid-cols-3">
                    <div className="px-6">
                        <div>
                            <UsersIcon className="mb-2 size-10" />
                            <h3>Our Mission</h3>
                        </div>
                        <p className="mt-4 text-muted-foreground">
                            At Nestor VRC, we empower the VRChat community with innovative tools and
                            resources, creating a collaborative space for creators and enthusiasts.
                            Our mission is to enhance virtual experiences and foster connections
                            among users worldwide.
                        </p>
                    </div>

                    <div className="px-6">
                        <div>
                            <TargetIcon className="mb-2 size-10" />
                            <h3>Our Vision</h3>
                        </div>
                        <p className="mt-4 text-muted-foreground">
                            We envision an inclusive community where everyone has access to the
                            tools they need to express their creativity. Through collaboration and
                            innovation, we aim to elevate the VRChat universe.
                        </p>
                    </div>

                    <div className="px-6">
                        <div>
                            <SparklesIcon className="mb-2 size-10" />
                            <h3>Join Us</h3>
                        </div>
                        <p className="mt-4 text-muted-foreground">
                            Whether you&apos;re a seasoned player or just starting, there&apos;s a
                            place for you here. Join us, share your ideas, and be part of a thriving
                            community that celebrates creativity and collaboration!
                        </p>
                    </div>
                </Container>
            </section>

            {/* Tools & Resources */}
            <section className="bg-muted/50 py-20" id="tools">
                <Container className="container flex flex-col items-center">
                    <h2 className="mx-auto text-center">Tools & Resources</h2>
                    <p className="mt-4 max-w-2xl text-base text-foreground/80">
                        <Balancer>
                            Discover a range of powerful tools designed to enhance your VRChat
                            experience. From developing immersive worlds to optimizing performance,
                            Nestor VRC has you covered!
                        </Balancer>
                    </p>
                </Container>
                <Container className="container mt-12 grid divide-y divide-border">
                    {tools.map((tool) => (
                        <div className="py-4" key={tool.title}>
                            <h3>{tool.title}</h3>
                            <p className="mt-4 text-foreground/80">{tool.subtitle}</p>
                            <p className="mt-4 text-muted-foreground">{tool.description}</p>
                            <Link
                                className={buttonVariants({
                                    className: 'mt-4',
                                    size: 'sm',
                                    variant: 'outline',
                                })}
                                href={tool.href}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Explore {tool.title}
                                <ChevronRightIcon className="ml-2 size-4" />
                            </Link>
                        </div>
                    ))}
                </Container>
            </section>

            {/* Team */}
            <TeamContainer />

            {/* CTA */}
            <section className="py-40">
                <Container className="container flex flex-col items-center justify-center">
                    <h2 className="max-w-3xl text-center text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
                        <Balancer>
                            Join the
                            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                Nestor VRC
                            </span>{' '}
                            Community Today!
                        </Balancer>
                    </h2>
                    <p className="mt-2 max-w-2xl text-center text-lg text-muted-foreground">
                        <Balancer>
                            Get access to powerful tools, connect with fellow VRChat creators, and
                            take your virtual experiences to the next level. Whether you&apos;re a
                            developer, creator, or VRChat enthusiast, our community is here to
                            support and inspire you!
                        </Balancer>
                    </p>
                    <Link
                        className={buttonVariants({
                            className: 'mt-6',
                            size: 'lg',
                        })}
                        href="/discord"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Get Started
                        <ArrowRightIcon className="ml-2 size-4" />
                    </Link>
                </Container>
            </section>
        </>
    );
}
