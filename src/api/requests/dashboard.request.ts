import axios from 'axios';
import TabModel from '../../utils/models/TabModel';

import { GET_TABS } from '../../utils/__mocks__/mockDashboard';

const request = {
  getTabs: async (): Promise<{ success: boolean; result: TabModel[] }> => {
    try {
      const response = await axios.get(GET_TABS);
      return { success: true, result: response.data };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw new Error(errorMessage);
    }
  },
};

export default request;
