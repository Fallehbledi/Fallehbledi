'use client';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import {cookies} from 'next/headers'
import {jwtDecode} from 'jwt-decode';

const socket = io('http://localhost:5000');

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('default-room');
  const [user, setUser] = useState('');

  useEffect(() => {
    const token = cookies().get('Authorization');
    if (token) {
      try {
        const decodedToken = jwtDecode<{ id: string }>(token);
        setUser(decodedToken.id);
      } catch (error) {
        console.error('Invalid token');
      }
    }
  }, []);

  const expertName = 'expert1';

  useEffect(() => {
    if (user && expertName) {
      socket.emit('join room', `${user}-${expertName}`);

      socket.on('connect', () => {
        console.log('connected to server');
      });

      socket.on('chat message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });

      socket.on('disconnect', () => {
        console.log('disconnected from server');
      });
    }
    return () => {
      socket.off('chat message');
    };
  }, [user, room]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      const messageObject = {
        sender: user,
        roomId: `${user}-${expertName}`,
        message,
        createdAt: new Date().toISOString(),
      };
      socket.emit('chat message', messageObject);
      setMessage('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg ">
      <div className="mb-4 mt-20">
        <label className="block text-gray-700 font-semibold mb-2">Room:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner h-64 overflow-y-scroll mb-4">
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className="mb-2 p-2 bg-green-100 rounded-lg">
              {msg.message} <br /> <small>by {msg.sender} at {msg.createdAt}</small>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-green-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
