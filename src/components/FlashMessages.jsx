export function FlashError(error) {
  return (
    <div className="max-w-md mx-auto mt-3" role="alert">
      <div className="bg-red-400 text-white font-bold rounded-t px-4 py-2">
        Error!
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{error.message} Something went wrong.</p>
      </div>
    </div>
  );
}

export function FlashSuccess() {
  return (
    <div className="max-w-md mx-auto mt-3" role="alert">
      <div className="bg-green-400 text-white font-bold rounded-t px-4 py-2">
        Success!
      </div>
      <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-red-700">
        <p>Profile added to Klaviyo list.</p>
      </div>
    </div>
  );
}
