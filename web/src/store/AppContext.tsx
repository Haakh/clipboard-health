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

const getJobs = () => {
  const data = localStorage.getItem('data');
  if (data) {
    const localData = JSON.parse(data);
    const jobs = localData.jobs || [];
    console.log('jobs', jobs);
    return jobs;
  }
  return [];
};

function AppProvider({children}: CountProviderProps) {
  const [state, setLocalState] = React.useState(() => ({
    jobs: getJobs() as FormValues[],
    isAuthenticated: true,
    userToken: 'true',
  }));

  const setState = (data: any) => {
    localStorage.setItem('data', JSON.stringify(data));
    setLocalState(data);
  };

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
