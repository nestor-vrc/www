import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    runtimeEnv: {
        BOT_TOKEN: process.env.BOT_TOKEN,
        NODE_ENV: process.env.NODE_ENV,
    },
    server: {
        BOT_TOKEN: z.string(),
        NODE_ENV: z.enum(['development', 'test', 'production']),
    },
});
