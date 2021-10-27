import { useSelector } from 'react-redux';

import { RootState } from '../store';

export default function useUsers() {
  const {
    isLoading,
    tabs,
    errorMessage,
  } = useSelector((state: RootState) => state.dashboard);

  return {
    isLoading,
    tabs,
    errorMessage,
  };
}
