import { NextRequest, NextResponse } from "next/server";
import { api } from "./services/api";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("motorShop.token");
  let url = req.url;
}
