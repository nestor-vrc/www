import { Container } from '@/components/ui/container';
import { Suspense } from 'react';
import Balancer from 'react-wrap-balancer';

import { team } from './_constants/team';
import { TeamCard } from './team-card';
import { TeamSkeleton } from './team-skeleton';

export function TeamContainer() {
    return (
        <section className="bg-gradient-to-b from-muted/50 to-background py-20">
            <Container className="container">
                <h2>Our Team</h2>
                <p className="mt-4 text-base text-foreground/80">
                    <Balancer>
                        Meet the passionate individuals behind Nestor VRC. We are a diverse group of
                        VRChat enthusiasts, developers, and creators who share a love for virtual
                        reality. Together, we aim to create a supportive environment that encourages
                        exploration and creativity.
                    </Balancer>
                </p>
            </Container>
            <Container className="container mt-12 grid gap-8 md:grid-cols-3">
                {team.map((member, index) => (
                    <Suspense fallback={<TeamSkeleton member={member} />} key={index}>
                        <TeamCard member={member} />
                    </Suspense>
                ))}
            </Container>
        </section>
    );
}
