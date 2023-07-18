import Image from 'next/image';
import WhatsAppLogo from '../public/whatsapplogo.png';

const WhatsAppPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-4 mb-4 rounded-lg shadow-md bg-white max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to WhatsApp</h1>
        <p className="text-xl mb-6">
          Connect with friends and family using WhatsApp.
        </p>
        <Image
          src={WhatsAppLogo}
          alt="WhatsApp Logo"
          width={200}
          height={48}
        />
        <p className="mt-6 text-sm text-gray-500">
          Download the app and start chatting today!
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.whatsapp.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
          >
            Download Now
          </a>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        By WhatsApp &#8226; All rights reserved
      </div>
    </main>
  );
};

export default WhatsAppPage;
