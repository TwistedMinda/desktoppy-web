import { usePrompt } from '../hooks/usePrompt';

export const InputBar = ({ onRefresh }: { onRefresh: () => void }) => {
  const { prompt, setPrompt, setFiles, fileInputRef, runScript } = usePrompt(onRefresh);

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
      <div className="mx-auto flex items-center space-x-4">
        <textarea
          value={prompt}
          className="flex-grow p-2 w-96 max-h-80 min-h-20 border text-black border-gray-300 rounded-md"
          placeholder="Type your message..."
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={runScript}
          type="submit"
          disabled={prompt.length === 0}
          className={[
            'px-4 py-2 text-white rounded-md',
            prompt.length > 0 ? ' bg-blue-500 hover:bg-blue-600' : ' bg-gray-500 hover:bg-gray-500',
          ].join(' ')}
        >
          Send
        </button>

        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={(e) => setFiles(e.target.files)}
          className="border text-black border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};
