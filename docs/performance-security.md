# Performance and Security Strategy

## Performance Testing
We use [k6](https://k6.io/) for load testing. The script is located at `tests/perf/script.js`.

### Prerequisites
- Install k6: `brew install k6` (macOS) or download from [k6.io](https://k6.io/docs/getting-started/installation/).

### Scenarios
1.  **Smoke Test**: 20 VUs request the homepage for 30s.
2.  **Load Test**: Sustain 20 VUs for 1 minute.
3.  **Stress Spike**: Spike to 50 VUs for 30s.

### Running Tests
Run the test against your local server or staging environment:
```bash
k6 run -e BASE_URL=http://localhost:3000 tests/perf/script.js
```

### Thresholds
- **Latency (p95)**: < 500ms
- **Error Rate**: < 1%

---

## Security Hardening
### .htaccess (cPanel / Apache)
We have included a `public/.htaccess` file that is deployed with your static export. It enforces:

- **CSP**: Content Security Policy restricting sources for scripts, styles, and images.
- **HSTS**: Strict Transport Security to force HTTPS.
- **X-Frame-Options**: Prevent clickjacking.
- **X-Content-Type-Options**: Prevent MIME type sniffing.

### Validation
We use **Zod** (`src/lib/schemas.ts`) to validate form inputs (Name, Email, Message) before processing/sending.

### Deployment Strategy (Static Export)
The project is configured to export as a static site (`output: 'export'`).
1.  Run `npm run build`.
2.  Upload the contents of the `out/` directory to your cPanel `public_html` folder.
