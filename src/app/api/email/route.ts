import { serve } from "@novu/echo/next";
import { echo } from "@/app/echo/client";

export const { GET, POST, PUT } = serve({ client: echo });