import './App.css';
import Header from '@/Components/Header';
import { InputBar } from './Components/InputBar';
import { useMessages } from './hooks/useMessages';
import { Messages } from './Components/Messages';

const App: React.FC = () => {
  const { messages, clearConversation, refetch } = useMessages();

  return (
    <div className="App">
      <Header />
      <button
        onClick={clearConversation}
        type="submit"
        disabled={messages.length === 0}
        className={[
          'absolute top-8 right-10 px-4 py-2 text-white rounded-md',
          messages.length > 0 ? ' bg-red-800 hover:bg-red-900' : ' bg-gray-500 hover:bg-gray-600',
        ].join(' ')}
      >
        X
      </button>
      <Messages messages={messages} />
      <InputBar onRefresh={refetch} />
    </div>
  );
};

export default App;
