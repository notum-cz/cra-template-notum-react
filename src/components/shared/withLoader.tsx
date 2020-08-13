import React, { ComponentType } from "react";

export type WithLoaderProps = {
  isLoading: boolean;
};

export const withLoader = <P extends object>(
  WrappedComponent: ComponentType<P>
) => ({ isLoading = true, ...rest }: P & WithLoaderProps): JSX.Element => {
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <WrappedComponent {...(rest as P)} />
  );
};
