import { setRequestLocale } from 'next-intl/server';
import ContactView from '@/components/views/contact-view';

export default async function ContactPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <ContactView />;
}
