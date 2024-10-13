import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Balancer from 'react-wrap-balancer';

import { type TeamItem } from './_constants/team';

export function TeamSkeleton({ member }: { member: TeamItem }) {
    return (
        <Card>
            <CardHeader className="flex flex-col items-center">
                <Skeleton className="mb-4 size-32 rounded-full" />
                <Skeleton className="h-6 w-24" />
                <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                    <Balancer>{member.bio}</Balancer>
                </p>
            </CardContent>
        </Card>
    );
}
