import './globals.css';
import { ChakraProviders } from '../lib/ChakraProviders';

export const metadata = {
  title: 'AI Code Reviewer',
  description: 'Paste your code and get reviews!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProviders>
          {children}
        </ChakraProviders>
      </body>
    </html>
  );
}
