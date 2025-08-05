import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { jwt, openAPI } from "better-auth/plugins";
import { db } from '@/index';
export const auth = betterAuth({
	plugins: [openAPI(), jwt()],
	emailAndPassword: {
		enabled: true,
	},
	database: drizzleAdapter(db, {
		provider: "pg", // or "mysql", "sqlite"
	}),
});
