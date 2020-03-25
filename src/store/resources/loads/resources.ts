// Simulate doing resource calls to retrieve loads information
import { mockLoadsById } from './__mockData__';

const simulateResourceCall = <T>(responseData: T): Promise<T> =>
    new Promise(resolve => {
        setTimeout(() => resolve(responseData), 1000);
    });

export const fetch = () => simulateResourceCall(mockLoadsById);
export const modify = () => simulateResourceCall(null);
