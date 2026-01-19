import { setRequestLocale } from 'next-intl/server';
import ServicesView from '@/components/views/services-view';

export default async function ServicesPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <ServicesView />;
}
