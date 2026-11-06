
const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-secondary p-5">
      <div className="w-full max-w-md rounded-xl bg-bg p-8 text-center shadow-lg">

        <h1 className="mb-4 text-3xl font-bold text-primary">
          Hello Tailwind CSS!
        </h1>

        <p className="mb-6 text-text">
          Tailwind CSS v4 is working successfully.
        </p>

        <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default App;

