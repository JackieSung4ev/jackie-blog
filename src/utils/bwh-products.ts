import fs from 'node:fs';
import path from 'node:path';

type RawTier = {
  id: string;
  name: string;
  desc: string;
};

type RawDatacenter = {
  id: string;
  name: string;
  desc: string;
};

type RawLocation = {
  city: string;
  country: string;
  countryCode: string;
  datacenters: RawDatacenter[];
};

type RawPrice = {
  cents: number;
  currency: string;
  period: string;
};

type RawProduct = {
  id: number;
  name: string;
  ssd: number;
  ram: number;
  cpu: number;
  cpuInfo?: string;
  transfer: number;
  link: number;
  prices: RawPrice[];
  outOfStock: boolean;
  tiers: string[];
  datacenters: Record<string, number>;
};

type RawOrderData = {
  tiers: RawTier[];
  locations: RawLocation[];
  products: RawProduct[];
};

export type ProductLocation = {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  datacenter: string;
  desc: string;
  optionValue: number;
};

export type Product = {
  id: number;
  name: string;
  tierIds: string[];
  ram: string;
  storage: string;
  cpu: string;
  transfer: string;
  port: string;
  prices: string[];
  outOfStock: boolean;
  affiliateUrl: string;
  locations: ProductLocation[];
};

export type ProductTier = {
  id: string;
  name: string;
  desc: string;
  products: Product[];
};

const sourceFile = path.join(process.cwd(), '.source', 'bandwagonhost-order-data.json');
const affiliateBase = 'https://bandwagonhost.com/aff.php?aff=13725';

export const affiliateUrl = (pid?: number | string) => `${affiliateBase}${pid ? `&pid=${pid}` : ''}`;

const plainText = (value: string) =>
  value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>|<\/li>|<\/ul>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

const raw = JSON.parse(fs.readFileSync(sourceFile, 'utf-8')) as RawOrderData;

const datacenters = new Map<string, ProductLocation>();

for (const location of raw.locations) {
  for (const datacenter of location.datacenters) {
    datacenters.set(datacenter.id, {
      id: datacenter.id,
      city: location.city,
      country: location.country,
      countryCode: location.countryCode,
      datacenter: datacenter.name,
      desc: datacenter.desc,
      optionValue: 0,
    });
  }
}

const formatDecimal = (value: number, suffix: string) => {
  const text = Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.?0+$/, '');
  return `${text} ${suffix}`;
};

const formatStorage = (mb: number) => {
  if (mb >= 1000000) return formatDecimal(mb / 1000000, 'TB');
  if (mb >= 1000) return formatDecimal(mb / 1000, 'GB');
  return formatDecimal(mb, 'MB');
};

const formatMemory = (mb: number) => {
  if (mb >= 1024 && mb % 1024 === 0) return formatDecimal(mb / 1024, 'GB');
  return formatDecimal(mb, 'MB');
};

const formatTransfer = (mb: number) => {
  if (mb >= 1000000) return formatDecimal(mb / 1000000, 'TB');
  if (mb >= 1000) return formatDecimal(mb / 1000, 'GB');
  return formatDecimal(mb, 'MB');
};

const formatPort = (mbps: number) => {
  if (mbps >= 1000) return formatDecimal(mbps / 1000, 'Gbps');
  return formatDecimal(mbps, 'Mbps');
};

const formatPrice = (price: RawPrice) => {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 2,
  }).format(price.cents / 100);

  return `${amount} / ${price.period}`;
};

const toProduct = (product: RawProduct): Product => ({
  id: product.id,
  name: product.name,
  tierIds: product.tiers,
  ram: formatMemory(product.ram),
  storage: formatStorage(product.ssd),
  cpu: `${product.cpu} vCPU${product.cpuInfo ? ` (${product.cpuInfo})` : ''}`,
  transfer: formatTransfer(product.transfer),
  port: formatPort(product.link),
  prices: product.prices.map(formatPrice),
  outOfStock: product.outOfStock,
  affiliateUrl: affiliateUrl(product.id),
  locations: Object.entries(product.datacenters).flatMap(([id, optionValue]) => {
    const datacenter = datacenters.get(id);
    return datacenter ? [{ ...datacenter, optionValue }] : [];
  }),
});

const products = raw.products.map(toProduct);

export const getProductTiers = (): ProductTier[] =>
  raw.tiers.map((tier) => ({
    ...tier,
    desc: plainText(tier.desc),
    products: products.filter((product) => product.tierIds.includes(tier.id)),
  }));

export const getProducts = (): Product[] => products;

export const productCount = products.length;
