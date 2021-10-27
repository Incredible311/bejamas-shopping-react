import MockAdapter from "axios-mock-adapter";
import TabsMock from "../resources/tabsMock";

const API_URL = process.env.REACT_APP_WAAT_API_URL || 'api';
export const GET_TABS = `${API_URL}/tabs`;

function mockDashboard(mock: MockAdapter) {
  mock
    .onGet(GET_TABS)
    .reply(() => {
      const tabs = TabsMock.table;

      if (tabs) {
        return [200, { ...tabs }];
      }

      return [401];
    });
}

export default mockDashboard;
