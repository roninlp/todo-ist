import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  getall: protectedProcedure.query(({ ctx }) => {
    return ctx.todo.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }),
  create: protectedProcedure
    .input(z.object({ task: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todo.create({
        data: {
          task: input.task,
          userId: ctx.session.user.id,
        },
      });
    }),
});
