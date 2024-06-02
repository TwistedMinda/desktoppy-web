import { Message } from '../hooks/useMessages';
import { getImageForName } from '../services/api';

const MessageItem = ({ message: msg }: { message: Message }) => {
  const res = msg.response ?? '';
  const uploadedImages = msg.image_names ?? [];
  const generatedImages = msg.generated_images ?? [];

  return (
    <div className="flex flex-col">
      <div className="p-4 border rounded-lg border-gray-200 my-2 self-end">{msg.prompt}</div>
      <div className="w-4/5 p-4 pt-10 border rounded-lg border-gray-200 my-2 self-start relative flex-col items-start">
        {res.length > 0 ? (
          <span className="font-bold">{res}</span>
        ) : (
          <span className="italic text-gray-500">Loading...</span>
        )}
        {uploadedImages.length > 0 && (
          <div>
            Files: <span className="font-bold">{JSON.stringify(uploadedImages)}</span>
          </div>
        )}
        <div className="absolute top-2 right-4">{msg.status}</div>
      </div>
      {generatedImages.length > 0 && (
        <div className="flex-row">
          {generatedImages?.map((img) => (
            <img key={img} src={getImageForName(img)} alt="Generated" className="w-1/4 h-40 object-cover" />
          ))}
        </div>
      )}
    </div>
  );
};

export const Messages = ({ messages }: { messages: Message[] }) => {
  const renderMessage = (msg: Message) => <MessageItem key={msg.id} message={msg} />;

  return (
    <div style={{ marginTop: 40, marginBottom: 200 }} className="flex flex-col items-center">
      <div className="w-2/3">{messages.map(renderMessage)}</div>
    </div>
  );
};
