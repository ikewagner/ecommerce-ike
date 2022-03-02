export const formatCurrency = (amount = 0, currency = 'BRL') =>
   new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
     amount / 100
   );

   export const isClient = typeof window === 'object';