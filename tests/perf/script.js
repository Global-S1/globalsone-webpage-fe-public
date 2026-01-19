import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 20 }, // Smoke (ramp up)
        { duration: '1m', target: 20 },  // Load
        { duration: '30s', target: 50 }, // Stress (short spike)
        { duration: '30s', target: 0 },  // Ramp down
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
        http_req_failed: ['rate<0.01'],    // http errors should be less than 1%
    },
};

export default function () {
    const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

    const res = http.get(BASE_URL);

    check(res, {
        'status was 200': (r) => r.status === 200,
        'protocol is HTTP/2': (r) => r.proto === 'HTTP/2.0', // Optional check if server supports it
    });

    sleep(1);
}
