export default function currency(cents: number, minimumFractionDigits = 2): string {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
    maximumFractionDigits: 2
  })
}
