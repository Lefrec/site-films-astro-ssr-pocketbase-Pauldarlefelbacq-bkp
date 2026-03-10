import { type APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');

  const pbRes = await fetch('http://127.0.0.1:8081/api/collections/users/auth-with-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!pbRes.ok) {
    return new Response('Login failed', { status: pbRes.status });
  }

  const data = await pbRes.json();
  // set cookies, etc.
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
