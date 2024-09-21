export const handleApiError = (error: any) => {
  console.error('Error in API: ', error);
  throw error;
};
