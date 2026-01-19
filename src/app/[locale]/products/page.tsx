import { setRequestLocale } from 'next-intl/server';
import ProductsView from '@/components/views/products-view';

export default async function ProductsPage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <ProductsView />;
}
