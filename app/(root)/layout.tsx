<<<<<<< HEAD
import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
=======
import React, { ReactNode } from 'react'

const Rootlayout = ( {children }: { children: ReactNode }) => {
  return (
    <main>

        {children}

    </main>
  )
}

export default Rootlayout
>>>>>>> d893d9c6da674d46a34c23440d8d0c5fa122122b
