import { useRef, useState } from 'react';

const base = 'http://127.0.0.1:5000';

export const usePrompt = (refetch: () => void) => {
  const [prompt, setPrompt] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<any>();

  const runScript = () => {
    if (prompt.length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append('prompt', prompt);
    if (files) {
      Array.from(files).forEach((file, idx) => {
        formData.append(`file_${idx}`, file);
      });
    }
    const interval = setInterval(refetch, files?.length ? 3200 : 1800);
    fetch(`${base}/run-script`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(refetch)
      .finally(() => clearInterval(interval));
    setPrompt('');
    setFiles(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return {
    prompt,
    setPrompt,
    setFiles,
    runScript,
    fileInputRef,
  };
};
