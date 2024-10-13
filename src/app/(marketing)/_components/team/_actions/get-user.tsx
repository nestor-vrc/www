import { env } from '@/env';

interface DiscordUser {
    avatar: string;
    global_name: string;
    id: string;
}

export async function getUser(id: string): Promise<{ data?: DiscordUser; success: boolean }> {
    const response = await fetch(`https://discord.com/api/v10/users/${id}`, {
        headers: {
            Authorization: `Bot ${env.BOT_TOKEN}`,
        },
    });

    if (!response.ok) {
        return { success: false };
    }

    const data = await response.json();

    return { data, success: true };
}
