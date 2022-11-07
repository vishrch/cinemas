import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const useApi = () => {
  // const accessToken = useApp(appStateSelectors.accessToken);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      client: 'DEV_0',
      'x-api-key': '4qEvoBuESv456NPNMIU9d2bsRB45uAGQL668wLo5',
      authorization: 'Basic REVWXzBfWFg6Z0tTaGVUZjJqR1N0',
      territory: 'XX',
      'api-version': 'v200',
      geolocation: '-22.0;14.0',
      'device-datetime': '2022-11-04T08:30:17.360Z',
    },
  };

  const apiInstance = axios.create({
    timeout: 15 * 1000, // 15 sec
    ...config,
  });

  const get = async <R>(
    url: string,
    configs?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R & {Response: any}>> => {
    return apiInstance.get(url, configs!).catch(err => {
      return err;
    });
  };

  return {get};
};

export default useApi;
