import { NextRequest, NextResponse } from 'next/server';
import { downloadVelogPosts, scrapeVelogPosts } from 'velog-post-scraper';

export async function POST(req: Request) {
  const { posts } = await req.json();

  console.log(posts);

  await downloadVelogPosts(posts);

  return NextResponse.json({ success: true });
}
