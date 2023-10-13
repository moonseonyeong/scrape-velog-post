import { NextRequest, NextResponse } from 'next/server';
import { scrapeVelogPosts } from 'velog-post-scraper';

export async function POST(req: Request) {
  const { userId } = await req.json();

  const { posts } = await scrapeVelogPosts(userId);

  return NextResponse.json({ posts });
}
