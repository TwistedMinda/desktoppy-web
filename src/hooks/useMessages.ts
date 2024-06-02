import { useEffect, useState } from 'react';
import { API_BASE } from '../services/api';

export interface Message {
  id: number;
  prompt: string;
  response: string;
  status: string;
  image_names: string[];
  image_descriptions: string[];
  actions: any[];
  generated_images: string[];
}

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const refetch = () => {
    fetch(`${API_BASE}/responses`)
      .then((res) => res.json())
      .then(setMessages);
  };

  const clearConversation = () => {
    fetch(`${API_BASE}/clear-conversation`, { method: 'POST' }).then(refetch);
  };

  useEffect(() => {
    refetch();
  }, []);

  return {
    messages,
    refetch,
    clearConversation,
  };
};
