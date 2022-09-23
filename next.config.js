/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['files.deliveryturbo.com.br'],
  },
  env: {
    NEXT_APP_SUPABASE_URL: 'https://puqkintctrmbgpennqpf.supabase.co',
    NEXT_APP_ANON_KEY:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1cWtpbnRjdHJtYmdwZW5ucXBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM3MDgzOTIsImV4cCI6MTk3OTI4NDM5Mn0.TZS9FBwIXL2qu6UIZFcNqF1LtlpQnNzCbH676I-EMKU',
  },
};
