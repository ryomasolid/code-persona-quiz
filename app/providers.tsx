import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { FC, ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }: ProvidersProps) => {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};
