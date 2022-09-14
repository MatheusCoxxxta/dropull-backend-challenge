interface IErrorHandlerResponse {
  errorMessage: string;
  metaData: { [key: string]: string } | undefined;
}

interface ICommonWebErrorResponse {
  response: {
    data: { message: string; metadata: { [key: string]: string } | undefined };
  };
}

const errorHandler = (err: ICommonWebErrorResponse): IErrorHandlerResponse => {
  const errorMessage = err.response?.data.message;
  const metaData = err.response?.data.metadata;

  return { errorMessage, metaData };
};

export default errorHandler;
