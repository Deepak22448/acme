export function handleErrors(error: any, ErrosEnum: Object) {
  const errorMessage = error.message;

  if (ErrosEnum.hasOwnProperty(errorMessage)) {
    return new Response(error.message, {
      status: 400,
    });
  }

  return new Response(errorMessage || "Internal server error", {
    status: 500,
  });
}
