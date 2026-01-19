import { setRequestLocale } from 'next-intl/server';
import ImpactView from '@/components/views/impact-view';

export default async function ImpactPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <ImpactView />;
}
