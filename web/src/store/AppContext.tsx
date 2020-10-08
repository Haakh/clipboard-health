import * as React from 'react';
import {FormValues} from '../pages';

type Dispatch = React.Dispatch<
  React.SetStateAction<{
    jobs: FormValues[];
    isAuthenticated: boolean;
    userToken: string;
  }>
>;
type State = {userToken: string; isAuthenticated: boolean; jobs: FormValues[]};
type CountProviderProps = {children: React.ReactNode};

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function AppProvider({children}: CountProviderProps) {
  const [state, setState] = React.useState({
    jobs: [] as FormValues[],
    isAuthenticated: true,
    userToken: 'true',
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={setState}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppDispatchProvider');
  }
  return context;
}

export {AppProvider, useAppState, useAppDispatch};
