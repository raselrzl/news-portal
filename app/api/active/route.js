let activeUsers = 0;

export async function POST() {
  activeUsers += 1;
  return Response.json({ activeUsers });
}

export async function DELETE() {
  activeUsers = Math.max(activeUsers - 1, 0);
  return Response.json({ activeUsers });
}

export async function GET() {
  return Response.json({ activeUsers });
}
