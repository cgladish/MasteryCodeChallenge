// Simulate doing resource calls to retrieve loads information

const simulateResourceCall = (): Promise<void> =>
    new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

export const fetch = simulateResourceCall;
export const modify = simulateResourceCall;
