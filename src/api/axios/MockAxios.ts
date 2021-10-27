import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import mockDashboard from "../../utils/__mocks__/mockDashboard";

export default function mockAxios(axios: AxiosInstance) {
  const mock = new MockAdapter(axios, { delayResponse: 300 });
  mockDashboard(mock);
  return mock;
}
