// eslint-disable-next-line react/prop-types
export function Documentation({ handdleBackToCard, responseAI }) {
  return (
    <div className="flex flex-col	gap-4 py-10 w-2/3">
      <a
        onClick={handdleBackToCard}
        className="text-amber-400 cursor-pointer hover:text-amber-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
            clipRule="evenodd"
          />
        </svg>
      </a>

      <div
        className="bg-gray-800 rounded-lg shadow-lg text-lg text-white whitespace-pre-line px-10"
        dangerouslySetInnerHTML={{ __html: responseAI }}
      />
    </div>
  );
}
