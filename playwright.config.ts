import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3097',
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: 'NODE_TLS_REJECT_UNAUTHORIZED=0 npx next dev --port 3097',
    port: 3097,
    timeout: 30000,
    reuseExistingServer: true,
    env: {
      NODE_TLS_REJECT_UNAUTHORIZED: '0',
    },
  },
})
