import { transactions } from "@/auth-schema";
import { db } from "@/index";
import { z } from "zod";
const schema = z
  .object({
    type: z.string(),
    source: z.string(),
    amount: z.string(),
    date: z.string(),
    category: z.string(),
    desc: z.string(),
    auth_id: z.string(),
    message_hash_code: z.string(),
  })
  .required();
export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);
    const validated = schema.parse(data);

    const tx = await db
      .insert(transactions)
      .values({
        type: validated.type,
        source: validated.source,
        amount: parseFloat(validated.amount),
        date: validated.date,
        category: validated.category,
        desc: validated.desc,
        authId: validated.auth_id,
        message_hash_code: validated.message_hash_code,
      })
      .returning();
    if (tx.length > 0) {
      return Response.json({ success: true, error: "tx inserted" });
    } else {
      return Response.json(
        { success: false, error: "error inserting tx" },
        { status: 400 },
      );
    }
  } catch (e) {
    if (e instanceof z.ZodError) {
      return Response.json(
        { success: false, error: z.treeifyError(e) },
        { status: 400 },
      );
    } else {
      return Response.json({ success: false, error: e }, { status: 400 });
    }
  }
}
