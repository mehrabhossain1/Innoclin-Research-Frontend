import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

interface TokenPayload {
    userId: string;
    email: string;
    role: string;
    name: string;
    exp: number;
    iat: number;
}

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("auth-token")?.value;

        if (!token) {
            return NextResponse.json({ error: "No token found" });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;

        return NextResponse.json({
            token: token.substring(0, 20) + "...",
            decoded,
            secret: JWT_SECRET ? "Secret loaded" : "Secret not loaded",
        });
    } catch (error) {
        return NextResponse.json({
            error: "Token verification failed",
            details: error,
        });
    }
}
