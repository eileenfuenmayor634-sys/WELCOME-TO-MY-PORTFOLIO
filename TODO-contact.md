# TODO - Fix formulario de contacto

## Step 1 (required): Set env vars for nodemailer
- Edit/create `.env` with:
  - EMAIL_USER (tu correo gmail)
  - EMAIL_PASS (app password de gmail)
  - EMAIL_TO (opcional, destino final)

## Step 2 (required): Start the email server
- Run: `npm run server`
- Verify console shows: `[email-server] listening on http://localhost:5175`

## Step 3 (required): Test POST request
- I verified with curl-like fetch from this repo:
  - Current response is **500** and body `{ "error": "Email service not configured" }`
  - That confirms env vars are missing.

## Step 4: After setting `.env`
- Re-test the POST; it should return **200** with body `{ "ok": true }`


