import { ReactNode } from 'react';
import { DiscussFormVisibilityProvider } from '@/components/Common/Contexts/DiscussFormVisibility';
import { PageTransitionProvider } from '@/components/Common/Contexts/PageTransition';

const AppContexts = ({ children }: { children: ReactNode }) => {
  return (
    <DiscussFormVisibilityProvider>
      <PageTransitionProvider>{children}</PageTransitionProvider>
    </DiscussFormVisibilityProvider>
  );
};

export default AppContexts;
