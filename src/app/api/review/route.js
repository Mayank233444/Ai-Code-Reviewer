// app/api/review/route.js

export async function POST(req) {
    const body = await req.json();
  
    const fakeResponse = {
      result: [
        "✅ Well-structured code",
        "⚠️ Consider using 'const' instead of 'let'",
        `📌 Language detected: ${body.language}`,
      ],
    };
  
    return new Response(JSON.stringify(fakeResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  