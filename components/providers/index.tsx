'use client';

import { ReactQueryProvider } from './react-query-provider';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ThemeProvider disableTransitionOnChange attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
