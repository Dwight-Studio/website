import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        useCache: true,
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);