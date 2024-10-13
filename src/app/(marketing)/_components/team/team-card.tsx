import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Balancer from 'react-wrap-balancer';

import { getUser } from './_actions/get-user';
import { type TeamItem } from './_constants/team';

export async function TeamCard({ member }: { member: TeamItem }) {
    const user = await getUser(member.discord);

    return (
        <Card>
            <CardHeader className="flex flex-col items-center">
                <Avatar className="mb-4 size-32">
                    <AvatarImage
                        alt={user.data ? user.data.global_name : 'User Avatar'}
                        className="rounded-full"
                        src={`https://cdn.discordapp.com/avatars/${member.discord}/${user.data?.avatar}`}
                    />
                    <AvatarFallback>
                        {user.data
                            ? user.data.global_name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')
                            : 'U'}
                    </AvatarFallback>
                </Avatar>
                <CardTitle>{user.data ? user.data.global_name : 'Unknown'}</CardTitle>
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
