import {produce} from 'immer';
import {Alert} from 'react-native';
import {useChunkStore} from '../db/chunkStore';
import {Buffer} from 'buffer';

export const receivedFileAck = async (
  data: any,
  socket: any,
  setReceivedFiles: any,
) => {
  const {setChunkStore, chunkStore} = useChunkStore.getState();

  if (chunkStore) {
    Alert.alert('There are files which need to be received Wait Bro!');
    return;
  }

  setReceivedFiles((prevData: any) => {
    produce(prevData, (draft: any) => {
      draft.push(data);
    });
  });

  setChunkStore({
    id: data?.id,
    totalChunks: data?.totalChunks,
    name: data?.name,
    size: data?.size,
    mimeType: data?.mimeType,
    chunkArray: [],
  });

  if (!socket) {
    console.log('Socket not available');
    return;
  }

  try {
    await new Promise(resolve => setTimeout(resolve, 10));
    console.log('FILE RECEIVED 🗳️');
    socket.write(JSON.stringify({event: 'send_chunk_ack', chunkNo: 0}));
    console.log('REQUESTED FOR FIRST CHUNK 🔵');
  } catch (error) {
    console.log('Error sending file:', error);
  }
};